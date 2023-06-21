const classes = ['yellow', 'cyan', 'green', 'orange', 'red'];
var idx = 0;
var k = 5;


function plot_point(event){
    const canvas = document.getElementById("canvas");
    var rect = canvas.getBoundingClientRect();
    var x = event.pageX - rect.left - scrollX;
    var y = event.pageY - rect.top - scrollY;
    console.log("x: ", x, "y: ", y);
    console.log("window.ScrollX: ", window.scrollX, "window.scrollY: ", window.scrollY);

    // Normalizing (x, y) cooridnates
    x /= rect.width;
    y /= rect.height;

    // Scaling to canvas coordinates
    x *= canvas.width;
    y *= canvas.height;
    
    drawCoordinates(canvas, x, y);
}

function drawCoordinates(canvas, x,y){
    var pointSize = 2; // Change according to the size of the point.
    var ctx = canvas.getContext("2d");


    ctx.fillStyle = classes[idx];

    ctx.beginPath(); //Start path
    ctx.arc(x, y, pointSize, 0, 1, true); // Draw a point using the arc function of the canvas with a point structure.
    ctx.fill(); // Close the path and fill.
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
}

function run_tree(){
    request = new XMLHttpRequest();

}
