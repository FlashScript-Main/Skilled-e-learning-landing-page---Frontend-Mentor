import { getStartedButton } from "../constants"

type GetStartedButtonPropType = {
    textColor?: string;
    bgColor?: string;
    px: string;
    py: string;
    onHover?: string;
}

const GetStartedButton = ({ textColor, bgColor, px, py, onHover }: GetStartedButtonPropType) => (

    <button className={`${px} ${py} z-10 | ${textColor} text-base ${bgColor} ${onHover} | rounded-full | transition-colors`}>
        {getStartedButton}
    </button>

)

export default GetStartedButton