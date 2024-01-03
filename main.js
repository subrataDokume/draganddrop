const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const iconBox = [
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="columns-3" class="svg-inline--fa fa-columns-3 fa-3x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H576C611.3 32 640 60.65 640 96V416C640 451.3 611.3 480 576 480H64C28.65 480 0 451.3 0 416V96zM448 448H576C593.7 448 608 433.7 608 416V96C608 78.33 593.7 64 576 64H448V448zM416 64H224V448H416V64zM192 448V64H64C46.33 64 32 78.33 32 96V416C32 433.7 46.33 448 64 448H192z"></path></svg>`,
    name: "columns",
    class: "",
  },
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="heading" class="svg-inline--fa fa-heading fa-3x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 464c0 8.799-7.199 16-16 16h-128c-8.801 0-16-7.201-16-16c0-8.801 7.199-16 16-16H352V256H96v192h48C152.8 448 160 455.2 160 464C160 472.8 152.8 480 144 480h-128C7.199 480 0 472.8 0 464C0 455.2 7.199 448 16 448H64V64H16C7.199 64 0 56.8 0 48C0 39.2 7.199 32 16 32h128C152.8 32 160 39.2 160 48C160 56.8 152.8 64 144 64H96v160h256V64h-48C295.2 64 288 56.8 288 48C288 39.2 295.2 32 304 32h128C440.8 32 448 39.2 448 48C448 56.8 440.8 64 432 64H384v384h48C440.8 448 448 455.2 448 464z"></path></svg>`,
    name: "heading",
    class: "before-conten",
  },
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="font-case" class="svg-inline--fa fa-font-case fa-3x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M190.9 41.3c-4.75-12.4-25.12-12.4-29.87 0L1.069 458.2c-3.172 8.268 .9531 17.54 9.187 20.73c8.25 3.163 17.5-.9709 20.69-9.207l45.28-118H275.8l45.28 118C323.5 476.1 329.6 480 336 480c1.906 0 3.859-.3445 5.75-1.065c8.234-3.194 12.36-12.46 9.187-20.73L190.9 41.3zM88.54 319.7l87.47-227.9l87.47 227.9H88.54zM624 159.3c-8.844 0-15.1 7.172-15.1 16.03v28.29c-23.48-26.94-57.59-44.33-95.1-44.33c-70.58 0-127.1 57.53-127.1 128.3l-.002 64.35c0 70.75 57.42 128.1 127.1 128.1c38.41 0 72.52-17.4 96-44.33v28.29C608 472.8 615.2 480 624 480C632.8 480 640 472.8 640 463.1V175.3C640 166.5 632.8 159.3 624 159.3zM608 351.7c0 53.05-43.06 96.21-95.1 96.21c-52.94 0-95.1-43.16-95.1-96.21V287.6c0-53.05 43.06-96.21 95.1-96.21c52.94 0 95.1 43.16 95.1 96.21V351.7z"></path></svg>`,
    name: "text",
    class: "before-conten",
  },
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="image" class="svg-inline--fa fa-image fa-3x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M324.9 157.8c-11.38-17.38-39.89-17.31-51.23-.0625L200.5 268.5L184.1 245.9C172.7 229.1 145.9 229.9 134.4 245.9l-64.52 89.16c-6.797 9.406-7.75 21.72-2.547 32C72.53 377.5 83.05 384 94.75 384h322.5c11.41 0 21.8-6.281 27.14-16.38c5.312-10 4.734-22.09-1.516-31.56L324.9 157.8zM95.8 352l62.39-87.38l29.91 41.34C191.2 310.2 196.4 313.2 201.4 312.6c5.25-.125 10.12-2.781 13.02-7.188l83.83-129.9L415 352H95.8zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM480 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h384c17.64 0 32 14.36 32 32V416zM144 192C170.5 192 192 170.5 192 144S170.5 96 144 96S96 117.5 96 144S117.5 192 144 192zM144 128c8.822 0 15.1 7.178 15.1 16S152.8 160 144 160S128 152.8 128 144S135.2 128 144 128z"></path></svg>`,
    name: "image",
    class: "before-conten",
  },
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="rectangle-wide" class="svg-inline--fa fa-rectangle-wide fa-3x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM576 96H64C46.33 96 32 110.3 32 128V384C32 401.7 46.33 416 64 416H576C593.7 416 608 401.7 608 384V128C608 110.3 593.7 96 576 96z"></path></svg>`,
    name: "button",
    class: "before-conten",
  },
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="horizontal-rule" class="svg-inline--fa fa-horizontal-rule fa-3x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 272h-608C7.156 272 0 264.9 0 256S7.156 240 16 240h608c8.844 0 16 7.131 16 15.97S632.8 272 624 272z"></path></svg>`,
    name: "divider",
    class: "",
  },
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="rectangle-code" class="svg-inline--fa fa-rectangle-code fa-3x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M315.1 173.4L379.1 245.4C385.3 251.4 385.3 260.6 379.1 266.6L315.1 338.6C310.1 345.2 299.1 345.8 293.4 339.1C286.8 334.1 286.2 323.1 292 317.4L346.6 255.1L292 194.6C286.2 188 286.8 177.9 293.4 172C299.1 166.2 310.1 166.8 315.1 173.4V173.4zM165.4 256L219.1 317.4C225.8 323.1 225.2 334.1 218.6 339.1C212 345.8 201.9 345.2 196 338.6L132 266.6C126.7 260.6 126.7 251.4 132 245.4L196 173.4C201.9 166.8 212 166.2 218.6 172C225.2 177.9 225.8 188 219.1 194.6L165.4 256zM448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM448 64H64C46.33 64 32 78.33 32 96V416C32 433.7 46.33 448 64 448H448C465.7 448 480 433.7 480 416V96C480 78.33 465.7 64 448 64z"></path></svg>`,
    name: "html",
    class: "",
  },
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="bars" class="svg-inline--fa fa-bars fa-3x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 80C0 71.16 7.164 64 16 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H16C7.164 96 0 88.84 0 80zM0 240C0 231.2 7.164 224 16 224H432C440.8 224 448 231.2 448 240C448 248.8 440.8 256 432 256H16C7.164 256 0 248.8 0 240zM432 416H16C7.164 416 0 408.8 0 400C0 391.2 7.164 384 16 384H432C440.8 384 448 391.2 448 400C448 408.8 440.8 416 432 416z"></path></svg>`,
    name: "menu",
    class: "",
  },
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="users" class="svg-inline--fa fa-users fa-3x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM319.9 144c39.68 0 71.96 32.3 71.96 72S359.5 288 319.9 288S247.9 255.7 247.9 216S280.2 144 319.9 144zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM160.2 480c3.021-53.41 51.19-96 109.1-96H369.9c58.78 0 106.9 42.59 109.1 96H160.2zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM512 32c26.47 0 48 21.53 48 48S538.5 128 512 128s-48-21.53-48-48S485.5 32 512 32zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM128 32c26.47 0 48 21.53 48 48S154.5 128 128 128S80 106.5 80 80S101.5 32 128 32zM561.1 192H496c-11.16 0-22.08 2.5-32.47 7.438c-7.984 3.797-11.39 13.34-7.594 21.31s13.38 11.39 21.31 7.594C483.3 225.5 489.6 224 496 224h65.08C586.1 224 608 246.7 608 274.7V288c0 8.844 7.156 16 16 16S640 296.8 640 288V274.7C640 229.1 604.6 192 561.1 192zM162.8 228.3c7.938 3.797 17.53 .375 21.31-7.594c3.797-7.969 .3906-17.52-7.594-21.31C166.1 194.5 155.2 192 144 192H78.92C35.41 192 0 229.1 0 274.7V288c0 8.844 7.156 16 16 16S32 296.8 32 288V274.7C32 246.7 53.05 224 78.92 224H144C150.4 224 156.7 225.5 162.8 228.3z"></path></svg>`,
    name: "social",
    class: "",
  },
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" class="svg-inline--fa fa-clock fa-3x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M240 112C240 103.2 247.2 96 256 96C264.8 96 272 103.2 272 112V247.4L360.9 306.7C368.2 311.6 370.2 321.5 365.3 328.9C360.4 336.2 350.5 338.2 343.1 333.3L247.1 269.3C242.7 266.3 239.1 261.3 239.1 256L240 112zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256z"></path></svg>`,
    name: "timer",
    class: "",
  },
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="film" class="svg-inline--fa fa-film fa-3x" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96C512 60.65 483.3 32 448 32zM384 64v176H128V64H384zM32 96c0-17.64 14.36-32 32-32h32v80H32V96zM32 176h64v64H32V176zM32 272h64v64H32V272zM64 448c-17.64 0-32-14.36-32-32v-48h64V448H64zM128 448V272h256V448H128zM480 416c0 17.64-14.36 32-32 32h-32v-80h64V416zM480 336h-64v-64h64V336zM480 240h-64v-64h64V240zM480 144h-64V64h32c17.64 0 32 14.36 32 32V144z"></path></svg>`,
    name: "video",
    class: "",
  },
];
const contentPart = [
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="shapes" class="svg-inline--fa fa-shapes " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M411.8 207.8C406.2 217.8 395.5 223.1 384 223.1H192C180.5 223.1 169.8 217.8 164.2 207.8C158.5 197.7 158.6 185.4 164.6 175.5L260.6 15.54C266.3 5.897 276.8 0 288 0C299.2 0 309.7 5.898 315.4 15.54L411.4 175.5C417.4 185.4 417.5 197.7 411.8 207.8V207.8zM288 31.1L192 191.1H384L288 31.1zM472 271.1C494.1 271.1 512 289.9 512 311.1V456C512 478.1 494.1 496 472 496H328C305.9 496 288 478.1 288 456V311.1C288 289.9 305.9 271.1 328 271.1H472zM472 303.1H328C323.6 303.1 320 307.6 320 311.1V456C320 460.4 323.6 464 328 464H472C476.4 464 480 460.4 480 456V311.1C480 307.6 476.4 303.1 472 303.1zM256 384C256 454.7 198.7 512 128 512C57.31 512 0 454.7 0 384C0 313.3 57.31 255.1 128 255.1C198.7 255.1 256 313.3 256 384zM128 287.1C74.98 287.1 32 330.1 32 384C32 437 74.98 480 128 480C181 480 224 437 224 384C224 330.1 181 287.1 128 287.1z"></path></svg>`,
    id: "v-pills-home",
    name: "Content",
    class: "active",
  },
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="grip" class="svg-inline--fa fa-grip " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 376C448 398.1 430.1 416 408 416H360C337.9 416 320 398.1 320 376V328C320 305.9 337.9 288 360 288H408C430.1 288 448 305.9 448 328V376zM416 376V328C416 323.6 412.4 320 408 320H360C355.6 320 352 323.6 352 328V376C352 380.4 355.6 384 360 384H408C412.4 384 416 380.4 416 376zM448 184C448 206.1 430.1 224 408 224H360C337.9 224 320 206.1 320 184V136C320 113.9 337.9 96 360 96H408C430.1 96 448 113.9 448 136V184zM416 184V136C416 131.6 412.4 128 408 128H360C355.6 128 352 131.6 352 136V184C352 188.4 355.6 192 360 192H408C412.4 192 416 188.4 416 184zM200 416C177.9 416 160 398.1 160 376V328C160 305.9 177.9 288 200 288H248C270.1 288 288 305.9 288 328V376C288 398.1 270.1 416 248 416H200zM200 384H248C252.4 384 256 380.4 256 376V328C256 323.6 252.4 320 248 320H200C195.6 320 192 323.6 192 328V376C192 380.4 195.6 384 200 384zM288 184C288 206.1 270.1 224 248 224H200C177.9 224 160 206.1 160 184V136C160 113.9 177.9 96 200 96H248C270.1 96 288 113.9 288 136V184zM256 184V136C256 131.6 252.4 128 248 128H200C195.6 128 192 131.6 192 136V184C192 188.4 195.6 192 200 192H248C252.4 192 256 188.4 256 184zM40 416C17.91 416 0 398.1 0 376V328C0 305.9 17.91 288 40 288H88C110.1 288 128 305.9 128 328V376C128 398.1 110.1 416 88 416H40zM40 384H88C92.42 384 96 380.4 96 376V328C96 323.6 92.42 320 88 320H40C35.58 320 32 323.6 32 328V376C32 380.4 35.58 384 40 384zM128 184C128 206.1 110.1 224 88 224H40C17.91 224 0 206.1 0 184V136C0 113.9 17.91 96 40 96H88C110.1 96 128 113.9 128 136V184zM96 184V136C96 131.6 92.42 128 88 128H40C35.58 128 32 131.6 32 136V184C32 188.4 35.58 192 40 192H88C92.42 192 96 188.4 96 184z"></path></svg>`,
    id: "v-pills-profile",
    name: "Blocks",
    class: "",
  },
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="palette" class="svg-inline--fa fa-palette " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M152 255.1C152 269.3 141.3 279.1 128 279.1C114.7 279.1 104 269.3 104 255.1C104 242.7 114.7 231.1 128 231.1C141.3 231.1 152 242.7 152 255.1zM136 159.1C136 146.7 146.7 135.1 160 135.1C173.3 135.1 184 146.7 184 159.1C184 173.3 173.3 183.1 160 183.1C146.7 183.1 136 173.3 136 159.1zM280 127.1C280 141.3 269.3 151.1 256 151.1C242.7 151.1 232 141.3 232 127.1C232 114.7 242.7 103.1 256 103.1C269.3 103.1 280 114.7 280 127.1zM328 159.1C328 146.7 338.7 135.1 352 135.1C365.3 135.1 376 146.7 376 159.1C376 173.3 365.3 183.1 352 183.1C338.7 183.1 328 173.3 328 159.1zM441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 320 441.9 320V319.1zM479.1 258.3C479.1 257.6 480 256.8 480 255.1C480 132.3 379.7 31.1 256 31.1C132.3 31.1 32 132.3 32 255.1C32 379.7 132.3 480 256 480C259.1 480 262.2 479.9 265.3 479.8C275.7 479.4 288 469.1 288 449.8C288 444.6 286.1 438 281.1 426.4C280.4 424.9 279.7 423.3 278.1 421.6C274.6 411.9 268.6 398.3 265.7 384.6C264.6 379.2 264 373.6 264 368C264 323.8 299.8 288 344 288H441.9C466.2 288 479.8 272.4 479.1 258.3V258.3z"></path></svg>`,
    id: "v-pills-messages",
    name: "Body",
    class: "",
  },
  {
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="images" class="svg-inline--fa fa-images " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M464 448H96c-35.35 0-64-28.65-64-64V112C32 103.2 24.84 96 16 96S0 103.2 0 112V384c0 53.02 42.98 96 96 96h368c8.836 0 16-7.164 16-16S472.8 448 464 448zM224 152c13.26 0 24-10.75 24-24s-10.74-24-24-24c-13.25 0-24 10.75-24 24S210.8 152 224 152zM410.6 139.9c-11.28-15.81-38.5-15.94-49.1-.0313l-44.03 61.43l-6.969-8.941c-11.44-14.46-36.97-14.56-48.4 .0313L198.2 272.8C191 281.9 190 294.3 195.5 304.3C200.8 313.1 211.1 320 222.4 320h259.2c11 0 21.17-5.805 26.54-15.09c0-.0313-.0313 .0313 0 0c5.656-9.883 5.078-21.84-1.578-31.15L410.6 139.9zM226.2 287.9l58.25-75.61l20.09 25.66c4.348 5.545 17.6 10.65 25.59-.5332l54.44-78.75l92.68 129.2H226.2zM512 32H160c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64H512c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM544 320c0 17.64-14.36 32-32 32H160c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h352c17.64 0 32 14.36 32 32V320z"></path></svg>`,
    id: "v-pills-settings",
    name: "Images",
    class: "",
  },
];

