var data = [
    ["02.06.2018", "LOREM IPSUM DOLOR", "fa fa-heartbeat"],
    ["08.06.2018", "LOREM IPSUM DOLOR", "fa fa-flask"],
    ["16.06.2018", "LOREM IPSUM DOLOR", "fa fa-calendar"],
    ["22.06.2018", "LOREM IPSUM DOLOR", "fa fa-graduation-cap"],
    ["30.06.2018", "LOREM IPSUM DOLOR", "fa fa-gamepad"]];
console.log(data);

data.sort(function(a, b) {
    if (a[0] < b[0]) return  -1;
    if (a[0] > b[0]) return 1;    
    return 0;
});

/* how many elements are before 10.06.2018? */
var counter = 0;

for (var j = 0; j < data.length; j++) {
    let time = data[j][0].split(".");
    if (time[1] !== "06" || time[2] !== "2018" || time[0] < 1 || time[0] > 30) {
        console.log("Wrong date " + j);
    }
    else if (time[0] <= "10") {
        var elem = "<li class='timeline-item'><div class='timeline-badge primary past' id='tooltip" + j + "'><i class='" + data[j][2] + "'></i><span class='tooltiptext'>text</span></div><div class='timeline-panel'><div class='timeline-heading'><h4 class='timeline-title'>" + data[j][0] + "</h4></div><div class='timeline-body'><p>" + data[j][1] + "</p></div></div></li>";
        counter += 1;
    }
    else {
        var elem = "<li class='timeline-item'><div class='timeline-badge primary' id='tooltip" + j + "'><i class='" + data[j][2] + "'></i><span class='tooltiptext'>text</span></div><div class='timeline-panel'><div class='timeline-heading'><h4 class='timeline-title'>" + data[j][0] + "</h4></div><div class='timeline-body'><p>" + data[j][1] + "</p></div></div></li>";
    }
    $(".timeline-horizontal").append(elem);
}

var percentage_count = counter / data.length * 100;
const style = document.head.appendChild(document.createElement("style"));
style.innerHTML = ".timeline-horizontal::before {background: linear-gradient(to right, rgba(52,52,247,1) 0%, rgba(112,204,207,1) 17%, rgba(52,52,247,1)" + percentage_count +"%, rgba(16,55,133,1) 35%, rgba(16,55,133,1) 100%);}";
