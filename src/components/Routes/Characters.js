import React, {useState, useEffect} from 'react';
import {Card, Filter, Pagination, Search} from '../'

const Characters = () => {
  const [ fetchedData, setFetchedData ] = useState([]);
  const [pageNumber, setPageNumber ] = useState(1);
  const [search, setSearch ] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender ] = useState("");
  const [species, setSpecies ] = useState("");


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

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
    <div className="container mt-5">
      
      <Search  setSearch={setSearch} setPageNumber={setPageNumber}/>
      <div className="row">
        <Filter 
         setGender={setGender}
         status={status}
         setStatus={setStatus}
         setSpecies={setSpecies} 
         setPageNumber={setPageNumber}
         />

        <div className="col-lg-8 col-12">
          <div className="row">
            <Card  results={results}/>
          </div>
          <div className="">
            <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
          </div>
          
        </div>
      </div>
      </div>
    )
}

export default Characters
