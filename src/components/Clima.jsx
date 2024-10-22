import { CloudIcon, CloudSunIcon, SunIcon } from "lucide-react"

export const Clima = () => {
    return (
        <div className="bg-purple-500 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold mb-2">Hourly forecast</h2>
            <div className="flex space-x-14 overflow-x-auto pb-2 w-full">
                {[
                    { time: "Now", temp: "10°", icon: <SunIcon className="size-10 sm:size-12" /> },
                    { time: "10AM", temp: "8°", icon: <CloudIcon className="size-10 sm:size-12" /> },
                    { time: "11AM", temp: "5°", icon: <CloudIcon className="size-10 sm:size-12" /> },
                    { time: "12PM", temp: "12°", icon: <SunIcon className="size-10 sm:size-12" /> },
                    { time: "1PM", temp: "9°", icon: <CloudSunIcon className="size-10 sm:size-12" /> },
                    { time: "2PM", temp: "12°", icon: <SunIcon className="size-10 sm:size-12" /> },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <p className="text-sm">{item.time}</p>
                        {item.icon}
                        <p className="font-semibold">{item.temp}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Clima