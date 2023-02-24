import { StyleSheet ,Dimensions} from "react-native";
export default StyleSheet.create({
    container:{
        backgroundColor:"#eceff1",
        margin:15,
        borderRadius:15,
        flex:1
    },
    image:{
        height:Dimensions.get("window").height/6,
        
        borderRadius:10,
        margin:10,
            
    },
    title:{
        fontSize:22,
        fontWeight:"bold",
        paddingLeft:10
        
    },
    price:{
        fontSize:20,
        color:"gray",
        fontWeight:"bold",
        paddingTop:10,
        paddingLeft:10
    },
    inStock:{
        fontSize:15,
        fontWeight:"bold",
        color:"red",
        margin:10
        
    }

})