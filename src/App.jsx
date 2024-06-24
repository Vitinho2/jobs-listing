import React, { useState, useEffect } from 'react'
import { fetchData } from '../public/services/dataService'
import './App.css'

export function App() {

  const [objects, setObjects] = useState([])

  useEffect(() => {
    async function fetchMyData(){
      const data = await fetchData()
      setObjects(data)
    }
    fetchMyData()
  }, [])

  console.log(objects)

  return (
    <>
      <header></header>
      <main>
      {objects.map((obj, index) => (
        <div className="job" key={index}>
          <img src={obj.logo} alt="" />
          <div className="infoJob">
            <div className="info">
              <p className="nameCompany">{obj.company}</p>
              <div className="office">{obj.position}</div>
              <div className="aboutJob">p</div>
            </div>
            <div className="requirements">
              <div>{obj.languages}</div>
            </div>
          </div>
        </div>
        ))}
      </main>
      
    </>
  )
}
