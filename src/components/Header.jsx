import { SearchIcon , CloudIcon } from "lucide-react";

const Header = () => {
    return (
        <div className="w-full mx-auto p-6 bg-gradient-to-t from-purple-700 to-purple-400 rounded-xl shadow-lg text-white">
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
        </div>
    );
};

export default Header;