/* SUB VISUAL */

// 게시판 더보기 
document.addEventListener('DOMContentLoaded', function() {
    const showPerPage = 15;		// 한 번에 표시할 항목 수
    const moreBtn = document.querySelector('.more_btn');
    const tbody = document.querySelector('.bd_tbl tbody');
    const items = Array.from(tbody.children);		// tbody의 모든 자식 요소를 배열로 변환

    let currentIndex = showPerPage;		// 현재 표시된 마지막 항목의 인덱스

    // 초기에는 showPerPage만큼의 항목만 표시하고, 나머지는 숨김
    items.forEach((item, index) => {
        if (index >= showPerPage) {
            item.classList.add('hidden');
        }
    });

    // "더보기" 버튼을 클릭하면 추가 항목을 표시
    moreBtn.addEventListener('click', function() {
        event.preventDefault(); // 기본 이벤트(링크 이동) 방지

        const nextIndex = currentIndex + showPerPage;	// 다음에 표시될 마지막 항목의 인덱스

        items.slice(currentIndex, nextIndex).forEach(item => {
            item.classList.remove('hidden');
        });
        
        currentIndex = nextIndex;

        // 모든 항목이 표시되었다면 "더보기" 버튼을 숨김
        if (currentIndex >= items.length) {
            moreBtn.style.display = 'none';
        }
    });
});