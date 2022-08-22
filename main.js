import _ from 'lodash'
import gsap from 'gsap'
import gsapCore from 'gsap/gsap-core'

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

const listAllExcept1 = document.querySelectorAll('.list_normal')
const listAllExcept2 = [list1El, list3El, list4El, list5El, list6El, list7El, list8El, list9El, list10El]
const listAllExcept3 = [list1El, list2El, list4El, list5El, list6El, list7El, list8El, list9El, list10El]
const listAllExcept4 = [list1El, list2El, list3El, list5El, list6El, list7El, list8El, list9El, list10El]
const listAllExcept5 = [list1El, list2El, list3El, list4El, list6El, list7El, list8El, list9El, list10El]
const listAllExcept6 = [list1El, list2El, list3El, list4El, list5El, list7El, list8El, list9El, list10El]
const listAllExcept7 = [list1El, list2El, list3El, list4El, list5El, list6El, list8El, list9El, list10El]
const listAllExcept8 = [list1El, list2El, list3El, list4El, list5El, list6El, list7El, list9El, list10El]
const listAllExcept9 = [list1El, list2El, list3El, list4El, list5El, list6El, list7El, list8El, list10El]
const listAllExcept10 = [list1El, list2El, list3El, list4El, list5El, list6El, list7El, list8El, list9El]

const topbar = document.querySelector('.topbar')
const standard = document.querySelector('.standard_area')
const movText = document.querySelectorAll('.mov_info', '.mov_name')

const gradationBottom = document.querySelector('.gradation_bottom')

const list1El_detail = document.querySelector('.mov_list_1_detail')


window.addEventListener('scroll', _.throttle(function () {
  console.log(window,scrollY);
}, 300))

