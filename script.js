// .(Dot)=object


$(window).scroll(function(){
    // var divPosition=$('#stikyDiv').scrollTop();
    var windowScrollPosition = $(window).scrollTop()
    var p1=$('#p1');
    p1.text(windowScrollPosition)

});




// $(window).scroll(function(){
//     var divPosition=$('#stikyDiv').position();
//     var p1=$('#p1');
//     p1.text(divPosition.left)

// });





// $(window).scroll(function(){
//     var windowScrollPosition=$(window).scrollTop();
//     var stikyDiv=$('#stikyDiv').position();
//     if(windowScrollPosition>=stikyDiv.top){
//         $('#stikyDiv').css({
//             position:'fixed',
//             'top':'0px'
//         })
//     } else{
//         $('#stikyDiv').css({
//             'position':'relative',
//             'top':'0px'
//         })
//     }
//     windowScrollPosition = stikyDiv.top

// })




// var scrollDivPosition=$('#scrollDiv').position();
// console.log(scrollDivPosition.right)













// for start and end tag=Text,html
// var firstScrollPosition=0;
// $('#scrollDiv').scroll(function () {
//    var scrollPosition= $('#scrollDiv').scrollTop();
//    $('#h2').text(scrollPosition);
//    if (scrollPosition>firstScrollPosition){
//        $('#h2').text('You are scrolling down')
//    }
//    else{
//        $('#h2').text('You are scrolling up')
       
//    }
//    firstScrollPosition = scrollPosition;
// });













$('#firstName').keyup(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    $('#res1').text(firstName)

});

$('#lastName').keyup(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();

    $('#res2').text(lastName)

    
});

$('#lastName').blur(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();

    $('#res2').text(lastName)

    $('#res3').text(firstName + ' ' + lastName);
});