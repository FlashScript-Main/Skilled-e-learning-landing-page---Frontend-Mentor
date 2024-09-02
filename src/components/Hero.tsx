import { heroMobileImage } from "../assets"
import { heroinfo } from "../constants"
import GetStartedButton from "./GetStartedButton"

const Hero = () => {

    return (
        <main className={`py-6 main-container |  | max-md:flex max-md:flex-col max-md:justify-start max-md:items-center max-md:gap-6 | `}>
            {
                heroinfo.map((h) => (
                    <div 
                        key={h.id}
                    >
                        <h1 className={`min-w-[21rem] max-w-[90%] mb-6 | text-[2.5rem] leading-[3rem] text-primary-yankees-blue font-extrabold |  | `}>
                            {h.heroTitle}
                        </h1>

                        <p className={`min-w-[20rem] max-w-[90%] mb-5 | text-base text-primary-silver font-medium |  | `}>
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
                className={`max-w-[200%] |  |  | `}
            />
        </main>
    )

}

export default Hero