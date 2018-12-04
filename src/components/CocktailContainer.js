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
    fetch('http://localhost:3000/api/v1/cocktails/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        instructions: obj.instructions,
      })
    })
    .then(res => res.json())
    .then(newCocktail => this.setState({
      allCocktails: [...this.state.allCocktails, newCocktail]
    }, () => (this.handlePatch(newCocktail, obj))))
  }

  handlePatch = (newCocktail, obj) => {
    // let mappedProp = obj.proportions.ingredient_name.map(drink => drink)
  fetch('http://localhost:3000/api/vi/cocktails/'+newCocktail.id, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      proportions: [
        {
          ingredient_name: obj.proportions.ingredient_name,
          amount: obj.proportions.amount
        }
      ]
    })
  }).then(res => res.json())
  .then(console.log)
  }

  handleDelete = (obj) => {
    console.log(obj)
    this.state.allCocktails.filter(e => {
      return e !== obj})
  }


  render(){
    console.log(this.state.allCocktails)
    let cocktailArr = this.state.allCocktails.map(drank => {
      return <CocktailList key={drank.id} cocktails={drank} click={this.handleDrankClick} delete={this.handleDelete} />
    })
    // console.log(cocktailArr)
    return(
      <div>
        {this.state.clickedCocktail && <CocktailForm submit={this.handleSubmit} />}
        {this.state.clickedCocktail && <CocktailDisplay cocktail={this.state.clickedCocktail} />}
        {cocktailArr}
      </div>
    )
  }



}
// ReactDOM.render((
//   <Router>
//     <div>
//       <Route exact path="/" render={CocktailList} />
//       <Route exact path='/id' render={CocktailDisplay} />
//     </div>
//   </Router>),
//   document.getElementById('root')
// );
