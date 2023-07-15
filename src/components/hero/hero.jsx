import React from 'react'
import './hero.styles.scss'

const Hero = () => {
  return (
    <section className="hero is-large is-info hero-image">
      <div className="hero-body">
        <p className="hero-title">Variety Item reimagined for modern life.</p>
        <p className="subtitle">
          <div className="shop-now-btn">
            <button className="button is-black" id='shop-now'>SHOP MORE</button>
          </div>
        </p>
      </div>
    </section>
    
  )
}

export default Hero
