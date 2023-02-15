import { StyleSheet, Dimensions } from "react-native";

const {height, weight} = Dimensions.get('window')
const Styles = StyleSheet.create ({
   container :{
        flex :1,
        justifyContent:"flex-end"

    },
    buttonLogin:{
        backgroundColor:"#0c2461",
        margin:10,
        alignItems:'center',
        borderWidth:1,
        borderRadius:30,
        borderColor:'white'

    },
    button:{
        marginLeft:100,
        flex:1,
        flexDirection:"row",
        

    },
    txtbtnrgt:{
        color:"#2d3436",
        fontSize:18
    },
    txtRegister:{
        color:"#0984e3",
        fontSize:18

    },
    buttonText:{
        color:"#ffffff",
        padding:13,
        fontSize:20,
        fontWeight:"bold",
        letterSpacing:0.5
        

    },
    bottomContainer:{
        justifyContent : "center",
        height: height/ 3,
    },
    textInput:{
        borderWidth:1,
        marginHorizontal:20,
        marginVertical: 15,
        borderRadius: 30,
        paddingLeft:20
    },
    formBottom:{
        backgroundColor:"#0c2461",
        margin:10,
        alignItems:'center',
        borderWidth:1,
        borderRadius:30,
        borderColor:'white',
       
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:4
        },
        shadowOpacity:0.3,
        shadowRadius:4,
        elevation:5
    },
    formInputContainer:{
        marginBottom:70
    },
    closeTxt:{
        height:40,
        width: 40,
        justifyContent:'center',
        alignSelf:'center',
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:5
        },
        shadowOpacity:0.37,
        shadowRadius:6.27,
        elevation:1,
        backgroundColor:'#0c2461',
        alignItems:"center",
        borderRadius:20,
        
    },
    x:{
        color:"white"
    }
});
export default Styles;