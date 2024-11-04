import '../App.css';
import {useEffect,useState} from "react";
const cardQuote = () => {
    const [quote, setQuote] = useState()

    const getQuote = async () => {
        fetch("https://api.kanye.rest")
        .then(res => res.json())
        .then(data => {setQuote(data.quote)})
    }

    useEffect(() => {
        getQuote()
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        {quote}
                    </h1>
                    <h2 className="text-lg text-gray-600">- Kanye West</h2>
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="text-lg bg-blue-800 hover:bg-blue-700 p-3 w-full text-white rounded-lg font-semibold transition-colors"
                >
                    Get New Quote
                </button>
            </div>
        </div>
    );
}

export default cardQuote;