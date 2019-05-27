/* 사이드바 시작
Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "180px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}
// 사이드바 끝

//슬라이드쇼 스와이프 시작
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//슬라이드쇼 스와이프 끝

//모달 시작

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];                                          

// When the user clicks on the button, open the modal 
function modalOn() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function modalOff() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

//모달 끝

// 팀플실 불러와서 옵션에 넣는 메소드
function putOption(name, target) {
  for (i in name) {
    var opt = document.createElement("option");
    opt.value = name[i];
    opt.innerHTML = name[i];
    target.appendChild(opt);
  }
}

//회원가입 단과대-전공 선택 시작
var dep_eng = ["건축학부", "건설환경공학과", "교통물류공학과", "전자공학부",
"재료화학공학과", "기계공학과", "산업경영공학과", "생명나노공학과", "로봇공학과",
"융합공학과", "국방정보공학과", "스마트융합공학부"]
var dep_soft=["소프트웨어학부", "ICT융합학부"]
var dep_sci=["응용수학과", "응용물리학과", "분자생명과학과", "화학분자공학과",
"해양융합공학과", "나노광전자학과"]
var dep_lnc = ["한국언어문학과", "문화인류학과", "문화콘텐츠학과", "중국학과",
"일본학과", "영미언어문화학과", "프랑스학과"]
var dep_comm = ["광고홍보학과", "신문방송학과", "정보사회학과", "정보사회미디어학과"]
var dep_biz = ["경제학부", "경영학부", "보험계리학과", "회계세무학과"]
var dep_des = ["엔터테인먼트디자인학과", "커뮤니케이션디자인학과", "테크노프로덕트디자인학과",
"서피스인테리어디자인학과", "주얼리패션디자인학과"]
var dep_spo = ["스포츠과학부", "생활무용예술학과", "실용음악학과"]

function valid() {
  var id = document.getElementById('signup_id').value;
  var originalPsw = document.getElementById('signup_pw1').value;
  var validPsw = document.getElementById('signup_pw2').value;
  var name = document.getElementById('signup_name').value;
  var studentNum = document.getElementById('signup_stdnum').value;
  var selColl = document.getElementById('sel_mycoll');
  var selCollText = selColl.options[selColl.selectedIndex].text;
  var selDep = document.getElementById('sel_dep');
  var selDepText = selDep.options[selDep.selectedIndex].text;
  if (id.length == 0 || originalPsw.length == 0 || validPsw.length == 0 ||
    name.length == 0 || selCollText == "단과대학 선택" || selDepText == "전공 선택") {
      alert("모든 부분을 입력해야 가입이 가능합니다.")
      return false;
  } else if (studentNum.length != 10) {
    alert("학번을 형식에 맞게 입력하셨는지 확인해 주세요. 학번은 10자리 숫자입니다.");
    return false;
  } else {
    if (originalPsw != validPsw) {
      alert ("비밀번호와 확인용 비밀번호가 다릅니다.")
      return false;
    } else {
      return document.getElementById('form_signup').submit();
    }
  }
}

function selMyCollege(e) {
    var selDep = document.getElementById("sel_dep");
    selDep.options.length = 0;

    if (e.value == 1) {
      putOption(dep_biz, selDep)
    } else if (e.value == 2) {
      putOption(dep_eng, selDep)
    } else if (e.value == 3) {
      putOption(dep_lnc, selDep)
    } else if (e.value == 4) {
      putOption(dep_sci, selDep)
    } else if (e.value == 5) {
      putOption(dep_des, selDep)
    } else if (e.value == 6) {
      putOption(dep_soft, selDep)
    } else if (e.value == 7) {
      putOption(dep_comm, selDep)
    } else if (e.value == 8) {
      putOption(dep_spo, selDep)
    } else {
      var opt = document.createElement("option");
      opt.innerHTML = "전공 선택";
      selDep.appendChild(opt);
    }
  }
//회원가입 단과대-전공 선택 끝


//각 공간 시간표 보이기 시작
var timeTable = $(".room_timetable_div");

$(".room_div").click(function() {
  var tbDivName = $(this).attr('name') + 'tt';
  var tbName = tbDivName.substring(6,10);
  if ($("div[name='"+tbDivName+"']").css("display") == "none") {
    $("div[name='"+tbDivName+"']").css("display", "flex");
  } else {
    $("div[name='"+tbDivName+"']").css("display", "none");
  }
});
//각 공간 시간표 보이기 끝

//공간 목록 시작
var college = {1:"국제문화대학", 2:"소프트웨어융합대학",
3:"언론정보대학", 4:"학술정보관", 5:"학생복지관"}
var lnc = ["꿈의둥지 1번방", "꿈의둥지 2번방", "꿈의둥지 3번방", 
"랩실 1번방", "랩실 2번방", "랩실 3번방"]
var cpt = ["Knowledge Factory 1번방", "Knowledge Factory 2번방", 
"큐브 1번방", "큐브 2번방", "큐브 3번방", "큐브 4번방", "큐브 5번방", ]
var comm = ["라운지 1번방", "라운지 2번방"]
var lib = ["E실", "R실", "I실", "C실", "A실"]
var wel = ["Exchange Room 1번방", "Exchange Room 2번방", 
"Exchange Room 3번방", "Exchange Room 4번방", "Exchange Room 5번방", ]


// 공간에 따라 시간표 보이기




function selCollege(e) {
    var selRoom = document.getElementById("sel_room");
    selRoom.options.length = 0;

    if (e.value == 1) {
      putOption(lnc, selRoom)
    } else if (e.value == 2) {
      putOption(cpt, selRoom)
    } else if (e.value == 3) {
      putOption(comm, selRoom)
    } else if (e.value == 4) {
      putOption(lib, selRoom)
    } else if (e.value == 5) {
      putOption(wel, selRoom)
    } else {
      var opt = document.createElement("option");
      opt.innerHTML = "공간 선택";
      selRoom.appendChild(opt);
    }
  }


function selTime(e) {
  var selTimeAmount = document.getElementById("sel_timeamount");
  selTimeAmount.options.length = 0;

  var opt = document.createElement("option");

  if (e.value == 22) {
    opt.innerHTML = "1";
    selTimeAmount.appendChild(opt);
  } else if(e.value == 0){
    selTimeAmount.options.length = 0;
  } else {
    for(var i=1; i<3; i++) {
      var opt = document.createElement("option");
      opt.innerHTML = i;
      selTimeAmount.appendChild(opt);
    }
  }
}
