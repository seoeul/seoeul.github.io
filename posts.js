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