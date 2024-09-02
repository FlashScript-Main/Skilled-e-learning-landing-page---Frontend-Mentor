import { getStartedButton } from "../constants"

type GetStartedButtonPropType = {
    bgColor: string;
    px: string;
    py: string;
    onHover: string;
}

const GetStartedButton = ({ bgColor, px, py, onHover }: GetStartedButtonPropType) => (

    <button className={`${px} ${py} | text-neutral-white text-base font-semibold ${bgColor} ${onHover} | rounded-full | transition-colors`}>
        {getStartedButton}
    </button>

)

export default GetStartedButton