const fontWeightData = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  "bold",
  "bolder",
  "lighter",
  "normal",
];
const borderStyleArray = [
  "hidden",
  "dotted",
  "dashed",
  "solid",
  "double",
  "groove",
  "ridge",
  "inset",
  "outset",
  "initial",
  "inherit",
];

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
      innerHTML = `<div style="text-align: left;"  class="heading"   onclick="headingSelectDelete(this)" ><div class="" style="margin: 0px; line-height: 140%; font-weight: 400; font-size: 22px; overflow-wrap: break-word; display: block; position: relative;" contenteditable="true"><span><span>Heading</span></span></div></div>`;
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
  })
  .on("out", function (el, container) {
    console.log("Out", el);
  });

const text_editor_button = document.querySelector(".text_editor_button");
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

function editorButtonShowHide() {
  const button_controler = document.querySelectorAll(".button_controler");
  console.log(button_controler);
  button_controler.forEach((buttons) => {
    buttons.style.display = "none";
  });
}
// content bi-x button using for hide text-editor-button=====================
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
function editorButtonShowHide() {
  const button_controler = document.querySelectorAll(".button_controler");
  button_controler.forEach((buttons) => {
    buttons.style.display = "none";
  });
}

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

function addContent(e,value) {
  e.stopPropagation();
  // console.log(value.parentNode);
  activeDragEvet(value.parentNode)
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


function activeDragEvet(target) {
  dragula([document.querySelector(".icon"),target], {
    copy: function (el, source) {
      console.log("copy", el, el.className);
      target.innerHTML="";
      if (el.children[0].hasAttribute("columns")) {
        text_editor_button.classList.remove("hidden_text_editor_button");
        editorButtonShowHide();
        document.querySelector(".columns_button").style.display = "block";
      }
      return source === document.querySelector(".icon");
    },
    accepts: function (el, target) {
      return target !== document.querySelector(".icon");
    },
    //   moves: function (el, container, handle) {
    //     console.log(el,handle,container);
    //   return handle.classList.contains('box');
    // }
  })
    .on("drop", function (el, target) {
      console.log("drop", el ,target);
      // el.classList.add("none")
      if (el.children[0].hasAttribute("heading")) {
        innerHTML = `<div style="text-align: left;"  class="heading"   onclick="headingSelectDelete(this)" ><div class="" style="margin: 0px; line-height: 140%; font-weight: 400; font-size: 22px; overflow-wrap: break-word; display: block; position: relative;" contenteditable="true"><span><span>Heading</span></span></div></div>`;
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
    })
    .on("out", function (el, container) {
      console.log("out contener",container);
      console.log("Out", el);
    });
}
