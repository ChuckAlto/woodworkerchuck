

function howMany(){
    let howMuch = prompt('How much wood could a woodchuck chuck?');
    let url = "woodpile.jpg";
    let i = 0;
        do {
            i += 1;
            document.write('<img src="' + url + '" width="150" height="150">');
        } while (i < howMuch);
    }
    
  