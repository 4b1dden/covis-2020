import React, { useState, Fragment, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CovidSpreadModel } from './components/CovidSpreadModel';
import { SimpleHorizontalSlider } from './components/SimpleHorizontalSlider';
import { curveDescriptions, curveColors } from './model/data';
import { Notes } from './components/Notes'
import { Footer } from './components/footer.js'
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Latex from 'react-latex-next';

const defaultPopulationSize = 69; // nice
const defaultIncubationTime = 5.1;
const defaultInfectionTime = 2.38;
const defaultContactRate = 20;
const defaultProbabilityOfTransmission = 1/18;
const defaultQuarantinePower = .5;
const curveSelection = ["S", "E", "I", "R", "H"];
const defaultQuarantineStart = 20;
const defaultInitialCases = 1;

const defaultSliderProps = {
  min: 0,
  step: 0.1
}

const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const logslider = position => {
  var minp = 0;
  var maxp = 100;
  var minv = Math.log(10000);
  var maxv = Math.log(10*10e6);

  var scale = (maxv-minv) / (maxp-minp);

  return Math.exp(minv + scale*(position-minp));
}

export const Strapper = () => {
  const [curves, setCurves] = useState({S: true, E: true, I: true, R: true})
  const onCurveSelect = (target) => setCurves({...curves, [target.name]: target.checked})

  const [populationSize, setPopulationSize] = useState(logslider(defaultPopulationSize));
  const [initialCases, setInitialCases] = useState(defaultInitialCases);
  const [populationSizeSlider, setPopulationSizeSlider] = useState(defaultPopulationSize)
  const [incubationTime, setIncubationTime] = useState(defaultIncubationTime);
  const [infectionTime, setInfectionTime] = useState(defaultInfectionTime);
  const [contactRate, setContactRate] = useState(defaultContactRate);
  const [quarantinePower, setQuarantinePower] = useState(defaultQuarantinePower);
  const [quarantineStart, setQuarantineStart] = useState(defaultQuarantineStart);
  const [probabilityOfTransmission, setProbabilityOfTransmission] = useState(defaultProbabilityOfTransmission);
  const [quarantine, setQuarantine] = useState(false);

  // todo: create useIsCompact
  const [isCompact, setIsCompact] = useState(window.innerWidth < 800);
  useEffect(() => {
    const handleResize = () => setIsCompact(window.innerWidth < 800);

    window.addEventListener('resize', handleResize)
  })

  const layoutGraph = hasNotes => (
    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
      <CovidSpreadModel 
        N={populationSize}
        incubationTime={incubationTime}
        infectionTime={infectionTime}
        contactRate={contactRate}
        quarantinePower={quarantinePower}
        isQuarantined={quarantine}
        quarantineStart={quarantineStart}
        probabilityOfTransmission={probabilityOfTransmission}
        curveList={curves}
        initialCases={initialCases}
      />
      {hasNotes ? <Notes /> : ""}
    </Col>
  )

  const layoutSliders = (
      <Col xs={12} sm={12} md={4} lg={4} xl={4}>
      <div className="curve-selection-wrapper">
        {curveSelection.map(curveId => <div>
          <Checkbox className={`checkbox-${curveId}`} name={curveId} checked={curves[curveId]} onChange={event => onCurveSelect(event.target)} /> 
          <span className="default-text"> {curveDescriptions[curveId]}</span>
        </div>)}
      </div>
      <Row>
      <div className="quarantine-wrapper">
        <div className="quarantine-toggle">
          <Checkbox checked={quarantine} onChange={event => setQuarantine(event.target.checked)} /> <span className="bold default-text">Karanténa</span>
        </div>
      </div>
      </Row>
      {quarantine ? 
        <Fragment>
            <SimpleHorizontalSlider title={"Začiatok karantény"} value={quarantineStart} setValue={setQuarantineStart} min={0} max={200} step={1}>
              Deň, v ktorom bola zavedená karanténa.
            </SimpleHorizontalSlider>
            <SimpleHorizontalSlider title={"Sila karantény"} value={quarantinePower} setValue={setQuarantinePower} min={0} max={1} step={0.01}>
              Je to jednotka, ktorú zavádzame pre ilustráciu efektu, ktorý má sociálne dištancovanie na šírenie choroby. Napríklad hodnota 0.8 teda predstavuje 80% zníženie blízkych kontaktov a infekčnej doby jedincov.
            </SimpleHorizontalSlider>
        </Fragment>
        : ""
      }
      <SimpleHorizontalSlider title={"Veľkosť populácie"} valueFormatter={val => `${numberWithCommas(Math.round(val))} ľudí`} showValue={populationSize} value={populationSizeSlider} setValue={(val) => {
        setPopulationSizeSlider(val);
        setPopulationSize(logslider(populationSizeSlider))
      }} min={0} max={100}>
        Veľkosť sociálnej skupiny, v rámci ktorej modelujeme šírenie choroby.
      </SimpleHorizontalSlider>
      <SimpleHorizontalSlider {...defaultSliderProps} title={"Infekčný čas"} value={infectionTime} valueFormatter={val => `${val} dní`} setValue={setInfectionTime} max={8} step={0.01}>
        Doba, počas ktorej jedinec potenciálne šíri ochorenie. Priemerný čas od vypuknutia choroby po izoláciu jedinca (štádium I -> R).
      </SimpleHorizontalSlider>
      <SimpleHorizontalSlider valueFormatter={val => `${val} dní`} title={"Inkubačná doba"} value={incubationTime} setValue={setIncubationTime} min={0} max={10} step={0.1}>
        Obdobie od vstupu nákazy do organizmu po vypuknutie choroby. Jediný parameter, ktorý je čisto biologický a nevieme ho ovplyvniť. Vychádzame z 
        <a target="_tab" href="https://annals.org/aim/fullarticle/2762808/incubation-period-coronavirus-disease-2019-covid-19-from-publicly-reported"> poslednej dostupnej štúdie.</a> 
      </SimpleHorizontalSlider>
      <SimpleHorizontalSlider {...defaultSliderProps} valueFormatter={val => `${val} blízkych kontaktov`} title={"Pomer ľudského kontaktu"} value={contactRate} min={5} setValue={setContactRate} max={25}>
        Je to priemerný počet 
        <a target="_tab" 
        href="https://www.fhi.no/en/op/novel-coronavirus-facts-advice/advice-to-health-personnel/definitions-of-probable-and-confirmed-cases-of-coronavirus-covid-19-and-con/" 
        > blízkych kontaktov </a>, ktoré majú jedinci v populácii. Ťažko opísateľná veličina pri chorobách širacich sa kvapôčkami, ale zavádzame ju pre ilustráciu.
      </SimpleHorizontalSlider>
      <SimpleHorizontalSlider valueFormatter={val => `${((val.toFixed(4) * 100)).toString().substr(0, 5)}%`}  {...defaultSliderProps} title={"Šanca prenosu choroby"} value={probabilityOfTransmission} setValue={setProbabilityOfTransmission} max={1} step={0.0001}>
        Šanca prenosu choroby pri blízkom kontakte medzi ohrozeným a infikovaným.
      </SimpleHorizontalSlider>
      <SimpleHorizontalSlider {...defaultSliderProps} title={"Začiatočný počet nakazených"} value={initialCases} setValue={setInitialCases} min={1} max={100} step={1}>
        Počet nakazených v dni začiatku simulácie.
      </SimpleHorizontalSlider>
    </Col>
    )

  return (
    <Container className="containerStrapper"> 
      <Row>
        <span className="calculator-title">Pandemická kalkulačka</span>
      </Row>
      <Row>
        {isCompact ? 
          <Fragment>
            {layoutGraph(false)}
            <div style={{marginTop: '6rem'}}>

            {layoutSliders}
            </div>
            <Col><Notes /></Col>  </Fragment>
          :
          <Fragment>{layoutSliders} {layoutGraph(true)} </Fragment>
        }
      </Row>
        <Footer />
    </Container>
  )
}