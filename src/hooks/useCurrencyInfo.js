import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;
            const request = await fetch(url);
            const response = await request.json();
            setData(response[currency]);
        }
        fetchData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
