import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add_Movie from './Components/Add_Movie';
import NavBar from './Components/NavBar';
import Movies from './Components/Movie';
import List_Card from './Components/List_Card';
import React, { useEffect, useState } from 'react';


function App() {
  const [search, setSearch] = useState("");
  const [mov, setMovie] = useState(Movies);
  const [rateFilter, setRateFilter] = useState(0);
  return (
    <div>
    <NavBar search={setSearch} setRateFilter={setRateFilter}/>
    <div className='container-fluid'>        
        <Add_Movie setMovie={setMovie}/> 
        <div className='con'>{mov.filter((el) => el.title.toLowerCase().includes(search.toLowerCase()) && parseFloat(el.rating, 10) >= rateFilter).map((el) => <List_Card name={el}/>)}</div>
    </div>
    </div>
  );
}

export default App;
