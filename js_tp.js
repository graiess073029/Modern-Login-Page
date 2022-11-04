var index = 0;

function security_button0(imgid,input){
    if(index % 2 == 0){
        imgid.src = "Modern-Login-Page/unlock-fill.svg"
        input.type = "text"
        index+=1;
    }
    else{
        imgid.src = "Modern-Login-Page/lock-fill.svg"
        input.type = "password"

        index += 1;
    }
}


