import { Link } from 'react-router-dom'
import './About.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const About = props => {
  const [aboutData, setAboutData] = useState({
    title: '', 
    img_path: '',
    p1_0: "",
    p1_1: ""
  })
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
      <h1>{aboutData.title}</h1>
      <p className="about-paragraph">{aboutData.p1_0}</p>
      <div className="list-div">
        <p className="about-paragraph">{aboutData.p1_1}</p>
      </div>
      <img src={aboutData.img_path} alt="About me" />
    </>
  )
}

// make this component available to be imported into any other file
export default About 
