import React, {
    Component
} from 'react'
import {
    Linking,
    TouchableOpacity,
    ImageBackground,
    View,
    Text,
    Button
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import style from './Style'

function openLink(url) {
    if (Linking.canOpenURL(url)) {
        return Linking.openURL(url)
    }
}

function HeadLinks({links}) {
    if (links != undefined) {
        return links.map((props, index) => {
            return(
                <View key={index}>
                    <TouchableOpacity onPress={() => openLink(props.link)}>
                        <Text style={ { color: '#fff', marginLeft: 4, padding: 2, borderRadius: 2, backgroundColor: "#00ccff70", borderWidth: 1, borderColor: "#777" }}>{props.name}</Text>
                    </TouchableOpacity>
                </View>
            )

        })
    } else {
        return null
    }
}

export default class Dynacard extends Component {
    constructor(props) {
        super(props)
    }

    render() { 
        return (
            <View style={style.cardContainer}>
	            <ImageBackground source={this.props.image} resizeMode="cover" style={ { width: 'auto', height: 'auto' }}>
	                <Text style={style.title}>{this.props.title}</Text>
                    <View style={ { padding: 10, flexDirection: 'row' }}>
                        <HeadLinks links={this.props.headLinks} />
                    </View>
	            </ImageBackground>
                <View style={style.descriptionContainer}>
                    <Text style={style.lansUsed}><Ionicons name="code" color="#777" size={20} /> {this.props.lansUsed}</Text>
                    <Text style={style.description}>{this.props.description}</Text>
                    <View style={{marginVertical: 15}}>
                        <Button onPress={() => openLink(this.props.btnGo.link)} title={this.props.btnGo.title} />
                    </View>
                </View>
	        </View>
        )
    }
}
