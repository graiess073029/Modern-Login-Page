var index = 0;

function security_button0(imgid,input){
    if(index % 2 == 0){
        imgid.src = "img/unlock-fill.svg"
        input.type = "text"
        index+=1;
    }
    else{
        imgid.src = "img/lock-fill.svg"
        input.type = "password"

        index += 1;
    }
}


