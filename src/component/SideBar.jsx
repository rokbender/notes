import { useContext} from 'react';
import React from 'react'
import ListItem from './ListItem';
import { ObjContext } from '../context/cont';

export default function SideBar() {
  const {changeId,idSelect,filterArr}=useContext(ObjContext);

  return (
    
    <div className="sideBar none">
        {
            filterArr.length>0 ? (filterArr.map(item=> <ListItem text={item.text} data={item.data} id={item.id} key={item.id} isActive={idSelect === item.id} onShow={() => {changeId(item.id);}} />)) : 
            <h1>Нотаток не знайдено</h1>//(ArrObj.map(item=> <ListItem text={item.text} data={item.data} id={item.id} key={item.id} isActive={idSelect === item.id} onShow={() => {changeId(item.id);}} />))
        }
       
    </div>
  )
}
