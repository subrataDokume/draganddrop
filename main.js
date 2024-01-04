
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

import { iconBox, contentPart, borderStyleArray, fontWeightData } from "./data.js";
import { selectValue } from "./resetValue.js";

function mainFunction (){

const right_padding_input = document.querySelectorAll(".right_padding_input");
const left_padding_input = document.querySelectorAll(".left_padding_input");
const top_padding_input = document.querySelectorAll(".top_padding_input");
const buttom_padding_input = document.querySelectorAll(".buttom_padding_input");

let val;
let leftPadding = 0;
let rightPadding = 0;
let topPadding = 0;
let bottomPadding = 0;

const font_family = document.querySelectorAll(".font_family");
const border_style = document.querySelector(".border_style");

const icon = document.querySelector(".icon");
const v_pills_tab = document.querySelector("#v-pills-tab");

const iconHtml = iconBox
  .map(
    (icon) =>
      `<div>
      <div class="${icon.class} box" ${icon.name}=${icon.name}   disable >
            ${icon.svg}
            <p>${icon.name}</p>
          </div>
          </div>`
  )
  .join("");
icon.insertAdjacentHTML("beforeend", iconHtml);

const contentHtml = contentPart
  .map(
    (icon) => `
     <button class="${icon.class} content_box nav-link" id="${icon.id}-tab" data-bs-toggle="pill" data-bs-target="#${icon.id}" type="button" role="tab" aria-controls="${icon.id}" aria-selected="true">
      ${icon.svg}
              <span>${icon.name}</span>
    </button>
          `
  )
  .join("");
v_pills_tab.insertAdjacentHTML("beforeend", contentHtml);

const font_weight = document.querySelectorAll(".font_weight");
const fontWeightHtml = fontWeightData
  .map((weight) => `<option value=${weight}>${weight}</option>`)
  .join("");
font_weight.forEach((font) =>
  font.insertAdjacentHTML("beforeend", fontWeightHtml)
);

const borderstyleHtml = borderStyleArray
  .map((boderWidth) => `<option value=${boderWidth}>${boderWidth}</option>`)
  .join("");

border_style.insertAdjacentHTML("beforeend", borderstyleHtml);
let innerHTML;

dragula(
  [
    document.querySelector(".icon"),
    document.querySelector(".main_body_content"),
  ],
  {
    copy: function (el, source) {
      console.log("copy", el, el.className);

      if (el.children[0].hasAttribute("columns")) {
        text_editor_button.classList.remove("hidden_text_editor_button");
        editorButtonShowHide();
        document.querySelector(".columns_button").style.display = "block";
      }
      //   if (el.className === "none") {
      //     return false ;
      //   } else {
      //   if(el.children[0].hasAttribute("heading")){
      //   innerHTML = `<div style="text-align: left;"  class="heading"   onclick="headingSelectDelete(this)" ><div class="" style="margin: 0px; line-height: 140%; font-weight: 400; font-size: 22px; overflow-wrap: break-word; display: block; position: relative;" contenteditable="true"><span><span>Heading</span></span></div></div>`
      //  }else if (el.children[0].hasAttribute("button")){
      //   innerHTML=`<div style="text-align: center;" class="button" onclick="buttonSelectDelete(this)"><div href="" target="_blank" class="" style="border-radius: 4px; line-height: 120%; display: inline-block; text-decoration: none; text-align: center;   background-color: rgb(58, 174, 224); color: rgb(255, 255, 255); width: auto; max-width: 100%; overflow-wrap: break-word; font-size: 14px; position: relative;" contenteditable="true"><span style="line-height: 16.8px;" data-mce-style="line-height: 16.8px;">Button Text</span></div></div>`
      //  }else if (el.children[0].hasAttribute("text")){
      //   innerHTML = `<div  style="padding: 10px;" class="text" onclick="textSelectDelete(this)"><div class="" style="line-height: 140%; text-align: left; overflow-wrap: break-word; font-size: 14px; position: relative;" contenteditable="true"><p style="line-height: 140%;" data-mce-style="line-height: 140%;">This is a new Text block. Change the text.</p></div></div>`
      //  }else if(el.children[0].hasAttribute("image")){
      //   innerHTML = `<div id="u_content_image_2" class="u_content_image" style="padding: 10px;"><div style="position: relative; line-height: 0px; text-align: center;">
      //     <img alt="" class="v-src-width v-src-max-width" src="https://cdn.tools.unlayer.com/image/placeholder.png" style="width:100%;max-width:800px" title="">

      // </div></div>`
      //  } else if(el.children[0].hasAttribute("divider")){
      //    innerHTML = `<div id="u_content_divider_1" class="u_content_divider" style="padding: 10px;"><div style="text-align: center; line-height: 0;"><div style="border-top: 1px solid rgb(187, 187, 187); width: 100%; display: inline-block; line-height: 1px; height: 0px; vertical-align: middle;"> </div></div></div>`
      //  }
      // }
      return source === document.querySelector(".icon");
    },
    accepts: function (el, target) {
      return target !== document.querySelector(".icon");
    },
    //   moves: function (el, container, handle) {
    //     console.log(el,handle,container);
    //   return handle.classList.contains('box');
    // }
  }
)
  .on("drop", function (el, target) {
    console.log("drop", el);
    // el.classList.add("none")

    if (el.children[0].hasAttribute("heading")) {
      innerHTML = `<div style="text-align: left;"  class="heading"  ><div class="" style="margin: 0px; line-height: 140%; font-weight: 400; font-size: 22px; overflow-wrap: break-word; display: block; position: relative;" contenteditable="true"><span><span>Heading</span></span></div></div>`;
    } else if (el.children[0].hasAttribute("button")) {
      innerHTML = `<div style="text-align: center;" class="button" onclick="buttonSelectDelete(this)"><div href="" target="_blank" class="" style="border-radius: 4px; line-height: 120%; display: inline-block; text-decoration: none; text-align: center;   background-color: rgb(58, 174, 224); color: rgb(255, 255, 255); width: auto; max-width: 100%; overflow-wrap: break-word; font-size: 14px; position: relative;" contenteditable="true"><span style="line-height: 16.8px;" data-mce-style="line-height: 16.8px;">Button Text</span></div></div>`;
    } else if (el.children[0].hasAttribute("text")) {
      innerHTML = `<div  style="padding: 10px;" class="text" onclick="textSelectDelete(this)"><div class="" style="line-height: 140%; text-align: left; overflow-wrap: break-word; font-size: 14px; position: relative;" contenteditable="true"><p style="line-height: 140%;" data-mce-style="line-height: 140%;">This is a new Text block. Change the text.</p></div></div>`;
    } else if (el.children[0].hasAttribute("image")) {
      innerHTML = `<div id="u_content_image_2" class="u_content_image" style="padding: 10px;"><div style="position: relative; line-height: 0px; text-align: center;">
        <img alt="" class="v-src-width v-src-max-width" src="https://cdn.tools.unlayer.com/image/placeholder.png" style="width:100%;max-width:800px" title="">

    </div></div>`;
    } else if (el.children[0].hasAttribute("divider")) {
      innerHTML = `<div id="u_content_divider_1" class="u_content_divider" style="padding: 10px;"><div style="text-align: center; line-height: 0;"><div style="border-top: 1px solid rgb(187, 187, 187); width: 100%; display: inline-block; line-height: 1px; height: 0px; vertical-align: middle;"> </div></div></div>`;
    } else if (el.children[0].hasAttribute("columns")) {
      innerHTML = `<div class="columns_contener" onclick="columnSelectDelete(this)" style=" display:flex  border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button style=" font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white; ">Add Content</button>
        </div>`;
    }
    el.innerHTML = innerHTML;
  

       const headings = document.querySelectorAll(".heading");
    
     
       function textSelectDelete(value) {
         console.log(value);
         val = value.children[0];
         text_editor_button.classList.remove("hidden_text_editor_button");
         editorButtonShowHide();
         document.querySelector(".text_button").style.display = "block";
         selectGlobalValue(val);
       }
       // ======================== by click heading=> heading select delete and modifi====================
       function headingSelectDelete(value) {
         console.log(value.children[0]);
         val = value.children[0];
         text_editor_button.classList.remove("hidden_text_editor_button");
         editorButtonShowHide();
         document.querySelector(".heading_button").style.display = "block";
         selectGlobalValue(val);
       }
         headings.forEach((heading)=>{
          heading.addEventListener("click", function (e) {
            console.log(e.target.children[0]);
            val = e.target.children[0];
            text_editor_button.classList.remove("hidden_text_editor_button");
            editorButtonShowHide();
            document.querySelector(".heading_button").style.display = "block";
            selectGlobalValue(val);
          });
         })
       // ======================== by click heading=>button select modify delete handaler=================
       function buttonSelectDelete(value) {
         console.log(value);
         val = value.children[0];
         text_editor_button.classList.remove("hidden_text_editor_button");
         editorButtonShowHide();
         document.querySelector(".button_button").style.display = "block";
         selectGlobalValue(val);
       }

       function columnSelectDelete(value) {
         val = value;
         console.log(value);
         text_editor_button.classList.remove("hidden_text_editor_button");
         editorButtonShowHide();
         document.querySelector(".columns_button").style.display = "block";
       }
  })
  .on("out", function (el, container) {
    console.log("Out", el);
  });


function editorButtonShowHide() {
  const button_controler = document.querySelectorAll(".button_controler");
  console.log(button_controler);
  button_controler.forEach((buttons) => {
    buttons.style.display = "none";
  });
}
// content bi-x button using for hide text-editor-button=====================
  const text_editor_button = document.querySelector(".text_editor_button");
const bi_x = document.querySelector(".bi-x");
bi_x.addEventListener("click", (e) => {
  e.preventDefault();
  text_editor_button.classList.add("hidden_text_editor_button");
});

const bi_trash_fill = document.querySelector(".bi-trash-fill");
bi_trash_fill.addEventListener("click", (e) => {
  e.preventDefault();
  val.remove();
  if (main_body_content.children.length === 0) {
    text_editor_button.style.display = "none";
    icon_template.style.display = "block";
  }
});

//=================accordian=========================
const acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// ============================font family=====================
function fontFamilyReset(value) {
  font_family.forEach((family) => {
    family.value = value;
    family.addEventListener("change", (e) => {
      val.style.fontFamily = e.target.value;
    });
  });
}

// ================================fontsize =============================
const px_input = document.querySelectorAll(".px_input");

function increase() {
  px_input.forEach((fontSizePx) => {
    let px = Number(fontSizePx.value);
    px++;
    fontSizePx.value = px;
    val.style.fontSize = px + "px";
  });
}
function inputValue(number) {
  px_input.forEach((fontSizePx) => {
    fontSizePx.value = number;
    val.style.fontSize = number + "px";
  });
}
function decrease() {
  px_input.forEach((fontSizePx) => {
    let px = Number(fontSizePx.value);
    px--;
    fontSizePx.value = px;
    val.style.fontSize = px + "px";
  });
}

function colorValue(color) {
  document.querySelectorAll(".colorpiker").forEach((colropiker) => {
    colropiker.value = color;
    val.style.color = color;
  });
}

//=========================== text align=================
function textAlignLeft(e) {
  document.querySelectorAll(".text_align>i").forEach((i) => {
    i.style.outline = "";
  });
  document.querySelectorAll(".bi-text-left").forEach((textalaign) => {
    textalaign.style.outline = "4px solid blue";
    val.style.textAlign = "left";
  });
}

function textAlignCenter(e) {
  document.querySelectorAll(".text_align>i").forEach((i) => {
    i.style.outline = "";
  });
  document.querySelectorAll(".bi-text-center").forEach((textalign) => {
    textalign.style.outline = "4px solid blue";
    val.style.textAlign = "center";
  });
}
function textAlignRight(e) {
  document.querySelectorAll(".text_align>i").forEach((i) => {
    i.style.outline = "";
  });
  document.querySelectorAll(".bi-text-right").forEach((textalign) => {
    textalign.style.outline = "4px solid blue";
    val.style.textAlign = "right";
  });
}
function textAlignjustify(e) {
  document.querySelectorAll(".text_align>i").forEach((i) => {
    i.style.outline = "";
  });
  document.querySelectorAll(".bi-justify").forEach((textalign) => {
    textalign.style.outline = "4px solid blue";
    val.style.textAlign = "justify";
  });
}

// =================================font weight================

const fontw = document.querySelectorAll(".font_weight");
function fontWeight(fontweight) {
  fontw.forEach((everyFontElement) => {
    everyFontElement.value = fontweight;
    if (
      fontweight.startsWith("bo") ||
      fontweight.startsWith("n") ||
      fontweight.startsWith("l")
    ) {
      val.style.fontWeight = fontweight;
    } else {
      val.style.fontWeight = Number(fontweight);
    }
  });
}

// ===================left right top buttom padding ===========================

const text_padding_decrease = document.querySelectorAll(
  ".text_padding .decrease"
);
const text_padding_increase = document.querySelectorAll(
  ".text_padding .increase"
);

right_padding_input.forEach((paddingsInput) => {
  paddingsInput.addEventListener("change", function (e) {
    rightPadding = e.target.value;
    val.style.paddingRight = Number(e.target.value) + "px";
  });
});
left_padding_input.forEach((paddingsInput) => {
  paddingsInput.addEventListener("change", function (e) {
    leftPadding = e.target.value;
    val.style.paddingLeft = Number(e.target.value) + "px";
  });
});
top_padding_input.forEach((paddingsInput) => {
  paddingsInput.addEventListener("change", function (e) {
    topPadding = e.target.value;
    val.style.paddingTop = Number(e.target.value) + "px";
  });
});
buttom_padding_input.forEach((paddingsInput) => {
  paddingsInput.addEventListener("change", function (e) {
    bottomPadding = e.target.value;
    val.style.paddingBottom = Number(e.target.value) + "px";
  });
});

text_padding_decrease.forEach((decrease, index) => {
  decrease.addEventListener("click", (e) => {
    if (index === 0 || index === 4 || index === 8) {
      leftPadding--;
      val.style.paddingLeft = leftPadding + "px";
      left_padding_input.forEach((paddingsInput) => {
        paddingsInput.value = leftPadding;
      });
    } else if (index === 1 || index === 5 || index === 9) {
      rightPadding--;
      val.style.paddingRight = rightPadding + "px";
      right_padding_input.forEach((paddingsInput) => {
        paddingsInput.value = rightPadding;
      });
    } else if (index === 2 || index === 6 || index === 10) {
      topPadding--;
      val.style.paddingTop = topPadding + "px";
      top_padding_input.forEach((paddingsInput) => {
        paddingsInput.value = topPadding;
      });
    } else {
      bottomPadding--;
      val.style.paddingBottom = bottomPadding + "px";
      buttom_padding_input.forEach((paddingsInput) => {
        paddingsInput.value = bottomPadding;
      });
    }
  });
});

text_padding_increase.forEach((increase, index) => {
  increase.addEventListener("click", (e) => {
    // console.log( val.style.paddingLeft,leftPadding);

    if (index === 0 || index === 4 || index === 8) {
      leftPadding++;
      val.style.paddingLeft = leftPadding + "px";
      left_padding_input.forEach((paddingsInput) => {
        paddingsInput.value = leftPadding;
      });
    } else if (index === 1 || index === 5 || index === 9) {
      rightPadding++;
      val.style.paddingRight = rightPadding + "px";
      right_padding_input.forEach((paddingsInput) => {
        paddingsInput.value = rightPadding;
      });
    } else if (index === 2 || index === 6 || index === 10) {
      topPadding++;
      val.style.paddingTop = topPadding + "px";
      top_padding_input.forEach((paddingsInput) => {
        paddingsInput.value = topPadding;
      });
    } else {
      bottomPadding++;
      val.style.paddingBottom = bottomPadding + "px";
      buttom_padding_input.forEach((paddingsInput) => {
        paddingsInput.value = bottomPadding;
      });
    }
  });
});

// =====border color===========================

function borderColorValue(value) {
  val.style.borderColor = value;
}

// =======background color===============

function backgroundColorValue(value) {
  val.style.backgroundColor = value;
}

//============== border width=====================
const border_width_px_input = document.querySelector(".border_width_px_input");

function borderWidthInputValue(value) {
  let width = border_width_px_input.value;
  width = value;
  val.style.borderWidth = value + "px";
}

//  ==============border width increase & decrease =============

function widthDecrease() {
  let width = border_width_px_input.value;
  width--;
  border_width_px_input.value = width;
  val.style.borderWidth = width + "px";
}
function widthIncrease() {
  let width = border_width_px_input.value;
  width++;
  border_width_px_input.value = width;
  val.style.borderWidth = width + "px";
}

// ===============border style ==================

border_style.addEventListener("change", (e) => {
  e.preventDefault();
  val.style.borderStyle = e.target.value;
});

// ======================= select text,button,headding by one click Global editor finction=============

  function selectGlobalValue(val) {
    selectValue(val);
  }
// ============================anchor Tag ahndaler==========

const submitFromHandaler = document.querySelector(".onsubmitHandler");
const ButtonUrl = document.querySelector(".getButtonUrl");
const taget_select = document.querySelector(".taget_select");

let href = "";
let target = "_blank";

submitFromHandaler.addEventListener("submit", function (e) {
  e.preventDefault();
  const innerText = val.innerText;
  val.innerHTML = `<a href =${href} target =${target} /> ${innerText}</a>`;
  ButtonUrl.value = "";
});

function getButtonUrl(value) {
  href = value;
}
function getTab(value) {
  target = value;
}

// ================================hide all button controler================================
// function editorButtonShowHide() {
//   const button_controler = document.querySelectorAll(".button_controler");
//   button_controler.forEach((buttons) => {
//     buttons.style.display = "none";
//   });
// }

function rgbSpliter(color) {
  if (!color) {
    return;
  } else {
    const colorSplit = color.replace("rgb", "").split(",");
    const colorFirstValue = +colorSplit[0].replace("(", "");
    const colorSecondValue = +colorSplit[1];
    const colorThirdValue = +colorSplit[2].replace(")", "");
    return rgbToHex(colorFirstValue, colorSecondValue, colorThirdValue);
  }
}
const rgbToHex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// ===============Heading selector==============================================================
const heding_selector = document.querySelectorAll(".heding_selector .bi");

function addContent(e, value) {
  e.stopPropagation();
  // console.log(value.parentNode);
  activeDragEvet(value.parentNode);
}

// padding-left: 20px ; padding-right:20px; padding-top:10px; padding-bottom:10px ;

// columns button style

const grid_selector = document.querySelectorAll(".grid_selector");
console.log(grid_selector);
grid_selector.forEach((gridBox) => {
  console.log(gridBox);
  gridBox.addEventListener("click", function (e) {
    console.log(e.target.parentNode.classList[1]);

    if (e.target.parentNode.classList[1] === "grid_1") {
      val.innerHTML = "";
      val.insertAdjacentHTML(
        "beforeend",
        `
                  <div class="grid_selector grid_1">
                    <div class="main_columns" style="flex-basis: 100%">
                    <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
                     <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div>
        </div>
                  </div>`
      );
    } else if (e.target.parentNode.classList[1] === "grid_2") {
      val.innerHTML = "";
      val.insertAdjacentHTML(
        "beforeend",
        `        <div class="grid_selector grid_2">
                    <div class="main_columns" style="flex-basis: 50%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 50%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                  </div>`
      );
    } else if (e.target.parentNode.classList[1] === "grid_3") {
      val.innerHTML = "";
      val.insertAdjacentHTML(
        "beforeend",
        `
                    <div class="grid_selector grid_3">
                    <div class="main_columns" style="flex-basis: 33.3%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 33.3%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 33.3%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                  </div>`
      );
    } else if (e.target.parentNode.classList[1] === "grid_4") {
      val.innerHTML = "";
      val.insertAdjacentHTML(
        "beforeend",
        `
                                     <div class="grid_selector grid_4">
                    <div class="main_columns" style="flex-basis: 25%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 25%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 25%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 25%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                  </div>`
      );
    } else if (e.target.parentNode.classList[1] === "grid_5") {
      val.innerHTML = "";
      val.insertAdjacentHTML(
        "beforeend",
        `         <div class="grid_selector grid_5">
                    <div class="main_columns" style="flex-basis: 33.33%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 66.67%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                  </div>`
      );
    } else if (e.target.parentNode.classList[1] === "grid_6") {
      val.innerHTML = "";
      val.insertAdjacentHTML(
        "beforeend",
        `                  <div class="grid_selector grid_6">
                    <div class="main_columns" style="flex-basis: 66.33%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 33.67%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                  </div>`
      );
    } else if (e.target.parentNode.classList[1] === "grid_7") {
      val.innerHTML = "";
      val.insertAdjacentHTML(
        "beforeend",
        `                  <div class="grid_selector grid_7">
                    <div class="main_columns" style="flex-basis: 16.67%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 33.33%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 16.67%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 33.33%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                  </div>`
      );
    } else if (e.target.parentNode.classList[1] === "grid_8") {
      val.innerHTML = "";
      val.insertAdjacentHTML(
        "beforeend",
        `                  <div class="grid_selector grid_8">
                    <div class="main_columns" style="flex-basis: 33.33%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 16.67%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 33.33%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                    <div class="main_columns" style="flex-basis: 16.67%">          <div class="columns_contener" onclick="columnSelectDelete(this)" style=" border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
            <span>No content here. Drag content from right.</span>
            <br>
            <button onclick="addContent(event,this)" style="font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white;">Add Content</button>
        </div></div>
                  </div>`
      );
    }
  });
});

}
window.addEventListener("DOMContentLoaded",mainFunction);


