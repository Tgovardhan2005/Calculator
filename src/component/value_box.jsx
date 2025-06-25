function Value_box(props){
    const valueStr = String(props.number);
    const displayValue = valueStr === "Error" ? "Error" : valueStr.slice(0,12);
    const isError = valueStr === "Error";
    return(
        <div className={`value_box${isError ? " error" : ""}`}>
            <h2 className="output_text">{displayValue}</h2>
        </div>
    )
}
export default Value_box;