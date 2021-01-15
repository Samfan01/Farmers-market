
$(document).ready(function(){
   
$('#submit').click(function(){
    var name = $('#name').val();
    var mail = $('#mail').val();
    var txt;
    if (confirm(name+" would you like to recieve weekly notifications from farmers market?")) {
      txt=name +' you will recieve weekly updates via mail :'+mail;
    }else{
        txt='Thank you '+name+' for visiting us today.We hope to see you again soon.';
    }{
        alert(txt)
    }
    
        
        
    
})

});
