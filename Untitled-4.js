// script.js
document.addEventListener('DOMContentLoaded', () => {
    const ratings = document.querySelectorAll('.rating input');
    const form = document.getElementById('feedback-form');
    const submitButton = document.getElementById('submit-feedback');
    
    // إضافة مستمع حدث لكل النجوم
    ratings.forEach(rating => {
        rating.addEventListener('change', function() {
            const selectedStars = this.value;
            const parentRating = this.closest('.rating');
            
            parentRating.querySelectorAll('label').forEach((label, index) => {
                if (index < selectedStars) {
                    label.textContent = '★'; // ملء النجمة
                } else {
                    label.textContent = '☆'; // نجمة فارغة
                }
            });
        });
    });

    // إرسال التقييم والتحقق من المدخلات
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // منع إرسال النموذج مباشرة
        let valid = true;
        
        // التحقق من أن المستخدم قد اختار التقييم في كل قسم
        const ratingSections = document.querySelectorAll('.rating');
        ratingSections.forEach((section) => {
            if (!section.querySelector('input:checked')) {
                valid = false;
            }
        });
        
        // إذا لم يتم اختيار أي تقييم، إظهار تحذير
        if (!valid) {
            alert('يرجى تقييم جميع الأقسام قبل إرسال التقييم!');
            return;
        }

        // إذا تم التحقق بنجاح، إرسال التقييم (هنا فقط سنعرض التقييم في console)
        const feedbackData = {
            overall: document.querySelector('input[name="overall-rating"]:checked').value,
            food: document.querySelector('input[name="food-rating"]:checked').value,
            service: document.querySelector('input[name="service-rating"]:checked').value,
            ambience: document.querySelector('input[name="ambience-rating"]:checked').value,
            additionalFeedback: document.querySelector('textarea[name="additional-feedback"]').value
        };
        
        console.log('تم إرسال التقييم:', feedbackData);
        alert('تم إرسال التقييم بنجاح!');
        
        // إخفاء النموذج بعد إرسال التقييم
        form.style.display = 'none'; // إخفاء النموذج
        
        // يمكنك هنا استبدال الـ console.log و alert بجمع البيانات وإرسالها إلى الخادم باستخدام AJAX أو Fetch.
    });
});
