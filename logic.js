var role = "x";
var was_clicked =[];
var someOneWin =false;
let state ={
    1:"a",
    2:"a",
    3:"a",
    4:"a",
    5:"a",
    6:"a",
    7:"a",
    8:"a",
    9:"a",
}
function clicked(n){
    if(was_clicked.includes(n) || someOneWin){
        return;
    }
    was_clicked.push(n);
    if(role == "x"){
        state[n]="x"
        setToX(n);
        role ="o";
        setToP2();
    }else {
        state[n]="o"
        setToO(n);
        role ="x";
        setToP1();
    }
    atWin(didWin(state))
}
function setToX(n){
    document.getElementById(n).setAttribute("src","imgs/x.jpg")
}
function setToO(n){
    document.getElementById(n).setAttribute("src","imgs/o.jpg")
}
function setToP1(){
    document.getElementById("msg").innerHTML = "Player one go"
}
function setToP2(){
    document.getElementById("msg").innerHTML = "Player two go"
}

function didWin(state){
    let s=state;
    let winModels=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    for(let i = 0;i<winModels.length;i++){
        let winModel = winModels[i];
        if(winModel.filter(n=>s[n]=="x").length == winModel.length){
            return "x"
        }
        if(winModel.filter(n=>s[n]=="o").length == winModel.length){
            return "o"
        }
    }
    if(Object.keys(s).filter(n=>s[n]=="x"|| s[n]=="o").length==9){
        return "t"
    }
}
function atWin(result){
    if(result == "x" || result == "o"){
        someOneWin =true;
    }
    if(result=="x"){
        document.getElementById("msg").innerHTML = "Player one Won !!"
    };
    if(result=="o"){
        document.getElementById("msg").innerHTML = "Player two Won !!"
    }
    if(result=="t"){
        document.getElementById("msg").innerHTML = "Tie ,Click refresh to play !!"
    }
}
//end of file