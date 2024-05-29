import './index.css'
const TransactionItem = props => {
  const {key, transactionDetail, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetail

  const clickOnDeleteImage = () => {
    deleteTransaction(id)
  }
  return (
    <li className="transaction-item-details">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">{amount}</p>
      <p className="transaction-text">{type}</p>
      <button
        className="button"
        onClick={clickOnDeleteImage}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-image"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
