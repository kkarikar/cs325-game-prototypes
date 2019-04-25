"use strict";

GameStates.makePlay = function(game, shared) {

  var livesCounter = 4;
  var lives = null;
  var cursors;
  var map;
  var npc1, npc2, npc3, npc4, npc5, npc6, npc7, npc8, npc9, npc10;
  var bad1, bad2, bad3, bad4, bad5, bad6, bad7, bad8, bad9, bad10;

  var gem1, gem2, gem3, gem4, gem5;
  var gbad1, gbad2, gbad3, gbad4, gbad5;
  var closeButtonG1, closeButtonG2, closeButtonG3, closeButtonG4, closeButtonG5;
  var closeButtonA1, closeButtonA2, closeButtonA3, closeButtonA4, closeButtonA5;
  var closeButtonB1, closeButtonB2, closeButtonB3, closeButtonB4, closeButtonB5;
  var tweeng1, tweeng2, tweeng3, tweeng4, tweeng5;
  var question1, question2, question3, question4, question5;
  var optionA1, optionA2, optionA3, optionA4, optionA5;
  var optionB1, optionB2, optionB3, optionB4, optionB5;
  var win1, win2, win3, win4, win5;
  var lose1, lose2, lose3, lose4, lose5;

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

//gems
      gem1 = game.add.sprite(650, 360, 'gem1');
      game.physics.arcade.enable(gem1);
      gem1.body.immovable = true;

      gem2 = game.add.sprite(830, 200, 'gem2');
      game.physics.arcade.enable(gem2);
      gem2.body.immovable = true;

      gem3 = game.add.sprite(1555, 250, 'gem3');
      game.physics.arcade.enable(gem3);
      gem3.body.immovable = true;

      gem4 = game.add.sprite(210, 850, 'gem4');
      game.physics.arcade.enable(gem4);
      gem4.body.immovable = true;

      gem5 = game.add.sprite(250, 540, 'gem5');
      game.physics.arcade.enable(gem5);
      gem5.body.immovable = true;

      //baddies for gems
      gbad1 = game.add.sprite(590, 320, 'gbad1');
      tween = game.add.tween(gbad1).to({ x: 520 }, 700, Phaser.Easing.Linear.None, true, 0, 1000, true);

      gbad2 = game.add.sprite(865, 195, 'gbad2');
      tween = game.add.tween(gbad2).to({ x: 770 }, 900, Phaser.Easing.Linear.None, true, 0, 1000, true);

      gbad3 = game.add.sprite(1605, 180, 'gbad3');
      tween = game.add.tween(gbad3).to({ x: 1455 }, 650, Phaser.Easing.Linear.None, true, 0, 1000, true);

      gbad4 = game.add.sprite(200, 900, 'gbad4');
      tween = game.add.tween(gbad4).to({ x: 260 }, 900, Phaser.Easing.Linear.None, true, 0, 1000, true);

      gbad5 = game.add.sprite(230, 530, 'gbad5');
      tween = game.add.tween(gbad5).to({ x: 280 }, 900, Phaser.Easing.Linear.None, true, 0, 1000, true);


      //baddies for gold
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

      //questions
      question1 = game.add.sprite(650, 360, 'question1');
      question1.anchor.set(0.5);
      question1.inputEnabled = true;
      question1.input.enableDrag();
      closeButtonG1 = game.make.sprite((question1.width / 2) - 30, - (question1.height / 2) - 8, 'close');
      optionA1 = game.make.sprite((question1.width / 4) - 525, - (question1.height / 4) + 60, 'close');
      optionB1 = game.make.sprite((question1.width / 4) - 525, - (question1.height / 4) + 130, 'close');
      closeButtonG1.inputEnabled = true;
      optionA1.inputEnabled = true;
      optionB1.inputEnabled = true;
      closeButtonG1.input.priorityID = 1;
      optionA1.input.priorityID = 1;
      optionB1.input.priorityID = 1;
      question1.addChild(closeButtonG1);
      question1.addChild(optionA1);
      question1.addChild(optionB1);
      question1.scale.set(0);

      win1 = game.add.sprite(650, 360, 'win1');
      win1.anchor.set(0.5);
      win1.inputEnabled = true;
      win1.input.enableDrag();
      closeButtonA1 = game.make.sprite((win1.width / 2) - 30, - (win1.height / 2) - 8, 'close');
      closeButtonA1.inputEnabled = true;
      closeButtonA1.input.priorityID = 1;
      win1.addChild(closeButtonA1);
      win1.scale.set(0);

      lose1 = game.add.sprite(650, 360, 'lose1');
      lose1.anchor.set(0.5);
      lose1.inputEnabled = true;
      lose1.input.enableDrag();
      closeButtonB1 = game.make.sprite((lose1.width / 2) - 30, - (lose1.height / 2) - 8, 'close');
      closeButtonB1.inputEnabled = true;
      closeButtonB1.input.priorityID = 1;
      lose1.addChild(closeButtonB1);
      lose1.scale.set(0);


      //question 2
      question2 = game.add.sprite(830, 200, 'question2');
      question2.anchor.set(0.5);
      question2.inputEnabled = true;
      question2.input.enableDrag();
      closeButtonG2 = game.make.sprite((question1.width / 2) + 450, - (question1.height / 2) - 150, 'close');
      optionA2 = game.make.sprite((question1.width / 4) - 480, - (question1.height / 4) + 30, 'close');
      optionB2 = game.make.sprite((question1.width / 4) - 480, - (question1.height / 4) + 100, 'close');
      closeButtonG2.inputEnabled = true;
      optionA2.inputEnabled = true;
      optionB2.inputEnabled = true;
      closeButtonG2.input.priorityID = 1;
      optionA2.input.priorityID = 1;
      optionB2.input.priorityID = 1;
      question2.addChild(closeButtonG2);
      question2.addChild(optionA2);
      question2.addChild(optionB2);
      question2.scale.set(0);

      win2 = game.add.sprite(830, 200, 'win2');
      win2.anchor.set(0.5);
      win2.inputEnabled = true;
      win2.input.enableDrag();
      closeButtonA2 = game.make.sprite((win2.width / 2) - 30, - (win2.height / 2) - 8, 'close');
      closeButtonA2.inputEnabled = true;
      closeButtonA2.input.priorityID = 1;
      win2.addChild(closeButtonA2);
      win2.scale.set(0);

      lose2 = game.add.sprite(830, 200, 'lose2');
      lose2.anchor.set(0.5);
      lose2.inputEnabled = true;
      lose2.input.enableDrag();
      closeButtonB2 = game.make.sprite((lose2.width / 2) - 30, - (lose2.height / 2) - 8, 'close');
      closeButtonB2.inputEnabled = true;
      closeButtonB2.input.priorityID = 1;
      lose2.addChild(closeButtonB2);
      lose2.scale.set(0);


      //question3
      question3 = game.add.sprite(1555, 250, 'question3');
      question3.anchor.set(0.5);
      question3.inputEnabled = true;
      question3.input.enableDrag();
      closeButtonG3 = game.make.sprite((question3.width / 2) - 30, - (question3.height / 2) - 8, 'close');
      optionA3 = game.make.sprite((question1.width / 4) - 440, - (question1.height / 4) + 10, 'close');
      optionB3 = game.make.sprite((question1.width / 4) - 440, - (question1.height / 4) + 80, 'close');
      closeButtonG3.inputEnabled = true;
      optionA3.inputEnabled = true;
      optionB3.inputEnabled = true;
      closeButtonG3.input.priorityID = 1;
      optionA3.input.priorityID = 1;
      optionB3.input.priorityID = 1;
      question3.addChild(closeButtonG3);
      question3.addChild(optionA3);
      question3.addChild(optionB3);
      question3.scale.set(0);

      win3 = game.add.sprite(1555, 250, 'win3');
      win3.anchor.set(0.5);
      win3.inputEnabled = true;
      win3.input.enableDrag();
      closeButtonA3 = game.make.sprite((win3.width / 2) - 30, - (win3.height / 2) - 8, 'close');
      closeButtonA3.inputEnabled = true;
      closeButtonA3.input.priorityID = 1;
      win3.addChild(closeButtonA3);
      win3.scale.set(0);

      lose3 = game.add.sprite(1555, 250, 'lose3');
      lose3.anchor.set(0.5);
      lose3.inputEnabled = true;
      lose3.input.enableDrag();
      closeButtonB3 = game.make.sprite((lose3.width / 2) - 30, - (lose3.height / 2) - 8, 'close');
      closeButtonB3.inputEnabled = true;
      closeButtonB3.input.priorityID = 1;
      lose3.addChild(closeButtonB3);
      lose3.scale.set(0);

      //question4
      question4 = game.add.sprite(210, 850, 'question4');
      question4.anchor.set(0.5);
      question4.inputEnabled = true;
      question4.input.enableDrag();
      closeButtonG4 = game.make.sprite((question4.width / 2) - 30, - (question4.height / 2) - 8, 'close');
      optionA4 = game.make.sprite((question4.width / 2) - 500, - (question4.height / 2) + 120, 'close');
      optionB4 = game.make.sprite((question4.width / 2) - 500, - (question4.height / 2) + 180, 'close');
      closeButtonG4.inputEnabled = true;
      optionA4.inputEnabled = true;
      optionB4.inputEnabled = true;
      closeButtonG4.input.priorityID = 1;
      optionA4.input.priorityID = 1;
      optionB4.input.priorityID = 1;
      question4.addChild(closeButtonG4);
      question4.addChild(optionA4);
      question4.addChild(optionB4);
      question4.scale.set(0);

      win4 = game.add.sprite(210, 850, 'win4');
      win4.anchor.set(0.5);
      win4.inputEnabled = true;
      win4.input.enableDrag();
      closeButtonA4 = game.make.sprite((win4.width / 2) - 30, - (win4.height / 2) - 8, 'close');
      closeButtonA4.inputEnabled = true;
      closeButtonA4.input.priorityID = 1;
      win4.addChild(closeButtonA4);
      win4.scale.set(0);

      lose4 = game.add.sprite(210, 850, 'lose4');
      lose4.anchor.set(0.5);
      lose4.inputEnabled = true;
      lose4.input.enableDrag();
      closeButtonB4 = game.make.sprite((lose4.width / 2) - 30, - (lose4.height / 2) - 8, 'close');
      closeButtonB4.inputEnabled = true;
      closeButtonB4.input.priorityID = 1;
      lose4.addChild(closeButtonB4);
      lose4.scale.set(0);

      //question 5
      question5 = game.add.sprite(250, 540, 'question5');
      question5.anchor.set(0.5);
      question5.inputEnabled = true;
      question5.input.enableDrag();
      closeButtonG5 = game.make.sprite((question5.width / 2) - 30, - (question5.height / 2) - 8, 'close');
      optionA5 = game.make.sprite((question5.width / 2) - 1000, - (question5.height / 2) + 170, 'close');
      optionB5 = game.make.sprite((question5.width / 2) - 1000, - (question5.height / 2) + 240, 'close');
      closeButtonG5.inputEnabled = true;
      optionA5.inputEnabled = true;
      optionB5.inputEnabled = true;
      closeButtonG5.input.priorityID = 1;
      optionA5.input.priorityID = 1;
      optionB5.input.priorityID = 1;
      question5.addChild(closeButtonG5);
      question5.addChild(optionA5);
      question5.addChild(optionB5);
      question5.scale.set(0);

      win5 = game.add.sprite(250, 540, 'win5');
      win5.anchor.set(0.5);
      win5.inputEnabled = true;
      win5.input.enableDrag();
      closeButtonA5 = game.make.sprite((win5.width / 2) - 30, - (win5.height / 2) - 8, 'close');
      closeButtonA5.inputEnabled = true;
      closeButtonA5.input.priorityID = 1;
      win5.addChild(closeButtonA5);
      win5.scale.set(0);

      lose5 = game.add.sprite(250, 540, 'lose5');
      lose5.anchor.set(0.5);
      lose5.inputEnabled = true;
      lose5.input.enableDrag();
      closeButtonB5 = game.make.sprite((lose5.width / 2) - 30, - (lose5.height / 2) - 8, 'close');
      closeButtonB5.inputEnabled = true;
      closeButtonB5.input.priorityID = 1;
      lose5.addChild(closeButtonB5);
      lose5.scale.set(0);


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


//question1
openQuestion1: function () {
  if ((tweeng1 && tweeng1.isRunning) || question1.scale.x === 1)
  {  return;  }
  tweeng1 = game.add.tween(question1.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeQuestion1: function() {
  if (tweeng1.isRunning || question1.scale.x === 0)
  {  return;  }
  tweeng1 = game.add.tween(question1.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},
openWin1: function () {
  if ((tweeng1 && tweeng1.isRunning) || win1.scale.x === 1)
  {  return;  }
  tweeng1 = game.add.tween(win1.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeWin1: function () {
  if (tweeng1.isRunning || win1.scale.x === 0)
  {  return;  }
  tweeng1 = game.add.tween(win1.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},
openLose1: function () {
  if ((tweeng1 && tweeng1.isRunning) || lose1.scale.x === 1)
  {  return;  }
  tweeng1 = game.add.tween(lose1.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeLose1: function () {
  if (tweeng1.isRunning || lose1.scale.x === 0)
  {  return;  }
  tweeng1 = game.add.tween(lose1.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},


//question2
openQuestion2: function () {
  if ((tweeng2 && tweeng2.isRunning) || question2.scale.x === 1)
  {  return;  }
  tweeng2 = game.add.tween(question2.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeQuestion2: function() {
  if (tweeng2.isRunning || question2.scale.x === 0)
  {  return;  }
  tweeng2 = game.add.tween(question2.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},
openWin2: function () {
  if ((tweeng2 && tweeng2.isRunning) || win2.scale.x === 1)
  {  return;  }
  tweeng2 = game.add.tween(win2.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeWin2: function () {
  if (tweeng2.isRunning || win2.scale.x === 0)
  {  return;  }
  tweeng2 = game.add.tween(win2.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},
openLose2: function () {
  if ((tweeng2 && tweeng2.isRunning) || lose2.scale.x === 1)
  {  return;  }
  tweeng2 = game.add.tween(lose2.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeLose2: function () {
  if (tweeng2.isRunning || lose2.scale.x === 0)
  {  return;  }
  tweeng2 = game.add.tween(lose2.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},


//question3
openQuestion3: function () {
  if ((tweeng3 && tweeng3.isRunning) || question3.scale.x === 1)
  {  return;  }
  tweeng3 = game.add.tween(question3.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeQuestion3: function() {
  if (tweeng3.isRunning || question3.scale.x === 0)
  {  return;  }
  tweeng3 = game.add.tween(question3.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},
openWin3: function () {
  if ((tweeng3 && tweeng3.isRunning) || win3.scale.x === 1)
  {  return;  }
  tweeng3 = game.add.tween(win3.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeWin3: function () {
  if (tweeng3.isRunning || win3.scale.x === 0)
  {  return;  }
  tweeng3 = game.add.tween(win3.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},
openLose3: function () {
  if ((tweeng3 && tweeng3.isRunning) || lose3.scale.x === 1)
  {  return;  }
  tweeng3 = game.add.tween(lose3.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeLose3: function () {
  if (tweeng3.isRunning || lose3.scale.x === 0)
  {  return;  }
  tweeng3 = game.add.tween(lose3.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},

//question4
openQuestion4: function () {
  if ((tweeng4 && tweeng4.isRunning) || question4.scale.x === 1)
  {  return;  }
  tweeng4 = game.add.tween(question4.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeQuestion4: function() {
  if (tweeng4.isRunning || question4.scale.x === 0)
  {  return;  }
  tweeng4 = game.add.tween(question4.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},
openWin4: function () {
  if ((tweeng4 && tweeng4.isRunning) || win4.scale.x === 1)
  {  return;  }
  tweeng4 = game.add.tween(win4.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeWin4: function () {
  if (tweeng4.isRunning || win4.scale.x === 0)
  {  return;  }
  tweeng4 = game.add.tween(win4.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},
openLose4: function () {
  if ((tweeng4 && tweeng4.isRunning) || lose4.scale.x === 1)
  {  return;  }
  tweeng4 = game.add.tween(lose4.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeLose4: function () {
  if (tweeng4.isRunning || lose4.scale.x === 0)
  {  return;  }
  tweeng4 = game.add.tween(lose4.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},

//question5
openQuestion5: function () {
  if ((tweeng5 && tweeng5.isRunning) || question5.scale.x === 1)
  {  return;  }
  tweeng5 = game.add.tween(question5.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeQuestion5: function() {
  if (tweeng5.isRunning || question5.scale.x === 0)
  {  return;  }
  tweeng5 = game.add.tween(question5.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},
openWin5: function () {
  if ((tweeng5 && tweeng5.isRunning) || win5.scale.x === 1)
  {  return;  }
  tweeng5 = game.add.tween(win5.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeWin5: function () {
  if (tweeng5.isRunning || win5.scale.x === 0)
  {  return;  }
  tweeng5 = game.add.tween(win5.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
},
openLose5: function () {
  if ((tweeng5 && tweeng5.isRunning) || lose5.scale.x === 1)
  {  return;  }
  tweeng5 = game.add.tween(lose5.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
},
closeLose5: function () {
  if (tweeng5.isRunning || lose5.scale.x === 0)
  {  return;  }
  tweeng5 = game.add.tween(lose5.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
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

      game.physics.arcade.overlap(player, gem1, this.collideWithGem1, null, this);
      game.physics.arcade.overlap(player, gem2, this.collideWithGem2, null, this);
      game.physics.arcade.overlap(player, gem3, this.collideWithGem3, null, this);
      game.physics.arcade.overlap(player, gem4, this.collideWithGem4, null, this);
      game.physics.arcade.overlap(player, gem5, this.collideWithGem5, null, this);


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
        music.stop();
      }
      if (this.checkOverlap(bad2, player)) {
        player.kill();
        game.state.start('lose');
        music.stop();
      }
      if (this.checkOverlap(bad3, player)) {
        player.kill();
        game.state.start('lose');
        music.stop();
      }
      if (this.checkOverlap(bad4, player)) {
        player.kill();
        game.state.start('lose');
        music.stop();
      }
      if (this.checkOverlap(bad5, player)) {
        player.kill();
        game.state.start('lose');
        music.stop();
      }
      if (this.checkOverlap(bad6, player)) {
        player.kill();
        game.state.start('lose');
        music.stop();
      }
      if (this.checkOverlap(bad7, player)) {
        player.kill();
        game.state.start('lose');
        music.stop();
      }
      if (this.checkOverlap(bad8, player)) {
        player.kill();
        game.state.start('lose');
        music.stop();
      }
      if (this.checkOverlap(bad9, player)) {
        player.kill();
        game.state.start('lose');
        music.stop();
      }
      if (this.checkOverlap(bad10, player)) {
        player.kill();
        game.state.start('lose');
        music.stop();
      }

      //gems
      if (this.checkOverlap(gbad1, player)) {
        player.kill();
        game.state.start('lose');
        music.stop();
      }
      if (this.checkOverlap(gbad2, player)) {
        player.kill();
        game.state.start('lose');
        music.stop();
      }
      if (this.checkOverlap(gbad3, player)) {
        player.kill();
        game.state.start('lose');
        music.stop();
      }
      if (this.checkOverlap(gbad4, player)) {
        player.kill();
        game.state.start('lose');
        music.stop();
      }
      if (this.checkOverlap(gbad5, player)) {
        player.kill();
        game.state.start('lose');
        music.stop();
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
collideWithGem1: function (player, gem1)
{
  this.openQuestion1();
  closeButtonG1.events.onInputDown.add(this.closeQuestion1, this);
  closeButtonA1.events.onInputDown.add(this.closeWin1, this);
  closeButtonB1.events.onInputDown.add(this.closeLose1, this);
  optionA1.events.onInputDown.add(this.openLose1, this);
  optionB1.events.onInputDown.add(this.openWin1, this);
        gem1.kill();
        coinMusic.play();
        score += 50;
        scoreText.text = scoreString + score;
},
collideWithGem2: function (player, gem2)
{
  this.openQuestion2();
  closeButtonG2.events.onInputDown.add(this.closeQuestion2, this);
  closeButtonA2.events.onInputDown.add(this.closeWin2, this);
  closeButtonB2.events.onInputDown.add(this.closeLose2, this);
  optionA2.events.onInputDown.add(this.openLose2, this);
  optionB2.events.onInputDown.add(this.openWin2, this);
        gem2.kill();
        coinMusic.play();
        score += 50;
        scoreText.text = scoreString + score;
},
collideWithGem3: function (player, gem3)
{
  this.openQuestion3();
  closeButtonG3.events.onInputDown.add(this.closeQuestion3, this);
  closeButtonA3.events.onInputDown.add(this.closeWin3, this);
  closeButtonB3.events.onInputDown.add(this.closeLose3, this);
  optionA3.events.onInputDown.add(this.openWin3, this);
  optionB3.events.onInputDown.add(this.openLose3, this);
        gem3.kill();
        coinMusic.play();
        score += 50;
        scoreText.text = scoreString + score;
},
collideWithGem4: function (player, gem4)
{
  this.openQuestion4();
  closeButtonG4.events.onInputDown.add(this.closeQuestion4, this);
  closeButtonA4.events.onInputDown.add(this.closeWin4, this);
  closeButtonB4.events.onInputDown.add(this.closeLose4, this);
  optionA4.events.onInputDown.add(this.openLose4, this);
  optionB4.events.onInputDown.add(this.openWin4, this);
        gem4.kill();
        coinMusic.play();
        score += 50;
        scoreText.text = scoreString + score;
},
collideWithGem5: function (player, gem5)
{
  this.openQuestion5();
  closeButtonG5.events.onInputDown.add(this.closeQuestion5, this);
  closeButtonA5.events.onInputDown.add(this.closeWin5, this);
  closeButtonB5.events.onInputDown.add(this.closeLose5, this);
  optionA5.events.onInputDown.add(this.openWin5, this);
  optionB5.events.onInputDown.add(this.openLose5, this);
        gem5.kill();
        coinMusic.play();
        score += 50;
        scoreText.text = scoreString + score;
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
