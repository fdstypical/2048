// module add a adaptive screen ...
// screen width...
const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let adaptiveCellSize;

if(width >= 319) adaptiveCellSize = 60;
if(width >= 479) adaptiveCellSize = 100;
if(width >= 739) adaptiveCellSize = 165;

export default adaptiveCellSize;