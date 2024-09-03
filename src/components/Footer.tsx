import { logoLight } from "../assets"
import GetStartedButton from "./GetStartedButton"
import { useInView } from "react-intersection-observer"

const Footer = () => {

    const { 
        ref: footerRef, 
        inView: footerVisiable 
    } = useInView(
        { 
            triggerOnce: true, 
            threshold: 0.2
        }
    )

    return (
        <footer 
            className={`w-full py-8 | bg-primary-yankees-blue |  | `}
            ref={footerRef}
        >
            <div className={`main-container |  | flex justify-between items-center | `}>
                <a href="#">
                    <img 
                        src={logoLight} 
                        alt="Skilled Logo" 
                        className={`w-24 md:w-28 |  |  | ${footerVisiable && "fade-in-left"}`}
                    />
                </a>

                <GetStartedButton 
                    textColor="text-neutral-white font-semibold"
                    bgColor="gradient-magenta-blue"
                    px="px-6"
                    py="py-3"
                    animation={`${footerVisiable && "fade-in-right"}`}
                />      
            </div>
        </footer>
    )

}

export default Footer