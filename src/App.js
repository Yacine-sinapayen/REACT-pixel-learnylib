import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Actions from './Components/Actions';
import './index.css'

const App = () => { 
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Actions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;