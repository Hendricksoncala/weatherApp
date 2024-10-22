import Clima from "../Clima"
import Stadistics from "../DashboardStas"
import Header from "../Header"

const TodayForecast = () => {
    return (
        <div className="bg-[#f6edff]">
            <main className="mx-auto container ">
                <Header />
                <Stadistics />
                <Clima />
            </main>
        </div>
    )
}
export default TodayForecast