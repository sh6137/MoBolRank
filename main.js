import _ from 'lodash'
import gsap from 'gsap'

const list1El = document.querySelector('.mov_list_1')
const list2El = document.querySelector('.mov_list_2')
const list3El = document.querySelector('.mov_list_3')
const list4El = document.querySelector('.mov_list_4')
const list5El = document.querySelector('.mov_list_5')
const list6El = document.querySelector('.mov_list_6')
const list7El = document.querySelector('.mov_list_7')
const list8El = document.querySelector('.mov_list_8')
const list9El = document.querySelector('.mov_list_9')
const list10El = document.querySelector('.mov_list_10')

window.addEventListener('scroll', _.throttle(function () {
  console.log(window,scrollY);
}))

window.addEventListener('scroll', _.throttle(function () {
  if(window, scrollY >= 60){
    gsap.to(list1El, .5, {
      opacity: '.4'
    });
    gsap.to(list3El, .5, {
      opacity: '1'
    });
  } else{
      gsap.to(list3El, .5, {
        opacity: '.4'
      });
      gsap.to(list1El, .5, {
        opacity: '1'
      });
  }
  if(window, scrollY >= 200){
    gsap.to(list2El, .5, {
      opacity: '.4'
    });
    gsap.to(list4El, .5, {
      opacity: '1'
    });
  } else {
      gsap.to(list4El, .5, {
        opacity: '.4'
      });
      gsap.to(list2El, .5, {
        opacity: '1'
      });
  }
  if(window, scrollY >= 440){
    gsap.to(list3El, .5, {
      opacity: '.4'
    });
    gsap.to(list5El, .5, {
      opacity: '1'
    }); 
  } else{
      gsap.to(list5El, .5, {
        opacity: '.4'
      });
  }
  if (matchMedia("screen and (max-height: 850px)").matches){
    if(window, scrollY >= 580){
      gsap.to(list4El, .5, {
        opacity: '.4'
      });
      gsap.to(list6El, .5, {
        opacity: '1'
      });
    } else{
        gsap.to(list6El, .5, {
          opacity: '.4'
        });
    }
    if(window, scrollY >= 720){
      gsap.to(list5El, .5, {
        opacity: '.4'
      });
      gsap.to(list7El, .5, {
        opacity: '1'
      });
    } else{
      gsap.to(list7El, .5, {
        opacity: '.4'
      });
    }
    if(window, scrollY >= 860){
      gsap.to(list6El, .5, {
        opacity: '.4'
      });
      gsap.to(list8El, .5, {
        opacity: '1'
      });
      gsap.to(list9El, .5, {
        opacity: '1'
      });
      gsap.to(list10El, .5, {
        opacity: '1'
      });
    } else{
      gsap.to(list8El, .5, {
        opacity: '.4'
      });
      gsap.to(list9El, .5, {
        opacity: '.4'
      });
      gsap.to(list10El, .5, {
        opacity: '.4'
      });
    }
  } else if (matchMedia("screen and (max-height: 1000px)").matches){
    if(window, scrollY >= 580){
      gsap.to(list4El, .5, {
        opacity: '.4'
      });
      gsap.to(list6El, .5, {
        opacity: '1'
      });
    } else{
        gsap.to(list6El, .5, {
          opacity: '.4'
        });
    }
    if(window, scrollY >= 840){
      gsap.to(list5El, .5, {
        opacity: '.4'
      });
      gsap.to(list7El, .5, {
        opacity: '1'
      });
      gsap.to(list8El, .5, {
        opacity: '1'
      });
      gsap.to(list9El, .5, {
        opacity: '1'
      });
      gsap.to(list10El, .5, {
        opacity: '1'
      });
    } else{
        gsap.to(list7El, .5, {
          opacity: '.4'
        });
        gsap.to(list8El, .5, {
          opacity: '.4'
        });
        gsap.to(list9El, .5, {
          opacity: '.4'
        });
        gsap.to(list10El, .5, {
          opacity: '.4'
        });
    }
  } else {
    if(window, scrollY >= 550){
      gsap.to(list4El, .5, {
        opacity: '.4'
      });
      gsap.to(list6El, .5, {
        opacity: '1'
      });
      gsap.to(list7El, .5, {
        opacity: '1'
      });
      gsap.to(list8El, .5, {
        opacity: '1'
      });
      gsap.to(list9El, .5, {
        opacity: '1'
      });
      gsap.to(list10El, .5, {
        opacity: '1'
      });
    } else {
        gsap.to(list6El, .5, {
          opacity: '.4'
        });
        gsap.to(list7El, .5, {
          opacity: '.4'
        });
        gsap.to(list8El, .5, {
          opacity: '.4'
        });
        gsap.to(list9El, .5, {
          opacity: '.4'
        });
        gsap.to(list10El, .5, {
          opacity: '.4'
        });
    }
  }
}, 300))