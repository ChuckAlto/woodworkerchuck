
function yourName(){

    let user_name = prompt("What is your name?");
        document.write("Hi " + user_name + ", that's a fine name");
}


function woodNames(){
    
    let woodtype = prompt("What is your favorite type of wood?");
    console.log(woodtype);
    while(woodtype.toLowerCase() !== "walnut" && woodtype.toLowerCase() !== "pine" && woodtype.toLowerCase() !== "cherry" && woodtype.toLowerCase() !== "maple" && woodtype.toLowerCase() !== "redwood" && woodtype.toLowerCase() !== "cedar"){
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
} else {document.write ("oh. Sorry it isn't up to your lofty standards. change")
}

}

function wantLuck(){

    let luck = window.confirm("press OK for dog")
let picurl = "pictures/dog.jpg"

if (luck == true){
    document.write('<img src="pictures/dog.jpg" width="500" height="500"')
}
}

function howMany(){
    let howMuch = prompt('How much wood could a woodchuck chuck?');
    let url = "pictures/woodpile.jpg";
    let i = 0;
        do {
            i += 1;
            document.write('<img src="' + url + '" width="150" height="150">');
        } while (i < howMuch);
    }
    
      // function anotherP(){
    //      let anotherP = prompt 
     // for(let 9 = 0; i<anotherp; i++)
     // let variable a equal "welcom john";

    
   //     }                
                      
                    