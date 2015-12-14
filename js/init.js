(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function emailValidator(elem, helperMsg){
  var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if(elem.value.match(emailExp)){
     //Materialize.toast('Your meesage has been sent.', 4000) // 4000 is the duration of the toast
     helperMsg;
    return true;
    }else{
     Materialize.toast('Insert a valid address.', 4000) // 4000 is the duration of the toast
    elem.focus();
    return false;
  }
}
 function notEmpty(elem, helperMsg){
  if(elem.value.length == 0){
     helperMsg;
     elem.focus(); // set the focus to this input
     return false;
  }
  return true;
}


$("#send-email").click(function(){
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var msisdn = document.getElementById('msisdn');
  var message = document.getElementById('message');

if(notEmpty(name, "")){
  if(emailValidator(email, "Please enter a valid email address")){
    if(notEmpty(msisdn, "")){
      if(notEmpty(message, "")){
  
  jQuery.ajax({  
                type: "post",  
                url: "../behr/eSend.php",  
                data: "name="+$("#name").val()+"&email="+$("#email").val()+"&msisdn="+$("#msisdn").val()+"&message="+$("#message").val(),  
                async: true,
                success: function(data) {
                   Materialize.toast('Thank you. Your request has been noted.', 4000) 
             
              
                },
              });
    return true;
          }
        }
    }
}

});