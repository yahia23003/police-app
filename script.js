document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const applyForm = document.getElementById("apply-form");
    const totalRequests = document.getElementById("total-requests");
    const acceptedRequests = document.getElementById("accepted-requests");
    const rejectedRequests = document.getElementById("rejected-requests");

    let userData = null;

    loginBtn.addEventListener("click", () => {
        // تسجيل الدخول عبر ديسكورد
        window.location.href = "https://discord.com/oauth2/authorize?...";
    });

    applyForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const application = {
            fullName: document.getElementById("full-name").value,
            age: document.getElementById("age").value,
            gameUser: document.getElementById("game-user").value,
            violations: document.getElementById("violations").value,
            reason: document.getElementById("reason").value,
        };

        // إرسال الطلب إلى API لحفظه
        fetch("https://your-api.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(application),
        }).then(response => response.json()).then(data => {
            alert("تم إرسال طلبك بنجاح!");
            updateStats();
        });
    });

    function updateStats() {
        // جلب الإحصائيات من API
        fetch("https://your-api.com/stats")
            .then(response => response.json())
            .then(data => {
                totalRequests.textContent = data.total;
                acceptedRequests.textContent = data.accepted;
                rejectedRequests.textContent = data.rejected;
            });
    }

    updateStats();
});
