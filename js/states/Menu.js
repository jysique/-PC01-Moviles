Menu = function(game){}

Menu.prototype = { //propiedad del objecto Game (propio de JS )
	create:function(){
        this.background = this.game.add.sprite(0,0,'background');

        this.buttonStart = this.game.add.sprite(10,10,'buttonStart');
        this.buttonStart.anchor.setTo(0.5);
        this.buttonStart.x = this.world.centerX;
        this.buttonStart.y = this.world.centerY + 100;
        this.buttonStart.inputEnabled = true;
        this.buttonStart.events.onInputDown.add(this.goGame,this);

        this.title = this.game.add.sprite(0,0,'title');
        this.title.anchor.setTo(0.5);
        this.title.x = this.world.centerX;
        this.title.y = 250;



    },
    goGame:function(){
        this.state.start('Game');
    }
    
}
