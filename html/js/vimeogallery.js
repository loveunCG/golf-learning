
        /*
            CUSTOM API CALL DEVELOPED BY SAJAD ALI MEMON
        */
      
        var apiEndpoint = 'http://vimeo.com/api/v2/';
		var oEmbedEndpoint = 'http://vimeo.com/api/oembed.json'
		var oEmbedCallback = 'switchVideo';
		var videosCallback = 'setupGallery';
		var vimeoUsername = 'user25505458'; /* heye user name which can be provided by vimeo */

		// Get the user's videos
		$(document).ready(function() {
            $.getScript(apiEndpoint + vimeoUsername + '/videos.json?callback=' + videosCallback);
           
        });

		function getVideo(url) {
			$.getScript(oEmbedEndpoint + '?url=' + url + '&maxwidth=390&maxheight=250&callback=' + oEmbedCallback);
		}
		
        
		function setupGallery(videos) {

			// Set the user's thumbnail and the page title
			//$('#stats').prepend('<img id="portrait" src="' + videos[0].user_portrait_medium + '" />');
			//$('#stats h2').text(videos[0].user_name + "'s Videos");

			// Load the first video
			getVideo(videos[0].url);

			// Add the videos to the gallery
			for (var i = 0; i < videos.length; i++) {
				var html = '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">'
								+'<div class="item videoid-'+videos[i].id+'">'
									+'<div class="head">'
										+'<span class="left">VLOG #123</span>'
										+'<span class="right">'
											+'<a href="#"><i class="fas fa-heart"></i>FAVORITE</a>'
											+'<a href="#"><i class="fas fa-eye"></i>UNVIEWED</a>'
										+'</span>'
									+'</div>'
									+'<div class="body">'
										+'<h5>'+videos[i].title +'</h5>'
										+'<p>'+videos[i].description +'</p>'
									+'</div>'	
								+'</div>'
							+'</div>'
			
				$('#vimoegalley').append(html);
				
				console.log(videos);
			
			}

			// Switch to the video when a thumbnail is clicked
			$('.elements.module1 li a').click(function(event) {
				event.preventDefault();
				getVideo(this.href);
				return false;
			});

		}

		function switchVideo(video) {
			//$('#player').html(unescape(video.html));
			$('#vimoegalley > div').each(function(){
				var itemdiv  = $(this).find('.item .head');
				$('<div id="video">'+ unescape(video.html) +'</div>').insertAfter(itemdiv);
				console.log(itemdiv);
			});
		}
