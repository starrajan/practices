export const addCommasToNumber = (number: number | string) => {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const isStepComplete = (meta: any) => {
  console.log('meta------->', meta)
  return (meta.dirty && (!meta.error || meta.error.length === 0)) || false
}
export const currentStep = (steps: any, errors: any, meta?: any) => {
  console.log('steps=========================>', steps)
  console.log('errors=========================>', errors)
  console.log('meta currentStep=========================>', meta)
  if (Object.keys(errors).length === 0) return true
  if (meta && !meta.dirty) return false
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i]
    if (errors[step] && (!Array.isArray(errors[step]) || (Array.isArray(errors[step]) && errors[step].length > 0))) {
      return false
    }
  }
  return true
}

export const formatFieldPath = (formPath: string | undefined) => (fieldName: string): string =>
  formPath ? `${formPath}.${fieldName}` : fieldName

export function formatDate(date: any) {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [day, month, year].join('-')
}
