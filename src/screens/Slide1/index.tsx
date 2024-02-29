
import { ImageBackground, Text, Image } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import{ style } from "./style"
import { ButtonSlide } from "../../components/ButtonSlide";

export function Slide1() {
    const slide = require('../../assets/BackgroundImage.png')
    const logo = require('../../assets/coelhologo.png')
    return (
        <ImageBackground source={slide} style={styleContainer.conainer}>
            
            <Text>Coelho</Text>
            <View style=(styles.fundo) >
                <ButtonSlide/>
                <ButtonSlide/>
                <ButtonSlide/>
            </View>
        </ImageBackground>
    )
}