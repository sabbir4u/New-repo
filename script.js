// .(Dot)=object


$('#btn').click(function(){
    var firstName=$('#firstName').val();
    var lastName=$('#lastName').val();
    var fullName=firstName+' '+lastName;
    $('#fullName').val(fullName);

    
    // $('#fullName').val( $('#firstName').val() + ' ' + $('#lastName').val());
    
});