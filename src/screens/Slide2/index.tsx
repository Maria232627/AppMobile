import { ImageBackground } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { IPagina } from "../../../App";

export function Slide2({ setPageI }: IPagina) {
    const slide = require('../../assets/BackgroundImage2.png')
    const logo = require('../../assets/pandalogo.png')

    return (
        <ImageBackground source={slide} style={styleContainer.container}>

        </ImageBackground>
    )
}