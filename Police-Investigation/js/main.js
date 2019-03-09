"use strict";

window.onload = function() {

  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.tilemap('desert', 'assets/tilemaps/maps/desert.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/tilemaps/tiles/tmw_desert_spacing.png');

    game.load.spritesheet('player', 'assets/murder/popo.png', 32, 32);

    game.load.image('house', 'assets/murder/house.png');

    game.load.image('npc1', 'assets/murder/mailbox.png');
    game.load.image('npc2', 'assets/murder/penny.png');
    game.load.image('npc3', 'assets/murder/tree.png');
    game.load.image('npc4', 'assets/murder/sponge.png');
    game.load.image('npc5', 'assets/murder/gloves.png');
    game.load.image('npc6', 'assets/murder/charcoal.png');
    game.load.image('npc7', 'assets/murder/candle.png');
    game.load.image('npc8', 'assets/murder/fire.png');
    game.load.image('npc9', 'assets/murder/footsteps.png');
    game.load.image('npc10', 'assets/murder/blood.png');

    game.load.audio('darkWind','assets/audio/DarkWinds.mp3');

}

var cursors;
var map, house;
var npc1, npc2, npc3, npc4, npc5, npc6, npc7, npc8, npc9, npc10;
var layer, layer2;
var player;
var music;


function create() {

    game.stage.backgroundColor = '#787878';

    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  The 'mario' key here is the Loader key given in game.load.tilemap


          map = game.add.tilemap('desert');

          map.addTilesetImage('Desert', 'tiles');
      //    map.addTilesetImage('coins');

          map.setCollisionBetween(1,3);
          map.setCollisionBetween(9,11);
          map.setCollisionBetween(17, 21);
          map.setCollisionBetween(25, 29);
  map.setCollisionBetween(31, 48);


  layer = map.createLayer('Ground');
          //layer1 = map.createLayer('veggies');

  layer.resizeWorld();


   player = game.add.sprite(300, 120, 'player', 1);
   player.animations.add('left', [12,13,14], 10, true);
   player.animations.add('right', [24,25,26], 10, true);
   player.animations.add('up', [36,37,38], 10, true);
   player.animations.add('down', [0,1,2], 10, true);

   game.physics.enable(player, Phaser.Physics.ARCADE);

   house = game.add.sprite(50, 50, 'house');
   game.physics.arcade.enable(house);
   house.body.immovable = true;

   npc1 = game.add.sprite(100, 120, 'npc1');
   game.physics.arcade.enable(npc1);
   npc1.body.immovable = true;

   npc2 = game.add.sprite(35, 525, 'npc2');
   game.physics.arcade.enable(npc2);
   npc2.body.immovable = true;

   npc3 = game.add.sprite(50, 850, 'npc3');
   game.physics.arcade.enable(npc3);
   npc3.body.immovable = true;

   npc4 = game.add.sprite(435, 710, 'npc4');
   game.physics.arcade.enable(npc4);
   npc4.body.immovable = true;

   npc5 = game.add.sprite(770, 400, 'npc5');
   game.physics.arcade.enable(npc5);
   npc5.body.immovable = true;

   npc6 = game.add.sprite(1000, 425, 'npc6');
   game.physics.arcade.enable(npc6);
   npc6.body.immovable = true;

   npc7 = game.add.sprite(790, 670, 'npc7');
   game.physics.arcade.enable(npc7);
   npc7.body.immovable = true;

   npc8 = game.add.sprite(600, 1000, 'npc8');
   game.physics.arcade.enable(npc8);
   npc8.body.immovable = true;

   npc9 = game.add.sprite(1210, 950, 'npc9');
   game.physics.arcade.enable(npc9);
   npc9.body.immovable = true;

   npc10 = game.add.sprite(1210, 850, 'npc10');
   game.physics.arcade.enable(npc10);
   npc10.body.immovable = true;

   player.body.setSize(10, 14, 2, 1);

   game.camera.follow(player);

   cursors = game.input.keyboard.createCursorKeys();

   player.body.collideWorldBounds = true;

   var starttext = game.add.text(60, 60, 'Police Investigation! \n \t Find where the murder took place \n \t Witnesses have the clues. Your first clue is: \n \t Put some words into my mouth and they will go away. \n \t I will give you words as well, but not one will I say. \n Hint: a box',
                     { fontSize: '28px', fill: '#000' });

   //got this line from: http://phaser.io/examples/v2/tweens/alpha-text
   game.add.tween(starttext).to({ alpha: 0 }, 20000, "Linear", true);

   music = game.add.audio('darkWind');
   music.play();
   music.loopFull();
}

function update () {
  game.physics.arcade.collide(player, layer);
  game.physics.arcade.collide(player, layer2);

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

  player.body.velocity.set(0);

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

}

