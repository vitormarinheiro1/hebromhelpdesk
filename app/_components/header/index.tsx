import Link from "next/link"
import { Button } from "../ui/button"
import { User } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const Header = () => {
  return (
    <header className="mx-auto flex h-20 w-full max-w-7xl items-center bg-white px-2 py-4 shadow-sm">
      <div className="flex w-full items-center justify-between">
        <Link href="/">
          <h1 className="pl-1 text-xl font-bold duration-300 hover:tracking-widest">
            <span className="text-blue-800">Hebrom</span> HelpDesk
          </h1>
        </Link>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className="gap-1">
              <User />
              Login
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Login</DialogTitle>
              <DialogDescription>
                Digite o seu e-mail e senha para logar
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  E-mail
                </Label>
                <Input
                  id="email"
                  placeholder="email@hebrombeneficios.com.br"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Senha
                </Label>
                <Input
                  id="password"
                  placeholder="*********"
                  className="col-span-3"
                  type="password"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">ENTRAR</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  )
}

export default Header
