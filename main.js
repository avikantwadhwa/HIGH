function start() {
    document.turn = 'X';
}

function HandleClick(btnval) {

    var btn = document.getElementById(btnval);
    if (btn.innerText === '') {
        btn.innerText = document.turn;
        if (check_winner()) {
            alert("Winner is " + document.turn)
            clearfunc();
        }
        if (document.turn === 'X')
            document.turn = 'O';
        else
            document.turn = 'X'
    }



}


