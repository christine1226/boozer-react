import React from 'react'


const ProportionsForm = (props) => {
  return (
    <div>
      <form onSubmit={props.propSubmit}>
        <input
          type='text'
          name='proportions'
          placeholder='Ingredient Name'
          value={props.ingredient_name}
          onChange={props.propChange} />
        <input
          type='text'
          name='amount'
          placeholder='Quantity'
          value={props.amount}
          onChange={props.propChange} /><br />
      </form>
    </div>
  )
}
export default ProportionsForm
