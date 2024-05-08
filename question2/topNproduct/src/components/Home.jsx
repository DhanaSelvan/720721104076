import { useState } from "react"
import Header from "./Header"


const Home = () => {

    const [product, setRecords] = useState([{"productName":"Laptop 4","price":1258,"rating":4.76,"discount":33,"availability":"out-of-stock"},{"productName":"Laptop 5","price":7980,"rating":4.53,"discount":89,"availability":"yes"},{"productName":"Laptop 11","price":2652,"rating":4.12,"discount":70,"availability":"yes"},{"productName":"Laptop 9","price":1742,"rating":3.76,"discount":39,"availability":"yes"},{"productName":"Laptop 1","price":8521,"rating":3.63,"discount":91,"availability":"out-of-stock"},{"productName":"Laptop 1","price":2236,"rating":3.59,"discount":63,"availability":"yes"},{"productName":"Laptop 14","price":9254,"rating":3.21,"discount":56,"availability":"out-of-stock"},{"productName":"Laptop 10","price":4101,"rating":2.39,"discount":37,"availability":"out-of-stock"},{"productName":"Laptop 13","price":8686,"rating":2.33,"discount":24,"availability":"out-of-stock"},{"productName":"Laptop 1","price":1059,"rating":2,"discount":21,"availability":"yes"}])

    const fetchData = async (e) => {
        e.preventDefault()
        try{
          const resultData = await fetch('https://20.244.56.144/test/companies/AMZ/categories/Laptop/products', {
            method: "GET",
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTY2NTkxLCJpYXQiOjE3MTUxNjYyOTEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjA1OGZmYTAzLTNiYzEtNDI1YS04NDc0LTM0OWQyMzFjNDcyZiIsInN1YiI6ImRoYW5hc2VsdmFuY3NlQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IkRoYW5hc2VsdmFuSlUiLCJjbGllbnRJRCI6IjA1OGZmYTAzLTNiYzEtNDI1YS04NDc0LTM0OWQyMzFjNDcyZiIsImNsaWVudFNlY3JldCI6IlJGVkNFeFJaZVJjTkJsRkkiLCJvd25lck5hbWUiOiJEaGFuYXNlbHZhbiIsIm93bmVyRW1haWwiOiJkaGFuYXNlbHZhbmNzZUBnbWFpbC5jb20iLCJyb2xsTm8iOiI3MjA3MjExMDQwNzYifQ.RM31kHSfcNI3IWFskdtlNv4IdgW3Q3LFW3tmcXRzhLM`
            }
          })
          const dataJson = await resultData.json()
          setRecords(dataJson)
        } catch(err){
          console.log(err)
        }
      }

    const handleData = (e) => {
        e.preventDefault()
        const company = document.getElementById('company')
        const categories = document.getElementById('categories')
        const minprice = document.getElementById('minprice')
        const maxprice = document.getElementById('maxprice')
        console.log(company.value, categories.value, minprice.value, maxprice.value)
    }

    return(
        <>
            <main>
                < Header/>
                <section>
                    <form action="" onSubmit={fetchData} className="bg-green-300 w-1/2 text-center rounded-md p-5 my-5 mx-auto">
                        <select name="company" id="company" className="border-2 px-4 py-2 my-1">
                            <option value="">Choose one</option>
                            <option value="">AMZ</option>
                            <option value="">FLP</option>
                            <option value="">SNP</option>
                            <option value="">MYN</option>
                            <option value="">AZO</option>
                        </select><br />
                        <select name="categories" id="categories" className="border-2 px-4 py-2 my-1">
                            <option value="">Choose one</option>
                            <option value="Phone">Phone</option>
                            <option value="Computer">Computer</option>
                            <option value="TV">TV</option>
                            <option value="Earphone">Earphone</option>
                            <option value="Tablet">Tablet</option>
                            <option value="Pendrive">Pendrive</option>
                            <option value="Speaker">Speaker</option>
                            <option value="Remote">Remote</option>
                            <option value="Headset">Headset</option>
                            <option value="Laptop">Laptop</option>
                            <option value="PC">PC</option>
                        </select><br />
                        <input type="text"  name="minprice" placeholder="Enter the Min Price" id="minprice" className="border-2 px-4 py-2 my-1"/><br />
                        <input type="text"  name="maxprice" placeholder="Enter the Max Price" id="maxprice" className="border-2 px-4 py-2 my-1"/><br />
                        <button className="btn my-1 rounded-md px-4 py-2 bg-green-500 text-green-50">Submit</button>
                    </form>
                    <h5 className="text-2xl text-center font-bold">Product List</h5>
                    <hr  className="my-5"/>
                    <div className="flex flex-wrap justify-center">
                        {product.map((items,index)=>{
                            return(
                                <div className="p-5 rounded-md m-2 w-1/5 bg-green-100" key={index}>
                                    <p key={items.productName} className="text-green-700 font-semibold text-xl">{items.productName}</p>
                                    <p key={items.price}>$ {items.price}</p>
                                    <p key={items.rating}><span className="font-bold">Star rating:</span> {items.rating}</p>
                                    <p key={items.discount}><span className="font-bold">Discount: </span>{items.discount}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home