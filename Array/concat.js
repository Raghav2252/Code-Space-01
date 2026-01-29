// Array Operations Visualizer - Enhanced JavaScript
// Interactive demonstration of JavaScript array methods with visual feedback

// Global state
let currentStepIndex = 0;
let operations = [];
let isAutoPlaying = false;
let autoPlayInterval = null;

// Operation definitions with comprehensive array methods
function initializeOperations() {
    operations = [
        // 1. CONCAT - Merging arrays
        {
            title: "concat()",
            description: "Merges two or more arrays into a new array without modifying the original arrays.",
            mutates: false,
            operation: () => {
                const arr1 = [1, 2, 3];
                const arr2 = [4, 5, 6];
                const result = arr1.concat(arr2);
                return {
                    before: { arr1, arr2 },
                    after: { result },
                    code: "const result = arr1.concat(arr2);",
                    explanation: "Creates a new array containing all elements from arr1 followed by all elements from arr2."
                };
            }
        },

        // 2. PUSH - Add to end
        {
            title: "push()",
            description: "Adds one or more elements to the end of an array and returns the new length.",
            mutates: true,
            operation: () => {
                const arr = [1, 2, 3];
                const before = [...arr];
                const length = arr.push(4, 5);
                return {
                    before: { arr: before },
                    after: { arr, length },
                    code: "arr.push(4, 5); // Returns: " + length,
                    explanation: "Adds elements to the end and returns the new array length."
                };
            }
        },

        // 3. POP - Remove from end
        {
            title: "pop()",
            description: "Removes the last element from an array and returns that element.",
            mutates: true,
            operation: () => {
                const arr = [1, 2, 3, 4, 5];
                const before = [...arr];
                const removed = arr.pop();
                return {
                    before: { arr: before },
                    after: { arr, removed },
                    code: "const removed = arr.pop(); // Returns: " + removed,
                    explanation: "Removes and returns the last element from the array."
                };
            }
        },

        // 4. UNSHIFT - Add to beginning
        {
            title: "unshift()",
            description: "Adds one or more elements to the beginning of an array and returns the new length.",
            mutates: true,
            operation: () => {
                const arr = [3, 4, 5];
                const before = [...arr];
                const length = arr.unshift(1, 2);
                return {
                    before: { arr: before },
                    after: { arr, length },
                    code: "arr.unshift(1, 2); // Returns: " + length,
                    explanation: "Adds elements to the beginning and returns the new length."
                };
            }
        },

        // 5. SHIFT - Remove from beginning
        {
            title: "shift()",
            description: "Removes the first element from an array and returns that element.",
            mutates: true,
            operation: () => {
                const arr = [1, 2, 3, 4, 5];
                const before = [...arr];
                const removed = arr.shift();
                return {
                    before: { arr: before },
                    after: { arr, removed },
                    code: "const removed = arr.shift(); // Returns: " + removed,
                    explanation: "Removes and returns the first element from the array."
                };
            }
        },

        // 6. SPLICE - Add/Remove elements
        {
            title: "splice()",
            description: "Changes array contents by removing, replacing, or adding elements at a specific position.",
            mutates: true,
            operation: () => {
                const arr = [1, 2, 3, 4, 5];
                const before = [...arr];
                const removed = arr.splice(2, 1, 7, 8, 9);
                return {
                    before: { arr: before },
                    after: { arr, removed },
                    code: "arr.splice(2, 1, 7, 8, 9); // Removes: [" + removed + "]",
                    explanation: "At index 2, removes 1 element and inserts 7, 8, 9."
                };
            }
        },

        // 7. SLICE - Extract section
        {
            title: "slice()",
            description: "Returns a shallow copy of a portion of an array without modifying the original.",
            mutates: false,
            operation: () => {
                const arr = [1, 2, 3, 4, 5];
                const result = arr.slice(1, 4);
                return {
                    before: { arr },
                    after: { result, originalUnchanged: arr },
                    code: "const result = arr.slice(1, 4);",
                    explanation: "Extracts elements from index 1 to 4 (exclusive) into a new array."
                };
            }
        },

        // 8. MAP - Transform elements
        {
            title: "map()",
            description: "Creates a new array with the results of calling a function on every element.",
            mutates: false,
            operation: () => {
                const arr = [1, 2, 3, 4, 5];
                const result = arr.map(x => x * 2);
                return {
                    before: { arr },
                    after: { result },
                    code: "const result = arr.map(x => x * 2);",
                    explanation: "Transforms each element by multiplying by 2."
                };
            }
        },

        // 9. FILTER - Filter elements
        {
            title: "filter()",
            description: "Creates a new array with all elements that pass a test function.",
            mutates: false,
            operation: () => {
                const arr = [1, 2, 3, 4, 5, 6, 7, 8];
                const result = arr.filter(x => x % 2 === 0);
                return {
                    before: { arr },
                    after: { result },
                    code: "const result = arr.filter(x => x % 2 === 0);",
                    explanation: "Filters to keep only even numbers."
                };
            }
        },

        // 10. REDUCE - Reduce to single value
        {
            title: "reduce()",
            description: "Executes a reducer function on each element, resulting in a single output value.",
            mutates: false,
            operation: () => {
                const arr = [1, 2, 3, 4, 5];
                const result = arr.reduce((acc, val) => acc + val, 0);
                return {
                    before: { arr },
                    after: { sum: result },
                    code: "const sum = arr.reduce((acc, val) => acc + val, 0);",
                    explanation: "Sums all array elements: 1 + 2 + 3 + 4 + 5 = " + result
                };
            }
        },

        // 11. FIND - Find first match
        {
            title: "find()",
            description: "Returns the first element in the array that satisfies the provided testing function.",
            mutates: false,
            operation: () => {
                const arr = [2, 6, 7, 8, 12];
                const result = arr.find(x => x > 7);
                return {
                    before: { arr },
                    after: { result },
                    code: "const result = arr.find(x => x > 7);",
                    explanation: "Finds the first element greater than 7: " + result
                };
            }
        },

        // 12. FINDINDEX - Find index of first match
        {
            title: "findIndex()",
            description: "Returns the index of the first element that satisfies the testing function.",
            mutates: false,
            operation: () => {
                const arr = [2, 6, 7, 8, 12];
                const result = arr.findIndex(x => x > 7);
                return {
                    before: { arr },
                    after: { index: result },
                    code: "const index = arr.findIndex(x => x > 7);",
                    explanation: "Index of first element greater than 7: " + result
                };
            }
        },

        // 13. INDEXOF - Find index of element
        {
            title: "indexOf()",
            description: "Returns the first index at which a given element can be found, or -1 if not present.",
            mutates: false,
            operation: () => {
                const arr = ["a", "b", "c", "d", "e"];
                const result = arr.indexOf("d");
                return {
                    before: { arr },
                    after: { index: result },
                    code: "const index = arr.indexOf('d');",
                    explanation: "Index of 'd' in the array: " + result
                };
            }
        },

        // 14. INCLUDES - Check if element exists
        {
            title: "includes()",
            description: "Determines whether an array includes a certain element, returning true or false.",
            mutates: false,
            operation: () => {
                const arr = [1, 2, 3, 4, 5];
                const result = arr.includes(3);
                return {
                    before: { arr },
                    after: { includes3: result },
                    code: "const includes3 = arr.includes(3);",
                    explanation: "Array includes 3: " + result
                };
            }
        },

        // 15. SOME - Test if any element passes
        {
            title: "some()",
            description: "Tests whether at least one element passes the provided function test.",
            mutates: false,
            operation: () => {
                const arr = [1, 2, 3, 4, 5];
                const result = arr.some(x => x > 4);
                return {
                    before: { arr },
                    after: { hasGreaterThan4: result },
                    code: "const hasGreaterThan4 = arr.some(x => x > 4);",
                    explanation: "At least one element > 4: " + result
                };
            }
        },

        // 16. EVERY - Test if all elements pass
        {
            title: "every()",
            description: "Tests whether all elements pass the provided function test.",
            mutates: false,
            operation: () => {
                const arr = [2, 4, 6, 8, 10];
                const result = arr.every(x => x % 2 === 0);
                return {
                    before: { arr },
                    after: { allEven: result },
                    code: "const allEven = arr.every(x => x % 2 === 0);",
                    explanation: "All elements are even: " + result
                };
            }
        },

        // 17. SORT - Sort elements
        {
            title: "sort()",
            description: "Sorts the elements of an array in place and returns the sorted array.",
            mutates: true,
            operation: () => {
                const arr = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
                const before = [...arr];
                arr.sort();
                return {
                    before: { arr: before },
                    after: { arr },
                    code: "arr.sort(); // Alphabetical order",
                    explanation: "Sorts array elements alphabetically in ascending order."
                };
            }
        },

        // 18. REVERSE - Reverse array
        {
            title: "reverse()",
            description: "Reverses the order of elements in an array in place.",
            mutates: true,
            operation: () => {
                const arr = [1, 2, 3, 4, 5];
                const before = [...arr];
                arr.reverse();
                return {
                    before: { arr: before },
                    after: { arr },
                    code: "arr.reverse();",
                    explanation: "Reverses the order of all elements in the array."
                };
            }
        },

        // 19. JOIN - Convert to string
        {
            title: "join()",
            description: "Joins all elements into a string, separated by a specified separator.",
            mutates: false,
            operation: () => {
                const arr = ["Hello", "World", "JavaScript"];
                const result = arr.join(" ");
                return {
                    before: { arr },
                    after: { result },
                    code: "const result = arr.join(' ');",
                    explanation: "Joins elements with space: '" + result + "'"
                };
            }
        },

        // 20. FLAT - Flatten nested arrays
        {
            title: "flat()",
            description: "Creates a new array with all sub-array elements concatenated into it.",
            mutates: false,
            operation: () => {
                const arr = [1, 2, [3, 4], [5, [6, 7]]];
                const result = arr.flat(2);
                return {
                    before: { arr },
                    after: { result },
                    code: "const result = arr.flat(2);",
                    explanation: "Flattens nested arrays up to 2 levels deep."
                };
            }
        },

        // 21. FLATMAP - Map then flatten
        {
            title: "flatMap()",
            description: "Maps each element using a function, then flattens the result into a new array.",
            mutates: false,
            operation: () => {
                const arr = [1, 2, 3];
                const result = arr.flatMap(x => [x, x * 2]);
                return {
                    before: { arr },
                    after: { result },
                    code: "const result = arr.flatMap(x => [x, x * 2]);",
                    explanation: "Each element produces [x, x*2], then all are flattened."
                };
            }
        },

        // 22. FILL - Fill with value
        {
            title: "fill()",
            description: "Fills all array elements with a static value from a start to an end index.",
            mutates: true,
            operation: () => {
                const arr = new Array(6).fill(0);
                const before = [...arr];
                arr.fill(7, 2, 5);
                return {
                    before: { arr: before },
                    after: { arr },
                    code: "arr.fill(7, 2, 5); // Fill with 7 from index 2 to 5",
                    explanation: "Fills elements from index 2 to 5 (exclusive) with value 7."
                };
            }
        },

        // 23. FOREACH - Iterate elements
        {
            title: "forEach()",
            description: "Executes a provided function once for each array element.",
            mutates: false,
            operation: () => {
                const arr = [1, 2, 3, 4, 5];
                let sum = 0;
                arr.forEach(x => sum += x);
                return {
                    before: { arr },
                    after: { sumCalculated: sum },
                    code: "arr.forEach(x => sum += x);",
                    explanation: "Iterates through each element and adds to sum: " + sum
                };
            }
        }
    ];

    document.getElementById('totalSteps').textContent = operations.length;
}

