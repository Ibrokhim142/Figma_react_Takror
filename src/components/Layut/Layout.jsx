import React from 'react'
import g from  './Layout.module.css'
import image from '..//../assets/img/robo.png'
import vector from '..//../assets/img/Vector.png'
import vector2 from '..//../assets/img/Vector2.png'
import images from '..//../assets/img/gonka.png'
import hunter from '..//../assets/img/hunter2.png'
import stalker from '..//../assets/img/stalker.png'
import gonka from '..//../assets/img/gonka2.png'
import roboto from '../../assets/img/roboto.png'
import warior from '../../assets/img/warior2.png'
const Layout = () => {
  return (
    <div className={g.tittle}>
            <h3>New Released Games</h3>
            <div className={g.tittle_cards}>
                <div className={g.img}>
                    <img src={image} alt="" />
                    <div className={g.img_tittle}>
                        <h4>
                        Ghost of Tsushima
                        </h4>
                        <p>war Battle</p>
                        <div className={g.tittle_card}>
                            <p>4.5</p>
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector2} alt="" />
                        </div>
                    </div>
                </div>
                <div className={g.img}>
                    <img src={images} alt="" />
                    <div className={g.img_tittle}>
                        <h4>
                        Need for Speed                        </h4>
                        <p>Racing</p>
                        <div className={g.tittle_card}>
                            <p>4.5</p>
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector2} alt="" />
                        </div>
                    </div>
                </div>
                <div className={g.img}>
                    <img src={hunter} alt="" />
                    <div className={g.img_tittle}>
                        <h4>
                        The Witcher Hunt
                        </h4>
                        <p>war Battle</p>
                        <div className={g.tittle_card}>
                            <p>4.5</p>
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector2} alt="" />
                        </div>
                    </div>
                </div>
                <div className={g.img}>
                    <img src={stalker} alt="" />
                    <div className={g.img_tittle}>
                        <h4>
                        Ghost of Tsushima
                        </h4>
                        <p>war Battle</p>
                        <div className={g.tittle_card}>
                            <p>4.5</p>
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector2} alt="" />
                        </div>
                    </div>
                </div>
                <div className={g.img}>
                    <img src={gonka} alt="" />
                    <div className={g.img_tittle}>
                        <h4>
                        Need for Speed                        </h4>
                        <p>Racing</p>
                        <div className={g.tittle_card}>
                            <p>4.5</p>
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector2} alt="" />
                        </div>
                    </div>
                </div>
                <div className={g.img}>
                    <img src={image} alt="" />
                    <div className={g.img_tittle}>
                        <h4>
                        Ghost of Tsushima
                        </h4>
                        <p>war Battle</p>
                        <div className={g.tittle_card}>
                            <p>4.5</p>
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector2} alt="" />
                        </div>
                    </div>
                </div>
                <div className={g.img}>
                    <img src={roboto} alt="" />
                    <div className={g.img_tittle}>
                        <h4>
                        Ghost of Tsushima
                        </h4>
                        <p>war Battle</p>
                        <div className={g.tittle_card}>
                            <p>4.5</p>
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector2} alt="" />
                        </div>
                    </div>
                </div>
                <div className={g.img}>
                    <img src={warior} alt="" />
                    <div className={g.img_tittle}>
                        <h4>
                        Ghost of Tsushima
                        </h4>
                        <p>war Battle</p>
                        <div className={g.tittle_card}>
                            <p>4.5</p>
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector} alt="" />
                         <img className={g.images} src={vector2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Layout