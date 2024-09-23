function onCountry()
{
var country=document.getElementById('user_country')
options=['India','Pakistan','Australia']
for(i=0;i<options.length;i++)
{
var opt=options[i]
var elt=document.createElement("option")
elt.textContent=opt
elt.value=opt
country.appendChild(elt)
}
}


function onPickCountry()
{

selectedCountry=document.register.user_country.value;
options=['Tamilnadu','kerala','karnadaka']

if(selectedCountry=="India")
{

document.getElementById('user_state').disabled=false;
state=document.getElementById('user_state')
for(i=0;i<options.length;i++)
{
var opt=options[i]
var elt=document.createElement('option')
elt.textContent=opt
elt.value=opt
state.appendChild(elt)
}
}
else
{
alert("Select only India")
document.register.user_country.focus()
return false;
}
}

function onPickState()
{
selectedState=document.register.user_state.value;
options=['Coimbatore','Karaikudi','Devakottai']
if(selectedState=="Tamilnadu")
{
document.getElementById('user_city').disabled=false;
city=document.getElementById('user_city')
for(i=0;i<options.length;i++)
{
var opt=options[i]
var elt=document.createElement('option')
elt.textContent=opt
elt.value=opt
city.appendChild(elt)
}
}
else
{
alert("Select only Tamilnadu")
document.register.user_city.focus()
return false;
}
}
