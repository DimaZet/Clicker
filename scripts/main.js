var width = window.innerWidth; //получаем ширину экрана
var height = window.innerHeight; // получаем высоту экрана
var app; //создаем глобальную переменную нашей игры

var model = {
    createCanvas: function() {
        app = new PIXI.Application(width, height,{backgroundColor: 0x1099bb}); //создаем холст
        document.body.appendChild(app.view); //выводим его в тело страницы
    }

}

var view = {
    loadGame: function(){
        model.createCanvas();
    }
}

view.loadGame(); //запускаем игру