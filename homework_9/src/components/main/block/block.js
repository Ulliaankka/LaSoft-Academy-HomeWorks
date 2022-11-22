import React from "react";
import TextTitle from './text-title/text-title'
import TextMain from "./text-main/text-main";
import TextListTitle from "./text-list-title/text-list-title"; 
import TextList from "./text-list/text-list";
import TopPhoto from "./top-photo/top-photo";
import BtnApply from "./btn-apply/btn-apply";

const Block = () => {
    return (    
                <div className="block">
                    <div className="decription">
                        <TextTitle />
                        <TextMain />
                        <TextListTitle />
                        <TextList />
                        <BtnApply />
                    </div>
                        <TopPhoto />
                </div>
    );
};

export default Block;