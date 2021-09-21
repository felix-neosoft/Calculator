let screen = document.getElementById('screen');
buttons =document.querySelectorAll('button');                    /* Add all buttons as array in 'buttons' variable */
let screenValue = '';                                            /* Variable to perform all operations */
let historyData =[];
let count = 0;
for(item of buttons){                                            /* Fetch the innerText of the button that is clicked */ 
    item.addEventListener('click',(e)=>{                         /*        and append it to the 'screenValue' */
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText == "Clear Logs"){
            screenValue="";
            screen.value="";
            var x = document.getElementById('log_table');
            while(x.hasChildNodes()){
                x.removeChild(x.firstChild);
            }
        }
        else if(buttonText == 'back'){
            screenValue = screenValue.slice(0,-1);
            screen.value = screen.value.slice(0,-1);
        }
        else if(buttonText=='pow'){
            buttonText = '**';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=='C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText=='='){
            historyData.push({"expression":screenValue,"result":eval(screenValue)});
            screen.value = eval(screenValue);
            screenValue = eval(screenValue);
            h_logs(historyData[count].expression,historyData[count].result);
            count+=1;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

function h_logs(exp,result){                                                   /* function to create logs elements */ 
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var table = document.getElementById('log_table');
    table.appendChild(tr);
    td1.innerText = exp +" : ";
    tr.appendChild(td1);
    td2.innerText = result;
    tr.appendChild(td2);
}