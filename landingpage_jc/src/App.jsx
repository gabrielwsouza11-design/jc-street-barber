import { useState, useEffect } from 'react'
import { animate, motion } from 'framer-motion'
import './App.css'
import logojc from './assets/jclogo.png'
import fundo from './assets/fundo.jpg'
import fundo1 from './assets/fundo1.jpg'
import fundo2 from './assets/fundo2.jpg'
import barbeiro from './assets/navas.png'
import logo from './assets/logo.png'

import imagem1 from './assets/imagem1.jpg'
import imagem2 from './assets/imagem2.jpg'
import imagem3 from './assets/imagem3.jpg'

export default function App() {
  // const [count, setCount] = useState(0)
  const [current, setCurrent] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)


  const imagens = [
    imagem1,
    imagem2,
    imagem3
  ]

  useEffect(() => {

    function handleScroll() {

      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener('scroll', handleScroll)

  }, [])

  function nextSlide() {
    setCurrent((prev) =>
      prev === imagens.length - 1 ? 0 : prev + 1
    )
  }

  function prevSlide() {
    setCurrent((prev) =>
      prev === 0 ? imagens.length - 1 : prev - 1
    )
  }

  return (

    <div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

        <div
          className="menuButton"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <div className={`mobileMenu ${menuOpen ? 'active' : ''}`}>

          <a href="#inicio">Início</a>
          <a href="#">Sobre</a>
          <a href="#galeria">Galeria</a>
          <a href="#">Contato</a>
          <a href="#">Agendar horario</a>

        </div>

        <div className="logo">
          <img src={logojc} style={{width: 50, height: 50}}/>
        </div>

        <div className="links">

          <a href="#inicio" class='navLink'>Início</a>
          <a href="#" class='navLink'>Sobre</a>
          <a href="#galeria" class='navLink' >Galeria</a>
          <a href="#" class='navLink'>Contato</a>
          <a href="#" onClick={() => window.open('https://agendaservico.com/jcstreetbarber', '_blak')} class='navLink'>Agendar horario</a>

        </div>

      </nav>

      <section id="inicio" class="hero">

          <div class="background">
              <img src={fundo} style={{width: '100%', height: '100vh', objectFit: 'cover'}}/>

          </div>

          <div class="overlay"></div>

          <div class="content">
            
            <motion.div
              whileHover="hover"
              initial="initial"
              animate="animate"
              className="divFocus"
            >

              <motion.img
                src={logo}

                variants={{

                  initial: {
                    y: 200,
                    opacity: 0
                  },

                  animate: {
                    y: 0,
                    opacity: 1
                  },

                  hover: {
                    scale: 1.05,
                    rotate: -2,
                    y: -5
                  }

                }}

                transition={{
                  duration: 1
                }}

                style={{
                  width: '90%',
                  maxWidth: '500px',

                  filter: `
                    drop-shadow(0px 0px 10px rgba(0,0,0,0.6))
                    drop-shadow(0px 0px 30px rgba(221,209,196,0.2))
                  `
                }}
              />

              <motion.p variants={{hover: {y: -100}}} transition={{duration: 1}}>Estilo, presença e personalidade.</motion.p>

            </motion.div>

        </div>

      </section>

      <section id="galeria" class="hero">
        <div class="background">
          <img src={fundo1} style={{width: '100%', height: '100vh', objectFit: 'cover'}}/>
        </div>

        <div class="content">
            <motion.h1
            initial={{ y: 80, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: 'easeOut'}}
            viewport={{ amount: 0.5}}
          >
            GALERIA
          </motion.h1>
          <div class="carouselContainer">


            <button onClick={prevSlide} class="left">
              ‹
            </button>

            <div class="carouselTrack">

            {imagens.map((img, index) => {

              const isActive = current === index

              return (

                <motion.img
                  key={index}
                  src={img}

                  animate={{
                    scale: isActive ? 1 : 0.8,
                    opacity: isActive ? 1 : 0.5
                  }}

                  transition={{
                    duration: 0.5
                  }}

                  className={`
                    carouselCard
                    ${isActive ? 'active' : ''}
                  `}
                />

              )

            })}

            </div>

            <button onClick={nextSlide} className="right">
              ›
            </button>

          </div>

          <button onClick={() => window.open('https://www.instagram.com/jc_streetbarber?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}>CONFIRA NOSSO INSTAGRAM</button>
        </div>
      </section>

      <section class="hero">
        <div class="background">
          <img src={fundo2} style={{width: '100%', height: '100vh', objectFit: 'cover'}}/>
        </div>

        <div class="content extra">

          <motion.h1
            className="watermark"

            initial={{
              opacity: 0,
              scale: 0.8
            }}

            whileInView={{
              opacity: 0.08,
              scale: 1
            }}

            transition={{
              duration: 1.5
            }}
          >
            SINCE 2023
          </motion.h1>

          <motion.h1
            initial={{ y: 80, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: 'easeOut'}}
            viewport={{ amount: 0.5}}
          >
            SOBRE NÓS
          </motion.h1>

          <div class="sobrenosDiv">

            <motion.p initial={{scale: 0.7, opacity: 0, y: 100}} whileInView={{scale: 1, opacity: 1, y: 0}} transition={{ duration: 1.2, ease: 'easeOut'}} viewport={{amount: 0.5}}className="text-4xl md:text-7xl">
              A JC Street Barber nasceu para oferecer
              uma experiência premium, unindo tradição,
              modernidade e atendimento de qualidade em
              um ambiente pensado para quem valoriza
              aparência e autoestima.
            </motion.p>


            <div className="marquee">

              <div className="marqueeContent">

                <span>
                  JC STREET BARBER • ESTILO • PRESENÇA • PERSONALIDADE • JC STREET BARBER • ESTILO • PRESENÇA • PERSONALIDADE • 
                </span>

                <span>
                  JC STREET BARBER • ESTILO • PRESENÇA • PERSONALIDADE • JC STREET BARBER • ESTILO • PRESENÇA • PERSONALIDADE • 
                </span>

              </div>

            </div>
          </div>

        </div>

      </section>


    </div>
  )
}

