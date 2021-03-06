import React from 'react';
import classNames from 'classname'; // className π
import "./Button.scss";

const Buttons = ({children, size, color, outline, font, width, fullWidth}) => { // λ²νΌ size
    return (
        <div>
            {/* className μ€μΉ μνμ λ */}
            {/* <button className={`button ${size}`}>{children}</button> */}

            <button className={classNames('button', size, color, width, {fullWidth, outline})}>{children}</button>
        </div>
    );
};

export default Buttons;