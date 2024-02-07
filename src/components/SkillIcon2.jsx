import React from "react";

export const SkillIcon2 = ({img, nivel}) => {
    return(
        <div className={"IconosHerr " + nivel}>
            <img src={img} alt="" />
        </div>
    );
}