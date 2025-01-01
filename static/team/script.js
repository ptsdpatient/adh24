document.addEventListener("DOMContentLoaded", () => {
    const togglebutton=document.getElementById("togglebutton");
    const moretext = document.querySelector(".more-text");
    togglebutton.addEventListener("click", () => {
        if (moretext.style.display==="none"||moretext.style.display==="") {
            moretext.style.display="block";
            togglebutton.style.transform="rotate(135deg)";
        }else{
            moretext.style.display="none";
            togglebutton.style.transform="rotate(-45deg)";
        }
    });
});