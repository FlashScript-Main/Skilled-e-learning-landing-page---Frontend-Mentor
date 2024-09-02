import { logoDark } from "../assets"
import GetStartedButton from "./GetStartedButton"

const Header = () => {

    return (
        <header className={`w-full py-6 |  |  | `}>
            <div className={`w-[90%] lg:max-w-[65rem] mx-auto |  | flex justify-between items-center | `}>
                <a href="#">
                    <img 
                        src={logoDark} 
                        alt="Skilled Logo" 
                        className={`w-24 |  |  | `}
                    />
                </a>

                <GetStartedButton 
                    bgColor="bg-primary-yankees-blue"
                    px="px-6"
                    py="py-3"
                    onHover="hover:bg-primary-dark-blue-gray"
                />                
            </div>
        </header>
    )

}

export default Header