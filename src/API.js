import React, { Component } from "react";
import { Fetch } from "react-data-fetching";

class API extends Component {
  render() {
    return (

      <Fetch
        loader="Ca Charge" // Replace this with your lovely handcrafted loader
        url="https://api.nasa.gov/planetary/apod?api_key=PLZ1xw46oTADUkLZGmTozRC8wxUqjz8ajGn2q1cm"
        timeout={5000}>
        {({ data }) => (
         <div>
         <form >
           <div>
             <input type="search" id="maRecherche" name="q"
             placeholder="Rechercher sur le site…" size="30"/>
             <button>Rechercher</button>
           </div>
         </form>
          <h3>date</h3>
          <p>{data.date}</p>
          <h3>titre</h3>
          <p>{data.title}</p>
          <h3>c'est quoi ?</h3>
          <p>{data.explanation}</p>
         </div>
        )}
      </Fetch>
    )
  }
}

export default API;
