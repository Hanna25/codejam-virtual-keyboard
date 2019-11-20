let textarea = document.createElement('textarea');
textarea.id = "result";
document.body.appendChild(textarea);

let buttons = [
                [
                  {eventCode: "Backquote", creator: createSymbolKey,  firstValue: "`", secondValue: "~"},
                  {eventCode: "Digit1", creator: createSymbolKey,  firstValue: "1", secondValue: "!"},
                  {eventCode: "Digit2", creator: createSymbolKey,  firstValue: "2", secondValue: "@"},
                  {eventCode: "Digit3", creator: createSymbolKey,  firstValue: "3", secondValue: "#"},
                  {eventCode: "Digit4", creator: createSymbolKey,  firstValue: "4", secondValue: "$"},
                  {eventCode: "Digit5", creator: createSymbolKey,  firstValue: "5", secondValue: "%"},
                  {eventCode: "Digit6", creator: createSymbolKey,  firstValue: "6", secondValue: "^"},
                  {eventCode: "Digit7", creator: createSymbolKey,  firstValue: "7", secondValue: "&"},
                  {eventCode: "Digit8", creator: createSymbolKey,  firstValue: "8", secondValue: "*"},
                  {eventCode: "Digit9", creator: createSymbolKey,  firstValue: "9", secondValue: "("},
                  {eventCode: "Digit0", creator: createSymbolKey,  firstValue: "0", secondValue: ")"},
                  {eventCode: "Minus", creator: createSymbolKey,  firstValue: "-", secondValue: "_"},
                  {eventCode: "Equal ", creator: createSymbolKey,  firstValue: "=", secondValue: "+"},
                  {eventCode: "Backspace", creator: createBackspase, firstValue: "Backspace"}
                ],
                [
                  {eventCode: "Tab", creator: createTab, firstValue: "Tab"},
                  {eventCode: "KeyQ", creator: createSymbolKey,  firstValue: "q", secondValue: "Q"},
                  {eventCode: "KeyW", creator: createSymbolKey,  firstValue: "w", secondValue: "W"},
                  {eventCode: "KeyE", creator: createSymbolKey,  firstValue: "e", secondValue: "E"},
                  {eventCode: "KeyR", creator: createSymbolKey,  firstValue: "r", secondValue: "R"},
                  {eventCode: "KeyT", creator: createSymbolKey,  firstValue: "t", secondValue: "T"},
                  {eventCode: "KeyY", creator: createSymbolKey,  firstValue: "y", secondValue: "Y"},
                  {eventCode: "KeyU", creator: createSymbolKey,  firstValue: "u", secondValue: "U"},
                  {eventCode: "KeyI", creator: createSymbolKey,  firstValue: "i", secondValue: "I"},
                  {eventCode: "KeyO", creator: createSymbolKey,  firstValue: "o", secondValue: "O"},
                  {eventCode: "KeyP", creator: createSymbolKey,  firstValue: "p", secondValue: "P"},
                  {eventCode: "BracketLeft", creator: createSymbolKey,  firstValue: "[", secondValue: "{"},
                  {eventCode: "BracketRight", creator: createSymbolKey,  firstValue: "]", secondValue: "}"},
                  {eventCode: "Backslash ", creator: createSymbolKey,  firstValue: "\\", secondValue: "|"},
                  {eventCode: "Delete ", creator: createDelete, firstValue: "Del"}
                ],
                [
                  {eventCode: "CapsLock ", creator: createCapsLock, firstValue: "Caps Lock"},
                  {eventCode: "KeyA", creator: createSymbolKey,  firstValue: "a", secondValue: "A"},
                  {eventCode: "KeyS", creator: createSymbolKey,  firstValue: "s", secondValue: "S"},
                  {eventCode: "KeyD", creator: createSymbolKey,  firstValue: "d", secondValue: "D"},
                  {eventCode: "KeyF", creator: createSymbolKey,  firstValue: "f", secondValue: "F"},
                  {eventCode: "KeyG", creator: createSymbolKey,  firstValue: "g", secondValue: "G"},
                  {eventCode: "KeyH", creator: createSymbolKey,  firstValue: "h", secondValue: "H"},
                  {eventCode: "KeyJ", creator: createSymbolKey,  firstValue: "j", secondValue: "J"},
                  {eventCode: "KeyK", creator: createSymbolKey,  firstValue: "k", secondValue: "K"},
                  {eventCode: "KeyL", creator: createSymbolKey,  firstValue: "l", secondValue: "L"},
                  {eventCode: "Semicolon ", creator: createSymbolKey,  firstValue: ";", secondValue: ":"},
                  {eventCode: "Quote ", creator: createSymbolKey,  firstValue: "\'", secondValue: "\""},
                  {eventCode: "Enter ", creator:  createEnter, firstValue: "Enter"}
                ],
                [
                  {eventCode: "ShiftLeft", creator: createDecorativeKey,  firstValue: "Shift", class: " shiftleft"},
                  {eventCode: "KeyZ", creator: createSymbolKey,  firstValue: "z", secondValue: "Z"},
                  {eventCode: "KeyX", creator: createSymbolKey,  firstValue: "x", secondValue: "X"},
                  {eventCode: "KeyC", creator: createSymbolKey,  firstValue: "c", secondValue: "C"},
                  {eventCode: "KeyV", creator: createSymbolKey,  firstValue: "v", secondValue: "V"},
                  {eventCode: "KeyB", creator: createSymbolKey,  firstValue: "b", secondValue: "B"},
                  {eventCode: "KeyN", creator: createSymbolKey,  firstValue: "n", secondValue: "N"},
                  {eventCode: "KeyM", creator: createSymbolKey,  firstValue: "m", secondValue: "M"},
                  {eventCode: "Comma", creator: createSymbolKey,  firstValue: ",", secondValue: "<"},
                  {eventCode: "Period", creator: createSymbolKey,  firstValue: ".", secondValue: ">"},
                  {eventCode: "Slash", creator: createSymbolKey,  firstValue: "/", secondValue: "?"},
                  {eventCode: "ArrowUp", creator: createUpArrow,  firstValue: "▲", class: "arrow"},
                  {eventCode: "ShiftRight", creator: createDecorativeKey,  firstValue: "Shift", class: "shiftright"},
                ],
                [
                  {eventCode: "ControlLeft", creator: createDecorativeKey,  firstValue: "Ctrl", class: "controlleft"},
                  {eventCode: "MetaLeft ", creator: createDecorativeKey,  firstValue: "Win ", class: "win"},
                  {eventCode: "AltLeft", creator: createDecorativeKey,  firstValue: "Alt", class: "altleft"},
                  {eventCode: "Space", creator: createSpace},
                  {eventCode: "AltLeft", creator: createDecorativeKey,  firstValue: "Alt", class: "altright"},
                  {eventCode: "ArrowLeft", creator: createUpLeft,  firstValue: "◄", class: "arrow"},
                  {eventCode: "ArrowDown", creator: createArrowDown,  firstValue: "▼", class: "arrow"},
                  {eventCode: "ArrowRight", creator: createUpRight,  firstValue: "►", class: "arrow"},
                  {eventCode: "ControlRight", creator: createDecorativeKey, firstValue: "Ctrl", class: "controlright"}  
                ]     
              ]
