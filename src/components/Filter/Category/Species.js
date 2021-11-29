import React from 'react'
import FilterButtons from '../FilterButtons'

const Species = ({setSpecies, setPageNumber}) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet"
    ]
    return (
        <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
       Species
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body d-flex flex-wrap gap-3">
          {species.map((items, index) => (
            <FilterButtons 
            setPageNumber={setPageNumber}
            task={setSpecies}
            key={index}
            name="species"
            index={index}
            items={items}
            />
          ))}
         
      </div>
    </div>
  </div>
    )
}

export default Species
