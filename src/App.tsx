import { ThemeProvider } from 'styled-components'
import { Globalstyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Globalstyle />
      hello World
    </ThemeProvider>
  )
}