let buttonsRu = [
                  [
                    {eventCode: "Backquote", creator: createSymbolKey,  firstValue: "ё", secondValue: "Ё"},
                    {eventCode: "Digit1", creator: createSymbolKey,  firstValue: "1", secondValue: "!"},
                    {eventCode: "Digit2", creator: createSymbolKey,  firstValue: "2", secondValue: "\""},
                    {eventCode: "Digit3", creator: createSymbolKey,  firstValue: "3", secondValue: "№"},
                    {eventCode: "Digit4", creator: createSymbolKey,  firstValue: "4", secondValue: ";"},
                    {eventCode: "Digit5", creator: createSymbolKey,  firstValue: "5", secondValue: "%"},
                    {eventCode: "Digit6", creator: createSymbolKey,  firstValue: "6", secondValue: ":"},
                    {eventCode: "Digit7", creator: createSymbolKey,  firstValue: "7", secondValue: "?"},
                    {eventCode: "Digit8", creator: createSymbolKey,  firstValue: "8", secondValue: "*"},
                    {eventCode: "Digit9", creator: createSymbolKey,  firstValue: "9", secondValue: "("},
                    {eventCode: "Digit0", creator: createSymbolKey,  firstValue: "0", secondValue: ")"},
                    {eventCode: "Minus", creator: createSymbolKey,  firstValue: "-", secondValue: "_"},
                    {eventCode: "Equal ", creator: createSymbolKey,  firstValue: "=", secondValue: "+"},
                    {eventCode: "Backspace", creator: createBackspase, firstValue: "Backspace"}
                  ],
                  [
                    {eventCode: "Tab", creator: createTab, firstValue: "Tab"},
                    {eventCode: "KeyQ", creator: createSymbolKey,  firstValue: "й", secondValue: "Й"},
                    {eventCode: "KeyW", creator: createSymbolKey,  firstValue: "ц", secondValue: "Ц"},
                    {eventCode: "KeyE", creator: createSymbolKey,  firstValue: "у", secondValue: "У"},
                    {eventCode: "KeyR", creator: createSymbolKey,  firstValue: "к", secondValue: "К"},
                    {eventCode: "KeyT", creator: createSymbolKey,  firstValue: "е", secondValue: "Е"},
                    {eventCode: "KeyY", creator: createSymbolKey,  firstValue: "н", secondValue: "Н"},
                    {eventCode: "KeyU", creator: createSymbolKey,  firstValue: "г", secondValue: "Г"},
                    {eventCode: "KeyI", creator: createSymbolKey,  firstValue: "ш", secondValue: "Ш"},
                    {eventCode: "KeyO", creator: createSymbolKey,  firstValue: "щ", secondValue: "Щ"},
                    {eventCode: "KeyP", creator: createSymbolKey,  firstValue: "з", secondValue: "З"},
                    {eventCode: "BracketLeft", creator: createSymbolKey,  firstValue: "х", secondValue: "Х"},
                    {eventCode: "BracketRight", creator: createSymbolKey,  firstValue: "ъ", secondValue: "Ъ"},
                    {eventCode: "Backslash ", creator: createSymbolKey,  firstValue: "\\", secondValue: "|"},
                    {eventCode: "Delete ", creator: createDelete, firstValue: "Del"}
                  ],
                  [
                  {eventCode: "CapsLock ", creator: createCapsLock, firstValue: "Caps Lock"},
                  {eventCode: "KeyA", creator: createSymbolKey,  firstValue: "ф", secondValue: "Ф"},
                  {eventCode: "KeyS", creator: createSymbolKey,  firstValue: "ы", secondValue: "Ы"},
                  {eventCode: "KeyD", creator: createSymbolKey,  firstValue: "в", secondValue: "В"},
                  {eventCode: "KeyF", creator: createSymbolKey,  firstValue: "а", secondValue: "А"},
                  {eventCode: "KeyG", creator: createSymbolKey,  firstValue: "п", secondValue: "П"},
                  {eventCode: "KeyH", creator: createSymbolKey,  firstValue: "р", secondValue: "Р"},
                  {eventCode: "KeyJ", creator: createSymbolKey,  firstValue: "о", secondValue: "О"},
                  {eventCode: "KeyK", creator: createSymbolKey,  firstValue: "л", secondValue: "Л"},
                  {eventCode: "KeyL", creator: createSymbolKey,  firstValue: "д", secondValue: "Д"},
                  {eventCode: "Semicolon ", creator: createSymbolKey,  firstValue: "ж", secondValue: "Ж"},
                  {eventCode: "Quote ", creator: createSymbolKey,  firstValue: "э", secondValue: "Э"},
                  {eventCode: "Enter ", creator:  createEnter, firstValue: "Enter"}
                ],
                [
                  {eventCode: "ShiftLeft", creator: createDecorativeKey,  firstValue: "Shift", class: " shiftleft"},
                  {eventCode: "KeyZ", creator: createSymbolKey,  firstValue: "я", secondValue: "Я"},
                  {eventCode: "KeyX", creator: createSymbolKey,  firstValue: "ч", secondValue: "Ч"},
                  {eventCode: "KeyC", creator: createSymbolKey,  firstValue: "с", secondValue: "С"},
                  {eventCode: "KeyV", creator: createSymbolKey,  firstValue: "м", secondValue: "М"},
                  {eventCode: "KeyB", creator: createSymbolKey,  firstValue: "и", secondValue: "И"},
                  {eventCode: "KeyN", creator: createSymbolKey,  firstValue: "т", secondValue: "Т"},
                  {eventCode: "KeyM", creator: createSymbolKey,  firstValue: "ь", secondValue: "Ь"},
                  {eventCode: "Comma", creator: createSymbolKey,  firstValue: "б", secondValue: "Б"},
                  {eventCode: "Period", creator: createSymbolKey,  firstValue: "ю", secondValue: "Ю"},
                  {eventCode: "Slash", creator: createSymbolKey,  firstValue: ".", secondValue: ","},
                  {eventCode: "ArrowUp", creator: createUpArrow,  firstValue: "▲", class: "arrow"},
                  {eventCode: "ShiftRight", creator: createDecorativeKey,  firstValue: "Shift", class: "shiftright"},
                ],
                [
                  {eventCode: "ControlLeft", creator: createDecorativeKey,  firstValue: "Ctrl", class: "controlleft"},
                  {eventCode: "MetaLeft ", creator: createDecorativeKey,  firstValue: "Win ", class: "win"},
                  {eventCode: "AltLeft", creator: createDecorativeKey,  firstValue: "Alt", class: "altleft"},
                  {eventCode: "Space", creator: createSpace},
                  {eventCode: "AltLeft", creator: createDecorativeKey,  firstValue: "Alt", class: "altright"},
                  {eventCode: "ArrowLeft", creator: createUpLeft,  firstValue: "◄", class: "arrow"},
                  {eventCode: "ArrowDown", creator: createArrowDown,  firstValue: "▼", class: "arrow"},
                  {eventCode: "ArrowRight", creator: createUpRight,  firstValue: "►", class: "arrow"},
                  {eventCode: "ControlRight", creator: createDecorativeKey, firstValue: "Ctrl", class: "controlright" }  
                ]  
              ]

