import React from "react";
import styled from "styled-components";

const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: 1px solid green;
    border-radius: 50%;
    color: darkgreen;
    background-color: lemonchiffon;
    `;

function PageButton(props){
    return (
        <div className = 'button-wrapper'>
            <a href = {props.buttonLink} target = "_blank">
                <Button className = 'mystery-button'>{props.buttonText}</Button>
            </a>
        </div>
    )
}


export default PageButton


