import React, { useMemo, useState, useEffect } from 'react';
import { seirModel } from '../model/SEIR';
import { normaliseToArray } from '../model/normalisation'
import {
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart, Label, ReferenceLine, Customized, ReferenceDot, ResponsiveContainer
} from 'recharts';
import { curveColors, curveFormatters, curveStackId, curveFills } from '../model/data';
import { CustomizedReferenceLineLabel } from './CustomizedReferenceLineLabel';
import { getRealData, parseRealData } from '../model/realData';
import Latex from 'react-latex-next';

type CovidSpreadModelProps = {
  N: Number,
  incubationTime: Number,
  infectionTime: Number,
  contactRate: Number,
  probabilityOfTransmission: Number,
  isQuarantined: Boolean,
  quarantinePower: Number,
  quarantineStart: Number,
  curveList: Object,
  initialCases: Number
}

const t_max = 200;
const dt = .1;

const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const CovidSpreadModel = (props: CovidSpreadModelProps) => {
  const [realWorldData, setRealWorldData] = useState([]);
  const { 
      N,
      incubationTime, 
      infectionTime, 
      contactRate, 
      probabilityOfTransmission, 
      isQuarantined = false, 
      quarantinePower, 
      curveList, 
      quarantineStart, 
      initialCases = 1
    } = props;
  let t = [];
  for (let i = 0; i < t_max; i += dt) t.push(i);

  const initialValues = {
    S0: 1 - initialCases/N,
    E0: initialCases/N,
    I0: 0,
    R0: 0,
    H0: 0
  }

  const alpha = 1/incubationTime;
  const beta = contactRate * probabilityOfTransmission;
  const gamma = 1/infectionTime;

  const simulation = seirModel(initialValues, {alpha, beta, gamma, isQuarantined, quarantinePower, quarantineStart}, t);
  const normalised = normaliseToArray(simulation, 1/dt, N);
  const r0 = (
      contactRate * probabilityOfTransmission * infectionTime * 
      (isQuarantined ? 
        (1 - Math.pow(quarantinePower, 2))
        : 1
        )
      )
      .toFixed(2);

  const [isCompact, setIsCompact] = useState(window.innerWidth < 800);
  useEffect(() => {
    const handleResize = () => setIsCompact(window.innerWidth < 800);

    window.addEventListener('resize', handleResize)
  })

  // useMemo(() => getRealData().then(data => {
  //   setRealWorldData(
  //     parseRealData(data)
  //   );
  // }), [])

  // const w = window.innerWidth > 

  

  return (
    <div class="chart-wrapper">
      <div class="left default-text">
        Pre čo najlepší zážitok odporúčame použiť počítač či tablet, nie mobil. 
      </div>
      <div class="r0 default-text">
        <Latex>$R_0$</Latex> = {r0} (základné reprodukčné číslo, ktoré určuje rýchlosť šírenia vírusu)
      </div>
      <ResponsiveContainer height={300} width={"100%"}> 
      <AreaChart
          height={300}
          data={normalised}
          margin={{
            top: 25, right: 20, left: 40, bottom: 10,
          }}
        >
        <CartesianGrid strokeDasharray="3" />
        <defs>
          <linearGradient id="R_gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={curveColors["R"]} stopOpacity={0.8}/>
            <stop offset="95%" stopColor={curveColors["R"]} stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="H_gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={curveColors["H"]} stopOpacity={0.8}/>
            <stop offset="95%" stopColor={curveColors["H"]} stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="S_gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={curveColors["S"]} stopOpacity={0.8}/>
            <stop offset="95%" stopColor={curveColors["S"]} stopOpacity={0}/>
          </linearGradient>
        </defs>

        {isQuarantined ? 
          <ReferenceLine x={quarantineStart} stroke={"#1a2538"} isFront={false} position={"top"} strokeWidth={.4}>
            <Label value={"Zavedenie karantény"} position={"top"} /> 
          </ReferenceLine>
          : ""
        }

        <XAxis name="LIL uZI" tickCount={10} label={<span>Den</span>} interval={isCompact ? 49 : 19} dataKey="T">
          <Label value="dní od začiatku" offset={-5} position={"bottom"}/>
        </XAxis>
        <YAxis tickFormatter={val => numberWithCommas(val)}/>
        {/* <YAxis scale="log" /> */}
        <Tooltip formatter={(value, id) =>`${curveFormatters[id](Math.round(value))}`}/>

        {realWorldData ? 
          realWorldData.map((datapoint, i) => <ReferenceDot key={i} r={1} x={datapoint.T} y={datapoint.confirmed} />)
          : ""
        }

        {Object.keys(curveList).map((curveId, id) => curveList[curveId] ? 
          <Area key={id} type="monotone" dataKey={curveId} stackId={curveStackId[curveId]} fill={curveFills[curveId] || curveColors[curveId]} stroke={curveColors[curveId]} />
          : ""
        )}
      </AreaChart>
      </ResponsiveContainer>
       
    </div>
   
  )
} 