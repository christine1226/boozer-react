import React from 'react'

export default class CocktailDisplay extends React.Component{

  render(){
    let ingredient = this.props.cocktail.proportions.map(i => <p key={i.id}>-{i.amount} {i.ingredient_name}</p>)
    console.log(this.props.cocktail)
    return(
      <div className='column'>
      <div className="ui segment">
        <h1>{this.props.cocktail.name}</h1>
        <h3>{this.props.cocktail.description}</h3>
        <p>{this.props.cocktail.instructions}</p>
        <h2>Ingredients</h2>
        <ul>
          {ingredient}
        </ul>
        </div>
      </div>
    )
  }
}
