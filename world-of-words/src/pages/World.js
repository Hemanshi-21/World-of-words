import React from 'react';
import './World.css';
import Navbar from '../component/navbar';
import Aviral from '../images/aviral.jpg'
import Mission from '../images/mission.jpg'
import Vission from '../images/vission.jpg'
import Goverment from '../images/goverment.jpg'
import Education from '../images/education.jpg'
import Corporate from '../images/corporate.jpg'
import Cultural from '../images/cultural.jpg'
import Media from '../images/media.jpg'


const World=()=> {
    return(
        <div className='homepage-container'>

            <Navbar/>
        <div className='homepage-hero'>
          <div className='header-section'>
            <h1>Aviral Digital Solution</h1>
            <p>Welcome to our digital heaven where languages unite and barriers dissolve. At Aviral Digital Solutions, we are not just translators, we are architects of understanding in a diverse world. With our linguistic competence, we bridge cultures, empower businesses and amplify global connections.</p>
            <p>Our passion lies in transcending linguistic barriers, weaving words that resonate across languages including Hindi, Marathi, Telgu, Malayalam, Bengali, Odia and many more.</p>
          </div>
          <div>
            <img className='aviral-img' src={Aviral}></img>
          </div>
          </div>

          <div className='explore-section' id='our-expertise' >
            <h1>Explore our Language Swags</h1>

            <div className='explore'>
              <div className='explore1'>
                <h2>Expert Linguistics</h2>
                <p>Our team comprises language enthusiasts who breathe life into every word.</p>
                </div>

                <div className='explore1'>
                <h2>Cultural Nuances</h2>
                <p>We don’t just translate, we capture the essence, ensuring your message shines through intact.</p>
                </div>

                <div className='explore1'>
                <h2>Beyond Words</h2>
                <p>We pave the way for global connections, fostering understanding in a diverse world.</p>
                </div>

                <div className='explore1'>
                <h2>Tailored Solutions</h2>
                <p>Whether it’s business, creative content or technical jargon, we’ve got you covered.</p>
                </div>
            </div>
          </div>

          <div className='join-section'>
                <p className='join-para'>Join us in celebrating India’s linguistic diversity. Your words, our expertise- a fusion that echoes across borders. Welcome to Aviral Digital Solutions, where languages unite and communication knows no bounds.</p>
            </div>

          <div className='mission-section' id='mission-vission'>
            <div className='mission'>
              <img className='mission-img' src={Mission}></img>
            <h1>Mission</h1>
            <p>Our mission is to break down language barriers and foster understanding by providing top-notch translation services in a multitude of Indian languages.</p>
            </div>

            <div className='vission'>
              <img className='vission-img' src={Vission}></img>
            <h1>Vission</h1>
            <p>Our vision is to be the cornerstone of communication in India, connecting businesses, communities and individuals through accurate and culturally sensitive translations.</p>
            </div>
          </div>

          <div className='project-section' id='project'>
            <h1 className='pro'>Projects Done So Far</h1>
            <div className='project-section1'>
            <div className='project'>
            <h2>Multilingual Government Initiatives:</h2>
            <p>Collaborated with various government departments to translate essential public information materials into regional languages, ensuring effective communication with citizens across the country.</p>
            </div>
              <img className='goverment-img' src={Goverment}></img>
            </div>

            <div className='project-section1'>
            <div className='project'>
            <h2>Educational Outreach</h2>
            <p>Translated educational materials for NGOs working in remote areas, empowering local communities with access to knowledge in their native languages.</p>
            </div>
            <img className='education-img' src={Education}></img>
            </div>

            <div className='project-section1'>
            <div className='project'>
            <h2>Corporate Communication</h2>
            <p>Assisted businesses in expanding their reach by translating marketing content, product descriptions and customer communication into multiple Indian languages.</p>
            </div>
            <img className='corporate-img' src={Corporate}></img>
            </div>

            <div className='project-section1'>
            <div className='project'> 
            <h2>Cultural Exchange</h2>
            <p>partnered with cultural organizations to translated literature art and historical documents, preserving and sharing India’s rich heritage.</p>
            </div>
            <img className='cultural-img' src={Cultural}></img>
            </div>
             
             <div className='project-section1'>
            <div className='project'>
            <h2>Media and Entertainment</h2>
            <p>Translated subtitles and scripts for movies, TV shows and online content allowing creators to connect with regional audiences on a deeper level.</p>
            </div>
            <img className='media-img' src={Media}></img>
            </div>

          </div>
        </div>
    )
}

export default World;