import React from 'react';
import { seirModel } from '../model/SEIR';
import { normaliseToArray } from '../model/normalisation'
import {
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart, Label, ReferenceLine, Customized
} from 'recharts';
import { curveColors, curveFormatters, curveStackId, curveFills } from '../model/data'
import { CustomizedReferenceLineLabel } from './CustomizedReferenceLineLabel'

type CovidSpreadModelProps = {
  N: Number,
  incubationTime: Number,
  infectionTime: Number,
  contactRate: Number,
  probabilityOfTransmission: Number,
  isQuarantined: Boolean,
  quarantinePower: Number,
  quarantineStart: Number,
  curveList: Object
}

const t_max = 200;
const dt = .1;

const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const CovidSpreadModel = (props: CovidSpreadModelProps) => {
  const { N, incubationTime, infectionTime, contactRate, probabilityOfTransmission, isQuarantined = false, quarantinePower, curveList, quarantineStart } = props;
  let t = [];
  for (let i = 0; i < t_max; i += dt) t.push(i);

  const initialValues = {
    S0: 1 - 1/N,
    E0: 1/N,
    I0: 0,
    R0: 0,
    H0: 0
  }

  const alpha = 1/incubationTime;
  const beta = contactRate * probabilityOfTransmission;
  const gamma = 1/infectionTime;

  const simulation = seirModel(initialValues, {alpha, beta, gamma, isQuarantined, quarantinePower, quarantineStart}, t);
  const normalised = normaliseToArray(simulation, 1/dt, N);

  return (
    <div class="chart-wrapper">
        <AreaChart
          width={800}
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

        <XAxis name="LIL uZI" label={<span>Den</span>} interval={9} dataKey="T">
          <Label value="dní od začiatku" offset={-5} position={"bottom"}/>
        </XAxis>
        <YAxis tickFormatter={val => numberWithCommas(val)}/>
        {/* <YAxis scale="log" /> */}
        <Tooltip formatter={(value, id) =>`${curveFormatters[id](Math.round(value))}`}/>

        {Object.keys(curveList).map((curveId, id) => curveList[curveId] ? 
          <Area key={id} type="monotone" dataKey={curveId} stackId={curveStackId[curveId]} fill={curveFills[curveId] || curveColors[curveId]} stroke={curveColors[curveId]} />
          : ""
        )}
      </AreaChart>
    </div>
   
  )
} 