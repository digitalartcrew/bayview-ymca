app.directive('newsSearch', function(){
	return {
		templateUrl: './views/news.html'
	}
});

app.directive('savedLocations', function(){
	return {
		templateUrl: './views/locations.html'
	}
});

app.directive('inboxMessages', function(){
	return {
		templateUrl: './views/inbox-messages.html'
	}
});
