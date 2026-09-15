// Khởi tạo hiệu ứng AOS (Animation On Scroll)
AOS.init({duration:1000, once:true});

// Bật/tắt menu
function toggleMenu(){
    document.getElementById('menu').classList.toggle('active');
}

// Hiệu ứng đếm số
function animateCounter(id, target, speed){
    let count = 0;
    const interval = setInterval(() =>{
        if(count < target) {
            count++;
            document.getElementById(id).innerText = count;
        }else{
            clearInterval(interval);
        }
    }, speed)
}

animateCounter('courseCount', 100, 50);
animateCounter('studentCount', 1000, 20);

// Trình chiếu đánh giá (testimonial slider)
const wrapper = document.getElementById('testimonialWrapper');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const totalSlides = dots.length;
let autoSlideTimer = null;

function moveToSlide(index) {
    currentSlide = index;
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}
function startAutoSlide() {
    // luôn clear timer cũ trước khi tạo mới, tránh chạy chồng nhiều interval
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        moveToSlide(currentSlide);
    }, 5000);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        moveToSlide(index);
        startAutoSlide(); // reset timer khi người dùng click
    });
});

// Bắt đầu tự động chạy khi load trang
moveToSlide(0); // hiển thị slide đầu tiên
startAutoSlide();

// Sự kiện khi cuộn trang
window.onscroll = () => {
    const scrollY = window.scrollY,
            header = document.getElementById("mainHeader");
            header = document.getElementById("backToTop");
    header.classList.toggle("fixed", scrollY > 100);
    topBtn.style.display = scrollY > 300 ? "block" : "none";
};

// Nút quay lại từ đầu
document.getElementById("backToTop")?.addEventListener("click", () =>{
    window.scrollTo({top: 0, behavior: "smooth"});
})