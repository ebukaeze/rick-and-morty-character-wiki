import React, {useState, useEffect} from 'react';
import './App.css';

import {Card, Navbar, Filter, Pagination, Search} from './components/'


function App() {
  const api = `https://rickandmortyapi.com/api/character/?page=1`;
  const [ fetchedData, setFetchedData ] = useState([]);

  const {info, results } = fetchedData;
  console.log(results);

    useEffect(() => {
       async function FetchData(){
         const data = await fetch(api).then((res) => res.json());
         setFetchedData(data);
         console.log(data);
       }
       return FetchData();

    }, [api])
  return (
    <div className="App">
      <h1 className="text-center mb-3">Rick and Morty</h1>
      <div className="row">
        Filter component will be placed here 
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card  result={results}/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
