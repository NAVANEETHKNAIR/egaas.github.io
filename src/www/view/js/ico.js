$(function () {
	'use strict';
	
	$(".ico .done article div .list a").on('click', function () {
		return false;
	});
	
	$("#distribution").highcharts({
        colors: ['#16b6e8', '#e5e5e5'],
        credits: { enabled: false },
        tooltip: { enabled: false },
        chart: {
               renderTo: 'container',
               backgroundColor: 'rgba(255, 255, 255, 0.1)',
               type: 'pie',
               margin: [0, 0, 0, 0],
               spacingTop: 0,
               spacingBottom: 0,
               spacingLeft: 0,
               spacingRight: 0
        },
        title: { text: null },
        plotOptions: {
               pie: {
                   allowPointSelect: false,
                   size: '100%',
                   borderWidth: 0,
                   dataLabels: {
					   enabled: false,
					   distance: -80,
					   style: {
						   fontFamily:'PFSquareSansPro-Bold',
						   lineHeight: '48px',
						   fontSize: '48px',
						   textShadow: 'none'
					   }
				   }
               },
               series: {
                  states: {
                      hover: {
                          enabled: false
                      }
                  }
              }
       },
       series: [{
               showInLegend: false,
               type: 'pie',
               data: [
                     ['65%', 65],
                     ['35%', 35]
               ]
       }]
    });
	
	$("#funds").highcharts({
        colors: ['#16b6e8', '#d9dada', '#c5c6c6', '#b2b3b3', '#9d9e9e'],
        credits: { enabled: false },
        tooltip: { enabled: false },
        chart: {
               type: 'pie',
			   plotBorderWidth: 0,
               margin: [0, 0, 0, 0],
               spacingTop: 0,
               spacingBottom: 0,
               spacingLeft: 0,
               spacingRight: 0
        },
        title: { text: null },
        plotOptions: {
               pie: {
                   allowPointSelect: false,
                   size: '100%',
                   borderWidth: 0,
                   dataLabels: {
					   enabled: false
				   }
               },
               series: {
                  states: {
                      hover: {
                          enabled: false
                      }
                  }
              }
       },
       series: [{
               showInLegend: false,
               type: 'pie',
			   startAngle: 180,
               data: [
                     ['60%', 60],
					 ['10%', 10],
					 ['10%', 10],
					 ['10%', 10],
                     ['10%', 10]
               ]
       }]
    });
	
	jQuery("#nanoGallery").nanoGallery({
		//breadcrumbAutoHideTopLevel: true,
		galleryToolbarHideIcons: true,
		breakpointSizeSM : 720, breakpointSizeME : 960, breakpointSizeLA : 1000, breakpointSizeXL : 1200,
		thumbnailAlbumDisplayImage: true,
		thumbnailWidth: '85 SM220 ME220 LA300 XL300',
		thumbnailHeight: '71 SM183 ME183 LA250 XL250',
		thumbnailLabel: {
			display:false,
			align:'center',
			position:'overImageOnMiddle'
		},
		thumbnailL1Label:{
			display:false,
			align:'center',
			position:'overImageOnMiddle',
			displayDescription: false,
			hideIcons: true
		},
		maxItemsPerLine: 3,
		paginationMaxLinesPerPage: 1,
		paginationDots: true,
		locationHash: false,
		imageTransition : 'slide',
		touchAnimationL1: true,
		touchAnimation:false,
		thumbnailHoverEffect:[{'name':'imageScale150', 'duration':700},{'name':'labelAppear75', 'duration':400},{'name':'descriptionAppear', 'duration':1000}],
		itemsBaseURL:'/images/'
	});
});