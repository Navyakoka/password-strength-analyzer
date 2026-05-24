function checkPassword(){

let password =
document.getElementById(
"password"
).value;

let hasLength =
password.length >= 8;

let hasUpper =
/[A-Z]/.test(password);

let hasNumber =
/[0-9]/.test(password);

let hasSymbol =
/[!@#$%^&*]/.test(password);

updateRule(
"length",
hasLength,
"Minimum 8 characters"
);

updateRule(
"upper",
hasUpper,
"Uppercase letter"
);

updateRule(
"number",
hasNumber,
"Number"
);

updateRule(
"symbol",
hasSymbol,
"Symbol"
);

let score = 0;

if(hasLength) score++;
if(hasUpper) score++;
if(hasNumber) score++;
if(hasSymbol) score++;

let result =
document.getElementById(
"result"
);

let suggestion =
document.getElementById(
"suggestion"
);

if(password===""){

result.innerHTML="";

suggestion.innerHTML="";

return;

}

if(score<=1){

result.innerHTML=
"🔴 Weak";

result.style.color=
"#ff6b6b";

suggestion.innerHTML=
"Add more security";

}

else if(score<=3){

result.innerHTML=
"🟡 Medium";

result.style.color=
"#ffd93d";

suggestion.innerHTML=
"Almost secure";

}

else{

result.innerHTML=
"🟢 Strong";

result.style.color=
"#22c55e";

suggestion.innerHTML=
"Excellent secure password";

}

}

function updateRule(
id,
ok,
text
){

let item =
document.getElementById(
id
);

item.className =
ok
? "valid"
: "invalid";

item.innerHTML =
(ok ? "✅ " : "❌ ")
+ text;

}