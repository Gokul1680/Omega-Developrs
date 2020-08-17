var usrInput;
var unitIn;
var unitOut;
var result;



function func(){
   
    usrInput=Number(document.getElementById("user-value").value);
    unitIn=document.getElementById("input-unit").value;
    unitOut=document.getElementById("output-unit").value;

    if(unitIn=="Celsius" && unitOut=="Fahrenheit")
    {
        result=usrInput*1.8+32;
    }
    else if(unitIn=="Celsius" && unitOut=="Kelvin")
    {
        result=usrInput+273.15;
    }
    else if(unitIn=="Fahrenheit" && unitOut=="Celsius")
    {
        result=(usrInput-32)*(5/9);
    }
    else if(unitIn=="Fahrenheit" && unitOut=="Kelvin")
    {
        result=((usrInput-32)*(5/9))+273.15;
    }
    else if(unitIn=="Kelvin" && unitOut=="Celsius")
    {
        result=usrInput-273.15;
    }
    else if(unitIn=="Kelvin" && unitOut=="Fahrenheit")
    {
        result=((usrInput-273.15)*1.8)+32;
    }
    else if(unitIn==unitOut)
    {
        result="Input and Output can't be same!"
    }
    else
    {
        result="Enter the valid data!"
    }

    document.getElementById("result").innerHTML= result;
   
}