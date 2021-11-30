import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filter = ({ setStatus, setPageNumber, setGender, setSpecies }) => {

    const clearFilters =() =>{
        setStatus("");
        setGender("");
        setPageNumber("");
        setSpecies("");

       window.location.reload(false)
    }
    return (
        <div className="col-lg-3 col-12 mb-5">
         <div className="text-center fw-bold fs-4 mb-4 ">
             Filters
         </div>
         <div style={{cursor: 'pointer'}} onClick={clearFilters} className="text-center text-decoration-underline text-primary">
             Clear Filters
         </div>
         <div className="accordion mt-2" id="accordionExample">
              <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
              <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
              <Gender setGender={setGender} setPageNumber={setPageNumber}/>
            

         </div>
            
        </div>
    )
}

export default Filter
