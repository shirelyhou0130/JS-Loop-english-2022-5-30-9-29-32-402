var str = "";
for (var i = 1; i < 10; i++) {
  for (var j = 1; j <= i; j++) {
    // document.write(i + "*" + j + " = " + i*j + "\t");
    str += i + "*" + j + "=" + i*j + "\t";
  }
  str += "\n";
  // document.write("<br/>");
}
console.log(str);