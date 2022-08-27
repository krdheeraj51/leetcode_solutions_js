let s='hello';
let countStringChar=(s)=>{
    let obj={};
    let count=1;
    for(let i=0;i<s.length;i++){
            // obj[s[i]]= obj[s[i]]+1 || 1;
            if(obj[s[i]]){
                obj[s[i]]=obj[s[i]]+1
            }else{
                obj[s[i]]=1;
            }
    }
//     var count = {};
//   s.split('').forEach(function(s) {
//      count[s] ? count[s]++ : count[s] = 1;
//   });

  console.log("count :",obj)
//   return count;
       

   
}

countStringChar(s)