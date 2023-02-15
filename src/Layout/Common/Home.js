import React from 'react'
import DeckList from '../Deck/DeckList'
import { PlusIcon } from '../Icons';
import { useHistory } from "react-router-dom";

function Home(){

    const history = useHistory();

    return (
    <>
        <div>
            <div className="move-right">
                <button className='btn btn-secondary' onClick={() => history.push('/decks/new')}>
                    <PlusIcon/>{` Create Deck`}
                </button>
            </div>
            <div>
                < DeckList />
            </div>
        </div>
    </>
    )
}

export default Home;