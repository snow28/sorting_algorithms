AmCharts.makeChart("chartdiv",
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
			"text": "Comparing algoritms in small quantity of elements"
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
			"category": "10",
			"Bubble Sort": "0.855",
			"Merge Sort": "3.42",
			"Quick Sort": "0.42",
			"Insert Sort": "0.855"
		},
		{
			"category": "20",
			"Bubble Sort": "2.13",
			"Merge Sort": "7.69",
			"Quick Sort": "1.28",
			"Insert Sort": "1.71"
		},
		{
			"category": "40",
			"Bubble Sort": "7.69",
			"Merge Sort": "14.11",
			"Quick Sort": "2.56",
			"Insert Sort": "3.84"
		},
		{
			"category": "100",
			"Bubble Sort": "34.21",
			"Merge Sort": "36.35",
			"Quick Sort": "6.84",
			"Insert Sort": "16.25"
		},
		{
			"category": "200",
			"Bubble Sort": "135.13",
			"Merge Sort": "73.98",
			"Quick Sort": "14.54",
			"Insert Sort": "78.688"
		}
	]
}
			);