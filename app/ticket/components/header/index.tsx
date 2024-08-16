import Container from "@/app/_components/container"
import Link from "next/link"

const TicketHeader = () => {
  return (
    <Container>
      <header className="my-4 flex w-full items-center gap-4 rounded bg-gray-900 p-3 text-white">
        <Link href="ticket" className="duration-300 hover:font-bold">
          Chamados
        </Link>
      </header>
    </Container>
  )
}

export default TicketHeader
