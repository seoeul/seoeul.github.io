const blogs = document.querySelector(".blogs");
let title = ["Making_blog", "CSS+html_frontend", "우웅우우우우우ㅜ우우ㅜ"];

const create = (n) => {

    const blogtitle = document.createElement("h1");
    blogtitle.setAttribute("class", "blog-title");
    blogtitle.innerHTML = title[n].replace("_", " ");

    const blogoverview = document.createElement("p");
    blogoverview.setAttribute("class", "blog-overview");
    blogoverview.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt fugiat quos porro repellat harum. "

    const img = document.createElement("img");
    img.setAttribute("src", `./img/${title[n]}.png`);
    img.setAttribute("class", "blog-img");

    const blogcard = document.createElement("div");
    blogcard.setAttribute("class", "blog-card");
    blogcard.appendChild(img);
    blogcard.appendChild(blogtitle);
    blogcard.appendChild(blogoverview);

    const bloglink = document.createElement("a");
    bloglink.setAttribute("href", `./posts/${title[n]}.html`);
    bloglink.appendChild(blogcard);
    blogs.appendChild(bloglink);

};

for (i = 0; i < title.length; i++) {
    create(i);
}