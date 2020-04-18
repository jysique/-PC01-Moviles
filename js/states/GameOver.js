GameOver = function(game){}

GameOver.prototype = { //propiedad del objecto Game (propio de JS )
	create:function(){
        this.background = this.add.sprite(0,0,'background');
        

        this.buttonGameOver = this.game.add.sprite(10,10,'gameover');
        this.buttonGameOver.anchor.setTo(0.5);
        this.buttonGameOver.x = this.world.centerX / 2;
        this.buttonGameOver.y = this.world.centerY;
        this.buttonGameOver.inputEnabled = true;
        this.buttonGameOver.events.onInputDown.add(this.goAgain,this);
    },
    goAgain:function(){
        this.state.start('Game');
    }
}
