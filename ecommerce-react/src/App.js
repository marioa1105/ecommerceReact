
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Container } from '@mui/material';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div>           
      <nav>
        <NavBar/>
      </nav> 
      
      <Container>
        <ItemListContainer/>

        <ItemDetailContainer/>
      </Container>
            
    </div>
  );
}

export default App;
