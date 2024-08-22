
function cipher_key(key, userInput) {
  let index = 0;
  let charArray = userInput.toUpperCase().split('');

  charArray = charArray.filter((item, pos) => {
      return charArray.indexOf(item) === pos;
  });

  for (let ch of charArray) {
      if ((ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')) {
          let found = false;
          for (let i = 0; i < index; ++i) {
              if (key[Math.floor(i / 6)][i % 6] === ch) {
                  found = true;
                  break;
              }
          }
          if (!found && index < 36) {
              key[Math.floor(index / 6)][index % 6] = ch;
              index++;
          }
      }
  }

  let currentCh = 'A';
  while (index < 36) {
      let found = false;
      for (let i = 0; i < index; ++i) {
          if (key[Math.floor(i / 6)][i % 6] === currentCh) {
              found = true;
              break;
          }
      }
      if (!found && (currentCh >= 'A' && currentCh <= 'Z')) {
          key[Math.floor(index / 6)][index % 6] = currentCh;
          index++;
      } else if (!found && (currentCh >= '0' && currentCh <= '9')) {
          key[Math.floor(index / 6)][index % 6] = currentCh;
          index++;
      }
      currentCh = String.fromCharCode(currentCh.charCodeAt(0) + 1);
      if (currentCh === '[') {
          currentCh = '0';
      }
  }
}

export default function generateCipherKey() {
  let userInput = document.getElementById('keywordInput').value;
  let key = [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', '']
  ];

  cipher_key(key, userInput);

  let table = document.getElementById('keyTable');
  let cubes = table.querySelectorAll('.cube');

  cubes.forEach(cube => {
      cube.classList.add('flip');
      setTimeout(() => {
          let front = cube.querySelector('.front');
          let back = cube.querySelector('.back');
          let i = parseInt(front.id.charAt(4));
          let j = parseInt(front.id.charAt(5));
          front.textContent = key[i][j];
          // Add a class to front based on the assigned character
          front.classList.add(key[i][j]);

          cube.classList.remove('flip');
      }, 250);
  });
}