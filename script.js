document.getElementById("discord-login").addEventListener("click", function() {
    alert("سيتم إضافة تسجيل الدخول عبر ديسكورد لاحقًا 🚀");
    document.getElementById("application-form").style.display = "block";
});

document.getElementById("application").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("تم إرسال الطلب بنجاح ✅ سيتم مراجعته قريبًا!");
});
