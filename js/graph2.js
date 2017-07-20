AmCharts.makeChart("chartdiv2",
				{
	"type": "serial",
	"categoryField": "category",
	"plotAreaBorderAlpha": 1,
	"startDuration": 1,
	"handDrawn": true,
	"theme": "default",
	"categoryAxis": {
		"gridPosition": "start"
	},
	"chartCursor": {
		"enabled": true
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonColor": "#924D4D",
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletHitAreaSize": 1,
			"cornerRadiusTop": 1,
			"id": "AmGraph-1",
			"title": "Bubble Sort",
			"valueField": "Bubble Sort"
		},
		{
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "square",
			"id": "AmGraph-2",
			"title": "Insert Sort",
			"valueField": "Insert Sort"
		},
		{
			"balloonColor": "#924D4D",
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletHitAreaSize": 1,
			"cornerRadiusTop": 1,
			"id": "AmGraph-3",
			"title": "Merge Sort",
			"valueField": "Merge Sort"
		},
		{
			"balloonColor": "#924D4D",
			"balloonText": "[[title]] of [[category]]:[[value]]",
			"bullet": "round",
			"bulletHitAreaSize": 1,
			"cornerRadiusTop": 1,
			"id": "AmGraph-4",
			"title": "Quick Sort",
			"valueField": "Quick Sort"
		}
	],
	"guides": [],
	"valueAxes": [
		{
			"id": "ValueAxis-1",
			"title": "Time in mcs"
		}
	],
	"allLabels": [],
	"balloon": {},
	"legend": {
		"enabled": true,
		"useGraphSettings": true
	},
	"titles": [
		{
			"alpha": 0.56,
			"color": "#27AA31",
			"id": "Title-1",
			"size": 19,
			"text": "Comparing algoritms with big quantity of elements"
		}
	],
	"dataProvider": [
		{
			"category": "5",
			"Bubble Sort": "0.42",
			"Merge Sort": "2.13",
			"Quick Sort": "0.55",
			"Insert Sort": "0.427"
		},
		{
			"category": "500",
			"Bubble Sort": "761",
			"Merge Sort": "190",
			"Quick Sort": "40.6",
			"Insert Sort": "435"
		},
		{
			"category": "1000",
			"Bubble Sort": "2987",
			"Merge Sort": "390",
			"Quick Sort": "85.1",
			"Insert Sort": "1897"
		},
		{
			"category": "2000",
			"Bubble Sort": "11960=",
			"Merge Sort": "772",
			"Quick Sort": "175.33",
			"Insert Sort": "3.84="
		},
		{
			"category": "3000",
			"Bubble Sort": "28038=",
			"Merge Sort": "1199",
			"Quick Sort": "280.54",
			"Insert Sort": "16.25="
		}
	]
}
			);