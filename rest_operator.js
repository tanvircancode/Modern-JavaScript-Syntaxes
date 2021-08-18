
function myFunc(a, ...elems) {


    console.log(elems);
    console.log(arguments);

    // var x = arguments;
    // for (property of x) {
    //     console.log(property);
    // }
}



myFunc(4, 5, 6, 7, 8);