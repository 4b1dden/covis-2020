import React, { useState, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CovidSpreadModel } from './components/CovidSpreadModel';
import { SimpleHorizontalSlider } from './components/SimpleHorizontalSlider';
import { curveDescriptions, curveColors } from './model/data';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import 'bootstrap/dist/css/bootstrap.css';

const defaultPopulationSize = 50;
const defaultIncubationTime = 5.1;
const defaultInfectionTime = 2.38;
const defaultContactRate = 15;
const defaultProbabilityOfTransmission = 1/15;
const defaultQuarantinePower = .8;
const curveSelection = ["S", "E", "I", "R", "H"];
const defaultQuarantineStart = 20;

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
  const [curves, setCurves] = useState({S: false, E: true, I: true, R: true})
  const onCurveSelect = (target) => setCurves({...curves, [target.name]: target.checked})

  const [populationSize, setPopulationSize] = useState(logslider(defaultPopulationSize));
  const [populationSizeSlider, setPopulationSizeSlider] = useState(defaultPopulationSize)
  const [incubationTime, setIncubationTime] = useState(defaultIncubationTime);
  const [infectionTime, setInfectionTime] = useState(defaultInfectionTime);
  const [contactRate, setContactRate] = useState(defaultContactRate);
  const [quarantinePower, setQuarantinePower] = useState(defaultQuarantinePower);
  const [quarantineStart, setQuarantineStart] = useState(defaultQuarantineStart);
  const [probabilityOfTransmission, setProbabilityOfTransmission] = useState(defaultProbabilityOfTransmission);
  const [quarantine, setQuarantine] = useState(false);

  return (
    <Container className="containerStrapper"> 
      <Row>
        <span className="calculator-title">Pandemická kalkulačka</span>
      </Row>
      <Row>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <div className="curve-selection-wrapper">
            {curveSelection.map(curveId => <div>
              <Checkbox className={`checkbox-${curveId}`} name={curveId} checked={curves[curveId]} onChange={event => onCurveSelect(event.target)} /> 
              <span className="default-text"> {curveDescriptions[curveId]}</span>
            </div>)}
          </div>
          <Row>
          <div className="quarantine-wrapper">
            <div className="quarantine-toggle">
              <Checkbox checked={quarantine} onChange={event => setQuarantine(event.target.checked)} /> <span className="default-text">Karanténa?</span>
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
            Veľkosť sociálnej skupiny, v rámci ktorej modelujeme šírenie choroby. Väčšinou máme na mysli nejakú krajinu, no samotná veľkosť skupiny má však minimálny vplyv na vývin situácie v nej. 
          </SimpleHorizontalSlider>
          <SimpleHorizontalSlider {...defaultSliderProps} title={"Infekčný čas"} value={incubationTime} valueFormatter={val => `${val} dní`} setValue={setIncubationTime} max={8} step={0.01}>
            Charakterizuje prechod medzi chorými v inkubačnej dobe a chorými-infekčnými (štádium E -> I).
          </SimpleHorizontalSlider>
          <SimpleHorizontalSlider valueFormatter={val => `${val} dní`} title={"Inkubačný čas"} value={infectionTime} setValue={setInfectionTime} min={0} max={5} step={0.1}>
            Obdobie od vstupu nákazy do organizmu po vypuknutie choroby. Jediný parameter, ktorý je čisto biologický a nevieme ho ovplyvniť. Vychádzame z poslednej 
            <a target="_tab" href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(20)30074-7/fulltext"> dostupnej štúdie</a>.
          </SimpleHorizontalSlider>
          <SimpleHorizontalSlider {...defaultSliderProps} title={"Pomer ľudského kontaktu"} value={contactRate} setValue={setContactRate} max={20}>
            Charakterizuje prechod medzi ohrozenou skupinou obyvateľstva a chorými v inkubačnej dobe - S -> E.
          </SimpleHorizontalSlider>
          <SimpleHorizontalSlider {...defaultSliderProps} title={"Šanca prenosu choroby"} value={probabilityOfTransmission} setValue={setProbabilityOfTransmission} max={1} step={0.01}>
            proste Šanca prenosu choroby brashko nechapes co si jak
          </SimpleHorizontalSlider>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
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
          />
        </Col>
      </Row>
    </Container>
  )
}