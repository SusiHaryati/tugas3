import { Music } from "lucide-react";
import { Info, House, Album } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="bg-yellow-200">
            <div className="flex p- items-center">
                <h1 className="text-3xl font-bold text-yellow-800"><Music className="h-8 w-8 text-yellow-800 mr-2" />MyList Music</h1>
            </div>
                <nav className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
                    <ul className="flex items-center justify-center space-x-6">
                        <li className="flex items-center">
                            <House className="h-6 w-6 mr-2 text-gray-400" />
                            <Link to="/" className="text-gray-400 hover:text-yellow-500">Home</Link>
                        </li>
                        <li className="flex items-center">
                            <Info  className="h-6 w-6 mr-2 text-gray-400" />
                            <Link to="/contact" className="text-gray-400 hover:text-yellow-500">Contact</Link>
                        </li>
                        <li className="flex items-center">
                            <Album className="h-6 w-6 mr-2 text-gray-400" />
                            <Link to="/about" className="text-gray-400 hover:text-yellow-500">About</Link>
                        </li>
                    </ul>
                </nav>
        </div>
    );
}
