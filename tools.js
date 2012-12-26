(function(){
/*
	document.getElementById('fullscreen').addEventListener('click',function(){
		
		var documentEle = document.documentElement;
		documentEle.webkitRequestFullScreen(); //chrome
	},false);*/

	document.getElementById('relax').addEventListener('click',function(){
		var tab = chrome.tabs.create({
			    selected: true,
			    url: 'new.html'
			  },function(tab){
			  	
			  });
	},false);
})();