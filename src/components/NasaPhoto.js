import React from "react";
import styled from "styled-components";

const ExP = styled.p`
    margin: 0 10%;
    color: purple;
    font-size: 30px;
`;

function NasaPhoto(props) {
    return (
        <div className='nasa-photo-wrapper'>
            <h3>{props.photo.title}</h3>
          <p>{props.photo.date}</p>
          <iframe src={props.photo.url}/>
          <ExP>{props.photo.explanation}</ExP>
        </div>
    )
}

export default NasaPhoto;