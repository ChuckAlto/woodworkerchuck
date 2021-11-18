
function woodNames(){
    
    let woodtype = prompt("What is your favorite type of wood?");

    console.log(woodtype);
    
    if (woodtype.toLowerCase() == 'walnut' || woodtype.toLowerCase() == 'cherry' || woodtype.toLowerCase() == 'pine' || woodtype.toLowerCase() == 'cedar' || woodtype.toLowerCase() == 'redwood' || woodtype.toLowerCase() == 'maple'){
        document.write (woodtype + ", That's a Fine Wood, Welcome! ")
    } else{document.write(woodtype + "? To each their own I guess. welcome anyway ")
    }
}

function yourName(){

    let user_name = prompt("What is your name?");
        document.write("Hi " + user_name + ", that's a fine name");
}

function wBench(){

    let bench = prompt ("Do You Like My Workbench?");
console.log(bench);

if (bench.toLowerCase() == "yes"){
document.write ("Hey, Thanks!")
} else {document.write ("oh.")
}

}

function wantLuck(){

    let luck = window.confirm("press OK for good luck")
let picurl = "dog.jpg"

if (luck == true){
    document.write('<img src="dog.jpg" width="500" height="500"')
}
}

