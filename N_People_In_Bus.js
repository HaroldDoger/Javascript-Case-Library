var number = function (busStops) {
    let peopleIn = 0;
  let peopleOut = 0;
    for( let i = 0; i<busStops.length; i++){
      peopleIn += busStops[i][0];
      peopleOut += busStops[i][1];
    }
  return peopleIn - peopleOut;
}

//short hand solution
// var number = function (busStops) {
// let x = 0;
//     busStops.forEach(a => x = x + a[0] - a[1]);
//     return x
// }