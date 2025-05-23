let c1 = document.querySelector('#sub')
let c2 = document.querySelector('#sub')
let btn = document.querySelector('#btn1')
let spn1 = document.querySelector('#span1')
let wrp = document.querySelector('#nik3')
let icn = document.querySelector('#nika4')
let mn = document.querySelector('#ns')

btn.addEventListener('click', function (){
    c1.style.display = "block";
})

btn2.addEventListener('click',function (){
    c2.style.display = "block"
    c1.style.display = "none";

})

spn1.addEventListener('click', function(){
    wrp.style.display = 'block';
    mn.style.height = '1100px';

})

icn.addEventListener('click', function(){
    wrp.style.display = 'none';
    mn.style.height = '800px';
})


const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), 
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), 
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), 
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); 
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { 
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { 
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { 
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; 
    daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => {
        
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { 
          
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); 
            currMonth = date.getMonth(); 
        } else {
            date = new Date(); 
        }
        renderCalendar();
    });
});

