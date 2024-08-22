export default function MessageProcessor() {
    document.getElementById('keywordInput').readOnly = true
    document.getElementById('T1').readOnly = true;
    
    let textareaValue = document.getElementById('T1').value;
    let updated_message = textareaValue;

    // Removing spaces
    updated_message = updated_message.replace(/ /g, '');

    // Converting to uppercase
    updated_message = updated_message.toUpperCase();

    document.getElementById('T2').textContent = updated_message;

    for (let c = 0; c < updated_message.length - 1; c++) {
        if (updated_message[c] === updated_message[c + 1] && c % 2 === 0) {
            updated_message = updated_message.slice(0, c + 1) + 'X' + updated_message.slice(c + 1);
        }
    }

    // If the length of updated_message is odd, append 'X' to make it even
    if (updated_message.length % 2 !== 0) {
        updated_message += 'X';
    }

    document.getElementById('T3').textContent = updated_message;

    let indexChar = [];

    // Build formatted_message with two spaces between each couple of characters
    for (let i = 0; i < updated_message.length; i += 1) {
        indexChar.push(updated_message[i]);
    }
    console.log(indexChar);

    let formatted_message = "";

    // Build formatted_message with two spaces between each couple of characters
    for (let i = 0; i < updated_message.length; i += 2) {
        formatted_message += updated_message[i] + updated_message[i + 1] + "  ";
    }

    // Trim the extra space at the end if needed
    document.getElementById('T4').textContent = formatted_message;

    document.getElementById('scrollArrow').style.display = 'flex';

    document.getElementById('scrollArrow').scrollIntoView({ behavior: 'smooth', block: 'end' });

    function getCharFromTable(row, col) {
        // Construct cell ID based on row and column
        let cellId = `cell${row}${col}`;
        // Get the element by ID and return its text content
        return document.getElementById(cellId).textContent;
    }
    function getCharFromTable(row, col) {
        // Construct cell ID based on row and column
        let cellId = `cell${row}${col}`;
        // Get the element by ID and return its text content
        return document.getElementById(cellId).textContent;
    }

    let x = 0;
    let coded = [];

    while (x < updated_message.length) {
        let firstChar = updated_message[x];
        let secondChar = updated_message[x + 1];

        let firstRow, firstCol, secondRow, secondCol;

        // Find positions of characters in the table
        outerLoop: // Label to break from nested loops
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                if (getCharFromTable(i, j) === firstChar) {
                    firstRow = i;
                    firstCol = j;
                }
                if (getCharFromTable(i, j) === secondChar) {
                    secondRow = i;
                    secondCol = j;
                }
                // Break out of both loops if both characters are found
                if (firstRow !== undefined && secondRow !== undefined) {
                    break outerLoop;
                }
            }
        }

        // Encrypt based on positions
        if (firstRow === secondRow) {
            coded[x] = getCharFromTable(firstRow, (firstCol + 1) % 6);
            coded[x + 1] = getCharFromTable(secondRow, (secondCol + 1) % 6);
        } else if (firstCol === secondCol) {
            coded[x] = getCharFromTable((firstRow + 1) % 6, firstCol);
            coded[x + 1] = getCharFromTable((secondRow + 1) % 6, secondCol);
        } else {
            coded[x] = getCharFromTable(firstRow, secondCol);
            coded[x + 1] = getCharFromTable(secondRow, firstCol);
        }
        x += 2;
    }

    let indexChar2 = [];

    // Build formatted_message with two spaces between each couple of characters
    for (let i = 0; i < coded.length; i += 1) {
        indexChar2.push(coded[i]);
    }
    console.log(indexChar2);


    let encryptedMessage = "";
    for (let i = 0; i < coded.length; i += 1) {
        // Add the current coded character wrapped in a paragraph with a class
        encryptedMessage += `<p class="${coded[i]}">${coded[i]}</p>`;

        // After every two <p> elements, add an empty paragraph
        if ((i + 1) % 2 === 0) {
            encryptedMessage += `   `;
        }
    }

    document.getElementById('CipherText').innerHTML = encryptedMessage;


    // You can adapt the rest of your code to use 'pairedCoded' instead of 'coded' 
    // for displaying the encrypted message if needed.

    var cipherTextDiv = document.getElementById('CipherText');
    var lastClickedElement = null;

    function changeBackgroundColor(elements, color) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = color;
        }
    }

    let storedIndexValue = null; // Declare a variable to store the index value
    let lastClickedClass = null; // Declare a variable to store the class of the last clicked element

    function storedIndex(index) {
        storedIndexValue = index;  // Store the provided index value in the variable
    }

    cipherTextDiv.addEventListener('click', function (event) {
        if (event.target.tagName === 'P') {
            var classNames = event.target.className.split(' ');
            var table = document.getElementById('keyTable');

            // Clear background color from previously clicked elements
            if (lastClickedElement !== null) {
                var lastClassNames = lastClickedElement.className.split(' ');
                lastClassNames.forEach(function (className) {
                    var elementsWithSameClassName = document.getElementsByClassName(className);
                    changeBackgroundColor(elementsWithSameClassName, '');
                });
            }

            // Clear background color from previously clicked class in the keyTable
            if (lastClickedClass !== null) {
                var elementsWithLastClass = table.getElementsByClassName(lastClickedClass);
                changeBackgroundColor(elementsWithLastClass, '');
            }

            // Set the background color for the currently clicked element
            classNames.forEach(function (className) {
                var elementsWithSameClassName = table.getElementsByClassName(className);
                changeBackgroundColor(elementsWithSameClassName, 'purple');
            });

            // Get the index of the clicked <p> element among its siblings
            let index = Array.from(event.target.parentNode.children).indexOf(event.target);
            console.log('Clicked nth-child: ' + index);
            if (index !== -1) {
                var elementsWithSameClassName2 = table.getElementsByClassName(indexChar[index]);
                changeBackgroundColor(elementsWithSameClassName2, '#0958a2');
                storedIndex(index);
                lastClickedClass = indexChar[index]; // Store the class of the currently clicked element
            }

            window.scrollTo({
                top: 130,
                behavior: 'smooth' // For smooth scrolling, if supported
            });

            // Update lastClickedElement to the current target
            lastClickedElement = event.target;
        }
    });
};