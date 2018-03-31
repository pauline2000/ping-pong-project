var pingy=[];   
function test(num){
    for (i=1; i<=num; i++) {
        if(i%3===0) {
            pingy.push("pingpong");

        } else if (i%5===0){
            pingy.push("ping");

        } else if((i%3===0 && i%5===0)) {
            pingy.push("pong")
        }
      else {
        pingy.push(i);
      }
    };
   
};
// front-end logic
$(document).ready(function(){
    $("#form-group").submit(function(event) {
        event.preventDefault();
        var result=parseInt($("#anyNumber").val());
        test(result);
       console.log(result);

       pingy.forEach(function(p){
        $("#output").append($("<li>").html(p));
       });
        
})
});