const pageInit = () => {
    const charset = document.createElement("meta");
    charset.setAttribute("charset", "utf-8");

    const view = document.createElement("meta");
    view.setAttribute("name", "viewport");
    view.setAttribute("content", "initial-scale = 1.0, viewport-fit = cover");

    const head = document.querySelector("head");
    head.prepend(view);
    head.prepend(charset);

    const viewport = document.createElement("div");
    viewport.setAttribute("class", "viewport");
    viewport.innerHTML = `<div class = "cursor"></div>`

    const title_a = document.createElement("a");
    title_a.setAttribute("href", "/blog");
    title_a.innerHTML = "Stella Jo";

    const title = document.createElement("h3");
    title.setAttribute("class", "title black-grow");
    title.appendChild(title_a);

    const burger = document.createElement("button");
    burger.setAttribute("class", "burger");
    burger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    const menulist = ["About", "Articles"];
    const navlist = document.createElement("ul");
    navlist.setAttribute("class", "navlist");

    menulist.forEach(each => {
        let nav_a = document.createElement("a");
        nav_a.setAttribute("class", "nav-a black-grow");
        nav_a.setAttribute("href", "#");
        nav_a.innerHTML = each;

        let nav_li = document.createElement("li");
        nav_li.appendChild(nav_a);
        
        navlist.appendChild(nav_li);
    })

    const navbar = document.createElement("nav");
    navbar.setAttribute("class", "navbar");
    navbar.appendChild(burger);
    navbar.appendChild(navlist);

    const header = document.createElement("header");
    header.setAttribute("class", "header");
    header.appendChild(title);
    header.appendChild(navbar);

    const main = document.querySelector(".main");

    const sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");

    const container = document.createElement("div");
    container.setAttribute("class", "container");
    container.appendChild(sidebar);
    container.appendChild(main);

    const top_button = document.createElement("button");
    top_button.setAttribute("class", "top-button black-grow");
    top_button.innerHTML = `
    <svg class = "arrow-img" height="100%" width="100%" viewBox="0 0 24 24">
        <path stroke="#404040" stroke-width="1" d="M12+5.4782L12+18.5218" fill="none" opacity="1"/>
        <path stroke="#404040" stroke-width="1" d="M12+5.4782L6.88592+10.8197" fill="none" opacity="1"/>
        <path stroke="#404040" stroke-width="1" d="M12+5.4782L17.1141+10.8197" fill="none" opacity="1"/>
    </svg>
    `;

    const body = document.querySelector("body");
    body.prepend(top_button);
    body.prepend(container);
    body.prepend(header);
    body.prepend(viewport);
};

const cursorEffect = () => {
    const cursor = document.querySelector(".cursor")

    document.addEventListener("mousemove", e => {
        const mouseX = e.clientX + "px";
        const mouseY = e.clientY + "px";

        cursor.style.left = mouseX;
        cursor.style.top = mouseY;
    });

    let cursor_black_grow = [];
    document.querySelectorAll(".black-grow").forEach(each => {
        cursor_black_grow.push(each);
    });

    cursor_black_grow.forEach(link => {
        link.addEventListener("mouseover", () => {
            cursor.classList.add("cursor-black-grow");
        });
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-black-grow");
        });
    });

    let cursor_white_grow = [];
    document.querySelectorAll(".white-grow").forEach(each => {
        cursor_white_grow.push(each);
    });

    cursor_white_grow.forEach(link => {
        link.addEventListener("mouseover", () => {
            cursor.classList.add("cursor-white-grow");
        });
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-white-grow");
        });
    });
};

const headerEffect = () => {
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (scrollY > 0) {
            header.classList.add("scroll-header");
        } else {
            header.classList.remove("scroll-header");
        }
    });
};

const burgerAction = () => {
    const burger = document.querySelector(".burger");
    burger.addEventListener("click", () => {
        burger.classList.toggle("open-burger");
    });
};

pageInit();
cursorEffect();
headerEffect();
burgerAction();