// Display current operation
function displayOperation(index) {
    if (index < 0 || index >= operations.length) return;

    const op = operations[index];
    const result = op.operation();

    const displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'operation-card';

    // Header
    const header = document.createElement('div');
    header.className = 'operation-header';

    const title = document.createElement('div');
    title.className = 'operation-title';
    title.textContent = op.title;

    const badge = document.createElement('span');
    badge.className = `operation-badge ${op.mutates ? 'badge-mutates' : 'badge-returns'}`;
    badge.textContent = op.mutates ? 'Mutates' : 'Returns New';

    header.appendChild(title);
    header.appendChild(badge);

    // Description
    const description = document.createElement('div');
    description.className = 'operation-description';
    description.textContent = op.description;

    // Before state
    const beforeContainer = document.createElement('div');
    beforeContainer.className = 'array-container';

    const beforeLabel = document.createElement('div');
    beforeLabel.className = 'array-label';
    beforeLabel.textContent = '⬇️ Before Operation:';
    beforeContainer.appendChild(beforeLabel);

    for (const [key, value] of Object.entries(result.before)) {
        const arrayDisplay = createArrayDisplay(key, value);
        beforeContainer.appendChild(arrayDisplay);
    }

    // After state
    const afterContainer = document.createElement('div');
    afterContainer.className = 'array-container';

    const afterLabel = document.createElement('div');
    afterLabel.className = 'array-label';
    afterLabel.textContent = '⬆️ After Operation:';
    afterContainer.appendChild(afterLabel);

    for (const [key, value] of Object.entries(result.after)) {
        const arrayDisplay = createArrayDisplay(key, value);
        afterContainer.appendChild(arrayDisplay);
    }

    // Code
    const codeBlock = document.createElement('div');
    codeBlock.className = 'code-block';
    codeBlock.innerHTML = `<span class="code-comment">// ${result.explanation}</span><br>${result.code}`;

    // Assemble card
    card.appendChild(header);
    card.appendChild(description);
    card.appendChild(beforeContainer);
    card.appendChild(afterContainer);
    card.appendChild(codeBlock);

    displayArea.appendChild(card);

    // Update step counter
    document.getElementById('currentStep').textContent = index + 1;
}

