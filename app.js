var input = document.querySelector('input');
input.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        call()
    }
});
var button = document.querySelector('button');
button.addEventListener('click', function() {
    call()
});
function call(){
    var number = input.value;
    var url = 'tel:' + number;
    window.location.href = url;
}