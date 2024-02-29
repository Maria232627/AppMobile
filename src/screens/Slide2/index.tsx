import { ImageBackground } from "react-native";
import { styleContainer } from "../../styles/globalstyle";

export function Slide2() {
    const slide = require('../../assets/BackgroundImage2.png')
    return (
        <ImageBackground source={slide} style={styleContainer.conainer}>

        </ImageBackground>
    )
}