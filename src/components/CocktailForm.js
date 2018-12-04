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
    this.setState({proportions: newDrink}, console.log(this.state))
  }


  // inputChange = (e) => {
  //   console.log(e.target.value)
  //     if (["ingredient_name", "amount"].includes(e.target.name) ) {
  //     let cocktailProportions = [...this.state.proportions]
  //
  //     cocktailProportions[e.target.dataset.id][e.target.name] = e.target.value
  //     this.setState(this.state.proportions, () => console.log(this.state.proportions))
  //   } else {
  //     this.setState({[e.target.name]: e.target.value} , console.log(this.state))
  //   }
  // }


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
      <div>
        <h1>Create a Cocktail</h1>
        <form onSubmit={(e) => this.props.submit(e, this.state)}>
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
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
  //
  // clickHandler = (e) => {
  //   e.preventDefault()
  //   this.setState({
  //     proportions: [...this.state.proportions, [{ingredient_name: "", amount: ""}]]
  //   })
  // }
  // handleChange = (e) => {
  //   console.log(e.value)
  //     if (["ingredient_name", "amount"].includes(e.target.className) ) {
  //     let cocktailProportions = [...this.state.proportions]
  //     cocktailProportions[e.target.dataset.id][e.target.className] = e.target.value
  //     this.setState(this.state.proportions, () => console.log(this.state))
  //   } else {
  //     this.setState({ [e.target.name]: e.target.value }, console.log)
  //   }
  // }
  //
  // render(){
  //
  //
  //
  //   return(
  //     <form onChange={this.handleChange} onSubmit={(e) => this.props.submit(e, this.state)}>
  //     Name:
  //           <input type="text" name="name" id="name" value={this.state.name}/>
  //            <br />
  //            Description:
  //            <textarea type="text" name="description" id="description" value={this.state.description} />
  //            <br />
  //            Instructions:
  //            <textarea type="text" name="instructions" id="instructions" value={this.state.instructions}/>
  //            <br />
  //            <button onClick={(e) => this.clickHandler(e)}>Add proportions</ button>
  //               {this.state.proportions.map((proportions, idx) => {
  //                 let ingredientId= `ingredient_name-${idx}`, amountId= `amount-${idx}`
  //                   return (
  //                     <div key={idx}>
  //                     Ingredient Name:
  //                     <input className="ingredient_name" data-id={idx} name={ingredientId} type="text" value={this.state.proportions.ingredient_name} />
  //                     <br />
  //                     Quantity:
  //                     <input className="amount" type="text" data-id={idx} name={amountId} value={this.state.proportions.amount} />
  //                     </div>
  //                   )})}
  //            <button type="submit" >Submit</button>
  //     </form>
  //   )
  // }
}
