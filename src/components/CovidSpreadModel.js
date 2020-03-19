import React from 'react';
import { seirModel } from '../model/SEIR';
import { normaliseToArray } from '../model/normalisation'
import {
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart, Label
} from 'recharts';
import { curveColors, curveFormatters } from '../model/data'

type CovidSpreadModelProps = {
  N: Number,
  incubationTime: Number,
  infectionTime: Number,
  contactRate: Number,
  probabilityOfTransmission: Number,
  isQuarantined: Boolean,
  quarantinePower: Number,
  curveList: Object
}


const t_max = 150;
const dt = .1;

export const CovidSpreadModel = (props: CovidSpreadModelProps) => {
  const { N, incubationTime, infectionTime, contactRate, probabilityOfTransmission, isQuarantined = false, quarantinePower, curveList } = props;
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

  const simulation = seirModel(initialValues, {alpha, beta, gamma, isQuarantined, quarantinePower}, t);
  const normalised = normaliseToArray(simulation, 1/dt, N);

  return (
    <AreaChart
        width={800}
        height={300}
        data={normalised}
        margin={{
          top: 5, right: 30, left: 20, bottom: 10,
        }}
      >
      <CartesianGrid strokeDasharray="3 3" />
        <XAxis name="LIL uZI" label={<span>Den</span>} interval={9} dataKey="T">
          <Label value="dní od začiatku" offset={-5} position={"bottom"}/>
        </XAxis>
        <YAxis />
        <Tooltip formatter={(value, id) =>`${curveFormatters[id](Math.round(value))}`}/>

        {Object.keys(curveList).map((curveId, id) => curveList[curveId] ? 
          <Area key={id} type="monotone" dataKey={curveId} stackId={1} fill={curveColors[curveId]} stroke={curveColors[curveId]} />
          : ""
        )}
      </AreaChart>
  )
} 