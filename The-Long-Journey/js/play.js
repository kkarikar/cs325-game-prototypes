"use strict";

GameStates.makePlay = function(game, shared) {

  var livesCounter = 4;
  var lives = null;
  var cursors;
  var map;
  var npc1, npc2, npc3, npc4, npc5, npc6, npc7, npc8, npc9, npc10;
  var bad1, bad2, bad3, bad4, bad5, bad6, bad7, bad8, bad9, bad10;
  var tween, tween1, tween2, tween3, tween4, tween5, tween6,tween7, tween8, tween9, tween10;
  var popup1, popup2, popup3, popup4, popup5, popup6, popup7, popup8, popup9, popup10;
  var closeButton1, closeButton2, closeButton3, closeButton4, closeButton5, closeButton6, closeButton7, closeButton8, closeButton9, closeButton10;

  var score = 0;
  var scoreString = ' ';
  var scoreText;

  var layer;
  var player;
  var music;
  var coinMusic;

return {

  create: function () {
      map = game.add.tilemap('map', 16, 16);

      map.addTilesetImage('tiles');
      // map.addTilesetImage('walls_1x2');
      // map.addTilesetImage('tiles2');
      layer = map.createLayer(0);

      layer.resizeWorld();

      map.setCollisionBetween(54, 83);

      //  Player
      player = game.add.sprite(50, 50, 'player', 1);
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

      bad1 = game.add.sprite(260, 240, 'bad1');
      tween = game.add.tween(bad1).to({ x: 315 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

      bad2 = game.add.sprite(290, 800, 'bad2');
      tween = game.add.tween(bad2).to({ x: 335 }, 900, Phaser.Easing.Linear.None, true, 0, 1000, true);

      bad3 = game.add.sprite(680, 625, 'bad3');
      tween = game.add.tween(bad3).to({ x: 335 }, 4000, Phaser.Easing.Linear.None, true, 0, 1000, true);

      bad4 = game.add.sprite(880, 1085, 'bad4');
      tween = game.add.tween(bad4).to({ x: 470 }, 4000, Phaser.Easing.Linear.None, true, 0, 1000, true);

      bad5 = game.add.sprite(450, 490, 'bad5');
      tween = game.add.tween(bad5).to({ x: 380 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);

      bad6 = game.add.sprite(190, 1070, 'bad6');
      tween = game.add.tween(bad6).to({ x: 60 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);

      bad7 = game.add.sprite(760, 1005, 'bad7');
      tween = game.add.tween(bad7).to({ x: 690 }, 1500, Phaser.Easing.Linear.None, true, 0, 1000, true);

      bad8 = game.add.sprite(1000, 510, 'bad8');
      tween = game.add.tween(bad8).to({ x: 910 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);

      bad9 = game.add.sprite(1070, 110, 'bad9');
      tween = game.add.tween(bad9).to({ x: 990 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);

      bad10 = game.add.sprite(1450, 865, 'bad10');
      tween = game.add.tween(bad10).to({ x: 1550 }, 850, Phaser.Easing.Linear.None, true, 0, 1000, true);

      player.body.setSize(10, 14, 2, 1);

      game.camera.follow(player);

      cursors = game.input.keyboard.createCursorKeys();

      // Add music
      music = game.add.audio('darkWind');
      music.play();
      music.loopFull();

      coinMusic = game.add.audio('coin');

      scoreString = 'Score: ';
  		scoreText = game.add.text(16, 16, scoreString + score, {font: '14px Arial'});
  		scoreText.addColor('#fff', 0);
      scoreText.fixedToCamera = true;

      popup1 = game.add.sprite(290, 280, 'popup1');
      popup1.anchor.set(0.5);
      popup1.inputEnabled = true;
      popup1.input.enableDrag();
    closeButton1 = game.make.sprite((popup1.width / 2) - 30, - (popup1.height / 2) - 8, 'close');
    closeButton1.inputEnabled = true;
    closeButton1.input.priorityID = 1;
    popup1.addChild(closeButton1);
    popup1.scale.set(0);

    popup2 = game.add.sprite(320, 880, 'popup2');
    popup2.anchor.set(0.5);
    popup2.inputEnabled = true;
    popup2.input.enableDrag();
  closeButton2 = game.make.sprite((popup2.width / 2) - 30, - (popup2.height / 2) - 8, 'close');
  closeButton2.inputEnabled = true;
  closeButton2.input.priorityID = 1;
  popup2.addChild(closeButton2);
  popup2.scale.set(0);

  popup3 = game.add.sprite(700, 625, 'popup3');
  popup3.anchor.set(0.5);
  popup3.inputEnabled = true;
  popup3.input.enableDrag();
closeButton3 = game.make.sprite((popup3.width / 2) - 30, - (popup3.height / 2) - 8, 'close');
closeButton3.inputEnabled = true;
closeButton3.input.priorityID = 1;
popup3.addChild(closeButton3);
popup3.scale.set(0);

popup4 = game.add.sprite(450, 1085, 'popup4');
popup4.anchor.set(0.5);
popup4.inputEnabled = true;
popup4.input.enableDrag();
closeButton4 = game.make.sprite((popup4.width / 2) - 30, - (popup4.height / 2) - 8, 'close');
closeButton4.inputEnabled = true;
closeButton4.input.priorityID = 1;
popup4.addChild(closeButton4);
popup4.scale.set(0);

popup5 = game.add.sprite(405, 527, 'popup5');
popup5.anchor.set(0.5);
popup5.inputEnabled = true;
popup5.input.enableDrag();
closeButton5 = game.make.sprite((popup5.width / 2) - 30, - (popup5.height / 2) - 8, 'close');
closeButton5.inputEnabled = true;
closeButton5.input.priorityID = 1;
popup5.addChild(closeButton5);
popup5.scale.set(0);

popup6 = game.add.sprite(190, 1040, 'popup6');
popup6.anchor.set(0.5);
popup6.inputEnabled = true;
popup6.input.enableDrag();
closeButton6 = game.make.sprite((popup6.width / 2) - 30, - (popup6.height / 2) - 8, 'close');
closeButton6.inputEnabled = true;
closeButton6.input.priorityID = 1;
popup6.addChild(closeButton6);
popup6.scale.set(0);

popup7 = game.add.sprite(660, 1020, 'popup7');
popup7.anchor.set(0.5);
popup7.inputEnabled = true;
popup1.input.enableDrag();
closeButton7 = game.make.sprite((popup7.width / 2) - 30, - (popup7.height / 2) - 8, 'close');
closeButton7.inputEnabled = true;
closeButton7.input.priorityID = 1;
popup7.addChild(closeButton7);
popup7.scale.set(0);

popup8 = game.add.sprite(825, 560, 'popup8');
popup8.anchor.set(0.5);
popup8.inputEnabled = true;
popup8.input.enableDrag();
closeButton8 = game.make.sprite((popup8.width / 2) - 30, - (popup8.height / 2) - 8, 'close');
closeButton8.inputEnabled = true;
closeButton8.input.priorityID = 1;
popup8.addChild(closeButton8);
popup8.scale.set(0);

popup9 = game.add.sprite(1025, 175, 'popup9');
popup9.anchor.set(0.5);
popup9.inputEnabled = true;
popup9.input.enableDrag();
closeButton9 = game.make.sprite((popup9.width / 2) - 30, - (popup9.height / 2) - 8, 'close');
closeButton9.inputEnabled = true;
closeButton9.input.priorityID = 1;
popup9.addChild(closeButton9);
popup9.scale.set(0);

popup10 = game.add.sprite(1505, 815, 'popup1');
popup10.anchor.set(0.5);
popup10.inputEnabled = true;
popup10.input.enableDrag();
closeButton10 = game.make.sprite((popup10.width / 2) - 30, - (popup10.height / 2) - 8, 'close');
closeButton10.inputEnabled = true;
closeButton10.input.priorityID = 1;
popup10.addChild(closeButton10);
popup10.scale.set(0);

// //  Lives
// this.lives = this.add.group();
// var x = 100;
// var y = 100;
//
// for (var i = 0; i < 3; i++) {
//   var yourSprite = this.lives.create(
//     x - 100 + (30 * i),
//     y,
//     'player'
//   );
//   yourSprite.anchor.setTo(0.5, 0.5);
// }﻿

},

openWindow1: function() {
      if ((tween1 && tween1.isRunning) || popup1.scale.x === 1)
      {  return;  }
      tween1 = game.add.tween(popup1.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
  },

closeWindow1: function () {
      if (tween1.isRunning || popup1.scale.x === 0)
      {  return;  }
      tween1 = game.add.tween(popup1.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},
openWindow2: function() {
      if ((tween2 && tween2.isRunning) || popup2.scale.x === 1)
      {  return;  }
      tween2 = game.add.tween(popup2.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
  },

closeWindow2: function () {
      if (tween2.isRunning || popup2.scale.x === 0)
      {  return;  }
      tween2 = game.add.tween(popup2.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},

openWindow3: function() {
      if ((tween3 && tween3.isRunning) || popup3.scale.x === 1)
      {  return;  }
      tween3 = game.add.tween(popup3.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
  },

closeWindow3: function () {
      if (tween3.isRunning || popup3.scale.x === 0)
      {  return;  }
      tween3 = game.add.tween(popup3.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},

openWindow4: function() {
      if ((tween4 && tween4.isRunning) || popup4.scale.x === 1)
      {  return;  }
      tween4 = game.add.tween(popup4.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
  },

closeWindow4: function () {
      if (tween4.isRunning || popup4.scale.x === 0)
      {  return;  }
      tween4 = game.add.tween(popup4.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},

openWindow5: function() {
      if ((tween5 && tween5.isRunning) || popup5.scale.x === 1)
      {  return;  }
      tween5 = game.add.tween(popup5.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
  },

closeWindow5: function () {
      if (tween5.isRunning || popup5.scale.x === 0)
      {  return;  }
      tween5 = game.add.tween(popup5.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},

openWindow6: function() {
      if ((tween6 && tween6.isRunning) || popup6.scale.x === 1)
      {  return;  }
      tween6 = game.add.tween(popup6.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
  },

closeWindow6: function () {
      if (tween6.isRunning || popup6.scale.x === 0)
      {  return;  }
      tween6 = game.add.tween(popup6.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},

openWindow7: function() {
      if ((tween7 && tween7.isRunning) || popup7.scale.x === 1)
      {  return;  }
      tween7 = game.add.tween(popup7.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
  },

closeWindow7: function () {
      if (tween7.isRunning || popup7.scale.x === 0)
      {  return;  }
      tween7 = game.add.tween(popup7.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},

openWindow8: function() {
      if ((tween8 && tween8.isRunning) || popup8.scale.x === 1)
      {  return;  }
      tween8 = game.add.tween(popup8.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
  },

closeWindow8: function () {
      if (tween8.isRunning || popup8.scale.x === 0)
      {  return;  }
      tween8 = game.add.tween(popup8.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},

openWindow9: function() {
      if ((tween9 && tween9.isRunning) || popup9.scale.x === 1)
      {  return;  }
      tween9 = game.add.tween(popup9.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
  },

closeWindow9: function () {
      if (tween9.isRunning || popup9.scale.x === 0)
      {  return;  }
      tween9 = game.add.tween(popup9.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},

openWindow10: function() {
      if ((tween10 && tween10.isRunning) || popup10.scale.x === 1)
      {  return;  }
      tween10 = game.add.tween(popup10.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
  },

closeWindow10: function () {
      if (tween10.isRunning || popup10.scale.x === 0)
      {  return;  }
      tween10 = game.add.tween(popup10.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},

  update: function () {
      game.physics.arcade.collide(player, layer);

      game.physics.arcade.overlap(player, npc1, this.collideWithNPC1, null, this);
      game.physics.arcade.overlap(player, npc2, this.collideWithNPC2, null, this);
      game.physics.arcade.overlap(player, npc3, this.collideWithNPC3, null, this);
      game.physics.arcade.overlap(player, npc4, this.collideWithNPC4, null, this);
      game.physics.arcade.overlap(player, npc5, this.collideWithNPC5, null, this);
      game.physics.arcade.overlap(player, npc6, this.collideWithNPC6, null, this);
      game.physics.arcade.overlap(player, npc7, this.collideWithNPC7, null, this);
      game.physics.arcade.overlap(player, npc8, this.collideWithNPC8, null, this);
      game.physics.arcade.overlap(player, npc9, this.collideWithNPC9, null, this);
      game.physics.arcade.overlap(player, npc10, this.collideWithNPC10, null, this);

      if (this.checkOverlap(bad1, player)) {
    //     this.isHit = true;
    //     var live;
    //     live = this.lives.getFirstAlive();
    //     if (live) {
    //       live.kill();
    //     }
    //     this.livesCounter--;
    //
    // if (this.livesCounter == 0) {
    //     player.kill();
    //     game.state.start('lose');
    // }﻿
        player.kill();
        game.state.start('lose');
      }
      if (this.checkOverlap(bad2, player)) {
        player.kill();
        game.state.start('lose');

      }
      if (this.checkOverlap(bad3, player)) {
        player.kill();
        game.state.start('lose');

      }
      if (this.checkOverlap(bad4, player)) {
        player.kill();
        game.state.start('lose');

      }
      if (this.checkOverlap(bad5, player)) {
        player.kill();
        game.state.start('lose');

      }
      if (this.checkOverlap(bad6, player)) {
        player.kill();
        game.state.start('lose');

      }
      if (this.checkOverlap(bad7, player)) {
        player.kill();
        game.state.start('lose');

      }
      if (this.checkOverlap(bad8, player)) {
        player.kill();
        game.state.start('lose');

      }
      if (this.checkOverlap(bad9, player)) {
        player.kill();
        game.state.start('lose');

      }
      if (this.checkOverlap(bad10, player)) {
        player.kill();
        game.state.start('lose');

      }

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

      if (score == 340) {
        var winLabel = game.add.text(80, 80, ' Won!', {font: '50px Arial', fill: '#00FF00'});
        winLabel.fixedToCamera = true;
      }
},

checkOverlap: function (spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

},
collideWithNPC1: function (player, npc1)
{
  this.openWindow1();
  closeButton1.events.onInputDown.add(this.closeWindow1, this);
          npc1.kill();
        coinMusic.play();
        score += 10;
        scoreText.text = scoreString + score;
},
collideWithNPC2: function (player, npc2)
{
  this.openWindow2();
  closeButton2.events.onInputDown.add(this.closeWindow2, this);

        npc2.kill();
        coinMusic.play();
        score += 10;
        scoreText.text = scoreString + score;
},
collideWithNPC3: function (player, npc3)
{
  this.openWindow3();
  closeButton3.events.onInputDown.add(this.closeWindow3, this);
        npc3.kill();
        coinMusic.play();
        score += 10;
        scoreText.text = scoreString + score;
},
collideWithNPC4: function (player, npc4)
{
  this.openWindow4();
  closeButton4.events.onInputDown.add(this.closeWindow4, this);
        npc4.kill();
        coinMusic.play();
        score += 10;
        scoreText.text = scoreString + score;
},
collideWithNPC5: function (player, npc5)
{
  this.openWindow5();
  closeButton5.events.onInputDown.add(this.closeWindow5, this);
        npc5.kill();
        coinMusic.play();
        score += 20;
        scoreText.text = scoreString + score;
},
collideWithNPC6: function (player, npc6)
{
  this.openWindow6();
  closeButton6.events.onInputDown.add(this.closeWindow6, this);
        npc6.kill();
        coinMusic.play();
        score += 30;
        scoreText.text = scoreString + score;
},
collideWithNPC7: function (player, npc7)
{
  this.openWindow7();
  closeButton7.events.onInputDown.add(this.closeWindow7, this);
        npc7.kill();
        coinMusic.play();
        score += 40;
        scoreText.text = scoreString + score;
},
collideWithNPC8: function (player, npc8)
{
  this.openWindow8();
  closeButton8.events.onInputDown.add(this.closeWindow8, this);
        npc8.kill();
        coinMusic.play();
        score += 50;
        scoreText.text = scoreString + score;
},
collideWithNPC9: function (player, npc9)
{
  this.openWindow9();
  closeButton9.events.onInputDown.add(this.closeWindow9, this);
        npc9.kill();
        coinMusic.play();
        score += 60;
        scoreText.text = scoreString + score;
},
collideWithNPC10: function (player, npc10)
{
  this.openWindow10();
  closeButton10.events.onInputDown.add(this.closeWindow10, this);
        npc10.kill();
        coinMusic.play();
        score += 100;
        scoreText.text = scoreString + score;
},

  render: function () {
  }
};
};
