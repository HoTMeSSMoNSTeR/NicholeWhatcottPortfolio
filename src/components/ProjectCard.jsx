import React from "react";
import FEProjectArray from "./FEProjectArray";
import 'bootstrap/dist/css/bootstrap.css';


export default  function ProjectCard(props){
    return(
        <>
        <div className="parent">
            <div className="relative">
            <img className="image1" src={props.previewImg1} />
            <img className="image2" src={props.previewImg2} />
            <img className="image3" src={props.previewImg3} />
            </div>
            <div className="img-caption">   
                <p className="project-name">{props.name}</p>
                <p className="project-repo">Github: {props.projectURL}</p>
            </div>
        </div>
        </>
    )
}