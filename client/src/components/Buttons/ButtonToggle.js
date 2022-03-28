
import React from 'react';
import { useState } from 'react';


export default function ButtonToggle() {
 
    let [toggleState, toggleBtn] = useState('unclicked')


    function clickedButton(e) {
        console.log(e.target)
        // eslint-disable-next-line default-case
        switch(toggleState) {
            case "unclicked": 
                toggleBtn("clicked")
                break;
            case "clicked":
                toggleBtn("unclicked")
                break;
        }
    }


  return (
            <main>

            
            <h1>{toggleState}</h1>

            <button id='toggleBtn' value={toggleState} onClick={clickedButton}>Click to change state!</button>

            </main>
  );
};
