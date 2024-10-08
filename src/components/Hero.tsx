import { heroMobileImage } from "../assets"
import { heroinfo } from "../constants"
import GetStartedButton from "./GetStartedButton"

const Hero = () => {

    return (
        <main className={`main-container pt-6 max-md:-mb-4 md:mt-10 lg:mt-14 relative |  | max-md:flex max-md:flex-col max-md:justify-start max-md:items-center max-md:gap-6 | `}>
            {
                heroinfo.map((h) => (
                    <div 
                        key={h.id}
                    >
                        <h1 className={`min-w-[21rem] max-w-[90%] md:max-w-[20rem] lg:max-w-[25rem] mb-6 | text-[2.5rem] lg:text-[3rem] leading-[3rem] lg:leading-[3.5rem] text-primary-yankees-blue font-extrabold |  | fade-in-left fade-in-left-1`}>
                            {h.heroTitle}
                        </h1>

                        <p className={`min-w-[20rem] max-w-[90%] md:max-w-[24rem] mb-5 md:mb-6 lg:mb-8 | text-base text-primary-silver font-medium |  | fade-in-left fade-in-left-2`}>
                            {h.heroDescription}
                        </p>

                        <GetStartedButton 
                            textColor="text-neutral-white font-semibold"
                            bgColor="gradient-magenta-orange"
                            px="px-10"
                            py="py-4"
                            animation="fadeInUp"
                        />
                    </div>
                ))
            }

            <img 
                src={heroMobileImage} 
                alt="" 
                className={`max-w-[200%] md:hidden |  |  | fade-in-right`}
            />
        </main>
    )

}

export default Hero