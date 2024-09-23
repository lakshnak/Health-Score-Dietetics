
function checkchar(name,temp,disp)
{
var j=0;
for(var i=0;i<name.value.length;i++)
{
j=temp.indexOf(name.value.charAt(i));
if(j==-1)
{
alert("only"+disp+"allowed in this field");
name.value="";
name.focus();
return;
}
}
}
function checkemail(email)
{
if(email.value!=="")
{
var temp='.';
var temp1='@';
if((email.value.indexOf('.')==-1) || (email.value.indexOf('@')==-1))
{
alert("Invalid Mail ID");
email.value="";
email.focus();
return;
}
}
}