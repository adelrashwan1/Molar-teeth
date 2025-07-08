function submitOrder() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!name || !phone) {
        alert("من فضلك أدخل اسمك ورقم هاتفك.");
        return;
    }

    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let orderList = [];

    checkboxes.forEach(cb => {
        orderList.push(cb.value.trim()); // ✅ تم التعديل هنا لاستخدام value بدل textContent
    });

    if (orderList.length === 0) {
        alert("من فضلك اختر منتج واحد على الأقل.");
        return;
    }

    // بناء الرسالة
    let message = `السلام عليكم 👋\n\n`;
    message += `الاسم: ${name}\n`;
    message += `رقم الهاتف: ${phone}\n\n`;
    message += `الطلب:\n`;
    message += `${orderList.join("\n")}`;

    // ترميز الرسالة
    const encodedMessage = encodeURIComponent(message).replace(/%0A/g, '%0A');

    // فتح الواتساب
    const whatsappURL = `https://wa.me/201098941965?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
}

// غلق القائمة الجانبية بعد الضغط على أي رابط داخلها
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('check').checked = false;
    });
});