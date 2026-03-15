// دالة الرسالة
function showMessage(event) {
    alert('🎉 مرحباً! شكراً لزيارتك!');
    if (event && event.target) {
        const button = event.target;
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }
}

// كود التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// في ملف kh.js
document.getElementById('downloadBtn').addEventListener('click', function(event) {
    console.log("تم الضغط على زر التنزيل!");
    alert("سيتم نقلك واختر تطبيقك ");
});
