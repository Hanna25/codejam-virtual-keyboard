let textarea = document.createElement('textarea');
textarea.id = "result";
document.body.appendChild(textarea);

let buttons = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL'],
  ['CAPS LOCK', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'ENTER'],
  ['SHIFT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'SHIFT'],
  ['CTRL', 'WIN', 'ALT', '', 'ALT', '◄', '▼', '►', 'CTRL']
];

buttons.forEach(function(item) {
  let row = document.createElement('div');
  row.className = 'row';
  document.body.appendChild(row);
  item.forEach(function(key) {
    let button = document.createElement('div');
    button.className = 'button';
    let span = document.createElement('span');
    if (key === 'Backspace') {
      button.className += ' backspace';
    } 
    span.innerText = key;
    button.appendChild(span);
    row.appendChild(button);
    button.addEventListener('click', function(event) {
      textarea.value = textarea.value + event.srcElement.textContent;
    })
  });
})


