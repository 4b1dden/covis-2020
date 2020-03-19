import React, { useState } from 'react';

export const curveDescriptions = {
  S: <span>Susceptible - náchylná, ohrozená skupina obyvateľstva</span>,
  E: <span>Exposed - vystavený - vírus má v tele, ale je v inkubačnej dobe, nie je infekčný</span>,
  I: <span>Infected - chorí, infekční jedinci</span>,
  R: <span>Removed - skupina obyvateľstva, ktorá je z modelu vylúčená, či už v izolácii, vyliečení alebo mŕtvi)</span>,
  H: <span>Hospitalizovaní - infekční jedinci, ktorí boli hospitalizovaní</span>,
  FATAL: <span>FATAL </span>
}

export const curveColors = {
  S: "#f1f740",
  E: "#ffc663", 
  I: "rgb(240, 2, 127",
  R: "#63c3ff",

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