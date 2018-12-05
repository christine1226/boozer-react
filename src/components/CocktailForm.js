import React from 'react'

export default class CocktailForm extends React.Component{
  state={
    name: '',
    description: '',
    instructions: '',
    proportions: [
      {
        ingredient_name: '',
        amount: ''
      }
    ]
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value}, console.log(e.target.value))
  }

  propChange = (e, idx) => {
    const newDrink = this.state.proportions.map((prop, propIdx) =>{
      if (idx !== propIdx){
        return prop
      }
      return {...prop, [e.target.name]: e.target.value}
    })
    this.setState({proportions: newDrink})
  }


  clickHandler = (e) => {
    e.preventDefault()
    this.setState({
      proportions: [...this.state.proportions, {ingredient_name: "", amount: ""}]
    })
  }

  addProportion = () => {
    return this.state.proportions.map((proportions, idx) => {
      // console.log(proportions, idx)
      return (
        <div key={idx}>
        Ingredient Name:
        <input type="text" data-id={idx} name="ingredient_name" value={this.state.proportions[`${idx}`].ingredient_name} onChange={(e) =>this.propChange(e, idx)}/>
        <br />
        Quantity:
        <input type="text" data-id={idx} name="amount" value={this.state.proportions[`${idx}`].amount} onChange={(e) => this.propChange(e, idx)}/>
        </div>
      )
    })
  }

  render(){
    return(
      <div className="column">
      <div className='ui segment'>
        <h1>Create a Cocktail</h1>
        <form className='ui form' onSubmit={(e) => this.props.submit(e, this.state)}>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.inputChange}/>
          <br />
          Description:
          <textarea type="text" name="description" value={this.state.description} onChange={this.inputChange}/>
          <br />
          Instructions:
          <textarea type="text" name="instructions" value={this.state.instructions} onChange={this.inputChange}/>
          <br />
          <button onClick={(e) => this.clickHandler(e)}>Add proportions</ button>
            {this.addProportion()}
          <button className='ui button' type="submit" >Submit</button>
        </form>
        </div>
      </div>
    )
  }
}
