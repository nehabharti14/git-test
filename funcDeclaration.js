function temperature(f){
    let temp=(5/6)*(f-32);
    return temp;    
}
temp1=temperature(77);
console.log("this is today's temperature = "+temp1);



console.log("*********************OR IN OTHERWAY****************");
function today(f){
    tmprtr=(5/6)*(f-32);
    return tmprtr;
}
let result= "today's temperature is ="+ today(85,69,76)+  " Centigrate";
console.log(result);
