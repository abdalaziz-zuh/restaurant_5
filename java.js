// دالة لتحديث الكمية
function updateQuantity(item, change) {
    // تحقق من وجود العنصر قبل محاولة الوصول إليه
    let quantityElement = document.getElementById(item);
    if (quantityElement) {
        let currentQuantity = parseInt(quantityElement.textContent);
        let newQuantity = currentQuantity + change;

        // تأكد من أن الكمية لا تصبح أقل من 0
        if (newQuantity >= 0) {
            quantityElement.textContent = newQuantity;
        }

        updateTotalPrice(); // تحديث السعر الإجمالي بعد تعديل الكمية
    } else {
        console.error(`Element with ID ${item} not found.`);
    }
}

// دالة لتحديث السعر الإجمالي
function updateTotalPrice() {
    let total = 0;

    // قائمة العناصر والأسعار الخاصة بها
    const items = ['منسف', 'مسخن', 'كفتة', 'كنافة', 'مقلوبة', 'مفتول', 'فتة', 'الحلقوم']; // إضافة "الحلقوم" إلى القائمة
    const prices = {
        'منسف': 8,
        'مسخن': 6,
        'كفتة': 4,
        'كنافة': 1,
        'مقلوبة': 4,
        'مفتول': 5,
        'فتة': 2,
        'الحلقوم': 2 // إضافة سعر الحلقوم (2)
    };

    // حساب المجموع الإجمالي لجميع العناصر
    items.forEach(item => {
        let quantityElement = document.getElementById(item);
        if (quantityElement) {
            let quantity = parseInt(quantityElement.textContent);
            total += quantity * prices[item];
        }
    });

    // تحديث السعر الإجمالي في الصفحة
    document.getElementById('totalPrice').textContent = `Total: $${total.toFixed(2)}`;
}
