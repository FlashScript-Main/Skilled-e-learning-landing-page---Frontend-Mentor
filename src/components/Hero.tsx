import { heroMobileImage } from "../assets"
import { heroinfo } from "../constants"
import GetStartedButton from "./GetStartedButton"

const Hero = () => {

    return (
        <main className={`main-container py-6 md:mt-10 relative |  | max-md:flex max-md:flex-col max-md:justify-start max-md:items-center max-md:gap-6 | `}>
            {
                heroinfo.map((h) => (
                    <div 
                        key={h.id}
                    >
                        <h1 className={`min-w-[21rem] max-w-[90%] md:max-w-[20rem] mb-6 | text-[2.5rem] leading-[3rem] text-primary-yankees-blue font-extrabold |  | `}>
                            {h.heroTitle}
                        </h1>

                        <p className={`min-w-[20rem] max-w-[90%] md:max-w-[24rem] mb-5 md:mb-6 | text-base text-primary-silver font-medium |  | `}>
                            {h.heroDescription}
                        </p>

                        <GetStartedButton 
                            bgColor="gradient-magenta-orange"
                            px="px-10"
                            py="py-4"
                        />
                    </div>
                ))
            }

            <img 
                src={heroMobileImage} 
                alt="" 
                className={`max-w-[200%] md:hidden |  |  | `}
            />
        </main>
    )

}

export default Hero