function getIOPRulerRange(min, max, step) {
    var $newmax = 30;
    var $newstep = 3;
    var range = '';
    var i = 0;
    while (i <= $newmax) {
        range += i + 'M ';
        i = i + $newstep;
    }
    return range;
}

function GetCapacityValue() {
    var host = document.getElementById('capacity').value;
    var closest;
    for (var i = 0; i < vexobject.length; i++) {
        if (host <= vexobject[i]['cap']) {
            console.log('Closest cap found:' + vexobject[i]['cap']);
            closest = i;
            break;
        }
    }
    return closest;
}
function hello() {
    alert('Hey');
}
function test() {
    console.log('test');
}