// function sum(a, b) {
//     let result = a+b;
//     return result;
// }

// function sumWithMsg(clbk, msg){
//     const result = clbk(20,30);
//     const fResult = "Hi " + msg + " Your Score is" + " "+ result;
//     console.log(fResult);
// }

// const id = "MR. Deepak";
// const password = "1234";

function checkUser(id, password){
    if(id === "MR. Deepak" && password === "1234"){
        return true;
    }
    return false;
}


function verify(clbk)
{
    const result = clbk("MR. Deepak", "1234");
    if(result){
        console.log("User Verified");
        // document.write("User Verified");
    }
    else
    {
        console.log("User Not Verified");
        // document.write("User Not Verified");
    }
}

verify(checkUser);
    



