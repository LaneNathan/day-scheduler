//function for for initial display
$(document).ready(function(){
  $('.saveBtn').on('click', function (){
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time,value);

    $('.notification').addClass('show');

    setTimeout(function (){
      $('.notification').removeClass('show');
    },5000);
  });
//function to differentiate the past, present and future time blocks
  function hourIncrementer(){
    var currentHour = dayjs().hour();
//function for changing the background of each block based on its relative time
    $('.time-block').each(function(){
      var displayHour = parseInt($(this).attr('id').split('-')[1]);

      if(displayHour < currentHour) {
        $(this).addClass('past');
      } else if (displayHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else { 
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
     });
  }
//calling on the time function
  hourIncrementer();
//time difference for each block, to keep up with the current time
  setInterval(hourIncrementer, 15000);
//storage for each time block text
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
//formula for setting the current day and time in the header
  $('#currentDay').text(dayjs().format('dddd, MMMM, D, YYYY'));
  $('#currentTime').text(dayjs().format('h:mm'))
});
