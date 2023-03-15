import { ThemeProvider } from 'styled-components'
import { Transaction } from './pages/transactions'
import { Globalstyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Globalstyle />
      <Transaction />
    </ThemeProvider>
  )
}