let keydownFunctions = {
                          "ShiftRight": doDownShiftLogic,
                          "ShiftLeft": doDownShiftLogic,
                          "AltRight": doDownAltLogic,
                          "AltLeft": doDownAltLogic,
                          "ControlRight": doDownCtrlLogic,
                          "ControlLeft": doDownCtrlLogic,
                          "CapsLock" : doUpCapsLock
                       }
let keyupFunctions = {
                        "ShiftRight": doUpShiftLogic,
                        "ShiftLeft": doUpShiftLogic,
                        "AltRight": doUpAltLogic,
                        "AltLeft": doUpAltLogic,
                        "ControlRight": doUpCtrlLogic,
                        "ControlLeft": doUpCtrlLogic,
                     }
let divButtons = [];        

document.addEventListener('keydown', function(event) {
  if (keydownFunctions.hasOwnProperty(event.code)) {
    keydownFunctions[event.code]();

  }  
});
document.addEventListener('keyup', function(event) {
  if (keyupFunctions.hasOwnProperty(event.code)) {
    keyupFunctions[event.code]();
  }  
});
let statusKeyboard = false;
let statusSwitching = false;

function toggleKeybord() {
  en = document.getElementById('en-keyboard');
  ru = document.getElementById('ru-keyboard');
  if (en.classList.contains("off")) {
    en.classList.remove("off");
    ru.classList.add("off");
  } else {
    en.classList.add("off");
    ru.classList.remove("off");
  } 
}
function doDownShiftLogic() {
  if (statusSwitching) {
    toggleKeybord()
  }
}
function doDownAltLogic() {
  statusSwitching = true;
}
function doDownCtrlLogic() {
  statusSwitching = true;
}
function doUpShiftLogic() {
  statusSwitching = false;
}
function doUpAltLogic() {
  statusSwitching = false;
}
function doUpCtrlLogic() {
  statusSwitching = false;
}
function doUpCapsLock() {
  divButtons.forEach(function(div) {
    if (div.children[0].classList.contains("on")) {
      div.children[0].classList.remove("on")
      div.children[0].classList.add("off")
      div.children[1].classList.remove("off")
      div.children[1].classList.add("on")
    } else {
      div.children[0].classList.remove("off")
      div.children[0].classList.add("on")
      div.children[1].classList.remove("on")
      div.children[1].classList.add("off")
    }
  });
}

