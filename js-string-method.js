// 1. length() Method
const  lng = "Hello Tutsmake";
console.log(lng.length)

// 2. toLocaleLowerCase() Method
const lstr = "Hello Dev!";
const l = lstr.toLocaleLowerCase();
console.log(l)

// 3. toLocaleUpperCase() Method
const ustr = "Hello Dev!";
const u = ustr.toLocaleUpperCase()
console.log(u)

// 4. indexof() Method
const itxt = "Lets find where 'pen' occurs!";
const i = itxt.indexOf("pen")
console.log(i)

// 5. search() Method
const sstr = "hello dev!"; 
const ss = sstr.search("dev");
console.log(ss)

// 6. slice() Method
const slstr = "Developers world!"; 
const sl = slstr.slice(0, 10);
console.log(sl)


// 7. substring() Method
const stnstr = "Hello dev!";
const stn = stnstr.substring(1, 4);
console.log(stn)


// 8. substr() Method
const substr = "Hello dev!";
const sub = substr.substring(1, 4);
console.log(sub)

// 9. replace() Method
const rpstr = "Hello Dev!";
const rp = rpstr.replace("Dev", "World");
console.log(rp)

// 10. includes() Method
const icstr = "Hello world, my name is tutsmake.";
const n = icstr.includes("name");
console.log(n)

// 11. concat() Method
const str1 = "Hello ";
const str2 = "keny!";
const res = str1.concat(str2);
console.log(res)

// 12. charAt() Method
const ca = "Hello Keny";
console.log(ca.charAt(0))

//13. charCodeAt() Method
const cstr = "TEST";
console.log(cstr.charCodeAt(0))

// 14. lastIndexOf () Method
const listr = "Your are talented dev";
const li = listr.lastIndexOf("dev");
console.log(li)

//15. trim() Method
const trstr = "       Trim Both Side        ";
console.log(trstr.trim())

//16. match() Method
const mstr = "lopersum lopersum lopersum lopersum."; 
const m = mstr.match(/sum/g);
console.log(m)

//17. split Method
const spstr = "1,2,3,4,5";
const sp = spstr.split(",");
console.log(sp)

//18. toString() Method
const tstr = "javaScript World!";
const t = tstr.toString();
console.log(t)

//19. valueOf() Method
const vstr = "javaScript World!";
  const v = vstr.valueOf();
  console.log(v)

