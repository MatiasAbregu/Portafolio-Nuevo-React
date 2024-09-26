import React from "react";

export const SkillIcon = ({img, children, nivel}) => {
    return(
        <div className={`IconosHab ${nivel}`}>
            <img src={img} alt={children} />
            <hr />
            <p>{children}</p>
        </div>
    );
}