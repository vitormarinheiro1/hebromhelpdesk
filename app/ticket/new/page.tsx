import Container from "@/app/_components/container"
import { Button } from "@/app/_components/ui/button"
import Link from "next/link"

const TicketItemNew = () => {
  return (
    <Container>
      <main className="mb-2 mt-9">
        <div className="flex items-center gap-3">
          <Link
            className="rounded bg-gray-900 px-4 py-1 text-white"
            href="/ticket"
          >
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Novo chamado</h1>
        </div>

        <form className="mt-6 flex flex-col">
          <label className="mb-1 text-lg font-medium">Categoria</label>
          <select className="mb-2 h-11 w-full resize-none rounded-md border-2 bg-white px-2">
            <option value="">Sistemas</option>
            <option value="">Equipamentos</option>
            <option value="">Internet</option>
            <option value="">E-mail</option>
            <option value="">Impressora</option>
          </select>

          <label className="mb-1 text-lg font-medium">Assunto</label>
          <input
            className="mb-2 h-11 w-full rounded-md border-2 px-2"
            type="text"
            placeholder="Digite o nome do chamado..."
            required
            name="subject"
          />

          <label className="mb-1 text-lg font-medium">
            Descreva o problema
          </label>
          <textarea
            name="description"
            className="mb-2 h-24 w-full resize-none rounded-md border-2 px-2"
            required
            placeholder="Descreva o problema..."
          />

          <Button className="font-bold h-11" type="submit" variant="default">
            Cadastrar
          </Button>
        </form>
      </main>
    </Container>
  )
}

export default TicketItemNew
