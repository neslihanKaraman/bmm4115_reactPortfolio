import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNode,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            {//animasyonlu metinleri dizi olarak aktarıp gecikme sürelerini belirtiyoruz
            }
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['H', 'A', 'K', 'K', 'I', 'M ', 'D', 'A']}
              idx={15}
            />
          </h1>
          <p>
            Lise eğitimimi Konak Anadolu Lisesinde tamamladım. Şu anda Balıkesir Üniversitesi'nde 
            4. sınıf olarak lisans eğitimime devam etmekteyim. Bu süreç içerisinde çeşitli projelere dahil oldum.
            Bu sene içinde bitirme projesi olarak TUSAŞ ile beraber yürüttüğümüz Sürü İha Simülasyon projesinde görev almaktayım.
            Aynı zamanda Enerjisa Üretim bünyesinde BARES'te yarı zamanlı çalışıyorum.
          </p>
          <p align="LEFT">
          Kendime güveniyorum, sabırlı ve meraklıyım ve sürekli olarak kendimi geliştirmek için çalışıyorum.
          </p>
        </div>
{
  //tasarımda kullandığım küp yüzeylerine fotoğraflarını kaydediyorum.
}
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
