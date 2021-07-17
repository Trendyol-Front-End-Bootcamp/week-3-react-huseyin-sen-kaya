import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import CharacterPage from './components/characters/CharacterPage';



const App = () => {
  const [chars, setChars] = useState([]);
  const [apiUrl, setApiUrl] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  

  useEffect( ()=> {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setChars(data.results));
  },[apiUrl])

  return (
    <Router>
      <div className="container">
        <Header/>
        <Switch>

          <Route exact path="/">
            <Search setApiUrl={setApiUrl}/>
            <CharacterGrid chars={chars} />
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
