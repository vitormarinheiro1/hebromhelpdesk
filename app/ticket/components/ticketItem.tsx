import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog"
import { File } from "lucide-react"

const TicketItem = () => {
  return (
    <>
      <tr className="h-16 border-b-2 border-b-slate-200 bg-slate-100 duration-200 last:border-b-0 hover:bg-gray-200">
        <td className="pl-1 text-left">PROBLEMA NO PC</td>
        <td className="hidden text-left sm:table-cell">24/09/2024</td>
        <td className="text-left">ABERTO</td>
        <td className="text-left">
          <Dialog>
            <DialogTrigger asChild>
              <button>
                <File size={24} color="#3b82f6" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  Ticket: #1
                </DialogTitle>
                <DialogDescription className="text-lg">Detalhes do chamado</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 border-b border-solid h-28">
                <p>
                  <span className="font-bold">Categoria:</span> Sistemas
                </p>
                <p>
                  <span className="font-bold">Assunto:</span> PROBLEMA
                  NO PC
                </p>
                <p>
                  <span className="font-bold">Descrição:</span>{" "}
                  Computador não liga...
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  <span className="font-bold">Técnico:</span> Vitor
                  Marinheiro
                </p>
                <p>
                  <span className="font-bold">E-mail:</span>{" "}
                  suporte2@hebrombeneficios.com.br NO PC
                </p>
                <p>
                  <span className="font-bold">Ramal:</span> 2491
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </td>
      </tr>
    </>
  )
}

export default TicketItem
