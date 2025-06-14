20252214 김현민

깃허브 주소: https://github.com/ksnxjwo  
웹사이트 주소: https://ksnxjwo.github.io/ksnxjwo/  

테마 활용 X

웹사이트 소개:
- 소개
- 할 수 있는 기술 소개
- 참여한 프로젝트
- 희망 직무
- 연락처

  추가한 기능:
  navbar  
    - 헤더 상단에 navbar 추가, 소개 기술스택 프로젝트 희망직무 연락처 란을 클릭하면 그 섹션으로 이동
    - html파일: 21줄 css파일: 48줄
    - <nav class="navbar"> navbar 클래스를 가진 nav를 만듬 <ul>: 순서 없는 목록 <li>: 리스트 항목 <a href="#id"> id 클래스를 가진 섹션으로 이동  
  fade in  
    - 웹사이트 입장시 헤더, 소개, 기술스택 파트가 서서히 올라옴
    - html파일: 각 파트 css파일: 5줄 js파일: 2줄
    - 각 파트에 fade-in 클래스 부여, 
      .fade-in {
        opacity: 0; // 요소가 투명하게 시작  
        transform: translateY(20px); // 아래 20px 이동한 상태  
        transition: opacity 1s ease-out, transform 1s ease-out; // 위 코드 값이 바뀔 때 1초 동안 변화  
      } // 즉 화면에 보이지 않게 숨긴 상태  
      .fade-in.show {  
        opacity: 1; // 불투명(화면에 보임)  
        transform: translateY(0); // 원래 위치로 이동  
      } // 등장 상태
  
      const faders = document.querySelectorAll('.fade-in'); // .fade-in 클래스를 가진 모든 요소를 faders에 저장  
      const observer = new IntersectionObserver((entries) => { // entries =	화면에 보이게 된 요소들의 정보 목록  
        entries.forEach(entry => {  
          if (entry.isIntersecting) { // entry.isIntersecting	= 요소가 화면에 일정 이상 보이면 true  
            entry.target.classList.add('show'); // 현재 요소 감지해서 .show 클래스 추가  
          }  
        });  
      }, { threshold: 0.1 });  
      faders.forEach(fade => observer.observe(fade)); // faders 목록을 순회하며 각 요소를 observer가 감시하도록 설정  
  새로고침 시 맨 위로 강제이동  
    -새로고침 시 맨 위로 강제이동
    -js파일: 13줄
    -  
      if ('scrollRestoration' in history) { // 브라우저가 scrollRestoration 기능을 지원하는지 확인  
        history.scrollRestoration = 'manual'; // 브라우저가 위치를 기억하지 않도록 강제 차단 (새로고침 시 이전 스크롤 위치를 기억하지 않도록 만듬)  
      }  
      window.addEventListener('load', () => {  
        window.scrollTo(0, 0); // 스크롤을 최상단(좌표 x=0, y=0) 으로 이동  
      });  
