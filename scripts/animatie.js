

$(document).ready(function() {
  let step1 = $('.step1 .h4');
  let step2 = $('.step2 .h4');
  let step3 = $('.step3 .h4');
  let step4 = $('.step4 .h4');
  
  $('.button').click(function() {
    $('.steps').fadeIn(2000);
    $('.step').hide();
    $('.step' + $(this).attr('ID'))
      .slideDown(3000,function(){
    step1.css({
        'padding': '0.6rem',
        'margin-bottom': '1rem',
        'color':'#ffffff',
        'background-color':'#b95212',
        'text-align': 'center'
      },2000)
      .animate({'width':200},2000);
    step2.css({
        'padding': '0.6rem',
        'margin-bottom': '1rem',
        'color':'#ffffff',
        'background-color':'#e86716',
        'text-align': 'center'
      },2000)
      .animate({'width':200},2000);
   
    step3.css({
        'padding': '0.6rem',
        'margin-bottom': '1rem',
        'color':'#ffffff',
        'background-color':'#ec8545',
        'text-align': 'center'
      },2000)
      .animate({'width':200},2000);   
    
    step4.css({
        'padding': '0.6rem',
        'margin-bottom': '1rem',
        'color':'#ffffff',
        'background-color':'#f1a373',
        'text-align': 'center'
      },2000)
      .animate({'width':200},2000) 
    });
     
  });
});