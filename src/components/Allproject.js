import React, { useState } from "react"
import CasestudyProjects from "./Casestudyprojects"
import Projectlist from "../projectAPI"
import ProjectMenu from "./Projectmenu"

const uniqueList = [
  "All",...new Set(
    Projectlist.map((curElem) => {
      return curElem.category
    })
  ),
  
]
console.log(uniqueList)

const AllProject = () => {
  const [projectData, setMenuData] = useState(Projectlist)
  const [menuList, setMenuList] = useState(uniqueList)

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Projectlist)
      localStorage.setItem("prolist",JSON.stringify(Projectlist))
      return
    }
    
    const updatedList = Projectlist.filter((curElem) => {
      return curElem.category === category
    })
    
    setMenuData(updatedList)
    localStorage.setItem("Menulist",JSON.stringify(updatedList))
  }
  
  return (
    <>
      <div id="wrapper">
        <span className="image fit" style={{ marginBottom: '100px' }}><img src="images/splash.svg" alt="" /></span>
        <ProjectMenu filterItem={filterItem} menuList={menuList} />
        <CasestudyProjects projectData={projectData} />
      </div>
    </>
  )
}

export default AllProject