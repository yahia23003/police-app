const CLIENT_ID = "معرف تطبيق ديسكورد هنا";
const REDIRECT_URI = "https://yahia23003.github.io/police-app/";
const API_URL = "https://discord.com/api";
let accessToken = null;

// تسجيل الدخول عبر ديسكورد
document.getElementById("login-discord").addEventListener("click", () => {
    window.location.href = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=identify`;
});

// استخراج التوكن من URL بعد تسجيل الدخول
window.onload = () => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    accessToken = params.get("access_token");

    if (accessToken) {
        fetch(`${API_URL}/users/@me`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
        .then(response => response.json())
        .then(user => {
            document.getElementById("login-discord").innerText = `مرحبًا، ${user.username}`;
        })
        .catch(console.error);
    }
};

// إرسال الطلب إلى ديسكورد
document.getElementById("application-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!accessToken) {
        alert("يجب تسجيل الدخول عبر ديسكورد أولًا!");
        return;
    }

    const fullName = document.getElementById("full-name").value;
    const age = document.getElementById("age").value;
    const gameUsername = document.getElementById("game-username").value;
    const violations = document.getElementById("violations").value;
    const reason = document.getElementById("reason").value;

    const message = `📢 **طلب انضمام جديد:**\n👤 الاسم: ${fullName}\n🎮 المستخدم داخل اللعبة: ${gameUsername}\n🔢 العمر: ${age}\n⚠️ مخالفات سابقة: ${violations}\n📌 سبب التقديم: ${reason}`;

    fetch("https://discord.com/api/webhooks/معرف_الويب_هوك/التوكن", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: message })
    })
    .then(() => {
        document.getElementById("status-message").innerText = "✔️ تم إرسال طلبك بنجاح!";
    })
    .catch(error => console.error("حدث خطأ", error));
});

    });
});
