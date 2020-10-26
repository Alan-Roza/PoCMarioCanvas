let mario;
let luigi;
let peach;
//let startX = Math.floor(Math.random() *512) + 1;
function startXY () {
    return Math.floor(Math.random() *460) + 1;
}

function play() {
    //let xx = math.floor(math.random()*512) + 1;
    mario = new gameDraw(startXY(), startXY(), 30, 30, "./assets/player1.png", "image");
    console.log(startXY());
    luigi = new gameDraw(startXY(), startXY(), 30, 30, "./assets/player2.png", "image");
    peach = new gameDraw(startXY(), startXY(), 30, 30, "./assets/player3.png", "image");
    gamePlace.start();
}

let gamePlace = {
    canvas: document.getElementById("canvas"),
    start: function () {
        this.canvas.width = 512;
        this.canvas.height = 512;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGamePlace, 20);
        window.addEventListener('keydown', function(eventt){
            gamePlace.key = eventt.key;
        })
        window.addEventListener('keyup', function(eventt){
            gamePlace.key = false;
        })
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    }
}

function gameDraw(x, y, width, height, path, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = path;
    } 
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function () {
        ctx = gamePlace.context;
        if (type == "image") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGamePlace() {
    gamePlace.clear();
    updateMario();
    updateLuigi();
    updatePeach();
}

function updateMario(){
    mario.speedX = 0;
    mario.speedY = 0;
    if(gamePlace.key && gamePlace.key == "ArrowLeft") 
    {
        ctx = gamePlace.context;
        ctx.scale(-1, 0);
        ctx.translate(-canvas.width, 0);
        mario.speedX = -1;
    }
    if(gamePlace.key && gamePlace.key == "ArrowRight") {mario.speedX = 1;}
    if(gamePlace.key && gamePlace.key == "ArrowUp") {mario.speedY = -1;}
    if(gamePlace.key && gamePlace.key == "ArrowDown") {mario.speedY = 1;}
    mario.newPos();
    mario.update();
}

function updateLuigi(){
    luigi.speedX = 0;
    luigi.speedY = 0;
    if(gamePlace.key && gamePlace.key == "ArrowLeft") {luigi.speedX = -1;}
    if(gamePlace.key && gamePlace.key == "ArrowRight") {luigi.speedX = 1;}
    if(gamePlace.key && gamePlace.key == "ArrowUp") {luigi.speedY = -1;}
    if(gamePlace.key && gamePlace.key == "ArrowDown") {luigi.speedY = 1;}
    luigi.newPos();
    luigi.update();
}

function updatePeach(){
    peach.speedX = 0;
    peach.speedY = 0;
    if(gamePlace.key && gamePlace.key == "ArrowLeft") {peach.speedX = -1;}
    if(gamePlace.key && gamePlace.key == "ArrowRight") {peach.speedX = 1;}
    if(gamePlace.key && gamePlace.key == "ArrowUp") {peach.speedY = -1;}
    if(gamePlace.key && gamePlace.key == "ArrowDown") {peach.speedY = 1;}
    peach.newPos();
    peach.update();
}