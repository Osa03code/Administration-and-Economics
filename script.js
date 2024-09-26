document.addEventListener('DOMContentLoaded', function () {
    const eventsList = document.getElementById('events-list');

    // قائمة الفعاليات القادمة (يمكن تعديلها أو إضافتها من قاعدة بيانات أو API)
    const upcomingEvents = [
        {
            title: "ملتقى ريادة الأعمال",
            date: "5 أكتوبر 2023",
            description: "ملتقى مخصص لطلاب إدارة الأعمال لعرض أفكارهم الريادية.",
            details: "يشمل الملتقى جلسات مع رواد الأعمال المحليين والدوليين، وعروض لأفضل الأفكار الريادية من الطلاب.\nستكون هناك فرص للتواصل مع المستثمرين."
        },
        {
            title: "محاضرة حول الاقتصاد العالمي",
            date: "10 أكتوبر 2023",
            description: "محاضرة حول التحديات الحالية في الاقتصاد العالمي.",
            details: "تناولت المحاضرة تأثير العولمة، والتحديات التي تواجه الدول النامية في مواكبة الاقتصاد العالمي.\nسيكون هناك مناقشة مفتوحة بعد المحاضرة."
        }
    ];

    // إضافة الفعاليات القادمة إلى الصفحة
    upcomingEvents.forEach(event => {
        const eventItem = document.createElement('li');
        eventItem.innerHTML = `
            <h3>${event.title}</h3>
            <p>تاريخ: ${event.date}</p>
            <p>${event.description}</p>
            <div class="event-details">
                <p>${event.details.replace(/\n/g, '<br>')}</p>
            </div>
        `;
        eventItem.addEventListener('click', function () {
            toggleDetails(eventItem);
        });
        eventsList.appendChild(eventItem);
    });
});

function toggleDetails(eventItem) {
    const details = eventItem.querySelector('.event-details');
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}