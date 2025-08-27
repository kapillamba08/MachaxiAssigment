import react,{useState} from 'react';

function Cryptotracker() {
    const [name, setName] = useState(null);
    function fetchCryptoData() {
        const cryptoTrackerAPI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
        fetch(cryptoTrackerAPI)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setName(data);
            })
            .catch(error => {
                console.error('Error fetching crypto data:', error);
            });
    }
        return (
        <div>
            <h1>Cryptocurrency Tracker</h1>
            <button onClick={fetchCryptoData}>Fetch Crypto Data</button>
            <tr>
                {name && name.map((crypto) => (
                    <td key={crypto.id}>
                        <p>{crypto.name}</p>
                        <p>({crypto.symbol})</p>  
                        <p>Current Price: ${crypto.current_price}</p>
                        <p>Market Cap: ${crypto.market_cap}</p>
                        <p>24h Change: {crypto.price_change_percentage_24h}%</p>
                    </td>

                ))}
            </tr>
        </div>
    );
}

export default Cryptotracker;