// var socket = io.connect('http://localhost:3000');

// socket.on('connect', function (data) {
//     socket.emit('join', 'Client connected');

//     socket.on('vann', function (msg) {
//         if(msg.hasOwnProperty('blinkStrength')){
//             document.getElementById('message')
//             .appendChild(document.createTextNode(JSON.stringify(msg)));
//         }
//     });
// });

// var socket = io.connect('http://localhost:3000');
// socket.on('connect', function (data) {
//     socket.emit('join', 'Client connected');

//     socket.on('vann', function (msg) {
//         var msgJson = JSON.parse(JSON.stringify(msg));      
//         $('.carousel').carousel('next');       
//         // if(msg.hasOwnProperty('poorSignalLevel')){
//         //     if(msgJson.poorSignalLevel >= 200){
//         //         $("#snackbar").empty().text('Device disconnected').addClass('show').delay(1000).removeClass('show');
//         //     }else{
//         //         // $("#snackbar").text("Device connected").addClass('show').delay().removeClass('show');
//         //     }            
//         // }
//         if(msg.hasOwnProperty('blinkStrength')){
//             $("#blinkStrength").text(msgJson.blinkStrength);
//             $("#snackbar").empty().text('Blink detected: Next slide');        
//             // if(msgJson.blinkStrength>70){
//             //     $('.carousel').carousel('next');
//             // }
//         }

//         if(msg.hasOwnProperty('eSense')){    
//             $("#attention").text(msgJson.eSense.attention);
//             $("#snackbar").empty().text('Attention changed: Next slide');        
//             if(msgJson.eSense.attention>40 && msgJson.eSense.attention <50){                
//                 $('.carousel-item').removeClass('nineties xpro inkwell aden').addClass('nineties');
//             }else if(msgJson.eSense.attention>50 && msgJson.eSense.attention <60){
//                 $('.carousel-item').removeClass('nineties xpro inkwell aden').addClass('xpro');
//             }else if(msgJson.eSense.attention>60 && msgJson.eSense.attention <70){
//                 $('.carousel-item').removeClass('nineties xpro inkwell aden').addClass('inkwell');
//             }else if(msgJson.eSense.attention>70){
//                 $('.carousel-item').removeClass('nineties xpro inkwell aden').addClass('aden');
//             }else{
//                 $('.carousel-item').removeClass('nineties xpro inkwell aden');
//             }
//         }

//         // if(msg.hasOwnProperty('eSense')){    
//         //     if(msgJson.eSense.meditation>40 && msgJson.eSense.meditation <50){                
//         //         document.body.style.backgroundColor = "#FFFF66";
//         //         if(null != document.getElementById("meditation")){     
//         //             document.getElementById("meditation").innerHTML = "Meditation :"+msgJson.eSense.meditation;
//         //         }
//         //     }else if(msgJson.eSense.meditation>50 && msgJson.eSense.meditation <60){
//         //         document.body.style.backgroundColor = "#FFFF33";
//         //         if(null != document.getElementById("meditation")){
//         //             document.getElementById("meditation").innerHTML = "Meditation :"+msgJson.eSense.meditation;
//         //         }
//         //     }else if(msgJson.eSense.meditation>60 && msgJson.eSense.meditation <70){
//         //         document.body.style.backgroundColor = "yellow";
//         //         if(null != document.getElementById("meditation")){
//         //             document.getElementById("meditation").innerHTML = "Meditation :"+msgJson.eSense.meditation;
//         //         }
//         //     }else if(msgJson.eSense.meditation>70){
//         //         document.body.style.backgroundColor = "#FFFF00";
//         //         if(null != document.getElementById("meditation")){
//         //             document.getElementById("meditation").innerHTML = "Meditation :"+msgJson.eSense.meditation;
//         //         }
//         //     }else{
//         //         document.body.style.backgroundColor = "white";     
//         //         if(null != document.getElementById("meditation")){
//         //             document.getElementById("meditation").innerHTML = "Meditation :"+msgJson.eSense.meditation;
//         //         }
//         //     }
          
//         // }
//     });
// });
var waveTicker = function(data){
    if(data.hasOwnProperty('blinkStrength')){
        $("#blinkStrength").text(data.blinkStrength);
        $("#snackbar").empty().text('Blink detected: Next slide');        
        // if(data.blinkStrength>70){
        //     $('.carousel').carousel('next');
        // }
    }

    if(data.hasOwnProperty('eSense')){    
        $("#attention").text(data.eSense.attention);
        $("#snackbar").empty().text('Attention changed: Next slide');        
        if(data.eSense.attention>40 && data.eSense.attention <50){                
            $('.carousel-item').removeClass('nineties xpro inkwell aden').addClass('nineties');
        }else if(data.eSense.attention>50 && data.eSense.attention <60){
            $('.carousel-item').removeClass('nineties xpro inkwell aden').addClass('xpro');
        }else if(data.eSense.attention>60 && data.eSense.attention <70){
            $('.carousel-item').removeClass('nineties xpro inkwell aden').addClass('inkwell');
        }else if(data.eSense.attention>70){
            $('.carousel-item').removeClass('nineties xpro inkwell aden').addClass('aden');
        }else{
            $('.carousel-item').removeClass('nineties xpro inkwell aden');
        }
    }
};

var database = firebase.database();
firebase.database().ref('waves').on('value', function(data){
    // console.log(data.val());
    var wavesArr = data.val();      
    var index = 0;

    setInterval(function(){
        $('.carousel').carousel('next');
        if (index >= wavesArr.length) {
            index = 0;
        }
        waveTicker(wavesArr[index++]);
    }, 3000);
    
});