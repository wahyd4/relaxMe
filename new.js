(function(){

	document.getElementById('fullscreen').addEventListener('click',function(){
		
		var documentEle = document.documentElement;
		documentEle.webkitRequestFullScreen(); //chrome
	},false);

	
})();
