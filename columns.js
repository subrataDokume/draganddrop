import { classChange, closeTextEditorButton, editorButtonShowHide } from "./main.js";
const text_editor_button = document.querySelector(".text_editor_button");
const button_1 = document.querySelectorAll(".button_1")

export  function coloumns_drop_function(e) {
    if (e.target.className ==="text_1") {
        e.target.parentElement.children[2].style.display = "inline-block";
    }else{
        e.target.children[2].style.display = "inline-block";
    }
    
     text_editor_button.classList.remove("hidden_text_editor_button");
     editorButtonShowHide();
     document.querySelector(".columns_button").style.display = "block";

}

button_1.forEach((button)=>{
button.addEventListener("click",changeDragBox)
})
 function changeDragBox(e) {
    e.stopPropagation()
    console.log(e.target.parentElement.className);
    // dropBox=e.target.parentElement;
    console.log(e.target.parentElement);
    closeTextEditorButton();
    classChange(e.target.parentElement.className);
};


