// https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SEIR_model

const getLast = (array) => array[array.length - 1];

type InitialValues = {
  S0: Number,
  E0: Number,
  I0: Number,
  R0: Number,
  H0: Number,
}

type Params = {
  alpha: Number,
  beta: Number,
  gamma: Number,
  isQuarantined: Boolean,
  quarantinePower: Number,
  hospitalizationRate: Number,
  quarantineStart: Number
}

export const seirModel = (initialValues: InitialValues, params: Params, tList) => {
  const { S0, E0, I0, R0, H0, MILD0 = 0, MODERATE0 = 0, FATAL0 = 0} = initialValues;
  let [S, E, I, R, H, MILD, MODERATE, FATAL] = [[S0], [E0], [I0], [R0], [H0], [0], [0], [0]];
  let { alpha, beta, gamma, isQuarantined, quarantinePower = 1, hospitalizationRate = 0.3, fatalityRate = 0.037, hospitalizationTime = 10, quarantineStart } = params;
  const dt = tList[1] - tList[0];
  let deltaBeta = false;

  tList.forEach((currentT, i) => {
    if (currentT >= quarantineStart) {
      beta = isQuarantined && !deltaBeta ? beta * quarantinePower : beta;
      deltaBeta = true;
    }

    let nextS = getLast(S) - (beta * getLast(S) * getLast(I))*dt;
    let nextE = getLast(E) + (beta * getLast(S) * getLast(I) - alpha *getLast(E))*dt;
    let nextI = getLast(I) + (alpha * getLast(E) - gamma * getLast(I))*dt;
    let nextR = getLast(R) + (gamma * getLast(I))*dt;
    let nextH = getLast(H) + (hospitalizationRate * getLast(I) - 1/hospitalizationTime * getLast(H))*dt;
    let nextFATAL = getLast(FATAL) + getLast(H) * (fatalityRate * dt) * dt;

    S.push(nextS);
    E.push(nextE);
    I.push(nextI);
    R.push(nextR);
    H.push(nextH);
    FATAL.push(nextFATAL);
  });

  return {
    S, E, I, R, H, FATAL
  }
}