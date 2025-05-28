document.addEventListener("DOMContentLoaded", function () {
    const greetings = [
        { text: "Merhaba", color: "#8e2de2" }, // Neon Mor
        { text: "Hello", color: "#3498db" }, // Mavi
        { text: "Hallo", color: "#2ecc71" }, // Yeşil
        { text: "Bonjour", color: "#f1c40f" }, // Sarı
        { text: "Hola", color: "#9b59b6" }, // Mor
        { text: "Ciao", color: "#e67e22" }, // Turuncu
        { text: "Привет", color: "#1abc9c" }, // Turkuaz
        { text: "こんにちは", color: "#FF69B4" }, // Pembe
        { text: "你好", color: "#34495e" } // Koyu Gri
    ];

    let index = 0;
    const greetingElement = document.getElementById("greeting");

    function changeGreeting() {
        // JavaScript ile renk dinamik olarak uygulanacak
        greetingElement.innerHTML = `<span style="color: transparent; background: linear-gradient(45deg, ${greetings[index].color}, #4a00e0); -webkit-background-clip: text;">${greetings[index].text}</span>`;
        index = (index + 1) % greetings.length; // Dili döngüsel olarak değiştir
    }

    // İlk "Merhaba"yı yüklerken değiştir
    changeGreeting();

    // Her 3 saniyede bir dil değiştirecek
    setInterval(changeGreeting, 1250);
});
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const projects = document.querySelectorAll(".project-item");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    function showProjects() {
        // 4 projeyi 2'li gruplar halinde göstereceğiz
        for (let i = 0; i < projects.length; i++) {
            if (i >= currentIndex && i < currentIndex + 2) {
                projects[i].style.display = "flex"; // Görünür yap
                projects[i].classList.add('show'); // Animasyonu başlat
            } else {
                projects[i].classList.remove('show'); // Animasyonu bitir
                projects[i].style.display = "none"; // Gizle
            }
        }
    }

    // "Sonraki Proje" butonuna tıklandığında
    nextButton.addEventListener("click", function () {
        if (currentIndex + 2 < projects.length) {
            currentIndex += 2; // İki projeyi kaydır
        }
        // Animasyonlu geçişi sağlamak için her defasında bir geçiş ekliyoruz.
        document.querySelector(".projects-content").classList.add("animate-fade");
        setTimeout(() => {
            showProjects();
            document.querySelector(".projects-content").classList.remove("animate-fade");
        }, 500); // Animasyon süresi kadar bekliyoruz
    });

    // "Önceki Proje" butonuna tıklandığında
    prevButton.addEventListener("click", function () {
        if (currentIndex - 2 >= 0) {
            currentIndex -= 2; // İki projeyi geri kaydır
        }
        // Animasyonlu geçişi sağlamak için her defasında bir geçiş ekliyoruz.
        document.querySelector(".projects-content").classList.add("animate-fade");
        setTimeout(() => {
            showProjects();
            document.querySelector(".projects-content").classList.remove("animate-fade");
        }, 500); // Animasyon süresi kadar bekliyoruz
    });

    // İlk başlangıçta projeleri göster
    showProjects();
});
// Bu script slider'ı sağa kaydıracak şekilde ayarlıyor.
window.onload = function () {
    const slider = document.querySelector('.sponsor-slider');
    // Burada CSS animasyonun hızını değiştirmek için JavaScript ile müdahale edebilirsin.
    // Örneğin, daha hızlı kaydırma yapmak için 'animation-duration' değerini değiştirebilirsin.
};

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const themeToggle = document.getElementById("themeToggle");

    // Navbar Scroll Efekti
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Dark Mode - Light Mode Toggle
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.innerText = "🌞 Light Mode";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.innerText = "🌙 Dark Mode";
        }
    });

    // Önceki Tema Ayarını Uygula
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        themeToggle.innerText = "🌞 Light Mode";
    }
});
// Tıklanan bağlantıyı aktif yapma
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
