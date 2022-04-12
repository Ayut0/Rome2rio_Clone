let tabs = document.querySelectorAll("#list");

tabs.forEach(element =>{
    // element.classList.remove("active");
    element.addEventListener("click", ()=>{
        tabs.forEach(item=>{
            item.classList.remove("active")
        })
        element.classList.add("active")
    });
})


