/* SUB VISUAL */

// 게시판 더보기 
document.addEventListener('DOMContentLoaded', function() {
    const mobileWidth  = 780;       // 화면 너비가 이 값보다 작으면 모바일로 간주
    const desktopShowPerPage = 10;  // 데스크탑에서 한 번에 표시할 항목 수
    const mobileShowPerPage = 5;    // 모바일에서 한 번에 표시할 항목 수
    const moreBtn = document.querySelector('.more_btn');
    const tbody = document.querySelector('.work_area ul');
    const items = Array.from(tbody.children);		// tbody의 모든 자식 요소를 배열로 변환

    let currentIndex;		// 현재 표시된 마지막 항목의 인덱스

    // 초기에는 테스크탑과 모바일에 따라 다르게 설정된 항목 수로 표시
    setItemsToShow();

    // "더보기" 버튼을 클릭하면 추가 항목을 표시
    moreBtn.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 이벤트(링크 이동) 방지

        const nextIndex = currentIndex + getShowPerPage();	// 다음에 표시될 마지막 항목의 인덱스

        items.slice(currentIndex, nextIndex).forEach(item => {
            item.style.display = ''; // 요소를 보이도록 변경
        });
        
        currentIndex = nextIndex;

        // 모든 항목이 표시되었다면 "더보기" 버튼을 숨김
        if (currentIndex >= items.length) {
            moreBtn.style.display = 'none';
        }
    });

    // 화면 크기에 따라 표시할 항목 수 설정
    function setItemsToShow() {
        currentIndex = window.innerWidth <= mobileWidth ? mobileShowPerPage : desktopShowPerPage;
        hideItemsAfterIndex(currentIndex);
    }

    // 화면 크기 변경 시 항목 수 재설정
    window.addEventListener('resize', function() {
        setItemsToShow();
    });

    // 특정 인덱스 이후의 항목 숨기기
    function hideItemsAfterIndex(index) {
        items.forEach((item, idx) => {
            if (idx >= index) {
                item.style.display = 'none'; // 요소를 숨김
            }
        });
    }

    // 현재 화면 크기에 따라 보여줄 항목 수 반환
    function getShowPerPage() {
        return window.innerWidth <= mobileWidth ? mobileShowPerPage : desktopShowPerPage;

        
    }
});

// 페이지 TOP 버튼 숨김
document.addEventListener('DOMContentLoaded', function() {
    const topButton = document.querySelector('.go_top');
    topButton.classList.add('hidden');

    window.addEventListener('scroll', function() {
        if (window.scrollY < 100) { // 화면 상단으로부터 100px 이상 스크롤되었을 때
            topButton.classList.add('hidden');
        } else {
            topButton.classList.remove('hidden');
        }
    });
});
