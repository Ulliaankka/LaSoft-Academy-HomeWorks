import React from "react";
import BottomPhoto from "./bottom-photo/bottom-photo";
import BtnSubcribe from "./btn-subcribe/btn-subcribe";
import TextP from "./text-p/text-p";
import TextQuestion from "./text-question/text-question";
import './reverse-block.css';

const ReverseBlock = () => {
    return (    
        <div className="block reverse-block">
                <BottomPhoto />
            <div className="decription">
                <TextQuestion />
                <TextP />
                <BtnSubcribe />
            </div>      
        </div>
    );
};

export default ReverseBlock;