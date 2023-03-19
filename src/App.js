import './App.css';
import Daily from './Daily';
import Navbar from './Navbar';
import News from './News'

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Footer from './Footer';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Daily/>}></Route>
          <Route exact path='news' element={<News name={''}/>}></Route>
          <Route exact path='general' element={<News name={'General'}/>}></Route>
          <Route exact path='world' element={<News name={'world'}/>}></Route>
          <Route exact path='business' element={<News name={'business'}/>}></Route>
          <Route exact path='entertainment' element={<News name={'entertainment'}/>}></Route>
          <Route exact path='science' element={<News name={'science'}/>}></Route>
          <Route exact path='health' element={<News name={'health'}/>}></Route>
          <Route exact path='sports' element={<News name={'sports'}/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
