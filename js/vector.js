AmCharts.makeChart("chartdiv",
                {
                    "type": "serial",
                    "categoryField": "category",
                    "startDuration": 1,
                    "theme": "default",
                    "categoryAxis": {
                        "gridPosition": "start",
                        "position": "top"
                    },
                    "trendLines": [],
                    "graphs": [
                        {
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "bullet": "round",
                            "id": "AmGraph-1",
                            "title": "std::vector",
                            "valueField": "column-1"
                        },
                        {
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "bullet": "square",
                            "id": "AmGraph-2",
                            "title": "My::vector",
                            "valueField": "column-2"
                        }
                    ],
                    "guides": [],
                    "valueAxes": [
                        {
                            "id": "ValueAxis-1",
                            "title": "Time in milliseconds"
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
                            "id": "Title-1",
                            "size": 19,
                            "text": "Comparing std::vector with my implementation"
                        },
                        {
                            "alpha": 0.36,
                            "id": "Title-2",
                            "text": " push, erase"
                        }
                    ],
                    "dataProvider": [
                        {
                            "category": "10, 2",
                            "column-1": "0.0167",
                            "column-2": "0.000428"
                        },
                        {
                            "category": "100, 10",
                            "column-1": "0.0445",
                            "column-2": "0.0047"
                        },
                        {
                            "category": "500, 50",
                            "column-1": "0.0676",
                            "column-2": "0.095"
                        },
                        {
                            "category": "1.000 , 100",
                            "column-1": "0.1",
                            "column-2": "0.365"
                        },
                        {
                            "category": "2.000 , 200",
                            "column-1": "1.45",
                            "column-2": "1.4"
                        }
                    ]
                }
            );