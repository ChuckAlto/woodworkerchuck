
function yourName(){

    let user_name = prompt("What is your name?");
        document.write("Hi " + user_name + ", that's a fine name");
}


function woodNames(){
    
    let woodtype = prompt("What is your favorite type of wood?");
    console.log(woodtype);
    while(woodtype !== "walnut" && woodtype !== "pine" && woodtype !== "cherry" && woodtype !== "maple" && woodtype !== "redwood" && woodtype !== "cedar"){
        woodtype = prompt("That is not a good wood, try again");
       console.log(woodtype);    
    }    
    if (woodtype.toLowerCase() == 'walnut' || woodtype.toLowerCase() == 'cherry' || woodtype.toLowerCase() == 'pine' || woodtype.toLowerCase() == 'cedar' || woodtype.toLowerCase() == 'redwood' || woodtype.toLowerCase() == 'maple'){
        document.write (woodtype + ", That's a Fine Wood, Welcome! ")
    }
} 
  


function wBench(){

    let bench = prompt ("Do You Like My Workbench?");
console.log(bench);

if (bench.toLowerCase() == "yes"){
document.write ("Hey, Thanks!")
} else {document.write ("oh. Sorry it isn't up to your lofty standards.")
}

}

function wantLuck(){

    let luck = window.confirm("press OK for dog")
let picurl = "dog.jpg"

if (luck == true){
    document.write('<img src="dog.jpg" width="500" height="500"')
}
}

function howMany(){
    let howMuch = prompt("How Much Wood Could A Woodchuck Chuck?");
    while(howMuch >= 10){
        howMuch = prompt("That is too much wood, try again")
    }if (howMuch <1){
        howMuch = prompt("not nearly enough wood, try again")
    }else if (howMuch == correctA){
        document.write("hello world")
} 
}
                      
                      
                    