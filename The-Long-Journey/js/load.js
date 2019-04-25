"use strict";

GameStates.makeLoad = function(game, shared) {
  return {

  preload: function () {
    var loadingLabel = game.add.text(80, 150, 'Loading...', {font: '30px Courier', fill: '#ffffff'});



        game.load.tilemap('map', 'assets/tilemaps/csv/catastrophi_level2.csv', null, Phaser.Tilemap.CSV);

        game.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');

        game.load.spritesheet('player', 'assets/sprites/spaceman.png', 16, 16);

        game.load.image('popup1', 'assets/space/popup1.png');
        game.load.image('popup2', 'assets/space/popup2.jpg');
        game.load.image('popup3', 'assets/space/popup3.jpg');
        game.load.image('popup4', 'assets/space/popup4.jpg');
        game.load.image('popup5', 'assets/space/popup5.jpg');
        game.load.image('popup6', 'assets/space/popup6.png');
        game.load.image('popup7', 'assets/space/popup7.png');
        game.load.image('popup8', 'assets/space/popup8.jpg');
        game.load.image('popup9', 'assets/space/popup9.jpg');
        game.load.image('popup10', 'assets/space/popup10.png');

        game.load.image('question1', 'assets/space/question1.png');
        game.load.image('question2', 'assets/space/question2.png');
        game.load.image('question3', 'assets/space/question3.png');
        game.load.image('question4', 'assets/space/question4.png');
        game.load.image('question5', 'assets/space/question5.png');

        game.load.image('win1', 'assets/space/win1.png');
        game.load.image('win2', 'assets/space/win2.png');
        game.load.image('win3', 'assets/space/win3.png');
        game.load.image('win4', 'assets/space/win4.png');
        game.load.image('win5', 'assets/space/win5.png');

        game.load.image('lose1', 'assets/space/lose1.png');
        game.load.image('lose2', 'assets/space/lose2.png');
        game.load.image('lose3', 'assets/space/lose3.png');
        game.load.image('lose4', 'assets/space/lose4.png');
        game.load.image('lose5', 'assets/space/lose5.png');

        game.load.image('gem1', 'assets/space/gem1.png');
        game.load.image('gem2', 'assets/space/gem1.png');
        game.load.image('gem3', 'assets/space/gem1.png');
        game.load.image('gem4', 'assets/space/gem1.png');
        game.load.image('gem5', 'assets/space/gem1.png');

        game.load.image('gbad1', 'assets/sprites/space-baddie.png');
        game.load.image('gbad2', 'assets/sprites/space-baddie.png');
        game.load.image('gbad3', 'assets/sprites/space-baddie.png');
        game.load.image('gbad4', 'assets/sprites/space-baddie.png');
        game.load.image('gbad5', 'assets/sprites/space-baddie.png');

        game.load.image('close', 'assets/sprites/orb-red.png');

        game.load.image('bad1', 'assets/sprites/space-baddie.png');
        game.load.image('bad2', 'assets/sprites/space-baddie.png');
        game.load.image('bad3', 'assets/sprites/space-baddie.png');
        game.load.image('bad4', 'assets/sprites/space-baddie.png');
        game.load.image('bad5', 'assets/sprites/space-baddie.png');
        game.load.image('bad6', 'assets/sprites/space-baddie.png');
        game.load.image('bad7', 'assets/sprites/space-baddie.png');
        game.load.image('bad8', 'assets/sprites/space-baddie.png');
        game.load.image('bad9', 'assets/sprites/space-baddie.png');
        game.load.image('bad10', 'assets/sprites/space-baddie.png');

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
        game.load.audio('coin', 'assets/audio/coin.wav');

        game.load.video('wormhole', 'assets/video/wormhole.mp4');
  },

  create: function () {
    game.state.start('menu');
  }
};
};
