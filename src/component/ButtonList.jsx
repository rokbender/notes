import React from 'react'
import { useContext ,useRef} from 'react';
import { ObjContext } from '../context/cont';
export default function ButtonList() {
  
  const {ArrObj,changeArr,changeId,idSelect,changeIdDelete}=useContext(ObjContext);

  const countId=useRef(0);
  if(ArrObj.length>0){
    countId.current=ArrObj[(ArrObj.length-1)]?.id+1;
  }

  function deleteClick(){
    let answer = window.confirm("Ви дійсно хочете видалити нотатку?");
    if(answer){
      changeArr(ArrObj.filter(item=>item.id!==idSelect));
      changeIdDelete(idSelect);
      changeId(-1);
    } 

  }

  function addClick(){
    
    changeArr([...ArrObj,{id:countId.current, text:"", data:new Date().toLocaleString()}]);
    changeId(countId.current);
    countId.current=countId.current+1;

  }

  return (
    <div className="button_list">
      <button className="button btn_active" onClick={addClick}>
        <img src='./img/add.png' alt="" />
      </button>
      <button className={idSelect===-1 ? "button" :  "button btn_active"} onClick={deleteClick}>
        <img src="./img/basket.png" alt="" />
      </button>
      <button className={idSelect===-1 ? "button" :  "button btn_active"}>
        <img src="./img/edit.png" alt="" />
      </button>
    </div>
   
  )
}
