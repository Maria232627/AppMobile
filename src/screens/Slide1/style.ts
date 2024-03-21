import { StyleSheet } from "react-native"
import { colors } from "../../styles/globalstyle"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue'
    },
    flex: {
        display:'flex',
        alignItems: 'center',
        backgroundColor:'red'
    },
    text: {
        fontSize: 40,
        fontFamily: 'JacquesFrancoisShadow_400Regular'
    },


    botao: {
        justifyContent: 'center',
        alignItems:'flex-end',
        flexDirection: 'row',
        padding: 20,

    },
    buttonSpace: {
        paddingHorizontal: 15,
    }
    
})
