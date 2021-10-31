let category = [];
let title = [];
let overview = [];

$.getJSON("./posts.json", (data) => {
    $.each(data, (key, value) => {
        category.push(key);
        $.each(value, (key, value) => {
            title.push(value.title);
            overview.push(value.overview);
        });
    });
    createBlogcard(title.length);
    cursor();
});

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
        img.setAttribute("src", `./img/${title[i]}.png`);
        img.setAttribute("class", "blog-img");

        const blogcard = document.createElement("div");
        blogcard.setAttribute("class", "blog-card");
        blogcard.appendChild(img);
        blogcard.appendChild(blogtitle);
        blogcard.appendChild(blogoverview);

        const bloglink = document.createElement("a");
        bloglink.setAttribute("class", "blog-link");
        bloglink.setAttribute("href", `./posts/${title[i]}.html`);
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

const cursor = () => {
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