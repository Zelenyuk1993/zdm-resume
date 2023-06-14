$(document).ready(function(){
  $('.floatingButton').on('click',
    function(e){
      e.preventDefault();
      $(this).toggleClass('open');
      $('.floatingMenu').stop().slideToggle();
    }
  );
  $(this).on('click', function(e) {
    let container = $(".floatingButton");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && $('.floatingButtonWrap').has(e.target).length === 0)
    {if(container.hasClass('open')) {
        container.removeClass('open');
      }
      $('.floatingMenu').hide();
    }

    // if the target of the click isn't the container and a descendant of the menu
    if(!container.is(e.target) && ($('.floatingMenu').has(e.target).length > 0))
    {
      $('.floatingButton').removeClass('open');
      $('.floatingMenu').stop().slideToggle();
    }
  });
});
