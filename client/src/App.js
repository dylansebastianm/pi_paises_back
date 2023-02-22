import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import { Nav } from './components/Nav';
import { CountryDetail } from './components/CountryDetail';
import { Form } from './components/Form';
import { CardList } from './components/CardList';
import {LandingPage} from './components/LandingPage';
import {ActivityList} from './components/ActivityList';
import {Footer} from './components/Footer';





function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Route exact path="/" >
         
         <LandingPage/>   
        </Route>

        <Route exact path="/home" >
        
         <CardList/>
         <Footer/>      
        </Route>

        <Route exact path="/activities" >
         <Nav/>
         <ActivityList/>
         <Footer/>              
        </Route>

        <Route path="/countrydetail/:id" >  
          <Nav/>
          <CountryDetail/>
          <Footer/>      
         </Route> 

         <Route exact path="/createNewActivity" >
          <Nav/>
          <Form/>
          <Footer/>      
         </Route> 



      </BrowserRouter>
    </div>
  );
}

export default App;
