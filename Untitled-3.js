function updateQuantity(item, change) {
    const quantityElement = document.getElementById(item);
    if (!quantityElement) return;

    // الحصول على الكمية الحالية
    let quantity = parseInt(quantityElement.textContent) || 0;

    // تحديث الكمية
    quantity += change;

    // التأكد من عدم وجود أعداد سالبة
    if (quantity < 0) quantity = 0;

    // تحديث الكمية في العنصر
    quantityElement.textContent = quantity;

    // تحديث السعر الإجمالي
    updateTotalPrice();
}

function updateTotalPrice() {
    let total = 0;

    // قائمة العناصر والأسعار الخاصة بها
    const items = ['يبرق', 'كبة', 'شاكرية', 'فتوش', 'بقلاوة', 'شورما', 'سمبوسة', 'تبولة', 'حلاوة الجبن']; // إضافة حلاوة الجبن
    const prices = {
        'يبرق': 7,  // سعر اليبرق
        'كبة': 4,   // سعر الكبة
        'شاكرية': 6, // سعر الشاكرية
        'فتوش': 3,  // سعر الفتوش
        'بقلاوة': 5, // سعر البقلاوة
        'شورما': 3,  // سعر الشورما
        'سمبوسة': 4, // سعر السمبوسة
        'تبولة': 3,  // سعر التبولة
        'حلاوة الجبن': 4 // سعر حلاوة الجبن
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
    document.getElementById('totalPrice').textContent = `Total: ${total.toFixed(2)} JD`;
}
