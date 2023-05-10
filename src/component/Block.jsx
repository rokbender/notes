import React from 'react'
import SideBar from './SideBar'
import WorkSpace from './WorkSpace'
export default function Block() {
  return (
    <div className="main">
      <SideBar></SideBar>
      <WorkSpace></WorkSpace>
    </div>
  )
}
