import { Header } from '../../components/Header'
import { Summay } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionTable,
} from './styles'

export function Transaction() {
  return (
    <div>
      <Header />
      <Summay />
      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighLight variante="income">R$ 12.000,00</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>15/03/2023</td>
          </tr>
          <tr>
            <td width="50%">Hamburgue</td>
            <td>
              <PriceHighLight variante="outcome">- R$ 59,00</PriceHighLight>
            </td>
            <td>Alimentação</td>
            <td>10/03/2023</td>
          </tr>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  )
}
