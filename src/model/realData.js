export const getRealData = async () => new Promise(
  (resolve, reject) => 
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => resolve(data))
  )


export const parseRealData = (data) => {
  let t = []
  const countries = Object.keys(data);

  let t_max = data[countries[0]].length || 0;
  for (let i = 0; i < t_max; i++) {
    let [confirmed, recovered, deaths] = [0, 0, 0];
    const country = "Slovakia";
    
    // countries.map(country => {
      confirmed += data[country][i].confirmed;
      recovered += data[country][i].recovered;
      deaths += data[country][i].deaths;
    // })

    t.push({
      confirmed, recovered, deaths, 
      T: i
    })
  }

  return t;
}