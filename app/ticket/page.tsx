import Link from "next/link"
import Container from "../_components/container"
import { Button } from "../_components/ui/button"
import TicketItem from "./components/ticketItem"

const Ticket = () => {
  return (
    <Container>
      <main className="mb-2 mt-9">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Chamados</h1>
          <div className="flex items-center gap-4">
            <Button className="mt-3 w-full" asChild>
              <Link href="/ticket/new">Abrir chamado</Link>
            </Button>
          </div>
        </div>

        <table className="my-2 min-w-full">
          <thead>
            <tr>
              <th className="text-medium pl-1 text-left">ASSUNTO</th>
              <th className="text-medium text-left">
                CATEGORIA
              </th>
              <th className="text-medium hidden text-left sm:block">
                DATA CADASTRO
              </th>
              <th className="text-medium text-left">STATUS</th>
              <th className="text-medium text-left">#</th>
            </tr>
          </thead>
          <tbody>
            <TicketItem />
            <TicketItem />
            <TicketItem />
            <TicketItem />
            <TicketItem />
            <TicketItem />
          </tbody>
        </table>
      </main>
    </Container>
  )
}

export default Ticket
