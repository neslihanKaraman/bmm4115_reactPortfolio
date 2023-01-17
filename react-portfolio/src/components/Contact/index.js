import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
//zamanlayıcı olarak kullandığım kısımda metinlerin veya kelimelerin sırayla çıkmasını sağladım.
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Ulaşmak veya bağlantı kurmak için;
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input placeholder="Ad" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Konu"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mesaj"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="GÖNDER" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Neslihan Karaman,
          <br />
          Türkiye,
          <br />
          Balıkesir, Altıeylül <br />
          <br />
          <span id="mailAddress">neslihnkaraman@gmail.com</span>
        </div>

        {
          //map container yardımıyla bulunduğun konumun koordinatlarına göre haritada yer tespiti sağladım.
        }
        <div className="map-wrap">
          <MapContainer center={[39.6439, 27.8817]} zoom={15}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            <Marker position={[39.6439, 27.8817]}/>
          </MapContainer>
        </div>
      </div>
    </>
  )
}
<Loader type="pacman" />
export default Contact
