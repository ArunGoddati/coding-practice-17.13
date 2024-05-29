import './index.css'
const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="money-status-container">
      <div className="your-balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image"
          alt="balance"
        />
        <div>
          <p className="your-balance-heading">Your Balance</p>
          <p className="amount-text" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="your-income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          className="image"
          alt="income"
        />
        <div>
          <p className="your-balance-heading">Your Income</p>
          <p className="amount-text" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="your-expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          className="image"
          alt="expenses"
        />
        <div>
          <p className="your-balance-heading">Your Expenses</p>
          <p className="amount-text" dtat-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
