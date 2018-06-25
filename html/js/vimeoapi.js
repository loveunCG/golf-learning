
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
			$.getScript(oEmbedEndpoint + '?url=' + url + '&width=1920&height=680&callback=' + oEmbedCallback);
		}
		
        
		function setupGallery(videos) {

			// Set the user's thumbnail and the page title
			//$('#stats').prepend('<img id="portrait" src="' + videos[0].user_portrait_medium + '" />');
			//$('#stats h2').text(videos[0].user_name + "'s Videos");

			// Load the first video
			getVideo(videos[0].url);

			// Add the videos to the gallery
			for (var i = 0; i < videos.length; i++) {
				var html = '<li><a href="' + videos[i].url + '">';
				html += '' + videos[i].title + '</a><input type="checkbox" name="checked"/><i class="fas  checked"></i><i class="fas fa-plus"></i></li>';
				$('.elements.module1 ul').append(html);
			
			}

			// Switch to the video when a thumbnail is clicked
			$('.elements.module1 li a').click(function(event) {
				event.preventDefault();
				getVideo(this.href);
				$('#vimeoapi .player').show();
				$(window).scrollTop(0);
				return false;
				
			});

		}

		function switchVideo(video) {
			$('#player').html(unescape(video.html));
		}
