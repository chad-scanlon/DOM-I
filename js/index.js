const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let hero = document.getElementById("cta-img");
hero.setAttribute('src', siteContent["cta"]["img-src"])

let midPage = document.getElementById("middle-img");
midPage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let heroBanner = document.querySelector("h1");
heroBanner.textContent = siteContent["cta"]["h1"];

let heroButton = document.querySelector("button");
heroButton.textContent = siteContent["cta"]["button"];

let navBar = document.getElementsByTagName("a");
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

// navBar[0].style.color = "green";
// navBar[1].style.color = "green";
// navBar[2].style.color = "green";
// navBar[3].style.color = "green";
// navBar[4].style.color = "green";
// navBar[5].style.color = "green";



let h4Content = document.getElementsByTagName("h4");
h4Content[0].textContent = "Features"
h4Content[1].textContent = "About"
h4Content[2].textContent = "Services"
h4Content[3].textContent = "Product"
h4Content[4].textContent = "Vision"
h4Content[5].textContent = "Contact"

let ContentPara = document.getElementsByTagName("p");
ContentPara[0].textContent = siteContent["main-content"]["features-content"];
ContentPara[1].textContent = siteContent["main-content"]["about-content"];
ContentPara[2].textContent = siteContent["main-content"]["services-content"];
ContentPara[3].textContent = siteContent["main-content"]["product-content"];
ContentPara[4].textContent = siteContent["main-content"]["vision-content"];
ContentPara[5].textContent = siteContent["contact"]["address"];
ContentPara[6].textContent = siteContent["contact"]["phone"];
ContentPara[7].textContent = siteContent["contact"]["email"];
ContentPara[8].textContent = siteContent["footer"]["copyright"]

const newNavItem = document.querySelector("header nav");
let newItem = document.createElement("a");
newItem.textContent = "World";
newNavItem.appendChild(newItem);
let firstItem = document.createElement("a");
firstItem.textContent = "Hello"
newNavItem.prepend(firstItem);

const navStyle = document.querySelectorAll("header nav a")
navStyle.forEach(navBar => {
    navBar.style.color = 'green';
});