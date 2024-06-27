import React from 'react'
import Card from './CardTwo.module.css'
import Admin from '../../assets/img/Admin.png'
import Vector from '../../assets/img/bell.png'
import pubg from '../../assets/img/pubg.png'
import warior from '../../assets/img/warior.png'
import frefire from '../../assets/img/frefire.png'
import Need from '../../assets/img/needfor.png'
import vector from '..//../assets/img/Vector.png'
import vector2 from '..//../assets/img/Vector2.png'
const CardTwo = () => {
  return (
    <div className={Card.card}>
        <div className={Card.page}>
            <img src={Admin} alt="" />
            <h4>William jonson</h4>
            <img src={Vector} alt="" />

        </div>
        <div className={Card.tittle}>
            <h3>Live Game</h3>
            <div className={Card.button}>
                <button></button>
            </div>
           <div>
            <div className={Card.images}>
                  <img src={pubg} alt="" />
                 <div>
                 <h5>Pubg war</h5>
                  <p>war Battle</p>
                 </div>
              </div>
              <div className={Card.images}>
                  <img src={warior} alt="" />
                 <div>
                 <h5>Gost of Tsushima</h5>
                  <p>war Battle</p>
                 </div>
              </div>
              <div className={Card.images}>
                  <img src={frefire} alt="" />
                 <div>
                 <h5>FreeFire</h5>
                  <p>war Battle</p>
                 </div>
              </div>
           </div>
           
        </div>
        <div className={Card.download}>
            <img src={Need} alt="" />
              <div className={Card.download_tittle}>
                <h4>Need for Speed</h4>
                <p className={Card.text_tittle}>Racing</p>
                <div className={Card.star}>
                <p>4.5</p>
                          <img className={Card.images} src={vector} alt="" />
                          <img className={Card.images} src={vector} alt="" />
                          <img className={Card.images} src={vector} alt="" />
                          <img className={Card.images} src={vector} alt="" />
                          <img className={Card.images} src={vector2} alt="" />
                </div>
                <p className={Card.text}>
                Interactively synergize revolutionary viasustaina communities. Energistically foster distinctiveide resource maximizing.
                </p>
              </div>

             
                <a className={Card.download__btns} href="https://need-for-speed.ru.uptodown.com/windows/download">

            <button className={Card.download__btn}>
            Download Now
            </button>
          </a>
  
        </div>

       
    </div>
  )
}

export default CardTwo