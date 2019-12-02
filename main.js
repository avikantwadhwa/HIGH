import { getDefaultSettings } from "http2";

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



function check_winner() {
    var i = 0,f=true,j;
    for (i = 7; i > 0; i -= 3) {
        f=true;
        var num = document.getElementById(i.toString());
        for (j = i + 1; j < i + 3; j++) {
            var btn = document.getElementById(j.toString());
            if (btn.innerText !== num.innerText)
                f=false;
        }
        if(f)
            return true;

            for(j=7;j<10;j++)
            {
                f=true;
                var num = document.getElementById(j.toString());
                for(i=j-3;i>j-7;j--)
                {
                    var btn = document.getElementById(i.toString());
                    if (btn.innerText !== num.innerText)
                        f=false;   
                }
                if(f)
                    return true;
            }
        
            for(j=7;j<10;j++)
            {
        
            }
        }
    var num = document.getElementById('7');
    var btn = document.getElementById('8');
    var val = document.getElementById('9');
    if (num.innerText !== "" && num.innerText === btn.innerText && btn.innerText == val.innerText)
        return true;
    }
function delay(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, 1000 * seconds)
    })
}
delay(4).then(()=>getDefaultSettings)