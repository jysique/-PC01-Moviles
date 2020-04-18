Preload = function(game){}

Preload.prototype = {
	preload:function(){
		//MANDA LA CONFIGURACION A TODO
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //NONE por defecto
	    this.scale.pageAlignHorizontally = true; //centrar el juego
		this.scale.pageAlignVertically = true; //centrar el juego
		

		this.load.image("background","assets/images/background.png"); 
		this.load.image("title","assets/images/title.png"); 
		this.load.image("scorebg","assets/images/score-bg.png"); 
		this.load.spritesheet('buttonStart', 'assets/images/button_start.png',401,143,3);
		this.load.spritesheet('monster', 'assets/images/monster-idle.png',103,131,13);
		this.load.spritesheet('candy', 'assets/images/candy.png',82,98,5);
		this.load.image("floor","assets/images/floor.png"); 
		this.load.image("gameover","assets/images/gameover.png"); 

	},
	create:function(){
		this.state.start("Menu");
	}
}