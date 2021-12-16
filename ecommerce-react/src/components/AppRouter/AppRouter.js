import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import HomePage from '../../pages/Home/HomePage';
import DetailPage from '../../pages/Detail/DetailPage';
export default function AppRouter() {
    return (<BrowserRouter>
        <nav>
          <NavBar/>
        </nav> 
        
        <Routes>
            <Route path ='/' element = {<HomePage/>}/>
            <Route path ='/item/:id' element = {<DetailPage/>}/>            
        </Routes>           
       
    </BrowserRouter>   )
}