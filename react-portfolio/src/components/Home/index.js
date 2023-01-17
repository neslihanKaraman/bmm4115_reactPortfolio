import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
//karakterlerin tek tek hareket etmesi için dizi oluşturdum.
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  //4 saniyelik zaman aşımı oluşturdum.
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  //açılan sayfada metinlerin gecikmeli ve hareketli gelmesi için
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>Merhaba</span>
            <br />
            <span className={`${letterClass} _13`}>Ben,&nbsp;</span>
            <span className={`${letterClass} _14`}> Neslihan Karaman</span>

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2>Bilgisayar Mühendisliği Son Sınıf Öğrencisi</h2>
          <Link to="/contact" className="flat-button">
            Bağlantı Kur
          </Link>
        </div>
      
      </div>

      
    </>
    
  )
  
}
<Loader type="pacman" />
export default Home
