import { results, sports } from './data.js'

// 주소 쿼리스트링에서 sport 값을 가져오기!
const sport = new URLSearchParams(location.search).get('sport')
const result = results[sports[sport]]

// 결과를 출력할 각 요소를 찾아요!
const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const mindEls = document.querySelectorAll('.mind')
const lectureEl = document.querySelector('.lecture')
const lectureImgEl = document.querySelector('.lecture img')

// 각 요소에 내용을 채워넣어요!
titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index]
})
mindEls.forEach(function (mindEl, index) {
  mindEl.innerHTML = result.minds[index]
})
lectureImgEl.src = result.lectureImg
