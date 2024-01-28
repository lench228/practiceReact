import React from 'react';

import cl from './hero.module.css'
import Start from '../UI/buttons/start/Start';

const Hero = () => {
    return (
    <div className={cl.container}>

        <div className={cl.text__container}>
            <h1 className={cl.title}>
                Great<span className={cl.pink}> product</span> is <br/>
                <span className={cl.bold}> built by great</span><span className={cl.pink}> teams</span>
            </h1>   
            <p className={cl.description}>We help build and manage a team of world-class developers to bring your vision to life</p>   
            <Start/>       
        </div>
    </div> );
}
 

export default Hero;