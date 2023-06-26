const classes = ['yellow', 'cyan', 'green', 'orange', 'red'];
var idx = 0;
var k = 5;
url = 'http://127.0.0.1:5000'
var data = {
    'yellow':[],
    'cyan':[],
    'green':[],
    'orange':[],
    'red':[]
};

function plot_point(event){
    const canvas = document.getElementById("canvas");
    var rect = canvas.getBoundingClientRect();
    var x = event.pageX - rect.left - scrollX;
    var y = event.pageY - rect.top - scrollY;

    // Normalizing (x, y) cooridnates
    x /= rect.width;
    y /= rect.height;

    // Scaling to canvas coordinates
    x *= canvas.width;
    y *= canvas.height;
    
    console.log("Points:\nx: ", x, "\ny: ", y);

    drawCoordinates(canvas, x, y);
}

function drawCoordinates(canvas, x,y){
    var pointSize = 2; // Change according to the size of the point.
    var ctx = canvas.getContext("2d");


    ctx.fillStyle = classes[idx];

    ctx.beginPath(); //Start path
    ctx.arc(x, y, pointSize, 0, 1, true); // Draw a point using the arc function of the canvas with a point structure.
    ctx.fill(); // Close the path and fill.

    // store point coordinate
    data[classes[idx]].push([x,y]);
    console.log('updatding data...\n', data);
}


function change_class(){
    if(idx+1 >= k){
        idx = -1
    }
    idx += 1;
    button = document.getElementById("change_class");
    button.style.backgroundColor = classes[idx];
}

function clear_canvas(){
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    // clear data points
    for(let i = 0; i < Object.keys(data).length; i++){
        data[classes[i]] = [];
    }
    console.log('data has been cleared: ', data)
}

function run_tree(){
    // making request to run decision tree model in server
    let request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.responseType = 'json';
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function(){
        if(request.status >=200 && request.status < 400){
            // unpack decision tree visualization
        }
    }
    request.send(JSON.stringify(data));
}
