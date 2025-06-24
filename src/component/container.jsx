import { useEffect, useState } from "react";
import Input_box from "./input_box";
import Value_box from "./value_box";
function Container(){

    const [number,setNumber]=useState("");
    console.log(number);

    var sum=0;
    function enterNumber(value){
        if(value=="="){
            answer();
        }else if(value=="C"){
            setNumber("")
        }else if(value=="<"){
            setNumber(number.slice(0,number.length-1));   
        }else{
            setNumber(number+`${value}`);
        }
    }
    function answer(){
        if(number.includes("+")){
            var values=number.split("+")
            setNumber(parseFloat(values[0])+parseFloat(values[1]).toFixed(4));
        }else if(number.includes("-")){
            var values=number.split("-")
            setNumber(parseFloat(values[0])-parseFloat(values[1]).toFixed(4));
        }else if(number.includes("*")){
            var values=number.split("*")
            setNumber(parseFloat(values[0])*parseFloat(values[1]).toFixed(4));
        }else if(number.includes("/")){
            var values=number.split("/")
            setNumber(parseFloat(values[0])/parseFloat(values[1]).toFixed(4));
        }
    }
    return(
        <>
            <div className="container">
                <Value_box number={number}/>
                <Input_box  enterNumber={enterNumber}/>
            </div>
        </>
    )
}
export default Container;