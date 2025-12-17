// 스크롤 감지 및 클래스 부여 함수
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    const observerOptions = {
        threshold: 0.15 // 요소가 15% 정도 보일 때 실행
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    reveals.forEach((el) => observer.observe(el));
}

// 페이지가 완전히 로드된 후 함수 실행
document.addEventListener("DOMContentLoaded", reveal);