window.addEventListener('scroll', _.throttle(function () {
if (matchMedia("screen and (max-height: 850px)").matches){
  if(window, scrollY < 150){
      gsap.to(list1El, {opacity: '1'})
    } else {
      gsap.to(list1El, {opacity: '.4'})
    }
  if(window, scrollY < 220){
    gsap.to(list2El, {opacity: '1'})
  } else {
    gsap.to(list2El, {opacity: '.4'})
  }
  if(window, 150 <= scrollY && scrollY < 370){
      gsap.to(list3El, {opacity: '1'})
    } else {
      gsap.to(list3El, {opacity: '.4'})
    }
  if(window, 220 <= scrollY && scrollY < 535){
    gsap.to(list4El, {opacity: '1'})
  } else {
    gsap.to(list4El, {opacity: '.4'})
  }
  if(window, 370 <= scrollY && scrollY < 700){
    gsap.to(list5El, {opacity: '1'})
  } else {
    gsap.to(list5El, {opacity: '.4'})
  }
  if(window, 535 <= scrollY && scrollY < 850){
    gsap.to(list6El, {opacity: '1'})
  } else {
    gsap.to(list6El, {opacity: '.4'})
  }
  if(window, 700 <= scrollY){
    gsap.to(list7El, {opacity: '1'})
    gsap.to(list8El, {opacity: '1'})
    gsap.to(list9El, {opacity: '1'})
    gsap.to(list10El, {opacity: '1'})
  } else{
    gsap.to(list7El, {opacity: '.4'})
  }
  if(window, scrollY < 850){
    gsap.to(list8El, {opacity: '.4'})
    gsap.to(list9El, {opacity: '.4'})
    gsap.to(list10El, {opacity: '.4'})
  }
}
else if (matchMedia("screen and (max-height: 1000px)").matches){
  if(window, scrollY < 80){
      gsap.to(list1El, {opacity: '1'})
    } else {
      gsap.to(list1El, {opacity: '.4'})
    }
    if(window, scrollY < 230){
      gsap.to(list2El, {opacity: '1'})
    } else {
      gsap.to(list2El, {opacity: '.4'})
    }
    if(window, 80 <= scrollY && scrollY < 350){
      gsap.to(list3El, {opacity: '1'})
    } else {
      gsap.to(list3El, {opacity: '.4'})
    }
    if(window, 230 <= scrollY && scrollY <  530){
      gsap.to(list4El, {opacity: '1'})
    } else {
      gsap.to(list4El, {opacity: '.4'})
    }
    if(window, 350 <= scrollY && scrollY <  700){
      gsap.to(list5El, {opacity: '1'})
    } else {
      gsap.to(list5El, {opacity: '.4'})
    }
    if(window, 530 <= scrollY){
      gsap.to(list6El, {opacity: '1'})
      gsap.to(list7El, {opacity: '1'})
      gsap.to(list8El, {opacity: '1'})
      gsap.to(list9El, {opacity: '1'})
      gsap.to(list10El, {opacity: '1'})
    } else {
      gsap.to(list6El, {opacity: '.4'})
    }
    if(window, scrollY < 700) {
      gsap.to(list7El, {opacity: '.4'})
      gsap.to(list8El, {opacity: '.4'})
      gsap.to(list9El, {opacity: '.4'})
      gsap.to(list10El, {opacity: '.4'})
    }
}
else{
if(window, scrollY < 130){
  gsap.to(list1El, {opacity: '1'})
} else {
  gsap.to(list1El, {opacity: '.4'})
}
if(window, scrollY < 235){
  gsap.to(list2El, {opacity: '1'})
} else {
  gsap.to(list2El, {opacity: '.4'})
}
if(window, 130 <= scrollY && scrollY < 380){
  gsap.to(list3El, {opacity: '1'})
} else {
  gsap.to(list3El, {opacity: '.4'})
}
if(window, 235 <= scrollY && scrollY < 545){
  gsap.to(list4El, {opacity: '1'})
} else {
  gsap.to(list4El, {opacity: '.4'})
}
if(window, 380 <= scrollY){
  gsap.to(list5El, {opacity: '1'})
  gsap.to(list6El, {opacity: '1'})
  gsap.to(list7El, {opacity: '1'})
  gsap.to(list8El, {opacity: '1'})
  gsap.to(list9El, {opacity: '1'})
  gsap.to(list10El, {opacity: '1'})
} else {
  gsap.to(list5El, {opacity: '.4'})
}
if(window, scrollY < 545){
  gsap.to(list6El, {opacity: '.4'})
  gsap.to(list7El, {opacity: '.4'})
  gsap.to(list8El, {opacity: '.4'})
  gsap.to(list9El, {opacity: '.4'})
  gsap.to(list10El, {opacity: '.4'})
}
}
}, 300))

