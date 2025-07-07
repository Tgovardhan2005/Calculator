import { useEffect, useState } from "react";
import Input_box from "./input_box";
import Value_box from "./value_box";
function Container(){

    const [number,setNumber]=useState("");

    function enterNumber(value){
        if (number === "Error" || number === "Infinity") {
            if (value === "C") {
                setNumber("");
                return;
            } else if (value === "<") {
                setNumber("");
                return;
            } else {
                setNumber(value.toString());
                return;
            }
        }
        
        if(value=="="){
            answer();
        }else if(value=="C"){
            setNumber("")
        }else if(value=="<"){
            setNumber(number.slice(0,number.length-1));   
        }else{
            if(value=="+" || value=="-" || value=="*" || value=="/"){
                if(number!="" && number.charAt(number.length-1)!="+" && number.charAt(number.length-1)!="-"  && number.charAt(number.length-1)!="*"  && number.charAt(number.length-1)!="/" )
                setNumber(number+`${value}`);
            }else{
                setNumber(number+`${value}`);
            }
            
        }
    }
    function answer(){
        if(number === "" || "+-*/".includes(number.charAt(number.length - 1))){
            return;
        }
        try{
            const result = eval(number);
            // Check if result is a whole number
            if (Number.isInteger(result)) {
                setNumber(result.toString());
            } else {
                setNumber(result.toFixed(4));
            }
        }catch{
            setNumber("Error")
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