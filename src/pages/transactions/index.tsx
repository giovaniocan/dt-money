import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Summay } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionTable,
} from './styles'

interface Transactions {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createaAt: string
}

export function Transaction() {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  async function loadTransaction() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransaction()
  }, [])

  return (
    <div>
      <Header />
      <Summay />

      <TransactionsContainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variante={transaction.type}>
                      {transaction.price}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createaAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  )
}
