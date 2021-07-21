window.onload=displayDay;

function alertME(){
alert('Hello world');
alert('This is your Second alert');
}

function numberOfWeeks()
{

    let daysInYear= 365.25;
    let daysInWeek=7;
    let yearsInLifetime= 80;
    let endresult= (daysInYear*yearsInLifetime)/daysInWeek;
    document.getElementById("weeks").innerHTML = endresult;
}

function regex1()
{
    let text1="hello";
    let text2="world";
    text3=text1+" "+text2;
    alert(text3);
    alert("Performing Replacement using Regex")
    let text4= text3.replace(/l/g,"1");
    text4 = text4.replace(/o/g,"0");
    document.getElementById("regexresult").innerHTML = text4;
    document.getElementById("regexReversed").innerHTML= "reversed  is: "+reverseRegex(text4);
    
}
function reverseRegex(val)
{
    return val.split('').reverse().join('');
}

function parseAll()
{
var a=parseInt("100")+"<br>";
		
var b=parseInt("2021@kternai")+"<br>";
	
var c=parseInt("kternai@2021")+"<br>";
		
var d=parseInt("3.14")+"<br>";
	
var e=parseInt("21 7 2018")+"<br>";
		
var f=parseInt("100",10)+"<br>";
		
var g=parseInt("8",8)+"<br>";
		
var h=parseInt("15",8)+"<br>";
		
var i=parseInt("16",16)+"<br>";
	
var j=parseInt(" 100 ")+"<br>";
		
var k=parseInt("0x16")+"<br>";

var n="1."+a+"2."+b+"3."+c+"4."+d+"5."+e+"6."+f+"7."+g+"8."+h+"9."+i+"10."+j+"11."+k;
document.getElementById("parseOutput").innerHTML=n;
}

function displayDay(){
    var mydate=new Date();
    var myhrs=mydate.getHours();
    var target=document.getElementById('dayImage');
    var text;


    if(myhrs<12)
    {
        text="Good Morning";
        target.src="assets/goodmorning.jpg";
    }
    else if(myhrs>12 &&myhrs<16)
    {
        text="Good Afternoon";
        target.src="assets/goodafternoon.jpg";
    }
    else{
        text="Good Night";
        target.src="assets/goodnight.jpg" ;
       
        
    }
    document.getElementById("greetingText").innerHTML= text;
    
}

function sandwichCalculator(){
       
       var slices=document.getElementById('breadSlices').value;
       var cheese=document.getElementById('cheeseSlices').value;
       if((slices/2)==cheese)
       {
            alert('the number of sandwiches you can make are:'+slices/2);
       }
       else if((slices/2)>=cheese)
       {
           alert('the number of sandwiches you can make are:'+cheese)
       }
       else if((slices/2)<=cheese)
       {
            alert('the number of sandwiches you can make are:'+slices/2);
       }

}
