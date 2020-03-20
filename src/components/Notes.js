import React, { useMemo, useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const abg = '$\\alpha, \\beta, \\gamma$';
const diffEq1 = `
  $$
  \\frac{dS}{dt}=-\\beta SI \\qquad
  \\frac{dE}{dt}={\\beta}SI-\\alpha{E} \\qquad
  
  `
const diffEq2 = `
  \\frac{dI}{dt}=\\alpha{E}-\\gamma{I} \\qquad
  \\frac{dR}{dt}=\\gamma{I}
  $$
  $$R_0=\\frac{\\beta}{\\gamma}$$
`

export const Notes = () => {
  const [isCompact, setIsCompact] = useState(window.innerWidth < 800);
  useEffect(() => {
    const handleResize = () => setIsCompact(window.innerWidth < 800);

    window.addEventListener('resize', handleResize)
  })

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
            <b> Predvolené hodnoty parametrov sme založili na viacerých štúdiách, na ktoré vás v prípade väčšieho záujme môžeme odkázať, no tak, aby čo najlepšie predstavovali momentálnu situáciu.</b> Taktiež však môžete ich hodnoty meniť podľa vašej predstavy a sledovať, ako naše správanie ovplyvňuje vývoj ochorenia. 
            <b> Zavedením karantény</b> (naľavo hore) môžete vidieť známy “flattening the curve” - oddiaľovanie náporu a získavanie času, o ktorý momentálne všektým krajinám ide. 
            <i> Model sme si prispôsobili pre lepšie objasnenie situácie, a tým sme trochu znížili presnosť. </i>
          </div>
          <div class="default-text note-block">
            Na modelovanie šírenia COVID-19 sme použili jednoduchý model používaný na infekčné choroby - <a target="_tab" href="https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SEIR_model"> 
            model SEIR</a>. (<Latex>$S$</Latex>-Susceptible, <Latex>$E$</Latex>-Exposed, <Latex>$I$</Latex>-Infected, <Latex>$R$</Latex>-Removed). Je to jednoduchý, idealizovaný model, ktorý rozdeľuje spoločnosť do skupín (priehradok) a počas priebehu choroby sa pacienti presúvajú jednotlivými skupinami. Jedným z predpokladov je, že už vyliečený človek ochorieť znova nemôže.
            Každá skupina je popísaná diferenciálnymi rovnicami. 
            Pohyb ľudí, predstavujúci progres ich choroby, je charakterizovaný prechodovými konštantami <Latex>{abg}</Latex>.
            <Latex> $\alpha$</Latex> závisí od inkubačnej doby, <Latex>$\beta$</Latex> od pomeru ľudského kontaktu a šance prenosu a <Latex>$\gamma$</Latex> od infekčného času. 
            Viac podrobností nájdete <a target="_tab" href="https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SEIR_model">tu</a> alebo v <a href="https://arxiv.org/pdf/1705.01079.pdf">jednom</a> z veľa vedeckých článkov na túto tému. 

          <div class="note-block">
            {isCompact ? <Latex>{`${diffEq1}$$$$${diffEq2}`}</Latex> : <Latex>{diffEq1 + diffEq2}</Latex>}
          </div>

          <div class="note-block">
           Základné reprodukčné číslo <Latex>$R_0$</Latex> pre predvolené hodnoty v našom modeli prepočítavame z pomeru ľudského kontaktu a šance prenosu choroby pre lepšiu ilustráciu významu sociálneho dištancovania tak, aby sedelo s momentálnymi odhadmi expertov. Nie je to bežná prax pri ochoreniach šíriacich sa kvapôčkovo, no pre naše účely nám to príde zaujímavé. 
          </div>

          <div class="note-block">
            <i>
              -pri zmene parametrov je dôležité dávať pozor aj na zmeny na ypsilonovej osi, ktorá sa automaticky prispôsobuje počtu jedincov <br />
              -počet hospitalizovaných je ilustračný, z dôvodu zlej predvídateľnosti tejto veličiny (použili sme 15% - údaj z Číny) a priemernej dĺžky hospitalizácie (ktorá momentálne činí 14 dní) <br />
              -z podobného dôvodu nejasnosti neuvádzame ani počet obetí 
            </i>
            </div>
          </div>
        </Row>
      </div>
    </Container>
  )
}
