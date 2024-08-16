import Image from "next/image"
import HeroIMG from "./_assets/hero.svg"

const Home = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center">
      <h1 className="mb-2 text-2xl font-medium">
        Bem-vindo ao nosso sistema HelpDesk
      </h1>
      <h2 className="mb-8 text-3xl font-bold text-blue-600 md:text-4xl">
        Faça login para abrir um chamado
      </h2>
      <Image
        src={HeroIMG}
        alt="Image hero da Hebrom HelpDesk"
        width={600}
        className="max-w-sm md:max-w-xl"
      />
    </main>
  )
}

export default Home
