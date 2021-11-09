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
};

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

const createBlogcard = (t) => {

    const section = document.createElement("section");
    section.setAttribute("class", "blogs");

    for (i = t-1; i > -1; i--) {

        const blogtitle = document.createElement("h4");
        blogtitle.setAttribute("class", "blog-title");
        blogtitle.textContent = title[i].replaceAll("_", " ");

        const blogoverview = document.createElement("p");
        blogoverview.setAttribute("class", "blog-overview");
        blogoverview.textContent = overview[i];

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
    emoji.textContent = "🕓";

    const label = document.createElement("h3");
    label.setAttribute("class", "category");
    label.textContent = "Latest";

    const section_title = document.createElement("div");
    section_title.setAttribute("class", "section-title");
    section_title.appendChild(emoji);
    section_title.appendChild(label);

    const main = document.querySelector(".content");
    main.appendChild(section_title);
    main.appendChild(section);

};

init(metadata);
createBlogcard(title.length);