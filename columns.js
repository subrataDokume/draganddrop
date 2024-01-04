import { closeTextEditorButton, editorButtonShowHide,drake } from "./main.js";

const text_editor_button = document.querySelector(".text_editor_button");
const button_1 = document.querySelectorAll(".button_1")

let value = ""
export  function coloumns_drop_function(e) {
    
    if (e.target.className ==="text_1") {
        e.target.parentElement.children[2].style.display = "inline-block";
        value = e.target.parentElement;
    }else{
        e.target.children[2].style.display = "inline-block";
        value = e.target;
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
    drake.containers.push(e.target.parentElement);
};


  const grid_selector = document.querySelectorAll(".grid_selector");
  grid_selector.forEach((gridBox) => {
    gridBox.addEventListener("click", function (e) {
      console.log(e.target.parentNode.classList[1]);

      if (e.target.parentNode.classList[1] === "grid_1") {
        value.innerHTML = "";
        value.insertAdjacentHTML(
          "beforeend",
          `
                  <div class="grid_selector grid_1">
                    <div class="main_columns" style="flex-basis: 100%">
                    <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
                     <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div>
        </div>
                  </div>`
        );
      } else if (e.target.parentNode.classList[1] === "grid_2") {
        value.innerHTML = "";
        value.insertAdjacentHTML(
          "beforeend",
          `        <div class="grid_selector grid_2">
                    <div class="main_columns" style="flex-basis: 50%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 50%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                  </div>`
        );
      } else if (e.target.parentNode.classList[1] === "grid_3") {
        value.innerHTML = "";
        value.insertAdjacentHTML(
          "beforeend",
          `
                    <div class="grid_selector grid_3">
                    <div class="main_columns" style="flex-basis: 33.3%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 33.3%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 33.3%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                  </div>`
        );
      } else if (e.target.parentNode.classList[1] === "grid_4") {
        value.innerHTML = "";
        value.insertAdjacentHTML(
          "beforeend",
          `
                                     <div class="grid_selector grid_4">
                    <div class="main_columns" style="flex-basis: 25%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 25%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 25%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 25%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                  </div>`
        );
      } else if (e.target.parentNode.classList[1] === "grid_5") {
        value.innerHTML = "";
        value.insertAdjacentHTML(
          "beforeend",
          `         <div class="grid_selector grid_5">
                    <div class="main_columns" style="flex-basis: 33.33%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 66.67%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                  </div>`
        );
      } else if (e.target.parentNode.classList[1] === "grid_6") {
        value.innerHTML = "";
        value.insertAdjacentHTML(
          "beforeend",
          `                  <div class="grid_selector grid_6">
                    <div class="main_columns" style="flex-basis: 66.33%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 33.67%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                  </div>`
        );
      } else if (e.target.parentNode.classList[1] === "grid_7") {
        value.innerHTML = "";
        value.insertAdjacentHTML(
          "beforeend",
          `                  <div class="grid_selector grid_7">
                    <div class="main_columns" style="flex-basis: 16.67%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 33.33%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 16.67%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 33.33%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                  </div>`
        );
      } else if (e.target.parentNode.classList[1] === "grid_8") {
        value.innerHTML = "";
        value.insertAdjacentHTML(
          "beforeend",
          `                  <div class="grid_selector grid_8">
                    <div class="main_columns" style="flex-basis: 33.33%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 16.67%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 33.33%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 16.67%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button class="button_1" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                  </div>`
        );
      }
    });
  });

