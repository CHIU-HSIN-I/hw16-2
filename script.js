Highcharts.chart('container1', {
    chart: {
        type: 'pie'
    },
    title: {
        text: '111年入境台灣觀光客人數圓餅圖'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        '資料來源：中華民國觀光署'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 50
            }, {
                enabled: true,
                distance: -35,
                format: '{point.percentage:.3f}%',
                style: {
                    fontSize: '1em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            
            data: [
                {
                    name: '亞州地區',
                    y: Math.round(696792/895962*100*100)/100
                },
                {
                    name: '非洲地區',
                    y: Math.round(3410/895962*100*100)/100
                },
                {
                    name: '美洲地區',
                    sliced: true,
                    selected: true,
                    y: Math.round(108842/895962*100*100)/100
                }, 
                {
                    name: '大洋洲地區',
                    y: Math.round(14920/895962*100*100)/100
                },
                {
                    name: '歐洲地區',
                    sliced: true,
                    selected: true,
                    y: Math.round(65990/895962*100*100)/100
                } ,
                {
                    name: '其他未列明',
                    y: Math.round(6008/895962*100*100)/100
                }
            ]
        }
    ]
});
