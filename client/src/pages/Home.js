import React from 'react';
import { Link } from "react-router-dom";



export default function Home() {
 

  return (
            <main>

              <Link to="/projects"><h1>Project Page</h1></Link>
            <br></br>
              <Link to="/buttons"><h1>Button Page</h1></Link>

            </main>
  );
};
