let series = [];
let title = [];
let thumbnail = [];
let date = [];
let overview = [];

const metadata = {
    web: [
        {
            title: "Making_blog", 
            date: "2021.11.05.",
            thumbnail: true,
            overview: "Making blog with html, javascript, css. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper viverra nam libero. Aliquam faucibus purus in massa tempor nec. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non tellus orci ac. Odio ut enim blandit volutpat maecenas volutpat blandit. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Augue lacus viverra vitae congue eu consequat ac. In egestas erat imperdiet sed euismod nisi. Mi proin sed libero enim sed faucibus turpis. Adipiscing elit pellentesque habitant morbi. Tellus rutrum tellus pellentesque eu. Diam donec adipiscing tristique risus nec feugiat in."
        },
        {
            title: "CSS+html_frontend",
            date: "2021.11.03.",
            thumbnail: true,
            overview: "Frontend that I learned by making blog."
        },
        {
            title: "Wee!!!",
            date: "2021.11.04.",
            thumbnail: false,
            overview: "Two months are left this year. This article is about my new year's goals."
        }
    ],
    javascript: [
        {
            title: "Javascript_Discord_bot_develop",
            date: "2021.11.02.",
            thumbnail: true,
            overview: "Making Discord bot using node.js."
        }
    ]
}

let posts = [];

const init = data => {
    for (let c in data) {
        for (let i in data[c]) {
            let post = {
                series: c,
                title: data[c][i].title,
                date: data[c][i].date,
                thumbnail: data[c][i].thumbnail,
                overview: data[c][i].overview
            };
            posts.push(post);
        }
    }
    posts.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });
    console.log(posts);
    console.log(metadata);
    
    for (let i in posts) {
        series.push(posts[i].series);
        title.push(posts[i].title);
        date.push(posts[i].date);
        thumbnail.push(posts[i].thumbnail);
        overview.push(posts[i].overview);
    }
};

const pageInit = () => {
    const charset = document.createElement("meta");
    charset.setAttribute("charset", "utf-8");

    const view = document.createElement("meta");
    view.setAttribute("name", "viewport");
    view.setAttribute("content", "initial-scale = 1.0, viewport-fit = cover");

    const head_title = document.createElement("title");
    head_title.innerHTML = "Stella Jo";

    const css_link = document.createElement("link");
    css_link.setAttribute("href", "./home.css");
    css_link.setAttribute("rel", "stylesheet");
    css_link.setAttribute("type", "text/css");

    const head = document.querySelector("head");
    head.appendChild(charset);
    head.appendChild(view);
    head.appendChild(head_title);
    head.appendChild(css_link);

    const viewport = document.createElement("div");
    viewport.setAttribute("class", "viewport");
    viewport.innerHTML = `<div class = "cursor"></div>`

    const title_a = document.createElement("a");
    title_a.setAttribute("href", "/blog");
    title_a.innerHTML = "Stella Jo";

    const blog_name = document.createElement("h3");
    blog_name.setAttribute("class", "title black-grow");
    blog_name.appendChild(title_a);

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
    header.appendChild(blog_name);
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

const createBlogcard = (t) => {

    const section = document.createElement("section");
    section.setAttribute("class", "blogs");

    for (i = t-1; i > -1; i--) {

        const blogtitle = document.createElement("h4");
        blogtitle.setAttribute("class", "blog-title");
        blogtitle.innerHTML = title[i].replaceAll("_", " ");

        const blogoverview = document.createElement("p");
        blogoverview.setAttribute("class", "blog-overview");
        blogoverview.innerHTML = overview[i];

        const blogtext = document.createElement("div");
        blogtext.setAttribute("class", "blog-text");
        blogtext.appendChild(blogtitle);
        blogtext.appendChild(blogoverview);

        const blogcard = document.createElement("a");
        blogcard.setAttribute("class", "blog-card white-grow");
        blogcard.setAttribute("href", `./posts/${series[i]}/${title[i]}`);

        if (thumbnail[i]) {
            const img = document.createElement("img");
            img.setAttribute("class", "thumbnail");
            img.setAttribute("src", `./posts/${series[i]}/${title[i]}/thumbnail.png`);
            blogcard.appendChild(img);
        }
        
        blogcard.appendChild(blogtext);
        section.appendChild(blogcard);

    }
    
    const emoji = document.createElement("div");
    emoji.setAttribute("class", "emoji");
    emoji.innerHTML = "🕓";

    const label = document.createElement("h3");
    label.setAttribute("class", "category");
    label.innerHTML = "Latest";

    const section_title = document.createElement("div");
    section_title.setAttribute("class", "section-title");
    section_title.appendChild(emoji);
    section_title.appendChild(label);

    const main = document.querySelector(".main");
    main.appendChild(section_title);
    main.appendChild(section);

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

init(metadata);
pageInit();
createBlogcard(title.length);
cursorEffect();
headerEffect();
burgerAction();