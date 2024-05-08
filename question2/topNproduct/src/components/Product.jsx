import { useState } from "react"
import Header from "./Header"
import { useFormik } from 'formik'
import { data } from "../data/productData"

const Product = () => {

    const [product, setProduct] = useState([])
    // console.log(data)
    const fetchData = async () => {
        try{
            const result = await fetch(`https://20.244.56.144/test/companies/AMZ/categories/${data}/products?top=10&minPrice=1&maxPrice=100000`)
            const resultJson = await result.json()
            setProduct(dat)
        } catch(err){
            console.log(err)
        }
    }

    const handleData = (e)=>{
        e.preventDefault()
        const product = document.getElementById('product')
        fetchData()
    }

    return(
        <>  
            <main>
                <Header />
                <section>
                    <h4 className="text-center my-4 text-2xl font-medium text-green-800">Search By Product Name</h4>
                    <form action="" onSubmit={handleData} className="flex justify-center">
                        <input type="text" placeholder="Enter the product name" name='product' id="product" className="border-2 rounded-md p-2 mx-5"/>
                        <button className="btn bg-green-500 px-4 py-2 rounded-md text-green-50">Search Product</button>
                    </form>
                    <hr  className="my-5"/>
                    <div className="flex flex-wrap justify-center">
                        {product.map((items,index)=>{
                            return(
                                <div className="p-5 rounded-md m-2 w-1/5 bg-green-100">
                                    <p key={index}>{items.productName}</p>
                                    <p key={index}>{items.price}</p>
                                    <p key={index}>{items.rating}</p>
                                    <p key={index}>{items.discount}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Product