list1El.addEventListener('click', function(){
  gsap.to(movText, 0, {display: 'none'})
  gsap.to(topbar, 0, {display: 'none'})
  gsap.to(standard, 0, {display: 'none'})
  gsap.to(listAllExcept1, 0, {display: 'none'})
  list1El.classList.add('active')
  gsap.to(list1El, .7, {
    height: '400px',
    top: 0,
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 80%)'
  })
  gsap.to(gradationBottom, .25, {
    delay: .5,
    display: 'block',
    opacity: '1'
  })
  gsap.to(list1El_detail, {
    delay: '1.1',
    display: 'block'
  })
})
list2El.addEventListener('click', function(){
  gsap.to(movText, 0, {display: 'none'})
  gsap.to(topbar, 0, {display: 'none'})
  gsap.to(standard, 0, {display: 'none'})
  gsap.to(listAllExcept2, 0, {display: 'none'})
  list2El.classList.add('active')
  gsap.to(list2El, .7, {
    top: 0,
    height: '400px',
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 80%)'
  })
  gsap.to(gradationBottom, .25, {
    delay: .5,
    display: 'block',
    opacity: '1'
  })
})
list3El.addEventListener('click', function(){
  gsap.to(movText, 0, {display: 'none'})
  gsap.to(topbar, 0, {display: 'none'})
  gsap.to(standard, 0, {display: 'none'})
  gsap.to(listAllExcept3, 0, {display: 'none'})
  list3El.classList.add('active')
  gsap.to(list3El, .7, {
    top: 0,
    height: '400px',
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 80%)'
  })
  gsap.to(gradationBottom, .25, {
    delay: .5,
    display: 'block',
    opacity: '1'
  })
})
list4El.addEventListener('click', function(){
  gsap.to(movText, 0, {display: 'none'})
  gsap.to(topbar, 0, {display: 'none'})
  gsap.to(standard, 0, {display: 'none'})
  gsap.to(listAllExcept4, 0, {display: 'none'})
  list4El.classList.add('active')
  gsap.to(list4El, .7, {
    top: 0,
    height: '400px',
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 80%)'
  })
  gsap.to(gradationBottom, .25, {
    delay: .5,
    display: 'block',
    opacity: '1'
  })
})
list5El.addEventListener('click', function(){
  gsap.to(movText, 0, {display: 'none'})
  gsap.to(topbar, 0, {display: 'none'})
  gsap.to(standard, 0, {display: 'none'})
  gsap.to(listAllExcept5, 0, {display: 'none'})
  list5El.classList.add('active')
  gsap.to(list5El, .7, {
    top: 0,
    height: '400px',
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 80%)'
  })
  gsap.to(gradationBottom, .25, {
    delay: .5,
    display: 'block',
    opacity: '1'
  })
})
list6El.addEventListener('click', function(){
  gsap.to(movText, 0, {display: 'none'})
  gsap.to(topbar, 0, {display: 'none'})
  gsap.to(standard, 0, {display: 'none'})
  gsap.to(listAllExcept6, 0, {display: 'none'})
  list6El.classList.add('active')
  gsap.to(list6El, .7, {
    top: 0,
    height: '400px',
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 80%)'
  })
  gsap.to(gradationBottom, .25, {
    delay: .5,
    display: 'block',
    opacity: '1'
  })
})
list7El.addEventListener('click', function(){
  gsap.to(movText, 0, {display: 'none'})
  gsap.to(topbar, 0, {display: 'none'})
  gsap.to(standard, 0, {display: 'none'})
  gsap.to(listAllExcept7, 0, {display: 'none'})
  list7El.classList.add('active')
  gsap.to(list7El, .7, {
    top: 0,
    height: '400px',
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 80%)'
  })
  gsap.to(gradationBottom, .25, {
    delay: .5,
    display: 'block',
    opacity: '1'
  })
})
list8El.addEventListener('click', function(){
  gsap.to(movText, 0, {display: 'none'})
  gsap.to(topbar, 0, {display: 'none'})
  gsap.to(standard, 0, {display: 'none'})
  gsap.to(listAllExcept8, 0, {display: 'none'})
  list8El.classList.add('active')
  gsap.to(list8El, .7, {
    top: 0,
    height: '400px',
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 80%)'
  })
  gsap.to(gradationBottom, .25, {
    delay: .5,
    display: 'block',
    opacity: '1'
  })
})
list9El.addEventListener('click', function(){
  gsap.to(movText, 0, {display: 'none'})
  gsap.to(topbar, 0, {display: 'none'})
  gsap.to(standard, 0, {display: 'none'})
  gsap.to(listAllExcept9, 0, {display: 'none'})
  list9El.classList.add('active')
  gsap.to(list9El, .7, {
    top: 0,
    height: '400px',
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 80%)'
  })
  gsap.to(gradationBottom, .25, {
    delay: .5,
    display: 'block',
    opacity: '1'
  })
})
list10El.addEventListener('click', function(){
  gsap.to(movText, 0, {display: 'none'})
  gsap.to(topbar, 0, {display: 'none'})
  gsap.to(standard, 0, {display: 'none'})
  gsap.to(listAllExcept10, 0, {display: 'none'})
  list10El.classList.add('active')
  gsap.to(list10El, .7, {
    top: 0,
    height: '400px',
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 80%)'
  })
  gsap.to(gradationBottom, .25, {
    delay: .5,
    display: 'block',
    opacity: '1'
  })
})

