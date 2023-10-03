// import logo from './logo.svg';
import './App.css';
import A from './Components/A';
import B from './Components/B';
import C from './Components/C';
import D from './Components/D';
import Image from './Components/image';
import K from './Components/image1';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Menu from './Components/menu';
function App() {
  return (
    <div className="App">
      {/* <h1>Hi...</h1>
      <A/>
      <B/>
      <C/>
      <D/>
      <Image/><br/>
      <K/> */}
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<A/>}/>
          <Route path="/B" element={<B/>}/>
          <Route path="/C" element={<C/>}/>
          <Route path="/D" element={<D/>}/>
          <Route path="/image" element={<Image/>}/>
          <Route path="/K" element={<K/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
