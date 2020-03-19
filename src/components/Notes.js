import React, { useMemo, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const abg = '$\\alpha, \\beta, \\gamma$';
const diffEq = `
  $$
  \\frac{dS}{dt}=-\\beta SI \\qquad
  \\frac{dE}{dt}={\\beta}SI-\\alpha{E} \\qquad
  \\frac{dI}{dt}=\\alpha{E}-\\gamma{I} \\qquad
  \\frac{dR}{dt}=\\gamma{I}
  $$
  $$R_0=\\frac{\\beta}{\\gamma}$$
`

export const Notes = () => {
  return (
    <Container>
      <div className="notes-wrapper">
        <Row>
          <div className="notes-title">
            Poznámky
          </div>
        </Row>
        <Row>
          <div class="default-text note-block">
            Vytvorili sme túto kalkulačku s cieľom lepšie ilustrovať momentálnu situáciu a dôležitosť opatrení, ktoré sú momentálne takmer na celom svete. 
            Účelom nášho modelu nie je čo najpresnejšie predpovedať budúcnosť, ale snaha priblížiť matematické modelovanie širšej verejnosti a poskytnúť jednoduchú vizualizáciu predpovedí.
            Môžete si vyskúšať nastaviť si parametre podľa vašej predstavy a sledovať, ako naše správanie ovplyvňuje vývoj ochorenia. 
            Taktiež zavedením karantény môžete vidieť známy “flattening the curve” - oddiaľovanie náporu a získavanie času, o ktorý momentálne všektým krajinám ide. 
            <i> Model sme si prispôsobili pre lepšie objasnenie situácie, a tým sme trochu znížili presnosť. </i>
          </div>
          <div class="default-text note-block">
            Na modelovanie šírenia 2019-nCoV sme použili jednoduchý model používaný na infekčné choroby - <a target="_tab" href="https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SEIR_model"> 
            model SEIR.</a> 
            {/* (Susceptible - náchylná, ohrozená skupina obyvateľstva, Exposed - vírus má v tele, ale je v inkubačnej dobe, nie je infekčný, Infected - chorí, 
            infekční jedinci, Removed - skupina obyvateľstva, ktorá je z modelu vylúčená, či už v izolácii, vyliečení alebo mŕtvi).  */}

            Je to jednoduchý, idealizovaný model, ktorý rozdeľuje spoločnosť do skupín (priehradok) a počas priebehu choroby sa pacienti presúvajú jednotlivými skupinami. Jedným z predpokladov je, že už vyliečený človek ochorieť znova nemôže.
            Každá skupina je popísaná diferenciálnymi rovnicami. 
            Pohyb ľudí, predstavujúci progres ich choroby, je charakterizovaný prechodovými konštantami <Latex>{abg}</Latex>.
            <Latex> $\alpha$</Latex> závisí od inkubačnej doby, <Latex>$\beta$</Latex> od pomeru ľudského kontaktu a šance prenosu a <Latex>$\gamma$</Latex> od infekčného času. 
            Viac podrobností nájdete
            <a target="_tab" href="https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SEIR_model"> tu </a>
             alebo v  
             <a href="https://s3.amazonaws.com/academia.edu.documents/3254012/seirs_camq.pdf?response-content-disposition=inline%3B%20filename%3DGlobal_Stability_for_the_SEIR_Model_In_E.pdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWOWYYGZ2Y53UL3A%2F20200319%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200319T173410Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=556b99940e11ed47a35d23b3999da6ef2294638a1da49ddd91f1f8a0e58456f4"> jednom </a> z veľa vedeckých článkov na túto tému. 

          <div class="note-block">
            <Latex>
              {diffEq}
            </Latex>
          </div>
          </div>
        </Row>
      </div>
    </Container>
  )
}
