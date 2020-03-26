import * as React from 'react'

interface Props {
  width: number
  height: number
  image: string
  finishPercent: number
  onComplete: () => void
}

interface State {
  loaded: boolean
}

class ScratchCard extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = { loaded: false }
  }

  componentDidMount() {
    //@ts-ignore
    this.isDrawing = false
    //@ts-ignore
    this.lastPoint = null
    //@ts-ignore
    this.ctx = this.canvas.getContext('2d')

    const image = new Image()
    image.crossOrigin = 'Anonymous'
    image.onload = () => {
      //@ts-ignore
      this.ctx.drawImage(image, 0, 0)
      this.setState({ loaded: true })
    }
    image.src = this.props.image
  }

  getFilledInPixels(stride: any) {
    if (!stride || stride < 1) {
      stride = 1
    }

    //@ts-ignore
    const pixels = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
    const total = pixels.data.length / stride
    let count = 0

    for (let i = 0; i < pixels.data.length; i += stride) {
      if (parseInt(pixels.data[i], 10) === 0) {
        count++
      }
    }

    return Math.round((count / total) * 100)
  }

  getMouse(e: any, canvas: any): any {
    const { top, left } = canvas.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    return {
      x: (e.pageX || e.touches[0].clientX) - left - scrollLeft,
      y: (e.pageY || e.touches[0].clientY) - top - scrollTop,
    }
  }

  distanceBetween(point1: any, point2: any): any {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2))
  }

  angleBetween(point1: any, point2: any) {
    return Math.atan2(point2.x - point1.x, point2.y - point1.y)
  }

  handlePercentage(filledInPixels = 0) {
    if (filledInPixels > this.props.finishPercent) {
      //@ts-ignore
      this.canvas.parentNode.removeChild(this.canvas)
      //@ts-ignore
      this.setState({ finished: true })
      if (this.props.onComplete) {
        this.props.onComplete()
      }
    }
  }

  handleMouseDown(e: any) {
    //@ts-ignore
    this.isDrawing = true
    //@ts-ignore
    this.lastPoint = this.getMouse(e, this.canvas)
  }

  handleMouseMove(e: any) {
    //@ts-ignore
    if (!this.isDrawing) {
      return
    }

    e.preventDefault()
    //@ts-ignore
    const currentPoint = this.getMouse(e, this.canvas)
    //@ts-ignore
    const distance = this.distanceBetween(this.lastPoint, currentPoint)
    //@ts-ignore
    const angle = this.angleBetween(this.lastPoint, currentPoint)

    let x, y

    for (let i = 0; i < distance; i++) {
      //@ts-ignore
      x = this.lastPoint.x + Math.sin(angle) * i
      //@ts-ignore
      y = this.lastPoint.y + Math.cos(angle) * i
      //@ts-ignore
      this.ctx.globalCompositeOperation = 'destination-out'
      //@ts-ignore
      this.ctx.beginPath()
      //@ts-ignore
      this.ctx.arc(x, y, 12, 0, 2 * Math.PI, false)
      //@ts-ignore
      this.ctx.fill()
    }

    //@ts-ignore

    this.lastPoint = currentPoint
    this.handlePercentage(this.getFilledInPixels(32))
  }

  handleMouseUp() {
    //@ts-ignore
    this.isDrawing = false
  }

  render() {
    const containerStyle: any = {
      width: this.props.width + 'px',
      height: this.props.height + 'px',
      position: 'relative',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
    }

    const canvasStyle: any = {
      position: 'absolute',
      top: 0,
      zIndex: 1,
    }

    const resultStyle: any = {
      visibility: this.state.loaded ? 'visible' : 'hidden',
    }

    const canvasProps: any = {
      //@ts-ignore
      ref: (ref: any) => (this.canvas = ref),
      className: 'ScratchCard__Canvas',
      style: canvasStyle,
      width: this.props.width,
      height: this.props.height,
      onMouseDown: this.handleMouseDown.bind(this),
      onTouchStart: this.handleMouseDown.bind(this),
      onMouseMove: this.handleMouseMove.bind(this),
      onTouchMove: this.handleMouseMove.bind(this),
      onMouseUp: this.handleMouseUp.bind(this),
      onTouchEnd: this.handleMouseUp.bind(this),
    }

    return (
      <div className="ScratchCard__Container" style={containerStyle}>
        <canvas {...canvasProps}></canvas>
        <div className="ScratchCard__Result" style={resultStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default ScratchCard
