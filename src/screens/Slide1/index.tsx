
import { ImageBackground, Text, Image, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import{ styles } from "./style"
import { ButtonSlide } from "../../components/ButtonSlide";

export function Slide1() {
    const slide = require('../../assets/BackgroundImage.png')
    const logo = require('../../assets/coelhologo.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <Image source={logo} style={styles.logo}></Image>
                <Text style={styles.text}>Coelho</Text>
                <View style={styles.botao} >
                    <View>
                        <ButtonSlide/>
                    </View>
                    <View>
                        <ButtonSlide/>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}