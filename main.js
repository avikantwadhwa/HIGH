function start() {
    document.turn = 'X';
}

function HandleClick(btnval) {

    var btn = document.getElementById(btnval);
    if (btn.innerText === '') {
        btn.innerText = document.turn;
       