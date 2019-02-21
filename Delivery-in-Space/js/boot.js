"use strict";

var GameStates = {};

GameStates.makeBoot = function(game) {
  return {
    create: function () {
      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.state.start('load');
    }
  };
};
