"use strict";

window.onload = function() {

  var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render});

  function preload() {

      game.load.spritesheet('coin', 'assets/sprites/coin.png', 32, 32);
      game.load.tilemap('desert', 'assets/tilemaps/maps/desert.json', null, Phaser.Tilemap.TILED_JSON);
      game.load.image('tiles', 'assets/tilemaps/tiles/tmw_desert_spacing.png');
      game.load.image('car', 'assets/sprites/car90.png');
      //  Firefox doesn't support mp3 files, so use ogg
    game.load.audio('boden', ['assets/audio/bodenstaendig_2000_in_rock_4bit.mp3', 'assets/audio/bodenstaendig_2000_in_rock_4bit.ogg']);

  }

  var sprite;
  var coins;
  var music;

  var map;
  var layer;


  function create() {

      game.stage.backgroundColor = '#2d2d2d';

      //  This will check Group vs. Group collision (bullets vs. veggies!)

      game.physics.startSystem(Phaser.Physics.ARCADE);

      music = game.add.audio('boden');

      music.play();


      map = game.add.tilemap('desert');

      map.addTilesetImage('Desert', 'tiles');
  //    map.addTilesetImage('coins');

      map.setCollisionBetween(1,3);
      map.setCollisionBetween(9,11);
      map.setCollisionBetween(17, 21);
      map.setCollisionBetween(31, 48);


      layer = map.createLayer('Ground');
      //layer1 = map.createLayer('veggies');

      layer.resizeWorld();

      // marker = game.add.graphics();
      // marker.lineStyle(2, 0x00bff3, 1);
      // marker.drawRect(0, 0, 32 * 6, 32 * 6);

      coins = game.add.group();
      coins.enableBody = true;
      coins.physicsBodyType = Phaser.Physics.ARCADE;

      map.createFromObjects('Object Layer 1', 34, 'coin', 0, true, false, coins);

      for (var i = 0; i < 50; i++)
      {
          var c = coins.create(game.world.randomX, Math.random() * 500, 'coin', game.rnd.integerInRange(0, 36));
          // c.name = 'veg' + i;
          // c.body.immovable = true;
      }

      coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coins.callAll('animations.play', 'animations', 'spin');

      sprite = game.add.sprite(450, 80, 'car');
      sprite.anchor.setTo(0.5, 0.5);

      game.physics.arcade.enable(sprite);
      game.camera.follow(sprite);

      cursors = game.input.keyboard.createCursorKeys();
  }

  function update() {

      game.physics.arcade.collide(sprite, layer);

      game.physics.arcade.overlap(sprite, coins, collectCoin, null, this);
      // sprite.body.velocity.x = 0;
      // sprite.body.velocity.y = 0;
      // sprite.body.angularVelocity = 0;

      // if (cursors.left.isDown)
      // {
      //     sprite.body.angularVelocity = -200;
      // }
      // else if (cursors.right.isDown)
      // {
      //     sprite.body.angularVelocity = 200;
      // }
      //
      // if (cursors.up.isDown)
      // {
      //     sprite.body.velocity.copyFrom(game.physics.arcade.velocityFromAngle(sprite.angle, 300));
      // }

      //  only move when you click
    if (game.input.mousePointer.isDown)
    {
        //  400 is the speed it will move towards the mouse
        game.physics.arcade.moveToPointer(sprite, 400);

        //  if it's overlapping the mouse, don't move any more
        if (Phaser.Rectangle.contains(sprite.body, game.input.x, game.input.y))
        {
            sprite.body.velocity.setTo(0, 0);
        }
    }
    else
    {
        sprite.body.velocity.setTo(0, 0);
    }

  //    game.physics.arcade.overlap(sprite, veggies, collisionHandler, null, this);
  }
  //  Called if the bullet hits one of the veg sprites
  function collectCoin (car, coin) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }

  function changeVolume(pointer) {

    if (pointer.y < 100)
    {
        music.mute = false;
    }
    else if (pointer.y < 300)
    {
        music.volume += 0.1;
    }
    else
    {
        music.volume -= 0.1;
    }

}
function render() {
    game.debug.soundInfo(music, 20, 32);
}

};
