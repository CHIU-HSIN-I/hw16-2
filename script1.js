Highcharts.chart('container', {

    title: {
        text: '台灣100-111年入境觀光客人數折線圖(依地區)',
        
    },

    subtitle: {
        text: '資料來源：中華民國觀光署',
       
    },

    yAxis: {
        title: {
            text: '入境觀光人數'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: '資料範圍民國100年到111年'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 100
        }
    },

    series: [{
        name: '亞州地區',
        data: [5264210, 6473684, 7138786, 8970186,9469559,9624793,
               9585635,9845761,10561699,1183987,105996,696792 ]
    }, {
        name: '非洲地區',
        data: [8938, 8865, 8795, 9960, 10160, 10668, 11682, 
               12037, 12537, 2502, 901, 3410]
    }, {
        name: '美洲地區',
        data: [495136 ,497597 ,502446, 565375, 588192, 649337, 
               702049, 732478, 766254, 106117, 14642, 108842]
    }, {
        name: '大洋洲地區',
        data: [70540, 75414, 77722, 93119, 90813, 98226,
               108344, 121697, 134860, 22606, 1358, 14920]
    }, {
        name: '歐洲地區',
        data: [212148, 218045, 223062, 264880, 274035,
               299756, 330090, 350094, 386752, 59512, 16413,
               65990]
    }, {
        name: '其他未列明',
        data: [36512, 37865, 65469, 6684, 7026, 7499, 1801,
               4640, 2003, 3137, 1169, 6008]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});