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

cursorEffect();
headerEffect();