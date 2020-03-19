import React, { useState } from 'react';

export const curveColors = {
  S: "#239e81",
  E: "#ffc663", 
  I: "rgb(240, 2, 127)",
  R: "#63c3ff",
  H: "#8ab5ff"
}

export const curveDescriptions = {
  S: <span>Susceptible - <span style={{color: curveColors["S"]}} className="highlight text-S">náchylná</span>, ohrozená skupina obyvateľstva</span>,
  E: <span>Exposed - <span style={{color: curveColors["E"]}} className="highlight text-E">vystavení</span> - vírus majú v tele, ale sú v inkubačnej dobe a neprejavujú symptómy</span>,
  I: <span>Infected - <span style={{color: curveColors["I"]}} className="highlight text-I">chorí</span>, infekční jedinci</span>,
  R: <span>Removed - skupina obyvateľstva, ktorá je z modelu <span style={{color: curveColors["R"]}} className="highlight text-R">vylúčená </span>, či už v izolácii, vyliečení alebo mŕtvi</span>,
  H: <span>Hospitalizovaní - infekční jedinci, ktorí boli <span style={{color: curveColors["H"]}} className="highlight text-H">hospitalizovaní</span></span>,
  FATAL: <span>FATAL </span>
}


export const curveFills = {
  R: "url(#R_gradient)",
  H: "url(#H_gradient)",
  S: "url(#S_gradient)"
}

export const curveFormatters = {
  T: (s) => `deň ${s}`,
  S: (s) => `${s} náchylných`,
  E: (s) => `${s} vystavených`,
  I: (s) => `${s} chorých`,
  R: (s) => `${s} vylúčených`,
  H: (s) => `${s} hospitalizovaných`,
  FATAL: (s) => `${s} mŕtvych`,
}

export const curveStackId = {
  S: 1,
  E: 3,
  I: 4,
  R: 5,
  H: 2,
}