let result = '';

function appendValue(value) {
    result += value;
    document.getElementById('result').value = result;
}

function clearResult() {
    result = '';
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        result = eval(result);
        document.getElementById('result').value = result ;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
