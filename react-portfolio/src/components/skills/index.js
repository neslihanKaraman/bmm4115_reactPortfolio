import Loader from 'react-loaders'
import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';
import { useEffect, useState } from 'react';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, []);

    return (
      <>
        <div className="container skills-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['Y', 'E', 'T', 'E', 'N', 'E ', 'K', 'L','E','R']}
                idx={15}
              />
            </h1>
            <p>
              İlk staj deneyimimi GDZ Elektrik A.Ş'de Teknoloji ve Ar-Ge biriminde tamamladım.
              İkinci stajımı Casper Bilişim Sistemleri A.Ş'de gerçekleştrdim.
              Şu anda Bilgisayar Mühendisliği lisans son sınıf öğrencisi olup Enerjisa Üretim bünyesinde
              Balıkesir Rüzgar Santrali'nde (BARES) işletme ve teknik bölümünde uzun dönem stajyer olarak görev almaktayım.
            </p> 
            <p >
            Kendime güveniyorum,sabırlı ve meraklıyım ve sürekli olarak kendimi geliştirmek için çalışıyorum.
            </p>
          </div>
          <div className='skills-charts'>
            <div className='container2'>
              <div className='skills'>

                <h2 className='text'>HTML</h2>
                <div className='proggres-bar'>
                  <div className='html1'><span >86%</span></div>
                </div>

                <h2 className='text'>CSS</h2>
                <div className='proggres-bar'>
                  <div className='css1'><span>90%</span></div>
                </div>
                <h2 className='text'>Java</h2>
                <div className='proggres-bar'>
                  <div className='java'><span>70%</span></div>
                </div>
                <h2 className='text'>Python</h2>
                <div className='proggres-bar'>
                  <div className='python'><span>60%</span></div>
                </div>
                <h2 className='text'>C#</h2>
                <div className='proggres-bar'>
                  <div className='csharp'><span>80%</span></div>
                </div>
                <h2 className='text'>JavaScript</h2>
                <div className='proggres-bar'>
                  <div className='js'><span>75%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Loader type="pacman" />
    </> 
  )
}
export default Skills