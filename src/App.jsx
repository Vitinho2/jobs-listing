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
              <div className="aboutJob">
                {obj.postedAt}
                <div className="separation"></div>
                {obj.contract}
                <div className="separation"></div>
                {obj.location}
              </div>
            </div>
            <div className="requirements">
              <div>{obj.role}</div>
              <div>{obj.level}</div>
              {obj.languages.map((language, langIndex) => (
                <div key={langIndex}>
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
        ))}
      </main>
      
    </>
  )
}
