const Stadistics = () => {
    return (
        <section className="grid grid-cols-2 gap-4 mb-6 text-black">
            <div className="bg-purple-400 rounded-lg p-3">
                <p className="text-sm mb-1">Wind speed</p>
                <p className="text-lg font-semibold">12km/h</p>
                <p className="text-xs text-green-300">↑ 2 km/h</p>
            </div>
            <div className="bg-purple-400 rounded-lg p-3">
                <p className="text-sm mb-1">Rain chance</p>
                <p className="text-lg font-semibold">24%</p>
                <p className="text-xs text-red-300">↓ 10%</p>
            </div>
            <div className="bg-purple-400 rounded-lg p-3">
                <p className="text-sm mb-1">Pressure</p>
                <p className="text-lg font-semibold">720 hpa</p>
                <p className="text-xs text-green-300">↑ 12 hpa</p>
            </div>
            <div className="bg-purple-400 rounded-lg p-3">
                <p className="text-sm mb-1">UV index</p>
                <p className="text-lg font-semibold">2.3</p>
                <p className="text-xs text-red-300">↓ 0.3</p>
            </div>
        </section>
    )

}
export default Stadistics