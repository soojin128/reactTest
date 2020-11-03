import React, { useState } from 'react';
import Tab from './component/Tab';
import List from './component/List';
import './App.css';

function App() {
  let conArr = {
    'Tab':<Tab />,
    'List':<List />
};
let [cpnt,setCpnt] = useState(conArr['Tab']);

  function nav(e){
    let menuTxt = e.target.textContent;
    setCpnt(conArr[menuTxt]);
  }
  return(
    <>
      <header>
        <nav onClick={nav}>
          <a>Tab</a>
          <a>List</a>
        </nav>
      </header>
      <main>
        {cpnt}
      </main>
    </>
  );
}

export default App;