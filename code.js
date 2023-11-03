var itemcount = document.getElementById('items').childElementCount;
var totalnumber = document.getElementById('totalnum').textContent = itemcount;
var bottomrow = document.getElementsByClassName('bottomrow')[0];

function changebottomcolor(){
    if(itemcount % 2 == 1){
    document.getElementById('bottomrow').style.backgroundColor="#3B3B3B";
    }
    else{
        document.getElementById('bottomrow').style.backgroundColor="#636363";
    }

}

window.onload = function(){
    // changebottomcolor();
}
