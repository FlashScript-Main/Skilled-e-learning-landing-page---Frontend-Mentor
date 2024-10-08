import { heroDesktopImage, heroTabletImage, logoDark } from "../assets"
import GetStartedButton from "./GetStartedButton"

const Header = () => {

    return (
        <header className={`w-full py-6  |  |  | `}>
            <div className={`main-container relative |  | flex justify-between items-center | `}>
                <a href="#" className={` |  |  | bounce-in`}>
                    <img 
                        src={logoDark} 
                        alt="Skilled Logo" 
                        className={`w-24 md:w-28 |  |  | `}
                    />
                </a>

                <GetStartedButton 
                    textColor="text-neutral-white font-semibold"
                    bgColor="bg-primary-yankees-blue"
                    px="px-6"
                    py="py-3"
                    onHover="hover:bg-primary-dark-blue-gray"
                    animation="bounce-in"
                />  
        
                <img 
                    src={heroTabletImage} 
                    alt="" 
                    className={`w-[40rem] max-md:hidden md:block lg:hidden absolute top-[-6.8rem] right-[-19.5rem] |  |  | fade-in-right`}
                />     

                <img 
                    src={heroDesktopImage} 
                    alt="" 
                    className={`w-[50rem] max-lg:hidden lg:block absolute top-[-6rem] right-[-23rem] |  |  | fade-in-right`}
                />             
            </div>
        </header>
    )

}

export default Header