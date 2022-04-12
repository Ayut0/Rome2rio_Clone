let tabs = document.querySelectorAll("#list");

tabs.forEach(list, ()=>{
    list.addEventListener("click", ()=>{
        list.classList.toggle("active");
    })
})


