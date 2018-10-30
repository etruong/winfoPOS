(function() {
    
    let backgroundColor = ["lightblue", "lightpink", "darkyellow", "lavender"];
    
    function $(id) {
        return document.getElementById(id);
    }
    
    function qsa(select) {
        return document.querySelectorAll(select);
    }
    
    window.onload = function() {
        $("enter").onclick = function() {change("sign-in", "how-are-you");};
        loadEmoji();
        loadHistory();
        loadNavigation();
        $("change-today").onclick = today;
        $("open").onclick = openMenu;
        $("close").onclick = closeMenu;
        $("back").onclick = thinkPositive;
        $("help").onclick = function() {change("negative", "talk");};
        $("positive").onclick = function() {change("negative", "positives");};
        $("show-struggle").onclick = showStruggles;
    };
    
    function loadNavigation() {
        let navbut = qsa("#nav-list li");
        for (let i = 0; i < navbut.length; i++) {
            navbut[i].onclick = navigation;
        }
    }
    
    function thinkPositive() {
        $("good-day").classList.remove("hidden");
        $("good-day-sub").classList.remove("hidden");
        $("talk").classList.add("hidden");
        $("talk").classList.add("hidden");
        let positive_events = qsa("#positive-events li");
        for (let i = 1; i < positive_events.length; i++) {
            positive_events[i].classList.add("hidden");
        }
        change("negative", "positives");
    }
    
    function showStruggles() {
        let struggle = qsa(".struggles");
        for (let i = 0; i < struggle.length; i++) {
            if (struggle[i].classList.contains("hidden")) {
                struggle[i].classList.remove("hidden");
            } else {
                struggle[i].classList.add("hidden");
            }
        }
    }
    
    function closeMenu() {
        $("open").classList.remove("hidden");
        $("close").classList.add("hidden");
        $("nav-list").classList.add("hidden");
    }
    
    function openMenu() {
        $("open").classList.add("hidden");
        $("close").classList.remove("hidden");
        $("nav-list").classList.remove("hidden");
    }
    
    function loadHistory() {
        for (let i = 1; i <= 31; i++) {
            let day = document.createElement("p");
            day.innerText = i + " ";
            day.classList.add("num");
            if (i > 13) {
                day.style.color = "white";
            }
            $("history").appendChild(day);
        }
    }
    
    function loadEmoji() {
        let goodMood = qsa(".good");
        for (let i = 0; i < goodMood.length; i++) {
            goodMood[i].onclick = function(){change("how-are-you", "positives");};
        }
        let badMood = qsa(".bad");
        for (let i = 0; i < badMood.length; i++) {
            badMood[i].onclick = function() {change("how-are-you", "negative");};
        }
    }
    
    function today() {
        change("positives", "main");
        change("negative", "main");
    }
    
    function navigation() {
        let button = this.innerHTML;
        if (button == "today") {
            change("week", "today");
            change("about", "today");
        } else if (button == "my week") {
            change("today", "week");
            change("about", "week");
        } else {
            change("today", "about");
            change("week", "about");
        }
    }
    
    function change(hide, appear) {
        $(hide).classList.add("hidden");
        $(appear).classList.remove("hidden");
        let index = Math.round(Math.random() * backgroundColor.length);
        document.body.style.background = backgroundColor[index];
        let inputs = qsa("input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.backgroundColor = document.body.style.background;
        }
        document.querySelector("textarea").style.backgroundColor = document.body.style.background;
        $("chat-bttn").style.backgroundColor = document.body.style.background;
    }
    
})();