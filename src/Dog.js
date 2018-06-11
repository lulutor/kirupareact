import React, { Component } from "react";
import { Fetch } from "react-data-fetching";

class Dog extends Component {
    
    render() {
      return (
        <Fetch
          loader="Chargement en cours ..." // Replace this with your lovely handcrafted loader
          url="https://api.whatdoestrumpthink.com/api/v1/quotes/random"
          timeout={5000}>                    
            {({ data }) => (
                <div>
                    <h1>What Does Trump Think</h1>
                    <h3>{data.message}</h3>
                    <img width="350" height="305" src="https://source.unsplash.com/random" alt="Dog"/>
                    <input type="button" value="Bouton à cliquer"/>
                </div>    
            )}
            
        </Fetch>
    
       )
    }
}

export default Dog;
