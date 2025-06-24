import Button from "./buttons";

function Input_box(props){
    const {enterNumber}=props;
    return(
        <div className="input_box">
            <Button enterNumber={enterNumber}  value={'+'}/>
            <Button enterNumber={enterNumber}  value={9}/>
            <Button enterNumber={enterNumber}  value={8}/>
            <Button enterNumber={enterNumber}  value={7}/>
            <Button enterNumber={enterNumber}  value={'-'}/>
            <Button enterNumber={enterNumber}  value={6}/>
            <Button enterNumber={enterNumber}  value={5}/>
            <Button enterNumber={enterNumber}  value={4}/>
            <Button enterNumber={enterNumber}  value={'*'}/>
            <Button enterNumber={enterNumber}  value={3}/>
            <Button enterNumber={enterNumber}  value={2}/>
            <Button enterNumber={enterNumber}  value={1}/>
            <Button enterNumber={enterNumber}  value={'/'}/>
            <Button enterNumber={enterNumber}  value={'.'}/>
            <Button enterNumber={enterNumber}  value={0}/>
            <Button enterNumber={enterNumber}  value={'='}/>
            <Button enterNumber={enterNumber}  value={'C'}/>
            <Button enterNumber={enterNumber}  value={'<'}/>
        </div>
    )
}
export default Input_box;