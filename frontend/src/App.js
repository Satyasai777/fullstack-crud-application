import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import CreateStudent from './components/CreateStudent';
import UpdateStudent from './components/UpdateStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<CreateStudent/>} />
          <Route path='/update/:id' element={<UpdateStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
