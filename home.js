const pageInit = () => {
    const charset = document.createElement("meta");
    charset.setAttribute("charset", "utf-8");

    const view = document.createElement("meta");
    view.setAttribute("name", "viewport");
    view.setAttribute("content", "initial-scale = 1.0, viewport-fit = cover");

    const head_title = document.createElement("title");
    head_title.textContent = "Hielo";

    const css_link = document.createElement("link");
    css_link.setAttribute("href", "./home.css");
    css_link.setAttribute("rel", "stylesheet");
    css_link.setAttribute("type", "text/css");

    const head = document.querySelector("head");
    head.appendChild(charset);
    head.appendChild(view);
    head.appendChild(head_title);
    head.appendChild(css_link);

    const cursor_div = document.createElement("div");
    cursor_div.setAttribute("class", "cursor");

    const viewport = document.createElement("div");
    viewport.setAttribute("class", "viewport");
    viewport.appendChild(cursor_div);

    const title_a = document.createElement("a");
    title_a.setAttribute("href", "/");
    title_a.textContent = "Hielo";

    const blog_name = document.createElement("h3");
    blog_name.setAttribute("class", "title black-grow");
    blog_name.appendChild(title_a);

    const burger = document.createElement("button");
    burger.setAttribute("class", "burger");

    for (i = 0; i < 3; i += 1) {
        let burger_bar = document.createElement("span");
        burger.appendChild(burger_bar);
    }

    const menulist = ["About", "Articles"];
    const navlist = document.createElement("ul");
    navlist.setAttribute("class", "navlist");

    menulist.forEach(each => {
        let nav_a = document.createElement("a");
        nav_a.setAttribute("class", "nav-a black-grow");
        nav_a.setAttribute("href", "/");
        nav_a.textContent = each;

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
    header.appendChild(blog_name);
    header.appendChild(navbar);

    const content = document.querySelector(".content");

    const sidebar = document.createElement("section");
    sidebar.setAttribute("class", "sidebar");

    const container = document.createElement("main");
    container.appendChild(sidebar);
    container.appendChild(content);

    const arrow_img = document.createElement("img");
    arrow_img.setAttribute("class", "arrow-img");
    arrow_img.setAttribute("src", "/_data/arrow_up.svg");

    const top_button = document.createElement("button");
    top_button.setAttribute("class", "top-button black-grow");
    top_button.appendChild(arrow_img);

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
    const navlist = document.querySelector(".navlist");

    let lastScroll = 0;
    let scrollSave = 0;

    window.addEventListener("scroll", () => {
        let open = document.querySelector(".open-burger");

        if (open) {
            open.classList.remove("open-burger");
        }

        if (scrollY > lastScroll) {
            scrollSave = Math.min(80, scrollSave + scrollY - lastScroll);
        } else {
            scrollSave = Math.max(0, scrollSave - lastScroll + scrollY);
        }

        if (scrollY <= 0) {
            scrollSave = -0;
        }

        header.style.marginTop = -scrollSave + "px";
        navlist.style.top = 80 - scrollSave + "px";
        lastScroll = scrollY;
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