// Create array display element
function createArrayDisplay(label, value) {
    const container = document.createElement('div');
    container.style.marginBottom = '0.5rem';

    const labelElement = document.createElement('div');
    labelElement.style.fontSize = '0.85rem';
    labelElement.style.color = 'hsl(180, 70%, 50%)';
    labelElement.style.fontWeight = '600';
    labelElement.textContent = label + ':';
    container.appendChild(labelElement);

    if (Array.isArray(value)) {
        const arrayDisplay = document.createElement('div');
        arrayDisplay.className = 'array-display';

        arrayDisplay.appendChild(createBracket('['));

        value.forEach((item, index) => {
            const element = document.createElement('div');
            element.className = 'array-element';

            if (typeof item === 'string') {
                element.classList.add('string');
                element.textContent = `"${item}"`;
            } else if (Array.isArray(item)) {
                element.textContent = `[${item.join(', ')}]`;
            } else {
                element.textContent = item;
            }

            arrayDisplay.appendChild(element);

            if (index < value.length - 1) {
                const comma = document.createElement('span');
                comma.textContent = ',';
                comma.style.color = 'hsl(0, 0%, 60%)';
                comma.style.fontSize = '1.2rem';
                arrayDisplay.appendChild(comma);
            }
        });

        arrayDisplay.appendChild(createBracket(']'));
        container.appendChild(arrayDisplay);
    } else {
        const resultContainer = document.createElement('div');
        resultContainer.className = 'result-container';

        const resultValue = document.createElement('div');
        resultValue.className = 'result-value';
        resultValue.textContent = typeof value === 'string' ? `"${value}"` : String(value);

        resultContainer.appendChild(resultValue);
        container.appendChild(resultContainer);
    }

    return container;
}

