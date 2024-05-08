import { Link } from "react-router-dom"
const Header = () => {
    return(
        <>
            <header className="bg-green-500 lg:px-16 sm:px-1 py-5 flex">
                <h3 className="text-white font-bold text-2xl">Nila EShopping</h3>
                <div className="flex gap-4 my-auto ml-auto">
                    <h5 className="text-xl text-gray-100 hover:font-semibold hover:text-green-900 transition-all"><Link to='/'>Home</Link></h5>
                    <h5 className="text-xl text-gray-100 hover:font-semibold hover:text-green-900 transition-all"><Link to='/searchproduct'>Search Product</Link></h5>
                </div>
            </header>
        </>
    )
}

export default Header