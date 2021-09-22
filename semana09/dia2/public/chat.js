const socket = io();

//campos
let username = document.getElementById('username');
let message = document.getElementById('message');
let btn = document.getElementById('send');
let output = document.getElementById('output');


btn.addEventListener('click',function(){
    console.log(username.value,message.value);
    socket.emit('chat:message',{
        message:message.value,
        username:username.value
    });
});

socket.on('chat:message',function(data){
    console.log(data);
    output.innerHTML += `
    <div class="message-text">
               ${data.message}
              </div>
              <span class="message-time pull-right">
               ${data.username}
              </span>
    `
});


$(function(){
    $(".heading-compose").click(function() {
      $(".side-two").css({
        "left": "0"
      });
    });

    $(".newMessage-back").click(function() {
      $(".side-two").css({
        "left": "-100%"
      });
    });
})