$(document).ready(function() {


	var getTaggedPics = function(tagname) {
		$.ajax({
			type: 'GET',
			tag: tagname,
			dataType: 'jsonp',
			url: 'https://api.instagram.com/v1/tags/'+tagname+'/media/recent?client_id=29a2e1bc7f0542cc8926cdee3f5e5053'
		})
		.done(function(getTaggedPics){
			console.log(getTaggedPics);
			for (var x=0; x <= 1; x++) {
				var mediaId = '743524583473156693_32643075';
				//My pic's media id for testing: 743524583473156693_32643075
				$.ajax({
					type: 'POST',
					dataType: "json",
					access_token: '32643075.29a2e1b.3435c0c616324674899368e62616e3ca',
					url: 'https://api.instagram.com/v1/media/743524583473156693_32643075/likes'
				}).done(function(){
					console.log('liked');
				}).fail(function(){
					console.log('error');
				})
			};
		})
	}

	$('#clicker').click(function(){
		getTaggedPics('gopro');
	});

})