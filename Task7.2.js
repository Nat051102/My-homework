var num = -78;
if (num == 0) {
    console.log ("нульове число");
}
else if (num > 0 && (num % 2 == 0)) {
    console.log ("додатне парне число");
}
else if (num > 0 && (num % 2 != 0)) {
    console.log ("додатне непарне число");
 }
 else if (num < 0 && (num % 2 == 0)) {
    console.log ("від’ємне парне число");
}
else if (num < 0 && (num % 2 != 0)) {
    console.log ("від’ємне непарне число");
 }
