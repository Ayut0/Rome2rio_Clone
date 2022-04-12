let tabs = document.querySelectorAll("#list");

tabs.forEach(element =>{
    element.addEventListener("click", ()=>{
        element.classList.toggle("active")
    });
    // element.classList.remove("active");
})


