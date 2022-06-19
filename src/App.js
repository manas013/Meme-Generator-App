import React from 'react';
import Meme from './Meme/Meme';
import './styles.module.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import MemeGenerated from './MemeGenerated/MemeGenerated';


function App() {
  return (
    <div>
    <h1>Meme Creator</h1>
    <Router>
    <Routes>
      {/* <Route exact path='/'>
        <Meme />
      </Route> */}
      {/* <Route path='/generated'>
        <MemeGenerated />
      </Route> */}

      <Route path='/' element={<Meme/>}/>
      <Route path='/generated' element={<MemeGenerated/>}/>
    </Routes>

    </Router>
  </div>
  );
}

export default App;
