import React, {useState, useEffect} from 'react';
import { Card, Filter } from '..';
import InputGroup from '../Filter/Category/InputGroup';

const Location = () => {
    const [id, setId ] = useState(2);
    const [info, setInfo] = useState([]);
    const [results, setResults] = useState([])

    const {name, type, dimension} = info;

    console.log(results);

    let api = `https://rickandmortyapi.com/api/location/${id}`;

     useEffect(() => {
       async function FetchData(){
           const data = await fetch(api).then((res) => res.json());
           setInfo(data);

           const a = await Promise.all(
               data.residents.map((item) => {
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
                
             <h1 className="text-center mb-3">Location: {" "}
             <span className="text-primary">
             {name===""? "Unknown" : name}
             </span>
             </h1>
             <h5 className="text-center">Dimension: { dimension === ""? "Unknown" : dimension}</h5>
             <p className="text-center"> Type: {type === ""? "Unknown" : type}</p>
            </div>
        
                <div className="row">
                    <div className="col-3">
                        <h4 className="text-center mb-4">Pick Locations</h4>
                       <InputGroup setId={setId} name="Location" total={126}/>
                        </div>
                    <div className="col-8 mt-4">
                        <div className="row">
                            <Card results={results}/>
                        </div>
                    </div>
                    
                </div>

        </div>
    )
}

export default Location
;