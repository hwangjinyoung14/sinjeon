//gnb
$(".gnb_bar").click(function(){
  $(".gnb").toggleClass("gnb_click");
  $(".flow_hidden").toggleClass("gnb_click");
  $(this).toggleClass("gnb_click")
});


// gnb 아코디언
$(function(){
  $(".menu>li>a").click(function(){
    $(this).next(".sub_menu").slideToggle();
    $(this).parent("li").siblings("li").children(".sub_menu").slideUp();
    
    // a 태그 클릭 효과
    $(this).toggleClass("menu_click");
    $(".menu>li>a").not(this).removeClass("menu_click");
    
    // > 아이콘
    $(this).find("img").toggleClass("menu_click");
    $(".menu>li>a").not(this).find("img").removeClass("menu_click");
  });
});

//main_poster01_slide
let currentLocation = 0; 

$('.slide_1').on('click', function(){
  $(this).addClass("slide_btn_click");
  $(".slide_btn_box>button").not(this).removeClass("slide_btn_click");
  moveSlide(0);
  currentLocation = 0; 
});

$('.slide_2').on('click', function(){
  $(this).addClass("slide_btn_click");
  $(".slide_btn_box>button").not(this).removeClass("slide_btn_click");
  moveSlide(-100);
  currentLocation = 1; 
});

$('.slide_3').on('click', function(){
  $(this).addClass("slide_btn_click");
  $(".slide_btn_box>button").not(this).removeClass("slide_btn_click");
  moveSlide(-200);
  currentLocation = 2; 
});

function moveSlide(percentage) {
  $('.slide_box').css('transform', 'translateX(' + percentage + '%)');
}

// swiper
var swiper = new Swiper(".sinjeon_menu", {
  slidesPerView: 3,
  spaceBetween: 16,
  freeMode: true,
});

//submit 방지
$(document).ready(function() {
  $("#store_search").submit(function(event) {
    event.preventDefault();
  });
});

//store
let districtsByCity = {
  "서울특별시": ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "동대문구", "서초구"],
  "세종특별자치시": ["반곡동", "소담동", "보람동", "대평동", "한솔동", "나성동", "다정동", "어진동", "아름동"],
  "인천광역시": ["계양구", "남구", "남동구", "동구", "부평구", "서구"],
  "대전광역시": ["대덕구", "동구", "서구", "유성구", "중구"],
  "광주광역시": ["광산구", "남구", "동구", "북구", "서구"],
  "대구광역시": ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"],
  "울산광역시": ["남구", "동구", "북구", "중구", "울주군"],
  "부산광역시": ["강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "연제구"],
  "경기도": ["고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "남양주시", "부천시", "수원시", "안성시", "오산시"],
  "강원도": ["강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시", "고성군", "영월군", "정선군"],
  "충청북도": ["제천시", "청주시", "충주시", "괴산군", "단양군", "보은군", "옥천군", "증평군"],
  "제주도": ["서귀포시", "제주시", "남제주군", "북제주군"]
};

$('#city_and_province').change(function(){
  const selectedCity = $(this).val(); 
  const $districtDropdown = $('#district_and_county'); 

  let districts = districtsByCity[selectedCity];
  $districtDropdown.empty();
  if(districts) {
    $districtDropdown.append('<option value="구/군 선택" selected>구/군 선택</option>');
    districts.forEach(function(district) {
      $districtDropdown.append('<option value="' + district + '">' + district + '</option>');
    });
  } else {
    $districtDropdown.append('<option value="구/군 선택" selected>구/군 선택</option>');
  }
});

//top btn
$(".top_btn").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 700);
    return false;
}) 

// 스크롤 이벤트
$(".top_btn").hide();
$(window).on('scroll', function(){
    const scrollTop = $(window).scrollTop();
    const scrollOffset = $(".museum").offset().top;

    if(scrollTop < scrollOffset) {
      $(".top_btn").hide();
    } else {
      $(".top_btn").show();
    }
})