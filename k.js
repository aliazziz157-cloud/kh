function showMessage(event) {
    // منع الرابط من الانتقال فوراً ليعطي فرصة للتأثير البصري
    // event.preventDefault(); 

    // الحصول على النص الموجود داخل الزر الذي ضُغط عليه
    const buttonText = event.target.innerText;
    
    // إظهار تنبيه مخصص بناءً على الزر
    alert('جاري تجهيز رابط: ' + buttonText);

    // إضافة تأثير بصري (تصغير الزر قليلاً ثم إعادته)
    const button = event.target;
    button.style.transform = 'scale(0.9)';
    button.style.transition = '0.2s';
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
}

// كود إضافي: ترحيب بالزائر بناءً على نوع جهازه في الـ Console
window.onload = function() {
    if (window.innerWidth <= 768) {
        console.log("مرحباً مستخدم الهاتف (أندرويد)");
    } else {
        console.log("مرحباً مستخدم الكمبيوتر");
    }
};
