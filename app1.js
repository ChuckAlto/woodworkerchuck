
function woodNames(){
    
    let woodtype = prompt("What is your favorite type of wood?");

    console.log(woodtype);
    
    if (woodtype.toLowerCase() == 'walnut' || woodtype.toLowerCase() == 'cherry' || woodtype.toLowerCase() == 'pine' || woodtype.toLowerCase() == 'cedar' || woodtype.toLowerCase() == 'redwood' || woodtype.toLowerCase() == 'maple'){
        document.write (woodtype + ", That's a Fine Wood, Welcome! ")
    } else{document.write(woodtype + "? To each their own I guess. welcome anyway ")
    }
}


