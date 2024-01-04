
export function selectValue(val) {
  // font-size globaly set for click every text
  let px = val.style.fontSize.replace("px", "");
  inputValue(px === "" ? 16 : px);

  // text border background color value
  document.querySelectorAll(".colorpiker").forEach((colorvalue) => {
    colorvalue.value =
      val.style.color === "" ? "#000000" : rgbSpliter(val.style.color);
  });
  document.querySelector("#button_background_color").value =
    val.style.backgroundColor === ""
      ? "#ffffff"
      : rgbSpliter(val.style.backgroundColor);
  document.querySelector("#button_border_color").value =
    val.style.borderColor === ""
      ? "#000000"
      : rgbSpliter(val.style.borderColor);

  // ==============textAlign===============
  if (val.style.textAlign === "center") {
    textAlignCenter();
  } else if (val.style.textAlign === "left") {
    textAlignLeft();
  } else if (val.style.textAlign === "right") {
    textAlignRight();
  } else if (val.style.textAlign === "justify") {
    textAlignjustify();
  } else {
    document.querySelectorAll(".text_align>i").forEach((i) => {
      i.style.outline = "";
    });
  }

  // =====================font size==============

  fontWeight(val.style.fontWeight);

  // =================padding left right top buttom=================

  console.log(leftPadding, rightPadding, bottomPadding, topPadding);
  left_padding_input.forEach((paddingValue) => {
    paddingValue.value =
      val.style.paddingLeft === ""
        ? 0
        : Number(val.style.paddingLeft.replace("px", ""));
    leftPadding = 0;
  });
  right_padding_input.forEach((paddingValue) => {
    paddingValue.value =
      val.style.paddingRight === ""
        ? 0
        : Number(val.style.paddingRight.replace("px", ""));
    rightPadding = 0;
  });
  top_padding_input.forEach((paddingValue) => {
    paddingValue.value =
      val.style.paddingTop === ""
        ? 0
        : Number(val.style.paddingTop.replace("px", ""));
    topPadding = 0;
  });
  buttom_padding_input.forEach((paddingValue) => {
    paddingValue.value =
      val.style.paddingBottom === ""
        ? 0
        : Number(val.style.paddingBottom.replace("px", ""));
    bottomPadding = 0;
  });

  //  ==================font family ===================
  fontFamilyReset("");

  // ============================reset border width==================
  border_width_px_input.value =
    val.style.borderWidth === ""
      ? 0
      : Number(val.style.borderWidth.replace("px", ""));

  //  ======================= reset border style===============
  border_style.value =
    val.style.borderStyle === "" ? "hidden" : val.style.borderStyle;

  // =======================get button url ===============
  if (val.children.length === 0) {
    ButtonUrl.value = "";
  } else {
    // ButtonUrl.value = val.children[0]?.attributes.href.value;
  }
}
