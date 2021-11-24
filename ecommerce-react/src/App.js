import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Container } from '@mui/material';
function App() {
  return (
    <div>           
      <nav>
        <NavBar/>
      </nav> 
      
      <Container>
        <ItemListContainer name="Producto"/>
      </Container>
            
    </div>
  );
}

export default App;
