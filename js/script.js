$(document).ready(function(){
    function blink(){
   $(".abc").fadeIn(500);
   $(".abc").fadeOut(500);
   }
   setInterval(blink,1000);

   var clicked=true;

   $(".btn").click(function(){
       if(clicked)
       {
       $(".jumbotron").css({"background-color":"white","color":"black"});
       $("body").css({"background-color":"lightblue"});
       $(".flip-card-front").css({"background-color":"lightgrey","color":"black"});
       $(".flip-card-back").css({"background-color":"lightgrey","color":"black"});
       clicked=false;
       }
       else
       {
       $(".jumbotron").css({"background-color":"#212529","color":"white"});
       $("body").css({"background-color":"#f9bf3f"});
       $(".flip-card-front").css({"background-color":"#212529","color":"white"});
       $(".flip-card-back").css({"background-color":"#212529","color":"white"});
       clicked=true;
       }
   });   
});
