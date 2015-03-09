$(function(){
    
	var MY_MAPTYPE_ID = 'new_york_style';
    var markersBuffer = [];
    var infoWindows = [];
    var points = [];


	var mapOptions = {
		center: new google.maps.LatLng(40.705538, -74.009758),
		zoom: 16,
		scrollwheel: false,
		mapTypeControlOptions: {
	      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
	    },
	    mapTypeId: MY_MAPTYPE_ID
	};
    
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    
    initialize();
    
	$(document).ready(function(){
		if( $('#map-canvas').length==0 ){
			return;
		}
        
		$('.main-links li a').on('click', function(e){
			e.preventDefault();
            
            clearOverlays();
            //alert('d');
            
			var place = $(this).data('place');
			
			
            $('.submenu-links ul[data-place!="'+ place +'"]').removeClass('current-area');
            
			
            $('.submenu-links ul[data-place="'+ place +'"]').addClass('current-area');
            
			
            
    		var elem;
    		var idx = 1;
    		for( var i=0; i<$('.submenu-links ul.current-area li').length; i++){
    			for( var j=0; j<$('.submenu-links ul.current-area li:eq('+ i +')').find('a').length; j++){
    				elem = $('.submenu-links ul.current-area li:eq('+ i +')').find('a:eq('+ j +')');
    				points.push({ 
    					lat: elem.data('lat'), 
    					long: elem.data('lng'), 
    					title: elem.data('name'), 
    					description: elem.data('address'),
						web: elem.data('web'), 
    					reference: idx++
    				});
    			}
    		};

            
            setPoints(points);
            
		});

		$('.submenu-links li a').on('click',function(e){
			e.preventDefault();
		});
        
		$('.submenu-links a.btn-close').on('click',function(e){
			e.preventDefault();
			
		});

		$('.submenu-links li a').on('click',function(e){
			e.preventDefault();

			var idx = ($(this).data('index')) - 1;
			var marker = points[idx].marker;
			//trigger an event to show the marker in the map
			new google.maps.event.trigger(marker, 'click' );
		});
		
		
		$('.submenu-links li a').on('click',function(e){
			e.preventDefault();

			var idx = ($(this).data('index')) - 1;
			var marker = points[idx].marker;
			//trigger an event to show the marker in the map
			new google.maps.event.trigger(marker, 'click' );
		});
		
        
		


		//initialize( points );
	});

    
	function initialize( points ) {


		var mapStyles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "1"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "color": "#e1e1e1"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "3.27"
            },
            {
                "color": "#5f5f5f"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e1e1e1"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "0.84"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "weight": "1"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#999999"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#5e5e5e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "0.63"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "1"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "01"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ace9f4"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

		
       
		var styledMapOptions = {
			name: "The New York Map"
		};

		var customMapType = new google.maps.StyledMapType(mapStyles, styledMapOptions);

		map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
		

        
		var markers = [];
		var point = {};
		var point_latlng = {};
		var icon_image = "";

		//special marker for the paris
		point_latlng =  new google.maps.LatLng(40.705538, -74.009758);
		markers = new google.maps.Marker({
			position: point_latlng,
			map: map,
			icon: 'img/map-point.png'
		});
		
	}
    
    
    function setPoints(points) {
        
		var boxText = document.createElement("div");
	        boxText.style.cssText = "padding: 20px; background:#7EC9CC;";
	        boxText.innerHTML = '<div class="infobox_title" style="padding-bottom: 2px; margin-bottom: 0px; font-size: 14px; line-height: 16px; color: #4d4d4d; width: 100%; font-weight: 800;">Title</div><p class="infobox_text" style="width:100%; color: #4d4d4d; font-size: 13px; line-height: 13px; border-bottom: 1px solid #4d4d4d; padding-bottom: 10px;">This is a description</p><a href="#" target="_blank" class="infobox_web" style="width:100%; text-decoration: underline; color: #4d4d4d; font-size: 13px; line-height: 13px; padding-bottom: 10px;">VISIT WEBSITE!</a>';
		var infoBoxOptions = {
			 content: boxText
			,disableAutoPan: false
			,maxWidth: 0
			,pixelOffset: new google.maps.Size(-15, -9)
			,zIndex: null
			,boxStyle: { 
			  background: "url('" + template_uri + "img/arrow-location.png') 12px 21px no-repeat"
			  ,width: "280px"
			  ,padding: "0px 0px 0px 20px"
			 }
			 ,pixelOffset 			:new google.maps.Size(5, -35)
			,closeBoxURL: template_uri + "img/btn-close.png"
			,closeBoxMargin: "12px 12px 0 0"
			,infoBoxClearance: new google.maps.Size(1, 1)
			,isHidden: false
			,pane: "floatPane"
			,enableEventPropagation: false
		};
		
		
		var ib = new InfoBox(infoBoxOptions);
        
		infoWindows.push(ib);
		
		var full_markers = [];
		if($(window).width()>266){
			for(var i=0; i<points.length; i++){
				point = points[i];
				point_latlng =  new google.maps.LatLng(point.lat, point.long);
				markers = new google.maps.Marker({
					position: point_latlng,
					map: map,
					infobox_title: point.title,
					infobox_text: point.description,
					infobox_web: point.web,
					icon: template_uri + "img/points.png"

				});
				google.maps.event.addListener(markers, 'click', function(info){
					$(boxText).find('.infobox_title').html(this.infobox_title);
					$(boxText).find('.infobox_text').html(this.infobox_text);
					$(boxText).find('.infobox_web').attr('href', this.infobox_web);
					ib.open(map, this);
					map.panTo( this.getPosition() );
				});

				points[i].marker = markers;
                markersBuffer.push(markers);
			}
		} else {
			//only show the 20x building
			point_latlng =  new google.maps.LatLng(40.705538, -74.009758);
			map.setCenter(point_latlng);
		}
        
    }
    
    function clearOverlays() {
      points = [];
      for (var i = 0; i < markersBuffer.length; i++ ) {
        markersBuffer[i].setMap(null);
      }
      markersBuffer.length = 0;
      
      for (var i=0;i<infoWindows.length;i++) {
         infoWindows[i].close();
      }
      
    }
    
});