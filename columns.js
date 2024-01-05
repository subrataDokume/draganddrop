import { closeTextEditorButton, editorButtonShowHide, drake } from "./main.js";

const text_editor_button = document.querySelector(".text_editor_button");

let value = "";
export function coloumns_drop_function(e) {
  console.log(e.target);
  if (e.target.className === "text_1") {
    // console.log(e.target.parentElement.children[2]);
    e.target.parentElement.children[2].style.display = "inline-block";
    value = e.target.parentElement.parentElement;
  } else {
    e.target.children[0].children[2].style.display = "inline-block";
    value = e.target;
  }

  text_editor_button.classList.remove("hidden_text_editor_button");
  editorButtonShowHide();
  document.querySelector(".columns_button").style.display = "block";
}

// button_1.forEach((button)=>{
// button.addEventListener("click",changeDragBox)
// })
//  function changeDragBox(e) {
//     e.stopPropagation()
//     console.log(e.target.parentElement.className);
//     // dropBox=e.target.parentElement;
//     console.log(e.target.parentElement);
//     closeTextEditorButton();
//     drake.containers.push(e.target.parentElement);
// };

const grid_selector = document.querySelectorAll(".grid_selector");
grid_selector.forEach((gridBox) => {
  gridBox.addEventListener("click", function (e) {
    // console.log(e.target.parentNode.classList[1]);
    if (e.target.parentNode.classList[1] === "grid_1") {
       activeFlexDmmyConter();
       e.target.parentNode.style.outline = "3px solid blue";
      if (value.children.length > 1) {
        if (
          confirm(`you want to delete ${value.children.length - 1} columns`) ===
          true
        ) {
          for (let i = value.children.length - 1; i >= 1; i--) {
            value.children[i].remove();
          }
          value.children[0].style.flexBasis = "100%";
        } else {
          value.children[0].style.flexBasis = "100%";
        }
      }
    } else if (e.target.parentNode.classList[1] === "grid_2") {
             activeFlexDmmyConter();
             e.target.parentNode.style.outline = "3px solid blue";
      if (value.children.length > 2) {
        if (
          confirm(`you want to delete ${value.children.length - 2} columns`) ===
          true
        ) {
          for (let i = value.children.length - 1; i >= 2; i--) {
            value.children[i].remove();
          }
          value.children[0].style.flexBasis = "50%";
          value.children[1].style.flexBasis = "50%";
        }
      } else if (value.children.length < 2) {
        value.insertAdjacentHTML(
          "beforeend",
          `<div class="columns_drop_box " style="border: 1px dotted rgb(29, 228, 122); text-align: center; margin: 20px;">
             <span class="text_1" style="color: #115ccc; ">No content here. Drag content from right</span>
             <br>
             <button class="button_1" style=" display: none; font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white; ">Add Content</button>
           </div>  `
        );
        value.children[0].style.flexBasis = "50%";
        value.children[1].style.flexBasis = "50%";
      } else {
        value.children[0].style.flexBasis = "50%";
        value.children[1].style.flexBasis = "50%";
      }
    } else if (e.target.parentNode.classList[1] === "grid_3") {
             activeFlexDmmyConter();
             e.target.parentNode.style.outline = "3px solid blue";
      if (value.children.length > 3) {
        if (
          confirm(`you want to delete ${value.children.length - 3} columns`) ===
          true
        ) {
          for (let i = value.children.length - 1; i >= 3; i--) {
            value.children[i].remove();
          }
          value.children[0].style.flexBasis = "33.33%";
          value.children[1].style.flexBasis = "33.33%";
          value.children[2].style.flexBasis = "33.33%";
        }
      } else if (value.children.length < 3) {
        console.log(value.children.length);
        let insetHtml = "";
        for (let i = value.children.length; i < 3; i++) {
          insetHtml += `<div class="columns_drop_box " style="border: 1px dotted rgb(29, 228, 122); text-align: center; margin: 20px;">
             <span class="text_1" style="color: #115ccc; ">No content here. Drag content from right</span>
             <br>
             <button class="button_1" style=" display: none; font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white; ">Add Content</button>
           </div>`;
        }
        value.insertAdjacentHTML("beforeend", insetHtml);
                value.children[0].style.flexBasis = "33.33%";
                value.children[1].style.flexBasis = "33.33%";
                value.children[2].style.flexBasis = "33.33%";
      } else {
        value.children[0].style.flexBasis = "33.33%";
        value.children[1].style.flexBasis = "33.33%";
        value.children[2].style.flexBasis = "33.33%";
      }
    } else if (e.target.parentNode.classList[1] === "grid_4") {
             activeFlexDmmyConter();
             e.target.parentNode.style.outline = "3px solid blue";
      if (value.children.length > 4) {
        if (
          confirm(`you want to delete ${value.children.length - 4} columns`) ===
          true
        ) {
          for (let i = value.children.length - 1; i >= 4; i--) {
            value.children[i].remove();
          }
          value.children[0].style.flexBasis = "25%";
          value.children[1].style.flexBasis = "25%";
          value.children[2].style.flexBasis = "25%";
          value.children[3].style.flexBasis = "25%";
        }
      } else if (value.children.length < 4) {
        let insetHtml = "";
        for (let i = value.children.length; i < 4; i++) {
          insetHtml += `<div class="columns_drop_box " style="border: 1px dotted rgb(29, 228, 122); text-align: center; margin: 20px;">
             <span class="text_1" style="color: #115ccc; ">No content here. Drag content from right</span>
             <br>
             <button class="button_1" style=" display: none; font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white; ">Add Content</button>
           </div>`;
        }
        value.insertAdjacentHTML("beforeend", insetHtml);
                value.children[0].style.flexBasis = "25%";
                value.children[1].style.flexBasis = "25%";
                value.children[2].style.flexBasis = "25%";
                value.children[3].style.flexBasis = "25%";
      } else {
        value.children[0].style.flexBasis = "25%";
        value.children[1].style.flexBasis = "25%";
        value.children[2].style.flexBasis = "25%";
        value.children[3].style.flexBasis = "25%";
      }
    } else if (e.target.parentNode.classList[1] === "grid_5") {
             activeFlexDmmyConter();
             e.target.parentNode.style.outline = "3px solid blue";
      if (value.children.length > 2) {
        if (
          confirm(`you want to delete ${value.children.length - 2} columns`) ===
          true
        ) {
          for (let i = value.children.length - 1; i >= 2; i--) {
            value.children[i].remove();
          }
          value.children[0].style.flexBasis = "25%";
          value.children[1].style.flexBasis = "75%";
        }
      } else if (value.children.length < 2) {
        value.insertAdjacentHTML(
          "beforeend",
          `<div class="columns_drop_box " style="border: 1px dotted rgb(29, 228, 122); text-align: center; margin: 20px;">
             <span class="text_1" style="color: #115ccc; ">No content here. Drag content from right</span>
             <br>
             <button class="button_1" style=" display: none; font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white; ">Add Content</button>
           </div>  `
        );
        value.children[0].style.flexBasis = "25%";
        value.children[1].style.flexBasis = "75%";
      } else {
        value.children[0].style.flexBasis = "25%";
        value.children[1].style.flexBasis = "75%";
      }
    } else if (e.target.parentNode.classList[1] === "grid_6") {
             activeFlexDmmyConter();
             e.target.parentNode.style.outline = "3px solid blue";
      if (value.children.length > 2) {
        if (
          confirm(`you want to delete ${value.children.length - 2} columns`) ===
          true
        ) {
          for (let i = value.children.length - 1; i >= 2; i--) {
            value.children[i].remove();
          }
          value.children[0].style.flexBasis = "75%";
          value.children[1].style.flexBasis = "25%";
        }
      } else if (value.children.length < 2) {
        value.insertAdjacentHTML(
          "beforeend",
          `<div class="columns_drop_box " style="border: 1px dotted rgb(29, 228, 122); text-align: center; margin: 20px;">
             <span class="text_1" style="color: #115ccc; ">No content here. Drag content from right</span>
             <br>
             <button class="button_1" style=" display: none; font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white; ">Add Content</button>
           </div>  `
        );
        value.children[0].style.flexBasis = "75%";
        value.children[1].style.flexBasis = "25%";
      } else {
        value.children[0].style.flexBasis = "75%";
        value.children[1].style.flexBasis = "25%";
      }
    } else if (e.target.parentNode.classList[1] === "grid_7") {
             activeFlexDmmyConter();
             e.target.parentNode.style.outline = "3px solid blue";
            if (value.children.length > 4) {
        if (
          confirm(`you want to delete ${value.children.length - 4} columns`) ===
          true
        ) {
          for (let i = value.children.length - 1; i >= 4; i--) {
            value.children[i].remove();
          }
          value.children[0].style.flexBasis = "16.67%";
          value.children[1].style.flexBasis = "33.33%";
          value.children[2].style.flexBasis = "16.67%";
          value.children[3].style.flexBasis = "33.33%";
        }
      } else if (value.children.length < 4) {
        let insetHtml = "";
        for (let i = value.children.length; i < 4; i++) {
          insetHtml += `<div class="columns_drop_box " style="border: 1px dotted rgb(29, 228, 122); text-align: center; margin: 20px;">
             <span class="text_1" style="color: #115ccc; ">No content here. Drag content from right</span>
             <br>
             <button class="button_1" style=" display: none; font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white; ">Add Content</button>
           </div>`;
        }
        value.insertAdjacentHTML("beforeend", insetHtml);
          value.children[0].style.flexBasis = "16.67%";
          value.children[1].style.flexBasis = "33.33%";
          value.children[2].style.flexBasis = "16.67%";
          value.children[3].style.flexBasis = "33.33%";
      } else {
          value.children[0].style.flexBasis = "16.67%";
          value.children[1].style.flexBasis = "33.33%";
          value.children[2].style.flexBasis = "16.67%";
          value.children[3].style.flexBasis = "33.33%";
      }
    } else if (e.target.parentNode.classList[1] === "grid_8") {
             activeFlexDmmyConter();
             e.target.parentNode.style.outline = "3px solid blue";
            if (value.children.length > 4) {
        if (
          confirm(`you want to delete ${value.children.length - 4} columns`) ===
          true
        ) {
          for (let i = value.children.length - 1; i >= 4; i--) {
            value.children[i].remove();
          }
          value.children[0].style.flexBasis = "33.33%";
          value.children[1].style.flexBasis = "16.67%";
          value.children[2].style.flexBasis = "33.33%";
          value.children[3].style.flexBasis = "16.67%";
        }
      } else if (value.children.length < 4) {
        let insetHtml = "";
        for (let i = value.children.length; i < 4; i++) {
          insetHtml += `<div class="columns_drop_box " style="border: 1px dotted rgb(29, 228, 122); text-align: center; margin: 20px;">
             <span class="text_1" style="color: #115ccc; ">No content here. Drag content from right</span>
             <br>
             <button class="button_1" style=" display: none; font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white; ">Add Content</button>
           </div>`;
        }
        value.insertAdjacentHTML("beforeend", insetHtml);
          value.children[0].style.flexBasis = "33.33%";
          value.children[1].style.flexBasis = "16.67%";
          value.children[2].style.flexBasis = "33.33%";
          value.children[3].style.flexBasis = "16.67%";
      } else {
          value.children[0].style.flexBasis = "33.33%";
          value.children[1].style.flexBasis = "16.67%";
          value.children[2].style.flexBasis = "33.33%";
          value.children[3].style.flexBasis = "16.67%";
      }
    }
  });
});

function activeFlexDmmyConter() {
  grid_selector.forEach((gridBox)=>{
    gridBox.style.outline="none"
  })
};
