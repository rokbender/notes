import React from 'react'
import ButtonList from './ButtonList'
import SearchBox from './SearchBox'


export default function Header() {
   
  return (
    <header className="header">
        <ButtonList></ButtonList>
        <SearchBox></SearchBox>
    </header>
  )
}
