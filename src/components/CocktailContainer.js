import React from 'react'
import CocktailList from './CocktailList'
import CocktailDisplay from './CocktailDisplay'
import CocktailForm from './CocktailForm'


export default class CocktailContainer extends React.Component{
  state={
    allCocktails: [],
    clickedCocktail: null
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/cocktails/')
    .then(res => res.json())
    .then(cocktail => this.setState({
      allCocktails: cocktail
    }))
  }

  handleDrankClick = (drank) => {
    const url = 'http://localhost:3000/api/v1/cocktails/'
    // console.log(drank.id)
    fetch(url + drank.id)
    .then(res => res.json())
    .then(drink => this.setState({
      clickedCocktail: drink
    }))
  }

  handleSubmit = (e, obj) =>{
    console.log(obj)

    e.preventDefault()
    fetch('http://localhost:3000/api/v1/cocktails', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: obj.name,
        description: obj.description,
        instructions: obj.instructions,

      })
    })
    .then(res => res.json())
    .then(newCocktail => (this.handleIngredient(newCocktail, obj)))
  }



  handleIngredient = (newCocktail, obj) => {
    // let mappedProp = obj.proportions.ingredient_name.map(drink => drink)
  fetch('http://localhost:3000/api/v1/ingredients', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: obj.proportions[0].ingredient_name
    })
  })
  .then(res => res.json())
  .then(json => this.handleProportion(json, newCocktail, obj))
  }


  handleProportion = (ingredient, cocktail, obj) => {
    console.log(ingredient, cocktail, obj)
    // let mappedProp = obj.proportions.ingredient_name.map(drink => drink)
    fetch('http://localhost:3000/api/v1/proportions', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        amount: obj.proportions[0].amount,
        cocktail_id: cocktail.id,
        ingredient_id: ingredient.id
      })
    }).then(res => res.json())
    .then(drink => this.setState({ allCocktails: [...this.state.allCocktails, cocktail]}))
  }



  render(){
    console.log(this.state.allCocktails)
    let cocktailArr = this.state.allCocktails.map(drank => {
      return <CocktailList key={drank.id} cocktails={drank} click={this.handleDrankClick} delete={this.handleDelete} />
    })
    // console.log(cocktailArr)
    return(
      <div className='ui three column grid'>
      <div id='list'>{cocktailArr}</div>
        <CocktailForm submit={this.handleSubmit} />
        {this.state.clickedCocktail && <CocktailDisplay cocktail={this.state.clickedCocktail} />}
      </div>
    )
  }

}
