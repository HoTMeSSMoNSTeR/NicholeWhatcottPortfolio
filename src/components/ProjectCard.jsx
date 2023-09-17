import React from "react";
import FEProjectArray from "./FEProjectArray";
import 'bootstrap/dist/css/bootstrap.css';


export default  function ProjectCard(props){
    return(
        <>
        <div className="parent">
            <div className="relative">
                <a target={"_blank"}  href={props.activePageLink}>
                    <img className="image2" src={props.previewImg2} />
                    <img className="image1" src={props.previewImg1} />
                    {/* <img className="image3" src={props.previewImg3} /> */}
                </a>
            </div>
            <div className="img-caption">   
                <p className="project-name"><b>{props.name}</b></p>
                    <p className="git-link">Github: <a className="project-repo" target={"_blank"} href={props.projectURL}>{props.name}</a></p>
                    <p className="project-description">{props.description}</p>
            </div>
        </div>
        </>
    )
}