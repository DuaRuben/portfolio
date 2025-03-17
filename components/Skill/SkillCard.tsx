import React from "react";

interface SkillCardProps {
    image: string;
    text: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ image, text }) => {
    return (
        <div style={{borderRadius:'20px'}} className="w-40 h-42 sm:w-40 sm:h-44 flex flex-col items-center justify-center
        shadow-lg rounded-lg border border-accent-default p-4">
            <div className="w-24 h-24 sm:w-20 sm:h-20 flex items-center justify-center">
                <img src={image} alt={text} className="w-auto h-auto max-w-full max-h-full object-contain" />
            </div>
            <p className="mt-2 text-sm sm:text-base font-semibold text-white/70">{text}</p>
        </div>
    );
};

export default SkillCard;
