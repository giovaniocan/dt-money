import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          {/* esse root fica por fora de todo o modal, incluindo o botão */}
          <Dialog.Trigger asChild>
            {/* esse Triger é o botão, e para aproveitar a estilização do outro, temos que colocar o asChild para  não ter dois botões */}
            <NewTransactionButton>Nova transação </NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
