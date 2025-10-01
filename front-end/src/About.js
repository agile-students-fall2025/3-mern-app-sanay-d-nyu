import { Link } from 'react-router-dom'
import './About.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const About = props => {
  const [aboutData, setAboutData] = useState({ header: '', "img-path": '' , "paragraph-1": "", "paragraph-2": ""})
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        setAboutData(response.data)
      })
      .catch(err => {
        const errMsg = JSON.stringify(err, null, 2)
        setError(errMsg)
        console.error('Error fetching About Us page data')
      });
  }, []);

  return (
    <>
      <h1>{aboutData.header}</h1>
      <p>{aboutData["paragraph-1"]}</p>
      <p>{aboutData["paragraph-2"]}</p>
      <img src={aboutData["img-path"]} alt="About me" />
    </>
  )
}

// make this component available to be imported into any other file
export default About 
