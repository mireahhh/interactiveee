$(document).ready(function() {
  // перелив фонового цвета
  $(document).mousemove(function(e) {
    let body_size_x = $(window).width();
    let body_size_y = $(window).height();
    let half_body_size_x = parseInt(body_size_x / 2);
    let half_body_size_y = parseInt(body_size_y / 2);
    let left_dir = e.pageX;
    let top_dir = e.pageY;
    if (left_dir > half_body_size_x && top_dir > half_body_size_y) {
      $('html').css('background', '#011A31');
    } else if (left_dir < half_body_size_x && top_dir < half_body_size_y) {
      $('html').css('background', '#011431');
    } else if (left_dir > half_body_size_x && top_dir < half_body_size_y) {
      $('html').css('background', '#020131');
    } else if (left_dir < half_body_size_x && top_dir > half_body_size_y) {
      $('html').css('background', '#190131');
    }
  });

  // движение фоновых звезд
  $('body').mousemove(function(event) {
    $(document).mousemove(function(e) {
      $('.moveback1, .moveback1port').css({
        left: 10 - e.pageX / 9,
        top: 10 - e.pageY / 9
      })
      $('.moveback2, .moveback2port').css({
        left: 25 - e.pageX / 6,
        top: 25 - e.pageY / 6
      })
      $('.moveback3').css({
        left: 50 - e.pageX - 20 / 3,
        top: 50 - e.pageY - 20 / 3
      })
    })
  })

  // подсказки
  $('.touch30').click(function() {
    $('.talking1').toggleClass('bubble1 cover');
  });
  $('.touch31').click(function() {
    $('.talking2').toggleClass('bubble2 cover');
  })
  $('.touch32').click(function() {
    $('.talking3').toggleClass('bubble3 cover');
  });
  $('.touch33').click(function() {
    $('.talking4').toggleClass('bubble4 cover');
  });

  // на главный экран из мини-игры
  $('.touch21').click(function() {
    $('.minigame1').addClass('none');
    $('.crazy1, .crazy4').addClass('none');
    $('.container').removeClass('none');
  });
  $('.touch22').click(function() {
     $('.minigame2').addClass('none');
     $('.crazy2, .crazy5').addClass('none');
     $('.container').removeClass('none');
  });
  $('.touch23').click(function() {
    $('.minigame3').addClass('none');
    $('.crazy3, .crazy6').addClass('none');
    $('.container').removeClass('none');
  });

  // переход ко всем мини-играм
  $('.windowgame1').click(function() {
    $('.container').addClass('none');
    $('.minigame1').removeClass('none');
    $('.allisonplate').css('left','0vw').css('top','0vw').css('scale','1');
    $('.onplate').css('animation','fly 0s infinite ease-in-out');
  });
  $('.windowgame2').click(function() {
    $('.container').addClass('none');
    $('.minigame2').removeClass('none');
  });
  $('.windowgame3').click(function() {
    $('.container').addClass('none');
    $('.minigame3').removeClass('none');
    $('.prophecyhere').css('left','0vw').css('top','0vw').css('scale','1');
    $('.prophecyhere').css('animation','fly 2.3s infinite ease-in-out');
  });

  // мини-игра 1
  $('.o1, .o2, .o3, .o4, .o5, .o6, .o7, .o8, .o9, .o10, .o11, .o12, .o13, .o14, .o15, .o16, .o17, .o18, .o19, .o20, .o21, .o22, .o23').draggable();
  $('.allisonplate').droppable();

  // появление продуктов из мини-игры 1 на тарелочке
  let click = 0
  $(function() {
  $('.touch21').click(function() {
    click += 1;
    if (click == 1) {
    $('.allisonplate').clone().appendTo('.onplate');}
    $('.allisonplate').css('left', '-25vw');
    $('.allisonplate').css('top', '-12vw');
    $('.allisonplate').css('scale', '0.9');
    $('.onplate').css('animation', 'fly 2.1s infinite ease-in-out');
  });

  // мини-игра 2
  const arr = [
     ['onep', 2000],
     ['oney', 1999],
     ['oneb', 1998],
     ['oner', 1997],
     ['oneyyyyyyy', 1996],
     ['tworrr', 1995],
     ['onebb', 1994],
     ['twoppp', 1993],
     ['onepppppp', 1992],
     ['twopp', 1991],
     ['twor', 1990],
  ]
  setInterval(function() {
    for (const [id, offset] of arr) {
      console.log (id, offset)
      const elem = document.getElementById(id);
      if (elem.dataset.state === 'onplate') {continue}
      elem.style.left = Math.floor(Math.random() * offset) + 'px';
      elem.style.top = Math.floor(Math.random() * offset) + 'px';
    }
  }, 1250)

  // перенос мини-игры 2 на тарелочку
  document.querySelector('.minigame2').onclick = function(event) {
    if (event.target.className !== 'moveDot') {return}
    const clone = event.target.cloneNode(true)
    clone.dataset.state = 'onplate'
    event.target.remove()
    document.querySelector('.onplate2').append(clone)
  }
  $('#onep, #oney, #oneb, #oner, #oneyyyyyyy, #twoppp, #tworrr, #onebb, #twopp, #twor, #onepppppp').click(function() {
     $('.onplate2').css('animation','fly 2.2s infinite ease-in-out');
  });
  $('#onep').click(function() {
    $('#onep').css('left', '22vw').css('top', '15vw');
  });
  $('#oney').click(function() {
    $('#oney').css('left', '17vw').css('top', '21vw');
  });
  $('#oneb').click(function() {
    $('#oneb').css('left', '13vw').css('top', '11vw');
  });
  $('#oner').click(function() {
    $('#oner').css('left', '20vw').css('top', '6vw');
  });
  $('#oneyyyyyyy').click(function() {
    $('#oneyyyyyyy').css('left', '13vw').css('top', '9vw');
  });
  $('#twoppp').click(function() {
    $('#twoppp').css('left', '6vw').css('top', '15vw');
  });
  $('#tworrr').click(function() {
    $('#tworrr').css('left', '9vw').css('top', '23vw');
  });
  $('#onebb').click(function() {
    $('#onebb').css('left', '26vw').css('top', '24vw');
  });
  $('#twopp').click(function() {
    $('#twopp').css('left', '13vw').css('top', '28.5vw');
  });
  $('#twor').click(function() {
    $('#twor').css('left', '22vw').css('top', '30.5vw');
  });
  $('#onepppppp').click(function() {
    $('#onepppppp').css('left', '14vw').css('top', '2vw');
  });
  $('.touch23').click(function() {
    $('.prophecyhere').clone().appendTo('.onplate3');
    $('.prophecyhere').css('left', '33vw').css('top', '-18vw').css('scale', '0.5');
    });
  });

  // мини-игра 3
  $('.moving').click(function() {
    $('.moving, .bubble4 cover').addClass('none');
    $('.prophecyhere, .star1, .star3, .star5, .star7, .star2, .star4, .star6, .star8').removeClass('none');
  });
  let myArray = [
    'cosmopolit pcosmopolit cover',
    'oort poort cover',
    'glazki pglazki cover',
    'puzirek ppuzirek cover',
    'piki ppiki cover'
  ];
  let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  $('.prophecyhere').html(`<div class='${randomItem}'></div>`);

  // курсор в мини-игре 3
   $(document).mousemove(function(e) {
     $('#cursor').css({
       left: e.pageX - 10,
       top: e.pageY - 10
     });
   });

  // анимация победных звездочек в мини-игре 3
  $(function() {
    $('.star1, .star3, .star5, .star7').css('animation','target1 1.6s infinite');
    $('.star2, .star4, .star6, .star8').css('animation','target2 1.6s infinite');
  });
});
