import React from "react";
import {View,Text,Image, StyleSheet} from "react-native"
import styles from "./Product.style"

const Product=({products}) =>{
    
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:products.imgURL}}/>
            <View style={styles.innerContainer}>
            <Text style={styles.title}> {products.title}</Text>
            <Text style={styles.price}>{products.price}</Text>
            <Text style={styles.inStock} >{products.inStock ? '' : 'STOKTA YOK'} </Text>
            </View>
        </View>
    )
}
export default Product;