"use strict";

window.onload = function() {

  var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.tilemap('map', 'assets/tilemaps/csv/catastrophi_level2.csv', null, Phaser.Tilemap.CSV);

    game.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');

    game.load.spritesheet('player', 'assets/sprites/spaceman.png', 16, 16);

    game.load.image('npc1', 'assets/gold/4.png');
    game.load.image('npc2', 'assets/gold/4.png');
    game.load.image('npc3', 'assets/gold/4.png');
    game.load.image('npc4', 'assets/gold/4.png');
    game.load.image('npc5', 'assets/gold/5.png');
    game.load.image('npc6', 'assets/gold/6.png');
    game.load.image('npc7', 'assets/gold/7.png');
    game.load.image('npc8', 'assets/gold/8.png');
    game.load.image('npc9', 'assets/gold/9.png');
    game.load.image('npc10', 'assets/gold/10.png');

    game.load.audio('darkWind','assets/audio/DarkWinds.mp3');

  //  game.load.audio('jeopardy', 'assets/jeopardy.mp3');


}

var cursors;
var map;
var npc1, npc2, npc3, npc4, npc5, npc6, npc7, npc8, npc9, npc10;

var score = 0;
var scoreString = ' ';
var scoreText;

var layer;
var player;
var music;

function create() {


    map = game.add.tilemap('map', 16, 16);

    map.addTilesetImage('tiles');
    // map.addTilesetImage('walls_1x2');
    // map.addTilesetImage('tiles2');
    layer = map.createLayer(0);

    layer.resizeWorld();

    map.setCollisionBetween(54, 83);

    //  Player
    player = game.add.sprite(48, 48, 'player', 1);
    player.animations.add('left', [8,9], 10, true);
    player.animations.add('right', [1,2], 10, true);
    player.animations.add('up', [11,12,13], 10, true);
    player.animations.add('down', [4,5,6], 10, true);

    game.physics.enable(player, Phaser.Physics.ARCADE);
    game.physics.startSystem(Phaser.Physics.ARCADE);

    npc1 = game.add.sprite(290, 280, 'npc1');
    game.physics.arcade.enable(npc1);
    npc1.body.immovable = true;

    npc2 = game.add.sprite(320, 880, 'npc2');
    game.physics.arcade.enable(npc2);
    npc2.body.immovable = true;

    npc3 = game.add.sprite(700, 625, 'npc3');
    game.physics.arcade.enable(npc3);
    npc3.body.immovable = true;

    npc4 = game.add.sprite(450, 1085, 'npc4');
    game.physics.arcade.enable(npc4);
    npc4.body.immovable = true;

    npc5 = game.add.sprite(405, 527, 'npc5');
    game.physics.arcade.enable(npc5);
    npc5.body.immovable = true;

    npc6 = game.add.sprite(190, 1040, 'npc6');
    game.physics.arcade.enable(npc6);
    npc6.body.immovable = true;

    npc7 = game.add.sprite(660, 1020, 'npc7');
    game.physics.arcade.enable(npc7);
    npc7.body.immovable = true;

    npc8 = game.add.sprite(825, 560, 'npc8');
    game.physics.arcade.enable(npc8);
    npc8.body.immovable = true;

    npc9 = game.add.sprite(1025, 175, 'npc9');
    game.physics.arcade.enable(npc9);
    npc9.body.immovable = true;

    npc10 = game.add.sprite(1505, 815, 'npc10');
    game.physics.arcade.enable(npc10);
    npc10.body.immovable = true;

    player.body.setSize(10, 14, 2, 1);

    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();

    // Add music
    music = game.add.audio('darkWind');
    music.play();
		music.loop = true;

    //var help = game.add.text(1085, 16, 'Arrows to move', { font: '14px Arial', fill: '#ffffff' });
    //help.fixedToCamera = true;

    scoreString = 'Score: ';
		scoreText = game.add.text(16, 16, scoreString + score, {font: '14px Arial'});
		scoreText.addColor('#fff', 0);
    scoreText.fixedToCamera = true;
}

function update() {

    game.physics.arcade.collide(player, layer);

    game.physics.arcade.overlap(player, npc1, collideWithNPC1, null, this);
    game.physics.arcade.overlap(player, npc2, collideWithNPC2, null, this);
    game.physics.arcade.overlap(player, npc3, collideWithNPC3, null, this);
    game.physics.arcade.overlap(player, npc4, collideWithNPC4, null, this);
    game.physics.arcade.overlap(player, npc5, collideWithNPC5, null, this);
    game.physics.arcade.overlap(player, npc6, collideWithNPC6, null, this);
    game.physics.arcade.overlap(player, npc7, collideWithNPC7, null, this);
    game.physics.arcade.overlap(player, npc8, collideWithNPC8, null, this);
    game.physics.arcade.overlap(player, npc9, collideWithNPC9, null, this);
    game.physics.arcade.overlap(player, npc10, collideWithNPC10, null, this);
    // game.physics.arcade.overlap(player, this.coin2, collectCoin2, null, this);
    // game.physics.arcade.overlap(player, this.coin3, collectCoin3, null, this);

    player.body.velocity.set(0);
    // sprite.body.velocity.y = 0;
    // sprite.body.angularVelocity = 0;

    if (cursors.left.isDown)
    {
        // sprite.body.angularVelocity = -300;
        player.body.velocity.x = -100;
        player.play('left');
    }
    else if (cursors.right.isDown)
    {
        // sprite.body.angularVelocity = 300;
        player.body.velocity.x = 100;
        player.play('right');
    }
    else if (cursors.up.isDown)
    {
        player.body.velocity.y = -100;
        player.play('up');
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 100;
        player.play('down');
    }
    else
    {
      player.animations.stop();
    }

    if (score == 340) {
      var winLabel = game.add.text(80, 80, 'You Won!', {font: '50px Arial', fill: '#00FF00'});
      winLabel.fixedToCamera = true;
    }
}

function collideWithNPC1(player, npc1)
{
        npc1.kill();
        score += 10;
        scoreText.text = scoreString + score;
}
function collideWithNPC2(player, npc2)
{
        npc2.kill();
        score += 10;
        scoreText.text = scoreString + score;
}
function collideWithNPC3(player, npc3)
{
        npc3.kill();
        score += 10;
        scoreText.text = scoreString + score;
}
function collideWithNPC4(player, npc4)
{
        npc4.kill();
        score += 10;
        scoreText.text = scoreString + score;
}
function collideWithNPC5(player, npc5)
{
        npc5.kill();
        score += 20;
        scoreText.text = scoreString + score;
}
function collideWithNPC6(player, npc6)
{
        npc6.kill();
        score += 30;
        scoreText.text = scoreString + score;
}
function collideWithNPC7(player, npc7)
{
        npc7.kill();
        score += 40;
        scoreText.text = scoreString + score;
}
function collideWithNPC8(player, npc8)
{
        npc8.kill();
        score += 50;
        scoreText.text = scoreString + score;
}
function collideWithNPC9(player, npc9)
{
        npc9.kill();
        score += 60;
        scoreText.text = scoreString + score;
}
function collideWithNPC10(player, npc10)
{
        npc10.kill();
        score += 100;
        scoreText.text = scoreString + score;
}

//
// function collectCoin(player, coin) {
//
//     coin.kill();
//
// }
//
 function render() {

  //  game.debug.body(player);

}

};
