import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type newTransactionFormInpusts = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    control /* quando nos temos campos que não são nativos do html, igual esse é nativo do Dialog (o radio) nos temos que usar ele */,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newTransactionFormInpusts>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  function handleCreatNewTransaction(data: newTransactionFormInpusts) {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      {/* esse portal serve para deixar o modal desaclopado de tudo, porque ele não perterce a  nenhum componente pai, então meio que deixa ele autonomo */}
      <Overlay /> {/* é esse fundo preto que tem */}
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreatNewTransaction)}>
          <input
            type="text"
            placeholder="descrição"
            required
            {...register('description')}
          />
          <input
            type="text"
            placeholder="preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variante="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variante="outcome" value="outcome">
                    <ArrowCircleDown size={23} />
                    Saida
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
