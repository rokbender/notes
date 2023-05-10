import React, { useEffect } from 'react';
import { useState } from 'react';
import Dexie from 'dexie';
import {db} from "./db.js"

import "./style/style.css";

import Header from './component/Header';
import Block from './component/Block';
import {ObjContext} from "./context/cont.js";




function App() {
  
  const [ArrObj,changeArr]=useState([]);
  const [idSelect,changeId]=useState(-1);
  const [idDelete,changeIdDelete]=useState(-1);
  const [filterArr,changeFilter]=useState([])

  
  useEffect(()=>{
   //console.log("Дані обновилися");
   //console.log(ArrObj);
   db.notes.bulkPut(ArrObj);
   db.notes.where("id").equals(idDelete).delete();
  }, [ArrObj]);

 
  useEffect(()=>{
    db.table("notes").toArray().then( function(value) {
      console.log(value); // Успіх!
      changeArr(value);
      changeFilter(value);
    } );
 },[]);


  useEffect(()=>{
    changeFilter(ArrObj);
  },[ArrObj]);

   
    
  

  return (
    <ObjContext.Provider value={{ArrObj,changeArr,idSelect,changeId,changeIdDelete,filterArr,changeFilter}}>
      <div className="App">
          <Header/>
          <Block/>
       </div>
    </ObjContext.Provider>
    
  );
}

export default App;
