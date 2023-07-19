import { Sidebar } from './components/Sidebar'
import Header from './components/header/Header'

export default function Root(props) {
  return (
    <>
      {/* <section>
        <Header
          onCreateAccount={() => {}}
          onLogin={() => {}}
          onLogout={() => {}}
          user={{ name: `${props.name} is mounted!` }}></Header>
      </section> */}
      <Sidebar name={`${props.name} is mounted`}></Sidebar>
    </>
  )
}
