function miniMaxSum(arr) {
    // Write your code here
    let maxValue=Math.max(...arr);
    let minValue=Math.min(...arr);
    let maxSumValue=0,minSumValue=0;
    for(let i=0;i<arr.length;i++){
        if(minValue !==maxValue){
        maxSumValue=maxSumValue+ (arr[i]===minValue ? 0 : arr[i]);
        minSumValue=minSumValue+ (arr[i]===maxValue ? 0 :arr[i]);
        }else{
            console.log("control goes to here ...")
            if(i<arr.length-1){
                maxSumValue=maxSumValue+ arr[i];
                minSumValue=minSumValue+ arr[i];
            }
        
        }
        

}
console.log("maxSumValue ::",maxSumValue);
console.log("minSumValue ::",minSumValue)
}

console.log("miniMaxSum(arr) ::",miniMaxSum([5,5, 5, 5, 5]))