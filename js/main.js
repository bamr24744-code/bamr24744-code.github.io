document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ تم تحميل الموقع بنجاح');
    
    // معالجة نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
            contactForm.reset();
        });
    }
    
    // إضافة تأثيرات عند تمرير الماوس على البطاقات
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