function collideWithNPC1(player, npc1)
{
  var clue1text = game.add.text(100, 120, 'This is something the murderer dropped \n What has a head, tail and is brown, but has no legs?',
                    { fontSize: '28px', fill: '#FFF' });

  //got this line from: http://phaser.io/examples/v2/tweens/alpha-text
  game.add.tween(clue1text).to({ alpha: 0 }, 15000, "Linear", true);
}
function collideWithNPC2(player, npc2)
{
  var clue2text = game.add.text(35, 525, 'He probably went to make plan \n Birds love to use me as a home, \n Im stuck in one place and I cannot roam!',
                    { fontSize: '28px', fill: '#FFF' });

  //got this line from: http://phaser.io/examples/v2/tweens/alpha-text
  game.add.tween(clue2text).to({ alpha: 0 }, 15000, "Linear", true);
        npc2.kill();
}
function collideWithNPC3(player, npc3)
{
  var clue3text = game.add.text(50, 850, 'We need to find evidence! \n I am full of holes but I can still hold water. \n What am I?',
                    { fontSize: '28px', fill: '#FFF' });

  //got this line from: http://phaser.io/examples/v2/tweens/alpha-text
  game.add.tween(clue3text).to({ alpha: 0 }, 15000, "Linear", true);
}
function collideWithNPC4(player, npc4)
{
  var clue4text = game.add.text(70, 710, 'One is not enough we need one more!! \n They have not flesh, nor feathers, nor scales, nor bone. \n Yet they have fingers and thumbs of their own. What are they?',
                    { fontSize: '28px', fill: '#000' });

  //got this line from: http://phaser.io/examples/v2/tweens/alpha-text
  game.add.tween(clue4text).to({ alpha: 0 }, 15000, "Linear", true);
        npc4.kill();
}
function collideWithNPC5(player, npc5)
{
  var clue5text = game.add.text(500, 400, 'Woah that is big!! \n What is black when you buy it, red when you use it, \n and gray when you throw it away?',
                    { fontSize: '28px', fill: '#FFF' });

  //got this line from: http://phaser.io/examples/v2/tweens/alpha-text
  game.add.tween(clue5text).to({ alpha: 0 }, 15000, "Linear", true);
      npc5.kill();
}
function collideWithNPC6(player, npc6)
{
  var clue6text = game.add.text(500, 425, 'is that gold? \nTall I am young, Short I am old, While with life I glow, \n Wind is my foe. What am I? ',
                    { fontSize: '28px', fill: '#000' });

  //got this line from: http://phaser.io/examples/v2/tweens/alpha-text
  game.add.tween(clue6text).to({ alpha: 0 }, 15000, "Linear", true);
        npc6.kill();
}
function collideWithNPC7(player, npc7)
{
  var clue7text = game.add.text(590, 670, 'Dont get scared, but hurry up!! \n I am not alive, but I grow; I dont have lungs, \n but I need air; I dont have a mouth, \n but water kills me. What am I?  ',
                    { fontSize: '28px', fill: '#000' });

  //got this line from: http://phaser.io/examples/v2/tweens/alpha-text
  game.add.tween(clue7text).to({ alpha: 0 }, 15000, "Linear", true);
        npc7.kill();
}
function collideWithNPC8(player, npc8)
{
  var clue8text = game.add.text(500, 1000, 'This is a hard one! \n The more you take the more you leave behind',
                    { fontSize: '28px', fill: '#FFF' });

  //got this line from: http://phaser.io/examples/v2/tweens/alpha-text
  game.add.tween(clue8text).to({ alpha: 0 }, 15000, "Linear", true);
        npc8.kill();
}
function collideWithNPC9(player, npc9)
{
  var clue9text = game.add.text(700, 950, 'All done! Follow the footsteps!',
                    { fontSize: '28px', fill: '#FFF' });

  //got this line from: http://phaser.io/examples/v2/tweens/alpha-text
  game.add.tween(clue9text).to({ alpha: 0 }, 15000, "Linear", true);
}
function collideWithNPC10(player, npc10)
{
  var clue10text = game.add.text(700, 850, 'Murderer forgot to wipe out the blood cleanly! \n You Won! \n Refresh to restart!',
                    { fontSize: '28px', fill: '#000' });

  //got this line from: http://phaser.io/examples/v2/tweens/alpha-text
  game.add.tween(clue10text).to({ alpha: 0 }, 15000, "Linear", true);
}

// function npc1Clue()
// {
//     var clue1text = game.add.text(game.world.centerX - 300, game.world.centerY - 100, 'What has four fingers and a thumb, \n \t\t\t\t\t\t\t\t\t\t\t\t but is not living?',
//                       { fontSize: '32px', fill: '#FFF' });
//
//     //got this line from: http://phaser.io/examples/v2/tweens/alpha-text
//     game.add.tween(clue1text).to({ alpha: 0 }, 15000, "Linear", true);
//
//     music.volume = 1;
//     game.add.tween(music.play()).to({ volume: 0 }, 15000, "Linear", true);
// }


function render () {
//   game.debug.body(player);
}

};
