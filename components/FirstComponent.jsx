import React from "react";
import SecondComponent from "./SecondComponent";

const FirstComponent = () => {

const course_name = 'Fullstack'

return (
    <> 
    <h1>A React Component</h1>
    <SecondComponent course='Mern' name='kalai' Days={30} style={course_name}>A child value</SecondComponent>
    <SecondComponent course='python' name='Hari' Days={20} style={course_name}>A children value</SecondComponent>

    </>
)
}

export default FirstComponent