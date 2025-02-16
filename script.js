const CLIENT_ID = "YOUR_CLIENT_ID";
const REDIRECT_URI = "YOUR_REDIRECT_URI";

function loginWithDiscord() {
    window.location.href = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=identify`;
}

// عند تسجيل الدخول، يظهر نموذج التقديم
window.onload = function () {
    if (window.location.hash.includes("access_token")) {
        document.getElementById("applicationForm").style.display = "block";
    }
};

// إرسال التقديم (سيتم تطويره لاحقًا لإرساله إلى ديسكورد تلقائيًا)
document.getElementById("applyForm").onsubmit = function (event) {
    event.preventDefault();
    alert("تم إرسال التقديم بنجاح! سيتم مراجعته قريبًا.");
};
