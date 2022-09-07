
let getMaximuApparance =(arra)=>{
    let obj={};
    for(let i=0;i<arra.length;i++){
        obj[`elem${arra[i]}`] =obj[`elem${arra[i]}`] +1 || 1
    }
    let getMaximumAppear=Math.max(...Object.values(obj));
    for(let x in obj){
    if(obj[x]===getMaximumAppear)
        return parseInt(x.split('elem')[1]);
    }
}

module.exports={
    getMaximuApparance
}
