var energy = 200;
var knowledge = 200;
var happiness = 200;
var d_energy = 1;
var d_knowledge = 1;
var d_happiness = 1;

const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

const sleepBtn = PIXI.Sprite.from('resources/sprites/sleepBtn.png');
const learnBtn = PIXI.Sprite.from('resources/sprites/learnBtn.png');
const funBtn = PIXI.Sprite.from('resources/sprites/funBtn.png');

// center the sprite's anchor point
sleepBtn.anchor.set(0.5);
learnBtn.anchor.set(0.5);
funBtn.anchor.set(0.5);

// move the sprite to the center of the screen
sleepBtn.x = app.screen.width / 4;
sleepBtn.y = app.screen.height / 11 * 9;
learnBtn.x = app.screen.width / 4 * 2;
learnBtn.y = app.screen.height / 11 * 9;
funBtn.x = app.screen.width / 4 * 3;
funBtn.y = app.screen.height / 11 * 9;


sleepBtn.scale.x = 0.1;
sleepBtn.scale.y = 0.1;
learnBtn.scale.x = 0.1;
learnBtn.scale.y = 0.1;
funBtn.scale.x = 0.1;
funBtn.scale.y = 0.1;

// Opt-in to interactivity
sleepBtn.interactive = true;
learnBtn.interactive = true;
funBtn.interactive = true;

// Shows hand cursor
sleepBtn.buttonMode = true;
learnBtn.buttonMode = true;
funBtn.buttonMode = true;

// Pointers normalize touch and mouse
sleepBtn.on('pointerdown', onSleepBtn);
learnBtn.on('pointerdown', onLearnBtn);
funBtn.on('pointerdown', onFunBtn);

app.stage.addChild(sleepBtn);
app.stage.addChild(learnBtn);
app.stage.addChild(funBtn);

function onSleepBtn() {
    energy += d_energy * 20;
    console.log("energy: " + energy);
}

function onLearnBtn() {
    knowledge += d_knowledge * 20;
    console.log("knowledge: " + knowledge);
}

function onFunBtn() {
    happiness += d_happiness * 20;
    console.log("happiness: " + happiness);
}

const energyBar = new PIXI.Graphics();
app.stage.addChild(energyBar);
energy.x = app.screen.width / 4;
energy.y = app.screen.height / 11 * 8;

app.ticker.add(() => {
    if (energy > 0) {
        energyBar.clear();
        energyBar.lineStyle(2, 0xff0000, 1);
        energyBar.beginFill(0xffFF00, 1);
        energyBar.drawRect(
            app.screen.width / 4, app.screen.height / 11 * 7,
            40, -energy,
        );
        energyBar.endFill();
        energy -= 0.9;// * d_energy;
    } else {
        alert("you louse");
        init();
    }
})

function init() {
    energy = 200;
    knowledge = 200;
    happiness = 200;

}