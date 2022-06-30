import React from 'react';
import classNames from 'classname'; // className 💚
import "./Button.scss";

const Buttons = ({children, size, color, outline, font, width, fullWidth}) => { // 버튼 size
    return (
        <div>
            {/* className 설치 안했을 때 */}
            {/* <button className={`button ${size}`}>{children}</button> */}

            <button className={classNames('button', size, color, width, {fullWidth, outline})}>{children}</button>
        </div>
    );
};

export default Buttons;