function createKey(key) {
   let button = document.createElement('div');
  button.className = 'button';
  let span = document.createElement('span');
  span.className = 'on'
  span.innerText = key.firstValue;
  button.appendChild(span);
  return button;
}
function createSymbolKey(key) {
  let symbolKey = createKey(key);
  let span = document.createElement('span');
  span.innerText = key.secondValue;
  span.className = 'off'
  symbolKey.appendChild(span);
  symbolKey.addEventListener('click', function(event) {
    textarea.value = textarea.value + event.target.innerText;
  });
  divButtons.push(symbolKey);
  return symbolKey;
}
function createBackspase(key) {
  let backspace = createKey(key);
  backspace.className += " backspace";
  backspace.addEventListener('click', function(event) {
    let cursor = textarea.selectionStart;
    let firstHalf = textarea.value.substring(0,  cursor - 1);
    let secondHalf = textarea.value.substring(cursor,  textarea.value.length);
    textarea.value = firstHalf + secondHalf;
  });
    return backspace;
 }
 function createDelete(key) {
  let del = createKey(key);
  del.className += " delete";
  del.addEventListener('click', function(event) {
    let cursor = textarea.selectionStart;
    let firstHalf = textarea.value.substring(0,  cursor);
    let secondHalf = textarea.value.substring(cursor + 1, textarea.value.length);
    textarea.value = firstHalf + secondHalf;
   });
    return del;
 }
 function createSpace(key) {
  let space = document.createElement('div');
  space.className = 'button space';
  space.addEventListener('click', function() {
    textarea.value = textarea.value + " ";
  });
  return space;
 }
 
