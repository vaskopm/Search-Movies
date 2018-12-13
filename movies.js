function doElements(title, year, description, rating){
	
	return (
		'<div class="jumbotron"><h3>' + title + ' (' + year + ')</h3><p>' +
		description + '</p><br/' +	'<span class="badge badge-secondary">' + rating + '</span><hr/></div>'	
	);
	
}

function showMovies(movies){
	
	var contents = [];
	
	for(i = 0; i < movies.length; i++){
		
		var title = ((movies[i].title != null) && (movies[i].title != ""))  ? movies[i].title : "No title";
		var year = ((movies[i].year != null) && (movies[i].year != "")) ? movies[i].year : "No year";
		var description = ((movies[i].plot != null) && (movies[i].plot != "")) ? movies[i].plot : "No description";
		var rating = ((movies[i].rating != null) && (movies[i].rating != "")) ? ("Rating: "  + movies[i].rating) : "No rating";
		
		contents.push(doElements(title, year, description, rating));
	}
	
	$("#divResult").replaceWith('<div id="divResult">' + contents + '</div>');
}

function callMovieInfo(options){
	
	$.ajax(options)
	.done(function(response){
		showMovies(response.data.movies);
		//console.log(response);
	})
	.fail(function(){
		alert("error");
	});
}

function getMovieInfo(){
	
	var title = $("#inputMovieName").val();
	
	var options = {
		url:"http://api.myapifilms.com/imdb/idIMDB?title=" + title + "&token=138d4f6a-dc9a-413d-80e6-d592cee1760f",
		type: "GET",
		dataType: "JSONP"
	};
	
	callMovieInfo(options);
}