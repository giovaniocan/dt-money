import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      {/* esse portal serve para deixar o modal desaclopado de tudo, porque ele não perterce a  nenhum componente pai, então meio que deixa ele autonomo */}
      <Overlay /> {/* é esse fundo preto que tem */}
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form action="">
          <input type="text" placeholder="descrição" required />
          <input type="text" placeholder="preço" required />
          <input type="text" placeholder="categoria" required />

          <TransactionType>
            <TransactionTypeButton variante="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variante="outcome">
              <ArrowCircleDown size={23} />
              Saida
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
