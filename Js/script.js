/* ==========================================
   EASY CODE
   MAIN SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initNavigation();

    initProjectFilter();

    initModal();

    initScrollReveal();

    initBackToTop();

});

/* ==========================================
   NAVIGATION
========================================== */

function initNavigation(){

    const menuButton = document.getElementById("menuButton");

    const nav = document.querySelector("nav");

    const links = document.querySelectorAll("nav a");

    /* Mobile Menu */

    if(menuButton && nav){

        menuButton.addEventListener("click",()=>{

            nav.classList.toggle("mobile-open");

        });

    }

    /* Active Menu */

    links.forEach(link=>{

        link.addEventListener("click",()=>{

            links.forEach(item=>{

                item.classList.remove("active");

            });

            link.classList.add("active");

        });

    });

}

/* ==========================================
   PROJECT FILTER
========================================== */

function initProjectFilter(){

    const buttons = document.querySelectorAll(".filter-buttons button");

    const projects = document.querySelectorAll(".project");

    if(buttons.length===0) return;

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            buttons.forEach(btn=>{

                btn.classList.remove("active");

            });

            button.classList.add("active");

            const filter = button.textContent.toLowerCase();

            projects.forEach(project=>{

                if(filter==="all" || project.classList.contains(filter)){

                    project.style.display="block";

                }

                else{

                    project.style.display="none";

                }

            });

        });

    });

}

/* ==========================================
   HTML / CSS / JAVASCRIPT TERMS
========================================== */

const codingTerms = {

    html:[

        ["html","Root element"],

        ["head","Page information"],

        ["body","Visible content"],

        ["div","Generic container"],

        ["section","Content section"],

        ["article","Independent content"],

        ["header","Top area"],

        ["footer","Bottom area"],

        ["img","Displays images"],

        ["a","Creates links"]

    ],

    css:[

        ["color","Text color"],

        ["background","Background"],

        ["display","Layout"],

        ["position","Positioning"],

        ["flex","Flexbox"],

        ["grid","Grid layout"],

        ["padding","Inner spacing"],

        ["margin","Outer spacing"],

        ["transition","Animation"],

        ["box-shadow","Shadow"]

    ],

    javascript:[

        ["let","Variable"],

        ["const","Constant"],

        ["function","Function"],

        ["if","Condition"],

        ["for","Loop"],

        ["array","Collection"],

        ["object","Object"],

        ["event","User interaction"],

        ["fetch","HTTP request"],

        ["async","Asynchronous code"]

    ]

};

/* ==========================================
   MODAL
========================================== */

function initModal(){

    Object.assign(window,{

        showTerms,

        closeModal

    });

}

function showTerms(language){

    if(!codingTerms[language]) return;

    const modal = document.getElementById("modal");

    const title = document.getElementById("modalTitle");

    const list = document.getElementById("modalList");

    if(!modal) return;

    title.textContent = language.toUpperCase();

    list.innerHTML = "";

    codingTerms[language].forEach(term=>{

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${term[0]}</strong> - ${term[1]}
        `;

        list.appendChild(li);

    });

    modal.classList.add("active");

}

function closeModal(){

    const modal = document.getElementById("modal");

    if(modal){

        modal.classList.remove("active");

    }

}

window.addEventListener("click",(event)=>{

    const modal = document.getElementById("modal");

    if(event.target===modal){

        closeModal();

    }

});

/* ==========================================
   SCROLL REVEAL
========================================== */

function initScrollReveal(){

    const cards = document.querySelectorAll(

        ".glass-card, .card"

    );

    if(cards.length===0) return;

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:0.2

    });

    cards.forEach(card=>{

        card.classList.add("hidden");

        observer.observe(card);

    });

}

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

function initBackToTop(){

    const button = document.createElement("button");

    button.id = "topButton";

    button.textContent = "↑";

    document.body.appendChild(button);

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    window.addEventListener("scroll",()=>{

        if(window.scrollY>300){

            button.classList.add("visible");

        }

        else{

            button.classList.remove("visible");

        }

    });

}

/* ==========================================
   TYPING EFFECT
========================================== */

const typingMessages = Object.freeze([

    "Learning HTML...",

    "Learning CSS...",

    "Learning JavaScript...",

    "Building Modern Websites...",

    "Welcome to Easy Code"

]);

let typingIndex = 0;

let characterIndex = 0;

let deleting = false;

/* ==========================================
   TYPING EFFECT
========================================== */

function typeEffect(){

    const title = document.getElementById("heroTitle");

    if(!title) return;

    const current = typingMessages[typingIndex];

    if(!deleting){

        title.textContent = current.substring(0, characterIndex++);

        if(characterIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        title.textContent = current.substring(0, characterIndex--);

        if(characterIndex < 0){

            deleting = false;

            typingIndex++;

            if(typingIndex >= typingMessages.length){

                typingIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 40 : 90);

}

typeEffect();

/* ==========================================
   CONTACT FORM
========================================== */

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit",(event)=>{

        event.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input=>{

            if(input.value.trim()===""){

                valid = false;

                input.style.borderColor = "#ff4444";

            }

            else{

                input.style.borderColor = "#00ff88";

            }

        });

        if(valid){

            alert("Message sent successfully!");

            form.reset();

        }

        else{

            alert("Please complete all fields.");

        }

    });

}

/* ==========================================
   ANIMATED SKILL BARS
========================================== */

const bars = document.querySelectorAll(".progress-bar");

if(bars.length){

    const skillObserver = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const width = window.getComputedStyle(entry.target).width;

                entry.target.style.width = "0";

                setTimeout(()=>{

                    entry.target.style.transition = "width 1.5s ease";

                    entry.target.style.width = width;

                },200);

                skillObserver.unobserve(entry.target);

            }

        });

    });

    bars.forEach(bar=>{

        skillObserver.observe(bar);

    });

}

/* ==========================================
   BUTTON HOVER EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0) scale(1)";

    });

});

/* ==========================================
   PAGE FADE-IN
========================================== */

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    document.body.style.transition="opacity .8s";

    requestAnimationFrame(()=>{

        document.body.style.opacity="1";

    });

});

/* ==========================================
   CURRENT YEAR
========================================== */

document.querySelectorAll("footer p").forEach(paragraph=>{

    paragraph.innerHTML = paragraph.innerHTML.replace(

        "2026",

        new Date().getFullYear()

    );

});

/* ==========================================
   LANGUAGE MENU
========================================== */

const languageButton = document.getElementById("languageButton");

const languageMenu = document.getElementById("languageMenu");

if(languageButton && languageMenu){

    languageButton.addEventListener("click",()=>{

        languageMenu.classList.toggle("show");

    });

    document.addEventListener("click",(event)=>{

        if(

            !languageButton.contains(event.target) &&

            !languageMenu.contains(event.target)

        ){

            languageMenu.classList.remove("show");

        }

    });

}