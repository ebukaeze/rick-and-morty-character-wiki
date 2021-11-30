import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    const { id } = useParams();
    const [fetchedData, setFetchedData ] = useState([]);


let api = `https://rickandmortyapi.com/api/character/${id}`;

  const {name, image, location, origin, gender, species, type, status } = fetchedData;
 

    useEffect(() => {
       async function FetchData(){
         const data = await fetch(api).then((res) => res.json());
         setFetchedData(data);
         console.log(data);
       }
       return FetchData();

    }, [api])
    return (
        <div className="container d-flex justify-content-center">
            <div className="d-flex flex-column gap-3">
                <h1 className="text-center">{name}</h1>
                <img src={image} alt={name} className="img-fluid"/>
                {(()=> {
                            if (status === "Dead"){
                                return(
                                    <div className={`badge fs-5 bg-danger`}>{status}</div>
                                )
                            }
                            else if(status === "Alive"){
                                return(
                                 <div className={`badge fs-5 bg-success`}>{status}</div>
                                )
                            } else{
                                return(
                                    <div className={`badge fs-5 bg-secondary`}>
                                        {status}
                                        </div>
                                )
                            }
                        })()}

                <div className="coontent">
                    <div className="">
                        <span className="fw-bold">Gender : {gender}</span>
                    </div>
                    <div className="">
                        <span className="fw-bold">Species : {species}</span>
                    </div>
                    <div className="">
                        <span className="fw-bold">Type : {type === ""? "Unknown" : type}</span>
                    </div>
                    <div className="">
                        <span className="fw-bold">Location : {location?.name}</span>
                    </div>
                    <div className="">
                        <span className="fw-bold">Origin : {origin?.name}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails
