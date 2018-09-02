$('#myModal').modal({
    keyboard: false,
    focus: true,
    show: true
});
$('#submit').on('click', function(e){
    $('#myModal').modal('hide');
    window.sessionStorage.setItem('userName', $('#username').val());
});

var userName = window.sessionStorage.getItem('userName');
var userNamePlaceHolder = $('#user');
if(userNamePlaceHolder.length && userName !== null){
    userNamePlaceHolder.text(`for ${userName}`).removeClass('d-none');
}