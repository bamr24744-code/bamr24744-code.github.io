// دوال مساعدة يمكن استخدامها في أي مكان

// دالة لتنسيق التاريخ
function formatDate(date) {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

// دالة للتحقق من صحة البريد الإلكتروني
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// دالة لإظهار رسالة مؤقتة
function showTemporaryMessage(element, message, duration = 3000) {
    element.textContent = message;
    setTimeout(() => {
        element.textContent = '';
    }, duration);
}
