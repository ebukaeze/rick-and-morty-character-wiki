import React from 'react'
import FilterButtons from '../FilterButtons'

const Gender = ({setGender, setPageNumber }) => {
    let gender = ["Male", "Female", "Genderless", "Unknown"]
    return (
        <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
        Gender
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body d-flex flex-wrap gap-3">
       {gender.map((items, index) => (
           <FilterButtons 
           task={setGender}
           setPageNumber={setPageNumber}
           key={index}
           name="gender"
           index={index}
           items={items}/>
       ))}
      </div>
    </div>
  </div>
    )
}

export default Gender
