"use strict";

GameStates.makeMenu = function (game, shared) {
  var video, sprite, playPromise;
return {
  create: function () {
    video = game.add.video('wormhole');
    sprite = video.addToWorld(game.world.centerX, game.world.centerY, 0.5, 0.5, 2, 2);
    playPromise = video.play(true);

    var nameLabel = game.add.text(80, 80, 'A Long Journey', {font: '50px Arial', fill: '#ffffff'});

    var startLabel = game.add.text(80, game.world.height-80, 'press the "W" key to start', {font: '25px Arial', fill: '#ffffff'});

    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

    if(playPromise !== undefined) {
        game.input.onDown.add(this.end, this);
    }
    wkey.onDown.addOnce(this.start, this);

  },
  end: function() {
    video.pause = (video.paused) ? false : true;
  },
  start: function () {
    game.state.start('play');
  }
};
};
