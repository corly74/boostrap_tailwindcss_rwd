// index.html mobile menu

function openNav() {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");


    sidenav.classList.add("open");
    overlay.classList.remove("hidden");

}

function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");

    sidenav.classList.remove("open");
    overlay.classList.add("hidden");
}

// 蒐藏公車路線愛心 

const area = document.querySelector(".bus-line");

area.addEventListener('click', filllove, false);

function filllove(e) {
    const target = e.target;

    if (target.classList.contains("heart")) {
        target.classList.toggle("fa-solid");         // 變成實心愛心
        target.classList.toggle("fa-regular");       // 去除空心愛心
        target.classList.toggle("text-red-400");     // 加紅色
    }
}
