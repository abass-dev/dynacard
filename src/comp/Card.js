import React, {Component} from 'react'
import {Linking, TouchableOpacity, ImageBackground, Dimensions, StyleSheet, View, Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

function openLink(url) {
    if(Linking.canOpenURL(url)) {
        return Linking.openURL(url)
    }
}

function HeadLinks({links}) {
    if (links != undefined) {
        return links.map((props, index) => {
                return(
                <View key={index}>
                    <TouchableOpacity onPress={() => openLink(props.link)}>
                        <Text style={{color:'#fff', marginLeft: 4, padding:2, borderRadius: 2, backgroundColor:"#00ccff70", borderWidth: 1, borderColor: "#777"}}>{props.name}</Text>
                    </TouchableOpacity>
                </View>
            )
        
        })
    } else {
        return null
    }
}

export default class Card extends Component {
	constructor(props) {
		super(props)

	}

	
	
	render() {
	  return (
	   <View style={style.cardContainer}>
	   
	            <ImageBackground source={this.props.image} resizeMode="cover" style={{width:'auto', height: 'auto'}}>
	                <Text style={style.title}>{this.props.title}</Text>
                    <View style={{padding: 10, flexDirection: 'row'}}>
                        <HeadLinks links={this.props.headLinks} />
                    </View>
	            </ImageBackground>
                <View style={style.descriptionContainer}>
                    <Text style={style.lansUsed}><Ionicons name="code" color="#777" size={20}/> {this.props.lansUsed}</Text>
                    <Text style={style.description}>{this.props.description}</Text>
                </View>
	   </View>
	    )
	}
}

const style = StyleSheet.create({
    cardContainer: {
        //alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: "#777",
        padding: 3,
        marginHorizontal: 20,
        marginBottom: 20
    },
    title: {
        color: '#fff',
        fontSize: 25,
        padding: 10,
        fontWeight: 'bold'
    },
    description: {
        color: '#fff',
        fontSize: 17,
        fontFamily: 'monospace'
    },
    descriptionContainer: {
        padding: 7
    },
    lansUsed: {
        color: '#777',
        fontSize: 17,
        marginBottom: 5
    }
})