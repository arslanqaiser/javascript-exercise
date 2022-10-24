//arrays
const arr=[34,22,4,4,322,4];
const redArr=arr.reduce((acc,sum)=>acc+sum,0);
const filterarr=arr.filter(f=>f>23);
const maparr=arr.map(m=>m*34);
const sortarr=arr.sort((a,v)=>a-v);
const fillarr=arr.slice().fill('');
const slicearr=arr.slice(0,3)
const splicearr=arr.splice(3,2,'x','x');
const findarr=arr.find(f=>f>=100);
const findIndexarr=arr.findIndex(f=>f>100);
const reversearr=arr.reverse();
const pusharr=arr.push(34);
const poparr=arr.pop();
const shiftarr=arr.shift();
const unshiftarr=arr.unshift();
const mergearr=[23,[234,22,2],,4,[[244]]];
console.log(maparr)
console.log(filterarr)
console.log(redArr);
console.log(sortarr);
console.log(fillarr);
console.log(slicearr);
console.log(splicearr);
console.log(arr);
console.log(findarr);
console.log(findIndexarr);
console.log(reversearr);
console.log(pusharr);
console.log(pusharr);
console.log(poparr);
console.log(shiftarr);
console.log(unshiftarr);
console.log(mergearr.flat(2))
arr.forEach((n)=>{
    console.log(n)
})