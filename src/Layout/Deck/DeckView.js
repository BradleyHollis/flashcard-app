import React from "react";
import { useHistory } from "react-router-dom";
import { EyeIcon, BookIcon, TrashIcon } from "../Common/Icons";
import { deleteDeck } from "../../utils/api";
import "../Common/style.css";

function DeckView({ deck }){

  const history = useHistory();

  const handleDelete = async({ target }) => {  
    const confirm = window.confirm('Delete this deck?\n\nYou will not be able to recover it.')
    if(confirm){
      await deleteDeck(deck.id)
      window.location.reload();
    }
  }

  return (
    <>
      <div className="card" key={deck.id}>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h5 className="card-title">{deck.name}</h5>
            </div>
            <div className="col">
              <div className='text-right small-font grey-font'>
              <i className="fas fa-pen">{deck.cards.length} cards</i>
              </div>
            </div>
          </div>
          <p>{deck.description}</p>
            <div className='button-grouping'>
              <button className='btn btn-secondary' onClick={() => history.push(`/decks/${deck.id}`)}><EyeIcon/>{` View`}</button>
              <button className='btn btn-primary' onClick={() => history.push(`/decks/${deck.id}/study`)}><BookIcon/>{` Study`}</button>
              <button className='btn btn-danger' onClick={handleDelete}><TrashIcon/></button>
          </div>
        </div>
      </div>
   </>
  )
}

export default DeckView