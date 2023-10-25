import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/Detail/Detail';
import Activities from './components/Activities/Activities';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Landing/>}/>
        <Route path='/home' element={<Countries/>}/>
        <Route >Login</Route> 
        <Route path='/detail/:id'element={<CountryDetail/>}/>
        <Route path='/activities' element={<Activities/>} >CREATEACTIVITY</Route>
      </Routes>
    </div>
  );
}

export default App;
