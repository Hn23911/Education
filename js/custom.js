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
const wrapper = document.getElementById('.testimoialwrapper');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const totalSlides = 2;

function moveToSlide(index) {
    currentSlide = index;
    const slideWidth = wrapper.clidentWidth;
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    setInterval(() =>{
    currentSlide = (currentSlide + 1) % totalSlides;
    moveToSlide(currentSlide);
    }, 5000);
}

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