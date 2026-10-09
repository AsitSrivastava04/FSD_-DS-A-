import React , {useState} from 'react';
import catImage from './image.png';

const Cat = () => {
    const [height,setHeight]=useState(1000);
    const [width,setWidth]=useState(1000);
    function rowi(){
        setHeight(height+10)
    }
    function rowd(){
        if(height<=0){
            alert("Counter cannot be less than 0")
            return
        }
        setHeight(height-10)
    }
    function coli(){
        setWidth(width+10)
    }
    function cold(){
        if(width<=0){
            alert("Counter cannot be less than 0")
            return
        }
        setWidth(width-10)
    }
    return (
        <div>
            <h3>Cat App</h3>
            <br/>
            <span>
                <img style={{ width: width, height: height }} src={catImage} alt="image"/>
            </span>
            <button onClick={rowi}>row+</button>
            <button onClick={rowd}>row-</button>
            <button onClick={coli}>col+</button>
            <button onClick={cold}>col-</button>
        </div>
    )
}

export default Cat