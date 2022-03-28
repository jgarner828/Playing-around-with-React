
import React from 'react';
import { useState } from 'react';


export default function ButtonIncrement() {
 
    let [buttonClicks, addClick] = useState(0)

    function clickedButton(e) {
            console.log(e.target)
            console.log(this)
        return addClick(++buttonClicks);
    }

  return (
            <main>

            
            <h1>{buttonClicks}</h1>

            <button onClick={clickedButton}>Click to change state!</button>

            </main>
  );
};
