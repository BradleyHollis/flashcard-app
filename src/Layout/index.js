import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import 
{ BrowserRouter as Router, 
  Route,
  Switch
} from "react-router-dom";
import DeckCreate from './Deck/DeckCreate'
import Deck from "./Deck/Deck";
import Home from './Common/Home'
import StudyDeck from "./Deck/StudyDeck";
import CreateCard from "./Card/CreateCard";
import DeckEdit from "./Deck/DeckEdit";
import CardEdit from "./Card/CardEdit";
import { listDecks } from "../utils/api";

function Layout() {

  const [decks, setDecks] = useState([]);

  useEffect(() => {
      setDecks([]);
      const abortController = new AbortController();

      async function loadDecks() {
        try {
          const loadedDecks = await listDecks();
          setDecks(() => loadedDecks);
        } catch (error) {
          if (error.name !== "AbortError") {
            throw error;
          }
        }
      }
      loadDecks();
      return() => abortController.abort();
    }, []);

  return (
    <div>
    <Header />
      <div className="container">
      <Switch>
        <Route exact path='/'>
          <Home decks={decks}/>
        </Route>
        <Route path='/decks/new'>
          <DeckCreate/>
        </Route>
        <Route path='/decks/:deckId/cards/:cardId/edit'>
          <CardEdit/>
        </Route>
        <Route path='/decks/:deckId/cards/new'>
          <CreateCard/>
        </Route>
        <Route path='/decks/:deckId/edit'>
          <DeckEdit/>
        </Route>
        <Route path='/decks/:deckId/study'>
          <StudyDeck/>
        </Route>
        <Route exact path='/decks/:deckId'>
          <Deck/>
        </Route>      
        <NotFound/>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
