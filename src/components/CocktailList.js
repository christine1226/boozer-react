import React from 'react'

export default class CocktailList extends React.Component{


  render(){
    return(
      <div className="cocktailList">
      <div className="ui inverted segment">
        <div className="ui inverted relaxed divided list">
          <div className="item" onClick={() => {this.props.click(this.props.cocktails)}}>
              <div className="header">{this.props.cocktails.name}<button onClick={()=> {this.props.delete(this.props.cocktails)}}>X</button></div>
            </div>
          </div>
      </div>
      </div>
    )
  }

}
