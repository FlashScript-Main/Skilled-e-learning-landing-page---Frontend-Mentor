import { logoLight } from "../assets"
import GetStartedButton from "./GetStartedButton"

const Footer = () => {

    return (
        <footer className={`w-full py-8 | bg-primary-yankees-blue |  | `}>
            <div className={`main-container |  | flex justify-between items-center | `}>
                <a href="#">
                    <img 
                        src={logoLight} 
                        alt="Skilled Logo" 
                        className={`w-24 md:w-28 |  |  | `}
                    />
                </a>

                <GetStartedButton 
                    textColor="text-neutral-white font-semibold"
                    bgColor="gradient-magenta-blue"
                    px="px-6"
                    py="py-3"
                />      
            </div>
        </footer>
    )

}

export default Footer