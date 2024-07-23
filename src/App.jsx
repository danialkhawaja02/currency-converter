import { useState } from "react"
import useCurrencyInfo from './hooks/useCurrencyInfo'
import Input from "./components/Input"


function App() {
  const [amount, setAmount] = useState(0)
  const [currencyFrom, setCurrencyFrom] = useState("usd");
  const [currencyTo, setCurrencyTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const swap = () => {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  
  const currencyInfo = useCurrencyInfo(currencyFrom);
  const options = Object.keys(currencyInfo);

  const currencyConverter = () => {
    setConvertedAmount((amount * currencyInfo[currencyTo]).toFixed(2));
  }

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-[42px] font-bold">Currency Converter</h2>
          <div>
            <form className="flex flex-col items-center gap-5" onSubmit={(e)=> {
               e.preventDefault();
               currencyConverter();
            }}> 
              <Input 
                label={"From"} 
                amount={amount} 
                onAmountChange={(amount) => setAmount(amount)}
                currency={currencyFrom}
                onCurrencyChange = {(currency) => setCurrencyFrom(currency)}
                currencyOptions={options}
              />
              <img src="src\assets\icon.png" className="w-16 hover:cursor-pointer" onClick={swap}/>
              <Input 
                label={"To"} 
                amount={convertedAmount}
                disabledField currency={currencyTo}
                onCurrencyChange = {(currency) => setCurrencyTo(currency)}
                currencyOptions={options}
              />
              <button type="submit" className="bg-[#875cf2] text-white px-12 py-3 text-2xl rounded-[7px]">Convert {currencyFrom.toUpperCase()} to {currencyTo.toUpperCase()}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
