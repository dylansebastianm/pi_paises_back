import React, { useEffect, useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import { getCountries } from "../actions/index.js";
import { getCountryName, filterContinent, filterPopulation, filterName} from "../actions/index.js";

import Card from "./Card.jsx";
import "./styles/cardList.css"
import { Link } from "react-router-dom";
import "./styles/nav.css"


 
function CardList(){
  const allCountries = useSelector(state => state.allCountries);


  const [countrySearch, setcountrySearch] = useState("")

  
   
    const dispatch = useDispatch();


    useEffect (()=>{
        dispatch(getCountries());
       
    },[dispatch])
  
  



/*   ----------FILTER BY NAME FOR SEARCHBAR---------------- */
    useEffect (()=>{
        dispatch(getCountryName(countrySearch));
       
    },[dispatch, countrySearch])


    const handleSubmit = (event) => {
        event.preventDefault();
        setcountrySearch(event.target.value)
    }


/* -------------- PAGINATED------------------------------- */

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(8);


    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };



    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = allCountries.slice(indexOfFirstCard, indexOfLastCard);



    const pageNumbers = [];
            
    for (let i = 1; i <= Math.ceil(allCountries.length / cardsPerPage); i++) {
    pageNumbers.push(i);
    }



/* ---------------FILTERS---------------- */




const handleContinent = (e)=>{
  console.log(e.target.value)
  dispatch(filterContinent(e.target.value))
}


const handleName = (e) =>{
  console.log(e.target.value)
  
    dispatch(filterName(e.target.value))
  
}

const handlePopulation = (e) =>{
  console.log(e.target.value)
  
    dispatch(filterPopulation(e.target.value))
  
}



    return (

 
        <div >

                <div className="nav">
                    <div className="rutasNavContainer">
                        <Link to ="/" className = "rutasNav">
                        <div>Landing</div>
                        </Link>

                        <Link to ="/home" className = "rutasNav">
                        <div>Home</div>
                        </Link>

                        <Link to ="/activities" className = "rutasNav">
                        <div>Activities</div>
                        </Link>

                        <Link to ="/createNewActivity" className = "rutasNav2">
                        <div>Create New Activity</div>
                        </Link>
                        
                    </div>
                
                <div>
                    <input className="buscador"
                placeholder="  Search country.."
                onChange={(event)=>handleSubmit(event)}>

                    </input>
                </div>

                </div>

                
                
  
    <div className="countriesFilters">

      <div className="filters">
        <div>     
          <select 
          className ="select"
          onChange={(e) => handleContinent(e)}>
            <option value="" selected disabled >Filter by continent</option>
            <option value='All' >All continents</option>
            <option value='Africa' >Africa</option>
            <option value='Americas' >America</option>
            <option value='Europe' >Europe</option>
            <option value='Oceania' >Oceania</option>
            <option value='Asia' >Asia</option>
          </select>
        </div>

        <div >
          <select 
          className ="select"
          
          onChange={(e) => handleName(e)}>
            <option value="" selected disabled > Order alphabetically</option>
            <option value="asc">Ascending names</option>
            <option value="des">Descending names</option>
          </select>
        </div>

        <div  >
          <select 
          className ="select"
           
          onChange={(e) => handlePopulation(e)}>
            <option value="" selected disabled >Order by population</option>
            <option value="ascpop">Higher population</option>
            <option value="despop">Lower population</option>
          </select>
        </div>


        
      </div>

      <div className="containerExtreme">
        <div className="listCards">
          {currentCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
          
        </div>

        <ul className="paginated">
          {pageNumbers.map((pageNumber) => (
            <div key={pageNumber} className="">
              <button 
              onClick={() => handlePageChange(pageNumber)} 
              className="buttonPaginated">
                {pageNumber}
              </button>
            </div>
          ))}
        </ul>

      </div>
  </div>
    
  
  


    
        
            {/* <div className="listCards">
                {allCountries.map(e => {
                    return(
                        <div>
                            <Card 
                            key={e.id}
                            id = {e.id}
                            name = {e.name}  
                            img = {e.img}
                            capital = {e.capital}
                            continent = {e.continent}
                            population = {e.population}
                            >
                            </Card>
                        </div>
                        
                    )
                  })}
            </div> */}


        </div>
  
    )

}

export {CardList};
