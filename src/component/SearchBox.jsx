import React from 'react'
import { useContext } from 'react'
import { ObjContext } from '../context/cont'

export default function SearchBox() {
  const {changeFilter,ArrObj}=useContext(ObjContext);

  function handleSearch(e){
    e.preventDefault();
    changeFilter(ArrObj.filter(item=> item.text.toLowerCase().includes(e.target.value.toLowerCase())));
  }
  
  return (
    <div className="searchBox">
      <input type="text" placeholder="Пошук" onChange={e=>handleSearch(e)} />
    </div>
    
  )
}
