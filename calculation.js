function calculate() {
    var area1 = document.getElementById('area1').value;
    var area2 = document.getElementById('area2').value;
    var area3 = document.getElementById('area3').value;

    if (area2 === "+") {
        document.getElementById('calculatorResult')
            .innerHTML = (Number(area1) + Number(area3));

    }
    if (area2 === "-") {
        document.getElementById('calculatorResult')
            .innerHTML = (Number(area1) - Number(area3));

    }
    if (area2 === "/") {
        document.getElementById('calculatorResult')
            .innerHTML = (Number(area1) / Number(area3));

    }
    if (area2 === "*") {
        document.getElementById('calculatorResult')
            .innerHTML = (Number(area1) * Number(area3));

    }
    if (area2 === "%") {
        document.getElementById('calculatorResult')
            .innerHTML = (Number(area1) % Number(area3));

    }
}

