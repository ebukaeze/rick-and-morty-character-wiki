import React from 'react';
import FilterButtons from '../FilterButtons';

const Status = ({setPageNumber, setStatus}) => {
    let status = ["Alive", "Dead", "Unknown"]
    return (
        <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
       Status
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body d-flex flex-wrap gap-3">
         {status.map((items, index) => (
             <FilterButtons 
             task={setStatus}
             setPageNumber={setPageNumber}
             key={index}
             name="status"
             index={index}
             items={items}
             />
         ))}
      </div>
    </div>
  </div>
    )
}

export default Status
