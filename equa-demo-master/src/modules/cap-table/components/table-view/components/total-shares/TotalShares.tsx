import * as React from 'react'
import { StyledCapTable } from '../../style'
import { styledCurrency } from 'shared/components/styled-currency'
import ReactTable from 'react-table'

const TheadComponent = () => null
const TotalShares = (props: any) => {
  const { total } = props
  const totalData = [total]
  const columns = [
    {
      Footer: () => (
        <div>
          <div className="total-text">TOTAL</div>
          <div className="footer-border"></div>
          <div className="total-text">% OF TOTAL</div>
        </div>
      ),
      width: 250,
    },
    {
      Footer: () => (
        <div>
          <div>${styledCurrency(total.capContribution)}</div>
          <div className="footer-border"></div>
          <div>100%</div>
        </div>
      ),
      width: 227,
    },

    {
      Footer: () => (
        <div>
          <div>{total.totalCommon.toLocaleString()}</div>
          <div className="footer-border"></div>
          <div>{((total.totalCommon / total.totalShares) * 100).toFixed(2)}%</div>
        </div>
      ),
    },
    {
      Footer: () => (
        <div>
          <div>{total.totalPreferred.toLocaleString()}</div>
          <div className="footer-border"></div>
          <div>{((total.totalPreferred / total.totalShares) * 100).toFixed(2)}%</div>
        </div>
      ),
    },
    {
      Footer: () => (
        <div>
          <div>{total.totalOptions.toLocaleString()}</div>
          <div className="footer-border"></div>
          <div>{((total.totalOptions / total.totalShares) * 100).toFixed(2)}%</div>
        </div>
      ),
    },
    {
      Footer: () => (
        <div>
          <div>{total.totalShares.toLocaleString()}</div>
          <div className="footer-border"></div>
          <div>100%</div>
          <div></div>
        </div>
      ),
    },
    {
      Footer: () => (
        <div>
          <div className="total-fd-percentage">100%</div>
          <div className="footer-border"></div>
        </div>
      ),
    },
  ]
  return (
    <ReactTable
      data={totalData}
      TheadComponent={TheadComponent}
      columns={columns}
      showPagination={false}
      minRows={0}
      resizable={false}
      getTrProps={() => ({ style: { display: 'none' } })}
      getTbodyProps={() => ({ style: { padding: 0 } })}
    />
  )
}

export default TotalShares
