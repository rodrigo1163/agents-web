import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod/v4'
import { useCreateRoom } from '@/http/use-create-room'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const createRoomSchema = z.object({
  name: z.string().min(3, { message: 'Inclua no mínimo 3 caracteres' }),
  description: z.string().optional(),
})

type CreateRoomFormData = z.infer<typeof createRoomSchema>

export function CreateRoomForm() {
  const { mutateAsync: createRoom, isPending } = useCreateRoom()
  const createRoomForm = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  async function handleCreateRoom({ name, description }: CreateRoomFormData) {
    await createRoom({ name, description })
    await createRoomForm.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Crie uma nova sala para começar a responder perguntas e receber
          respostas da IA
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...createRoomForm}>
          <form
            className="flex flex-col gap-4"
            onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
          >
            <FormField
              control={createRoomForm.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Nome da sala</FormLabel>

                    <FormControl>
                      <Input {...field} placeholder="Digite o nome da sala" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={createRoomForm.control}
              name="description"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>

                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <Button className="w-full" disabled={isPending} type="submit">
              {isPending ? 'Criando...' : 'Criar sala'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
