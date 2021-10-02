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