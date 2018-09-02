var waveTicker = function (data) {
    if (data.hasOwnProperty('blinkStrength')) {
        $('#blinkStrength').text(data.blinkStrength);
        $('#snackbar').empty().text('Blink detected: Next slide');
        // if(data.blinkStrength>70){
        //     $('.carousel').carousel('next');
        // }
    }

    if (data.hasOwnProperty('eSense')) {
        $('#attention').text(data.eSense.attention);
        $('#snackbar').empty().text('Attention changed: Next slide');
        if (data.eSense.attention > 40 && data.eSense.attention < 50) {
            $('.carousel-item').removeClass('nineties xpro inkwell aden').addClass('nineties');
        } else if (data.eSense.attention > 50 && data.eSense.attention < 60) {
            $('.carousel-item').removeClass('nineties xpro inkwell aden').addClass('xpro');
        } else if (data.eSense.attention > 60 && data.eSense.attention < 70) {
            $('.carousel-item').removeClass('nineties xpro inkwell aden').addClass('inkwell');
        } else if (data.eSense.attention > 70) {
            $('.carousel-item').removeClass('nineties xpro inkwell aden').addClass('aden');
        } else {
            $('.carousel-item').removeClass('nineties xpro inkwell aden');
        }
    }
};
var drawGraph = function (arr) {
    var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];
    var chLine = $('#chLine');

    if (chLine.length) {
        var chartData = {
            labels: ['Buddha', 'Landscape', 'Yoga'],
            datasets: [{
                label: 'Blink',
                data: [Math.max(...arr
                    .filter(function (val, idx) { return ((idx + 1) % 3) === 0 && val.hasOwnProperty('blinkStrength'); })
                    .map(function (val) { return parseInt(val.blinkStrength, 10); })),
                Math.max(...arr
                    .filter(function (val, idx) { return ((idx + 1) % 3) === 1 && val.hasOwnProperty('blinkStrength'); })
                    .map(function (val) { return parseInt(val.blinkStrength, 10); })),
                Math.max(...arr
                    .filter(function (val, idx) { return ((idx + 1) % 3) === 2 && val.hasOwnProperty('blinkStrength'); })
                    .map(function (val) { return parseInt(val.blinkStrength, 10); }))],
                backgroundColor: 'transparent',
                borderColor: colors[0],
                borderWidth: 4,
                pointBackgroundColor: colors[0]
            },
            {
                label: 'Attention',
                data: [Math.max(...arr
                    .filter(function (val, idx) { return ((idx + 1) % 3) === 0 && val.hasOwnProperty('eSense'); })
                    .map(function (val) { return parseInt(val.eSense.attention, 10); })),
                Math.max(...arr
                    .filter(function (val, idx) { return ((idx + 1) % 3) === 1 && val.hasOwnProperty('eSense'); })
                    .map(function (val) { return parseInt(val.eSense.attention, 10); })),
                Math.max(...arr
                    .filter(function (val, idx) { return ((idx + 1) % 3) === 2 && val.hasOwnProperty('eSense'); })
                    .map(function (val) { return parseInt(val.eSense.attention, 10); }))],
                backgroundColor: colors[3],
                borderColor: colors[1],
                borderWidth: 4,
                pointBackgroundColor: colors[1]
            }]
        };

        new Chart(chLine, {
            type: 'line',
            data: chartData,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                },
                legend: {
                    display: true,
                    boxWidth: 10
                }
            }
        });
    }
};

var database = firebase.database();
firebase.database().ref('waves').on('value', function (data) {
    var timer;
    var index = 0;
    var wavesArr = data.val();

    clearInterval(timer);

    drawGraph(wavesArr);

    timer = setInterval(function () {
        $('.carousel').carousel('next');
        if (index >= wavesArr.length) {
            index = 0;
        }
        waveTicker(wavesArr[index++]);
    }, 3000);
});