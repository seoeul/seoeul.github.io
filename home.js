let category = [];
let title = [];
let overview = [];

const post = {
    web: [
        {
            title: "Making_blog", 
            overview: "Making blog with html, javascript, css."
        },
        {
            title: "CSS+html_frontend",
            overview: "Frontend that I learned by making blog."
        }
    ],
    javascript: [
        {
            title: "Javascript_Discord_bot_develop",
            overview: "Making Discord bot using node.js."
        }
    ]
}

const init = () => {
    for (let c in post) {
        for (let i in post[c]) {
            category.push(c);
            title.push(post[c][i].title);
            overview.push(post[c][i].overview);
        }
    }
};

const createBlogcard = (t) => {

    const section = document.createElement("section");
    section.setAttribute("class", "blogs");

    for (i = t-1; i > -1; i--) {

        const blogtitle = document.createElement("h3");
        blogtitle.setAttribute("class", "blog-title");
        blogtitle.innerHTML = title[i].replaceAll("_", " ");

        const blogoverview = document.createElement("p");
        blogoverview.setAttribute("class", "blog-overview");
        blogoverview.innerHTML = overview[i];

        const img = document.createElement("img");
        img.setAttribute("src", `./posts/${category[i]}/${title[i]}/${title[i]}.png`);
        img.setAttribute("class", "blog-img");

        const blogcard = document.createElement("div");
        blogcard.setAttribute("class", "blog-card");
        blogcard.appendChild(img);
        blogcard.appendChild(blogtitle);
        blogcard.appendChild(blogoverview);

        const bloglink = document.createElement("a");
        bloglink.setAttribute("class", "blog-link");
        bloglink.setAttribute("href", `./posts/${category[i]}/${title[i]}`);
        bloglink.appendChild(blogcard);

        section.appendChild(bloglink);

    }
    
    const label = document.createElement("h2");
    label.setAttribute("class", "category");
    label.innerHTML = "Latest";

    const main = document.querySelector(".main");
    main.appendChild(label);
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

    const nav_a = document.querySelectorAll(".nav-a");

    nav_a.forEach(link => {
        link.addEventListener("mouseover", () => {
            cursor.classList.add("cursor-black-grow");
        });
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-black-grow");
        });
    });

    const blog_link = document.querySelectorAll(".blog-link");

    blog_link.forEach(link => {
        link.addEventListener("mouseover", () => {
            cursor.classList.add("cursor-white-grow");
        });
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-white-grow");
        });
    });
};

init();
createBlogcard(title.length);
cursorEffect();