// function activeDragEvet(target) {
//   dragula([document.querySelector(".icon"),target], {
//     copy: function (el, source) {
//       console.log("copy", el, el.className);
//       target.innerHTML="";
//       if (el.children[0].hasAttribute("columns")) {
//         text_editor_button.classList.remove("hidden_text_editor_button");
//         editorButtonShowHide();
//         document.querySelector(".columns_button").style.display = "block";
//       }
//       return source === document.querySelector(".icon");
//     },
//     accepts: function (el, target) {
//       return target !== document.querySelector(".icon");
//     },
//     //   moves: function (el, container, handle) {
//     //     console.log(el,handle,container);
//     //   return handle.classList.contains('box');
//     // }
//   })
//     .on("drop", function (el, target) {
//       console.log("drop", el ,target);
//       // el.classList.add("none")
//       if (el.children[0].hasAttribute("heading")) {
//         innerHTML = `<div style="text-align: left;"  class="heading"   onclick="headingSelectDelete(this)" ><div class="" style="margin: 0px; line-height: 140%; font-weight: 400; font-size: 22px; overflow-wrap: break-word; display: block; position: relative;" contenteditable="true"><span><span>Heading</span></span></div></div>`;
//       } else if (el.children[0].hasAttribute("button")) {
//         innerHTML = `<div style="text-align: center;" class="button" onclick="buttonSelectDelete(this)"><div href="" target="_blank" class="" style="border-radius: 4px; line-height: 120%; display: inline-block; text-decoration: none; text-align: center;   background-color: rgb(58, 174, 224); color: rgb(255, 255, 255); width: auto; max-width: 100%; overflow-wrap: break-word; font-size: 14px; position: relative;" contenteditable="true"><span style="line-height: 16.8px;" data-mce-style="line-height: 16.8px;">Button Text</span></div></div>`;
//       } else if (el.children[0].hasAttribute("text")) {
//         innerHTML = `<div  style="padding: 10px;" class="text" onclick="textSelectDelete(this)"><div class="" style="line-height: 140%; text-align: left; overflow-wrap: break-word; font-size: 14px; position: relative;" contenteditable="true"><p style="line-height: 140%;" data-mce-style="line-height: 140%;">This is a new Text block. Change the text.</p></div></div>`;
//       } else if (el.children[0].hasAttribute("image")) {
//         innerHTML = `<div id="u_content_image_2" class="u_content_image" style="padding: 10px;"><div style="position: relative; line-height: 0px; text-align: center;">
//         <img alt="" class="v-src-width v-src-max-width" src="https://cdn.tools.unlayer.com/image/placeholder.png" style="width:100%;max-width:800px" title="">

//     </div></div>`;
//       } else if (el.children[0].hasAttribute("divider")) {
//         innerHTML = `<div id="u_content_divider_1" class="u_content_divider" style="padding: 10px;"><div style="text-align: center; line-height: 0;"><div style="border-top: 1px solid rgb(187, 187, 187); width: 100%; display: inline-block; line-height: 1px; height: 0px; vertical-align: middle;"> </div></div></div>`;
//       } else if (el.children[0].hasAttribute("columns")) {
//         innerHTML = `<div class="columns_contener" onclick="columnSelectDelete(this)" style=" display:flex  border-width: 1px; border-style: dotted; border-color: cyan; text-align: center;">
//             <span>No content here. Drag content from right.</span>
//             <br>
//             <button style=" font-size: 10px;padding: 10px 20px;background-color: #115ccc; margin-top: 20px;color: white; ">Add Content</button>
//         </div>`;
//       }
//       el.innerHTML = innerHTML;
//     })
//     .on("out", function (el, container) {
//       console.log("out contener",container);
//       console.log("Out", el);
//     });
// }


// export nesesary value=========================
