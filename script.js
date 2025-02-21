document.getElementById("login-btn").addEventListener("click", () => {
    const CLIENT_ID = "YOUR_CLIENT_ID";  // ضع Client ID هنا
    const REDIRECT_URI = "https://your-site.com/callback"; // ضع رابط إعادة التوجيه الفعلي
    const DISCORD_AUTH_URL = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=token&scope=identify`;

    window.location.href = DISCORD_AUTH_URL;
});

document.getElementById("apply-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const application = {
        fullName: document.getElementById("full-name").value,
        age: document.getElementById("age").value,
        gameUser: document.getElementById("game-user").value,
        violations: document.getElementById("violations").value,
        reason: document.getElementById("reason").value,
    };

    fetch("https://YOUR_API_ENDPOINT/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(application),
    })
    .then(response => response.json())
    .then(data => {
        alert("✅ تم إرسال طلبك بنجاح!");
    })
    .catch(error => {
        console.error("❌ خطأ في إرسال الطلب:", error);
        alert("❌ حدث خطأ أثناء إرسال الطلب.");
    });
});
