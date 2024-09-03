import { featureCourse, featureInfo } from "../constants"
import GetStartedButton from "./GetStartedButton"

const Features = () => {

    return (
        <section className={`mx-auto max-w-[94%] md:max-w-[44.5rem] mb-[4.5rem] md:mt-[11.5rem] |  | grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-2 md:gap-y-14 lg:grid-cols-3 | `}>
            <div className={`pb-8 pt-6 md:pt-14 px-8 | gradient-magenta-orange-2 |  | rounded-xl`}>
                <h2 className={` | text-2xl text-neutral-white font-bold  |  | `}>
                    {featureCourse}
                </h2>
            </div>

            {
                featureInfo.map((f) => (
                    <div 
                        key={f.id}
                        className={`h-[14.8rem] px-6 md:px-8 relative | bg-neutral-white |  | rounded-xl shadow-lg shadow-primary-dark-blue-gray/10`}
                    >
                        <img 
                            src={f.featureIcon} 
                            alt={`${f.featureTitle} Icon`} 
                            className={`absolute top-[-1.8rem] left-[1.7rem] md:left-[2rem] |  |  | `}
                        />

                        <h4 className={`mt-11 mb-3 | text-primary-yankees-blue text-xl font-black |  | `}>
                            {f.featureTitle}
                        </h4>

                        <p className={`max-h-[5rem] | text-base text-primary-silver font-medium |  | `}>
                            {f.featureDescription}
                        </p>

                        <GetStartedButton 
                            textColor="text-primary-pink font-extrabold"
                            onHover="hover:text-primary-carnation-pink"
                            px=""
                            py="pt-6"
                        />
                    </div>
                ))
            }
        </section>
    )

}

export default Features