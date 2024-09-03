import { animationIcon, businessIcon, cryptoIcon, designIcon, photographyIcon } from "../assets";
import { FeatureInfoType, HeroInfoType, StringType } from "../types";

const getStartedButton: StringType = "Get Started";
const heroinfo: HeroInfoType[] = [
    {
        id: 1,
        heroTitle: "Maximize skill, minimize budget",
        heroDescription: "Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.",
        heroButton: getStartedButton
    }
];
const featureCourse: StringType = "Check out our most popular courses!";
const featureInfo: FeatureInfoType[] = [
    {
        id: 1, 
        featureIcon: animationIcon,
        featureTitle: "Animation",
        featureDescription: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
        featureButton: getStartedButton
    },
    {
        id: 2, 
        featureIcon: designIcon,
        featureTitle: "Design",
        featureDescription: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
        featureButton: getStartedButton
    },
    {
        id: 3, 
        featureIcon: photographyIcon,
        featureTitle: "Photography",
        featureDescription: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
        featureButton: getStartedButton
    },
    {
        id: 4, 
        featureIcon: cryptoIcon,
        featureTitle: "Crypto",
        featureDescription: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
        featureButton: getStartedButton
    },
    {
        id: 5, 
        featureIcon: businessIcon,
        featureTitle: "Business",
        featureDescription: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
        featureButton: getStartedButton
    }
];

export {
    getStartedButton,
    heroinfo,
    featureCourse,
    featureInfo
}