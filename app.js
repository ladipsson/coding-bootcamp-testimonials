const reviews = [
    {
        id: 1,
        name: "Tanya Sinclair",
        job: "UX Engineer",
        img: "images/image-tanya.jpg",
        text: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."
    },

    {
        id: 2,
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        img: "images/image-john.jpg",
        text: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."
    }
];

const img = document.getElementById('photo');
const job = document.getElementById('job');
const author = document.getElementById('author');
const info = document.getElementById('info');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    showPerson();
})

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    job.textContent = item.job;
    author.textContent = item.name;
    info.textContent = item.text;
}

next.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})

prev.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})