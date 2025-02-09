import { useState, useEffect } from "react";


export default function NFTBlockchainsTable() {
  const [prices, setPrices] = useState({});
  const [tickers, setTickers] = useState({});
  const [icons, setIcons] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum,solana,matic-network,bitcoin,avalanche-2"
        );
        const data = await response.json();

        const newPrices = {};
        const newTickers = {};
        const newIcons = {};

        data.forEach((coin) => {
          newPrices[coin.id] = coin.current_price;
          newTickers[coin.id] = coin.symbol.toUpperCase();
          newIcons[coin.id] = coin.image; 
        });

        setPrices(newPrices);
        setTickers(newTickers);
        setIcons(newIcons);
      } catch (error) {
        console.error("Помилка при отриманні даних", error);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 60000); // Оновлення кожну хвилину
    return () => clearInterval(interval);
  }, []);

  const blockchains = [
    { rank: 1, id: "ethereum", name: "Ethereum" },
    { rank: 2, id: "solana", name: "Solana" },
    { rank: 3, id: "matic-network", name: "Polygon" },
    { rank: 4, id: "bitcoin", name: "Bitcoin"},
    { rank: 5, id: "avalanche-2", name: "Avalanche"}
  ];

  return (
    <div className="mt-24">
      <h3 className='text-5xl font-normal tracking-widest text-indigo-950 dark:text-white mb-5'>
        Trending NFT Blockchains🚀 
      </h3>
      
      <div className="w-[100%] sm:w-[85%] border-2 border-indigo-950 dark:border-white rounded-lg">
        {/* Заголовки */}
        <div className="flex justify-between items-center p-2 bg-transparent text-indigo-950 dark:text-white font-semibold text-center">
          <div className="px-4 py-2">Rank</div>
          <div className="px-4 py-2">Blockchain</div>
          <div className="px-4 py-2">Ticker</div>
          <div className="px-4 py-2">Price (USD)</div>
        </div>
        
        {/* Дані */}
        {blockchains.map((blockchain) => (
          <div key={blockchain.rank} className="flex justify-between items-center p-4 cursor-pointer duration-200 hover:bg-white hover:bg-opacity-80 hover:text-black"> 
            <div className="px-4 py-2 text-center">{blockchain.rank}</div>
            <div className="px-4 py-2 flex items-center space-x-2 text-center">
              {icons[blockchain.id] ? (
                <img src={icons[blockchain.id]} alt={blockchain.name} className="w-6 h-6 inline-block mr-2" />
              ) : (
                "🔄"
              )}
              {blockchain.name}
            </div>
            <div className="px-4 py-2 text-center">
              {tickers[blockchain.id] ? tickers[blockchain.id] : "Loading..."}
            </div>
            <div className ="px-4 py-2 text-center">
              {prices[blockchain.id] ? `$${prices[blockchain.id]}` : "Loading..."}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}