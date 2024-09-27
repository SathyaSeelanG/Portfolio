import React, { useState, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { FaGithubSquare } from 'react-icons/fa'


function Contributions() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='Container' style={{ marginTop: '5rem' }}>
      <div className="SectionTitle" style={{ display: 'flex', alignItems: "center", flexWrap: 'wrap' }}>Work Experience
      </div>
      <div className="BigCard" style={{ padding: '0 10px 10px 10px' }}>

        <div style={{ display: "flex", marginTop: '15px', marginLeft: '15px', alignitems: "center" }}>
          <img alt=" " src={"https://www.spacescan.io/images/spacescan-logo-192.png"} style={{ width: "50px", Height: "50px" }} />
          <a style={{ marginTop: '15px', fontSize: '24px', fontWeight: 'bold' }} href={"https://www.spacescan.io/"} >SPACESCAN</a>
        </div>
        <div style={{ display: "flex", alignitems: "center" }}>
          <p style={{ marginTop: '15px', marginLeft: '15px', fontSize: '16px', fontWeight: 'bold' }}> Fullstack developer</p> &nbsp;
          <p style={{ marginTop: '15px', fontSize: '16px', fontWeight: '' }}> July 2023 - Present </p>
        </div>
        <p style={{ marginTop: '15px', marginLeft: '15px', fontSize: '16px' }}>


          As a full-stack developer, I specialize in blockchain technology, adept at crafting intuitive frontends for blockchain explorers, particularly within the dynamic landscape of the Chia blockchain. Leveraging Node.js, I seamlessly integrate APIs to provide users with immediate access to real-time blockchain data. My comprehensive skill set extends to backend development, ensuring robust database management for a fluid information flow. This empowers users to effortlessly explore and engage with the ever-evolving blockchain ecosystem.
        </p> &nbsp;
      </div>
    </div>
  )
}

export default Contributions