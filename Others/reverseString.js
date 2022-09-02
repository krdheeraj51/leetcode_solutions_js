let input="My name is Dheeraj";
//output: "Dheeraj is my name";

let reverseMessage=()=>{
    console.log(input.split(' ').length);
    let arr=[];
    for(let i=input.split(' ').length;i >=0;i--){
       arr.push(input.split(' ')[i])
    }
    console.log("array element ::",arr.join(' '));
}

reverseMessage()