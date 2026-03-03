/* ================================= */
/*        ARRAY METHODS              */
/* ================================= */

console.log("===== ARRAY METHODS =====");

/* 1. push() / pop() */
function testPushPop() {
    let arr = [1, 2];
    arr.push(3);
    console.log("push:", arr);

    let removed = arr.pop();
    console.log("pop removed:", removed);
    console.log("after pop:", arr);
}
testPushPop();


/* 2. shift() / unshift() */
function testShiftUnshift() {
    let arr = [2, 3];

    arr.unshift(1);
    console.log("unshift:", arr);

    let removed = arr.shift();
    console.log("shift removed:", removed);
    console.log("after shift:", arr);
}
testShiftUnshift();


/* 3. map() */
function testMap() {
    let numbers = [2, 3, 4];

    let result = numbers.map(function(item) {
        return item * item;
    });

    console.log("map:", result);
}
testMap();


/* 4. filter() */
function testFilter() {
    let numbers = [5, 8, 3, 9];

    let result = numbers.filter(function(item) {
        return item >= 5;
    });

    console.log("filter:", result);
}
testFilter();


/* 5. reduce() */
function testReduce() {
    let numbers = [1, 2, 3, 4];

    let sum = numbers.reduce(function(total, item) {
        return total + item;
    }, 0);

    console.log("reduce sum:", sum);
}
testReduce();


/* 6. forEach() */
function testForEach() {
    let subjects = ["Math", "English"];

    console.log("forEach:");
    subjects.forEach(function(item) {
        console.log(item);
    });
}
testForEach();


/* 7. find() */
function testFind() {
    let numbers = [4, 6, 9, 12];

    let result = numbers.find(function(item) {
        return item % 3 === 0;
    });

    console.log("find:", result);
}
testFind();


/* 8. includes() */
function testIncludes() {
    let subjects = ["Math", "English"];

    console.log("includes Math:", subjects.includes("Math"));
}
testIncludes();


/* 9. sort() */
function testSort() {
    let numbers = [10, 2, 5];

    numbers.sort(function(a, b) {
        return a - b;
    });

    console.log("sort:", numbers);
}
testSort();


/* 10. slice() */
function testSlice() {
    let numbers = [1, 2, 3, 4];

    let newArr = numbers.slice(1, 3);

    console.log("slice:", newArr);
}
testSlice();


/* 11. splice() */
function testSplice() {
    let numbers = [1, 2, 3];

    numbers.splice(1, 1);

    console.log("splice:", numbers);
}
testSplice();


/* 12. join() */
function testJoin() {
    let subjects = ["Math", "English"];

    let result = subjects.join(" - ");

    console.log("join:", result);
}
testJoin();



/* ================================= */
/*        STRING METHODS             */
/* ================================= */

console.log("===== STRING METHODS =====");

function testStringMethods() {
    let text = "  Hello JavaScript  ";

    console.log("charAt:", text.charAt(2));
    console.log("concat:", "Hello ".concat("World"));
    console.log("includes:", text.includes("Java"));
    console.log("replace:", text.replace("JavaScript", "JS"));
    console.log("split:", "Math,English".split(","));
    console.log("substring:", text.substring(2, 7));
    console.log("slice:", text.slice(2, 7));
    console.log("toUpperCase:", text.toUpperCase());
    console.log("toLowerCase:", text.toLowerCase());
    console.log("trim:", text.trim());
}
testStringMethods();



/* ================================= */
/*        OBJECT METHODS             */
/* ================================= */

console.log("===== OBJECT METHODS =====");

function testObjectMethods() {
    let student = {
        name: "Khanh",
        age: 20
    };

    console.log("Object.keys:", Object.keys(student));
    console.log("Object.values:", Object.values(student));
    console.log("Object.entries:", Object.entries(student));
}
testObjectMethods();



/* ================================= */
/*        SET METHODS                */
/* ================================= */

console.log("===== SET METHODS =====");

function testSetMethods() {
    let mySet = new Set();

    mySet.add("Math");
    mySet.add("English");

    console.log("has Math:", mySet.has("Math"));

    mySet.delete("Math");

    console.log("size:", mySet.size);
}
testSetMethods();