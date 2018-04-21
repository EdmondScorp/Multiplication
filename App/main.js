function multiply (a, b) {
    let result = prompt(`What does ${a} * ${b} equal?`, '');
    if (+result === a * b) {
        this.innerText = a * b;
    }
    else {
        alert('You are so wrong xD');
    }
}

var table = document.createElement('table');

for (let i = 0; i < 10; i++) {

    let tr = document.createElement('tr');
    table.appendChild(tr);

    for (let j = 0; j < 10; j++) {

        let td = document.createElement('td');
        td.align = 'center';
        td.onclick = function() {
            multiply.call(this, i, j);
        }
        if (i === 0 || j === 0){
            td.innerText = j || i;
        }
        tr.appendChild(td);

    }
}

document.body.appendChild(table);



