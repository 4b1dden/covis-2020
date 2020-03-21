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
            richard.hamerlik@gmail.com alebo <a href="https://www.facebook.com/richard.hamerlik.7">Facebook</a> <br />
            <a href="https://github.com/4b1dden/covis-2020">Source code</a>
          </div>
      </div> 
    </Container>
  )
}