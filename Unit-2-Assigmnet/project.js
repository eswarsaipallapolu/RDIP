function pal()
{
    var x=document.getElementById('pal').value;
    let i=0;
    let j=x.length-1;
    if(x=="")
    {
        alert("The string should not be empty");
        return false;
    }
    else
    {
    while(i<j)
    {
        if(x[i]==x[j])
        {
            i++;
            j--;
        }
        else
        {
            alert("The string "+x+" is not a Palindrome");
            return false;
        }
    }
    alert("The string  "+ x+" is a Palindrome");
    return true;
    }
}
function anagaram()
{
    var s1, s2;
    s1 = document.getElementById('anag1').value.split('').sort().join('');
    s2=document.getElementById('anag2').value.split('').sort().join('');
   if(s1==""|| s2=="")
   {
       alert("The string should not be empty");
       return false;
   }
   else if(s1==s2){
        alert("The Strings are Anagrams");
        return true;
   }
   else{
       alert("The Strings are not Anagarams");
       return false;
   }
}
function formvalid()
{
    var name = document.validform.name.value;
    var number = document.validform.number.value;
    var email = document.validform.email.value;
    if(name==""|| number==""|| email=="")
    {
        alert("Please Enter Details"+"\n"+"It should not be Empty");
        return false;
    }
    else{

        pattern1 = new RegExp('^[0-9]*$')
        if (!pattern1.test(number) || number.length!=10){
            alert("Invalid Phone Number"+"\n"+"only number are allowed"+"\n"+"Length should 10");
            return false;
        }
        if (Number.isInteger(Number(name[0]))) {
            alert("Name cannot start with a number");
            return false;
        }
        var emailtest = /^\S+@\S+\.\S+$/i;
        if(!(emailtest.test(email))){
            alert("Please check your email and enter again.");
            return false;
        }
    alert("All the details are correct");

    }
}
function game()
{
    var st1 = Math.floor(Math.random() * 1000);
    var st2 = Math.floor(Math.random() * 1000);
    document.getElementById('gam1').value=st1;
    document.getElementById('gam2').value=st2;
    
    st1= st1 % 3;
    st2 = st2 % 3;
    if ((st1 == 0 && st2 === 0) || (st1 == 1 && st2 == 1)||(st1 == 2 && st2 == 2)) 
    {
        document.getElementById("win").value = "It's Tie";
        return false;
    }
    if ((st1 == 0 && st2 == 1) || (st1 == 1 && st2 == 0)) {
        document.getElementById("win").value = "Human Wins";
        return false;
    }
    if ((st1 == 0 && st2 == 2) || (st1 == 2 && st2 == 0)) {
        document.getElementById("win").value= "Nuclear Bomb Wins";
        return false;
    }
    if ((a == 1 && b == 2) || (a == 2 && b == 1)) {
        document.getElementById("winner").value = "Cockroach wins";
        return false;
    }
}
function get(num) 
{
    document.getElementById("result").value += num;
    return 0;
}

function clr() 
{
    document.getElementById("result").value = '';
    return 0;
}

function dot() 
{
    document.getElementById("result").value += '.';
    return 0;
}

function Sqrt() 
{
    let result = document.getElementById("result").value;
    return document.getElementById("result").value = Math.sqrt(result).toFixed(3);

}

function absol() 
{
    let result = document.getElementById("result").value;
    return document.getElementById("result").value = Math.abs(result);
}

function percentage() 
{
    document.getElementById("result").value += '*100/';
    return 0;
}

function equalto() 
{
    let e = document.getElementById("result").value;
    let s= eval(e);
    return document.getElementById("result").value = s;
}