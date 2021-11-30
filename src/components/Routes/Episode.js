import React, {useState, useEffect} from 'react';
import { Card, Filter } from '..';
import InputGroup from '../Filter/Category/InputGroup';

const Episode = () => {
    const [id, setId ] = useState(1);
    const [info, setInfo] = useState([]);
    const [results, setResults] = useState([])

    const {name, air_date} = info;

    console.log(results);

    let api = `https://rickandmortyapi.com/api/episode/${id}`;

     useEffect(() => {
       async function FetchData(){
           const data = await fetch(api).then((res) => res.json());
           setInfo(data);

           const a = await Promise.all(
               data.characters.map((item) => {
                   return fetch(item).then((res) => res.json());

               })
           )
           setResults(a);
       }
       return FetchData();
     }, [api])

    return (
        <div className="container">
            <div className="row">
                
             <h1 className="text-center mb-3">Episode: {" "}
             <span className="text-primary">
             {name===""? "Unknown" : name}
             </span>
             </h1>
             <h5 className="text-center">Air Date: {air_date === ""? "Unknown" : air_date}</h5>
            </div>
        
                <div className="row">
                    <div className="col-lg-3 col-12">
                        <h4 className="text-center mb-4">Pick Episodes</h4>
                       <InputGroup setId={setId} name="Episode" total={50}/>
                        </div>
                    <div className="col-lg-8 col-12 mt-4">
                        <div className="row">
                            <Card page="/episodes/"results={results}/>
                        </div>
                    </div>
                    
                </div>

        </div>
    )
}

export default Episode
;