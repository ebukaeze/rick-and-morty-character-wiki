import React from 'react'

const FilterButtons = ({name, index, items, task, setPageNumber}) => {
    return (
        <div>
            <style jsx>
                {`
                .x:checked + label{
                    background-color: #0b53d7;
                    color: #fff;
                }
                input[type="radio"]{
                    display: none;
                }
                `}
            </style>
<div className="form-check">
  <input 
  onClick={() => {
      setPageNumber(1);
      task(items)
  }}
  className="form-check-input x" 
  type="radio" 
  name={name} 
  id={`${name} - ${index}`}
  />
  <label className="btn btn-outline-primary" for={`${name} - ${index}`}
  >
       {items}
      </label>
</div>

            
        </div>
    )
}

export default FilterButtons
