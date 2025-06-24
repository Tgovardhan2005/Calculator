function Button(props){
    const {enterNumber,value}=props;
    return(
        <>
            <div onClick={()=>enterNumber(value)}  className="circle">
                {props.value}
            </div>
        </>
    )
}
export default Button;