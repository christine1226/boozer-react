import React from 'react'

export default class CocktailList extends React.Component{


  render(){
    return(
        <div className="column">
        <div className="ui segment" >
          <div onClick={() => {this.props.click(this.props.cocktails)}}>
              {this.props.cocktails.name}
          </div>
          </div>
        </div>
    )
  }

}
