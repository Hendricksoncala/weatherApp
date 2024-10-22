import { SearchIcon, CloudIcon } from "lucide-react";
import useSelectedDay from '../useDays'; // Importamos el hook

const Header = () => {
    const { selectedDay, changeDay } = useSelectedDay(); // Usamos el hook

    return (
        <div className="w-full mx-auto p-6 bg-gradient-to-t from-purple-700 to-purple-400 rounded-xl shadow-lg text-white mb-4">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Kharkiv, Ukraine</h1>
                <button className="p-2">
                    <SearchIcon className="w-5 h-5" />
                </button>
            </header>

            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-6xl font-bold">3°</p>
                        <p className="text-lg">Feels like -2°</p>
                    </div>
                    <div className="text-right">
                        <CloudIcon className="w-16 h-16 inline-block" />
                        <p className="text-xl">Cloudy</p>
                    </div>
                </div>
            </div>

            <section>
                <div className="flex space-x-2 mb-6">
                    {['Hoy', 'Mañana', '10 dias'].map((tab) => (
                        <button
                            key={tab}
                            className={`flex-1 py-2 px-4 rounded-full ${selectedDay === tab ? 'bg-white text-purple-600' : 'bg-purple-500'
                                }`}
                            onClick={() => changeDay(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Header;
