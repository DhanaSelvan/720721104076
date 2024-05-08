import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainRoutes from './Routes'

function App() {

  const [token, setToken] = useState('')
  const [records,setRecords] = useState([])

  const getToken = async () => {
    try{
      const authData = await fetch('https://20.244.56.144/test/auth', {
        method: 'POST',
        body: JSON.stringify({
          "companyName": "DhanaselvanJU",
          "clientID": "058ffa03-3bc1-425a-8474-349d231c472f",
          "clientSecret": "RFVCExRZeRcNBlFI",
          "ownerName": "Dhanaselvan",
          "ownerEmail": "dhanaselvancse@gmail.com",
          "rollNo": "720721104076"
        })
      })
      const resultJson = await authData.json()
      setToken(resultJson)
      return resultJson.access_token
    } catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getToken()
  }, [])

  const handleData = async (Company, Categories, minprice, maxprice) => {
    const token = await getToken()
    try{
      const resultData = await fetch('https://20.244.56.144/test/companies/${Company}/categories/${Categories}/products?top=10&minPrice=${minprice}&maxPrice=${maxPrice}', {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const dataJson = await resultData.json()
      setRecords(dataJson)
    } catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <MainRoutes handleData={handleData}/>
    </>
  )
}

export default App
