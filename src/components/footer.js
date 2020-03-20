import React from 'react'
import { Container, Row, Col } from 'reactstrap';


export const Footer = () => {
  return (
    <Container>
      <hr />
      <div className="footer default-text">
          Prípadné otázky alebo feedback radi privítame na nasledujúcich platformách:
          <div className="footer-contact">
            kristiancabala@gmail.com alebo <a href="https://www.facebook.com/kiko.cabala">Facebook</a> <br />
            richard.hamerlik@gmail.com alebo <a href="https://www.facebook.com/richard.hamerlik.7">Facebook</a>
          </div>
      </div> 
    </Container>
  )
}