import TicketHeader from "./components/header"

const TicketLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TicketHeader />
      {children}
    </>
  )
}

export default TicketLayout