function createDecorativeKey(key) {
  let decorativeKey = createKey(key);
  decorativeKey.className += " " + key.class;
  return decorativeKey;
}
function createTab(key) {
  let tab = createKey(key);
  tab.className += " tab";
  return tab;
}
function createCapsLock(key) {
  let capsLock = createKey(key);
  capsLock.className += " cl";
  capsLock.addEventListener('click', function(event) {
    doUpCapsLock();
  });
  return capsLock;
}
function createEnter(key) {
  let enter = createKey(key);
  enter.className += " enter";
  document.write("\n");
  return enter;
}
function createUpArrow(key) {
  let upArrow = createKey(key);
  upArrow.className += " " + key.class;
  return upArrow;
}
function createUpLeft(key) {
  let upLeft = createKey(key);
  upLeft.className += " " + key.class;
  return upLeft;
}
function createArrowDown(key) {
  let arrowDown = createKey(key);
  arrowDown.className += " " + key.class;
  return arrowDown;
}
function createUpRight (key) {
  let upRight = createKey(key);
  upRight.className += " " + key.class;
  return upRight;
}

function createKeyboard(id, buttons, additionalClass) {
  let wrapper = document.createElement('div');
  wrapper.className = "wrapper" + additionalClass;
  document.body.appendChild(wrapper);
  wrapper.id = id;
  buttons.forEach(function(item) {
    let row = document.createElement('div');
    row.className = 'row';
    wrapper.appendChild(row);
    item.forEach(function(key) {
      let button = key.creator(key);
      row.appendChild(button);
    });
  });
}
createKeyboard("en-keyboard", buttons, " off")
createKeyboard("ru-keyboard", buttonsRu, "")





