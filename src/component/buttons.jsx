function Button(props){
    const {enterNumber,value}=props;
    const isOperator = ["+", "-", "*", "/", "="].includes(value);
    return(
        <>
            <div onClick={()=>enterNumber(value)}  className={`circle${isOperator ? " operator" : ""}`}>
                {props.value}
            </div>
        </>
    )
}
export default Button;