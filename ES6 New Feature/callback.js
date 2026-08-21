function sum(a, b,) {
    let result = a+b;
    return result;
}

function sumWithMsg(clbk, msg){
    const result = clbk(20,30);
    const fResult = "Hi " + msg + " Your Score is" + " "+ result;
    console.log(fResult);
}

sumWithMsg(sum, "MR. Deepak");

