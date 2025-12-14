import { useState } from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

function Button(props: ButtonProps) {
    const [buttonClicked, setButtonClicked] = useState(false);

    const getButtonStyle = () => {
        if (!buttonClicked){
            return {backgroundcolor: "#555151ff", color: 'black'};
        } else {
            return {backgroundcolor: "#4bb0e3ff", color: 'black'};
        }
    }
    return(
        <button onClick = {() => {
            props.onClick;
            setButtonClicked(true);
        }} style={getButtonStyle()}> {props.label}</button>
    )
}

export default Button;