import Link from "next/link";
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';

const socials =[
    {icon:<FaGithub/>, path:'https://github.com/DuaRuben'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/ruben-dua/'}
]

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item,index)=>{
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
            )
            })}
        </div>
    );
};

export default Socials;