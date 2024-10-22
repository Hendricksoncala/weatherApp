import Clima from "./components/Clima"
import Stadistics from "./components/DashboardStas"
import Header from "./components/Header"

function App() {

  return (
    <div className="bg-[#f6edff]">
      <main className="mx-auto container ">
        <Header />
        <Stadistics />
        <Clima/>
      </main>
    </div>
  )
}

export default App
