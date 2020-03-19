export const normaliseToArray = (simulation: Object, rate: Number, N: number) => {
  let data = [];
  const keys = Object.keys(simulation);

  // assuming same length of data
  for(let i = 0; i < simulation[keys[0]].length; i++) {
    if (i % rate === 0) {
      let obj = {
        T: i / rate
      }
      
      keys.map(key => obj[key] = [])
      keys.map(key => obj[key].push(
        simulation[key][i] * N
      ))
      data.push(obj)
    }
  }

  return data
}