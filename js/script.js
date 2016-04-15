 document.addEventListener('DOMContentLoaded', function () {
	var params = window.location.search;
	params.replace("?", '').split('&').forEach(function(item){
		if (item === 'particle=true'){
			setTimeout(function(){
				particleground(document.getElementById('particles'), {
		        	dotColor: '#C0DEFC',
			        lineColor: '#c0c0fc',
			        proximity: 300,
			        density: 30000
			    });
			}, 0)
		}
	});
}, false);