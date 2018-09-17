(() => {
    function multiply(a, b) {
        const result = +prompt(`What does ${a} * ${b} equal?`, '');
        if (result === a * b) 
            this.innerText = a * b;
        else 
            alert('You are so wrong xD');
    }

    const table = document.createElement('table');

    [...Array(10).keys()]
        .forEach((i, _, a) => {
            const tr = document.createElement('tr');
            table.appendChild(tr);
            a.forEach(j => {
                const td = document.createElement('td');
                td.align = 'center';
                td.onclick = function() {
                    multiply.call(this, i, j);
                }
                if (!i || !j) td.innerText = j || i;
                tr.appendChild(td);
            });
        });
    document.body.appendChild(table);
})();
