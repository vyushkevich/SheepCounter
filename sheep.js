function countSheeps(list) {
    const sheepCount = list.filter(Boolean).length;
    
    if (sheepCount === 0) {
        document.getElementById('result').textContent = "UPS!!! Wolfs eaten Sheeps";
    } else {
        document.getElementById('result').textContent = `There are ${sheepCount} sheep in total`;
    }
}

// Test cases
let list1 = [ true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true ];
let list2 = [ false, false, false ];

// You can test by changing list1 to list2 here:
countSheeps(list1);
