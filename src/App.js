import React, {useState, useEffect} from 'react';
import './App.css';

import {Card, Navbar, Filter, Pagination, Search} from './components/'


function App() {
  const [ fetchedData, setFetchedData ] = useState([]);
  const [pageNumber, setPageNumber ] = useState(1);
  const [search, setSearch ] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender ] = useState("")


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}`;

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
      <div className="container-fluid">
      <h1 className="text-center mb-3">Rick and Morty</h1>
      <Search  setSearch={setSearch} setPageNumber={setPageNumber}/>
      <div className="row">
        <Filter 
         setGender={setGender}
         status={status}
         setStatus={setStatus} 
         setPageNumber={setPageNumber}
         />

        <div className="col-lg-8 col-12">
          <div className="row">
            <Card  result={results}/>
          </div>
          <div className="">
            <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
          </div>
          
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