// Create bracket element
function createBracket(text) {
    const bracket = document.createElement('span');
    bracket.className = 'array-bracket';
    bracket.textContent = text;
    return bracket;
}

// Navigation functions
function nextStep() {
    if (currentStepIndex < operations.length - 1) {
        currentStepIndex++;
        displayOperation(currentStepIndex);
    }
}

function previousStep() {
    if (currentStepIndex > 0) {
        currentStepIndex--;
        displayOperation(currentStepIndex);
    }
}

function reset() {
    stopAutoPlay();
    currentStepIndex = 0;
    displayOperation(currentStepIndex);
}

function autoPlay() {
    if (isAutoPlaying) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
}

function startAutoPlay() {
    isAutoPlaying = true;
    const button = event.target.closest('button');
    button.querySelector('span').textContent = '⏸️ Pause';

    autoPlayInterval = setInterval(() => {
        if (currentStepIndex < operations.length - 1) {
            nextStep();
        } else {
            stopAutoPlay();
            reset();
        }
    }, 3000);
}

function stopAutoPlay() {
    isAutoPlaying = false;
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
    const buttons = document.querySelectorAll('.btn-success');
    buttons.forEach(button => {
        button.querySelector('span').textContent = '⚡ Auto Play';
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeOperations();
    displayOperation(currentStepIndex);
    console.log('🚀 Array Operations Visualizer loaded!');
    console.log(`📊 Total operations: ${operations.length}`);
});