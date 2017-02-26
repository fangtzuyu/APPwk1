var outage =10;
let w =50;
//var w =45;
console.log(`outage = ${outage}`);
(()=>{
  outage =20;
  var height=170;
  var w =45;
  if(outage==20)height=180;
  console.log(`height = ${height}`);
  console.log(`weight = ${w}`);
})();
console.log(`outage = ${outage}`);
// console.log(`height = ${height}`);
console.log(`weight = ${w}`);
