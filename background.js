(function(){
	setInterval(function(){
		var date = new Date();
		var seconds = date.getSeconds();
		if(seconds >= 40 && seconds < 50){
			createRelaxTab();	
		}else{
		//	alert(seconds);
		}
		
	},10000);

	function createRelaxTab(){
		var havePermission = window.webkitNotifications.checkPermission();

		if(havePermission === 0){
			var notification = webkitNotifications.createHTMLNotification(
			  'notification.html'
			);
			notification.show();	

			setTimeout(function(){
				notification.close();
			},6000);

			
		}else{
			 window.webkitNotifications.requestPermission();
		}
	}
	
})();