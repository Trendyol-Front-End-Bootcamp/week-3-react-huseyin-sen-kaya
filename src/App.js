import './App.scss';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import CharacterPage from './components/characters/CharacterPage';



const App = () => {
  const [chars, setChars] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [apiUrl, setApiUrl] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  

  useEffect( ()=> {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => { 
        setChars(data.results)
        setNextPage(data.info)
      })
  },[apiUrl])

  
  

  return (
    <Router>
      <div className="container">
        <Header/>
        <Switch>

          <Route exact path="/">
            <div className="home-page">
              <Search setApiUrl={setApiUrl}/>
              <CharacterGrid chars={chars}/>
            </div>
          </Route>

          <Route 
            exact 
            path="/:name"
            render={(props) => (
            <CharacterPage {...props} chars={chars} />
            )}
            ></Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
