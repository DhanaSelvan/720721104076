import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'

const MainRoutes = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={< Home/>}/>
                <Route path='/searchproduct' element={< Product/>}/>
            </Routes>
        </>
    )
}

export default MainRoutes