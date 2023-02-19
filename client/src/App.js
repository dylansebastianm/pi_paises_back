import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import { Nav } from './components/Nav';
import { CountryDetail } from './components/CountryDetail';
import { Form } from './components/Form';
import { CardList } from './components/CardList';





function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route exact path="/" >
         <Nav/>
         <CardList/>        
        </Route>

        <Route exact path="/activities" >
          <CountryDetail/>
         </Route> 

         <Route exact path="/createNewActivity" >
          <Form/>
         </Route> 



      </BrowserRouter>
    </div>
  );
}

export default App;
