import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }
  deleteTransaction = id => {
    const {transactionList} = this.state
    const updateTransactionList = transactionList.filter(
      eachTransacton => eachTransacton.id !== id,
    )
    this.setState({
      transactionList: updateTransactionList,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransacton => eachTransacton.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }
  onChangeTitleInput = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }
  onChangeAmountInput = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }
  onChangeOptionId = event => {
    this.setState({
      optionId: event.target.value,
    })
  }
  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0
    transactionList.forEach(eachTransacton => {
      if (eachTransacton.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransacton.amount
      }
    })
    return expensesAmount
  }
  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachTransacton => {
      if (eachTransacton.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransacton.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    transactionList.forEach(eachTransacton => {
      if (eachTransacton.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransacton.amount
      } else {
        expensesAmount += eachTransacton.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }
  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div>
        <div className="big-container">
          <div className="headerContainer">
            <h1 className="header-heading">Hi, Richard</h1>
            <p className="header-description">
              Welcome back to your{' '}
              <spna className="span-element">Money Manager</spna>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div className="form-and-transactions-container">
            <form className="form-container" onSubmit={this.onAddTransaction}>
              <h1 className="form-main-heading">Add Transaction</h1>
              <label className="label-element" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                placeholder="TITLE"
                className="input-element"
                onChange={this.onChangeTitleInput}
                id="title"
                value={titleInput}
              />
              <label className="label-element" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                placeholder="AMOUNT"
                className="input-element"
                onChange={this.onChangeAmountInput}
                id="amount"
                value={amountInput}
              />
              <label className="label-element" htmlFor="typr">
                TYPE
              </label>
              <select
                className="input-element"
                onChange={this.onChangeOptionId}
                id="type"
                value={optionId}
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <ul className="transaction-history-container">
              <h1 className="history-heading">History</h1>
              <li className="transaction-item">
                <p className="transaction-item-heading">Title</p>
                <p className="transaction-item-heading">Amount</p>
                <p className="transaction-item-heading">Type</p>
              </li>
              {transactionList.map(eachTransacton => (
                <TransactionItem
                  key={eachTransacton.id}
                  transactionDetail={eachTransacton}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
