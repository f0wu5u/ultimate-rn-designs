import React, { PureComponent } from 'react';
import { View, Text, Image, Dimensions } from "react-native";

export default class EventItem extends PureComponent {

    render() {
        const { title, dayMonth, fullDate, image } = this.props.event,
        cardStyle = this.props.isEvenView  ? {...style.card,marginHorizontal:4} : style.card;

        return (
            <View style={cardStyle}>
                <Image
                    style={style.image}
                    resizeMode="cover"
                    source={image} />

                <View style={style.dateCard}>
                    <Text style={style.dateMonth}>{dayMonth.month}</Text>
                    <Text style={{ fontWeight: 'bold' }}>{dayMonth.day}</Text>
                </View>

                <View style={{ padding: 12 }}>
                    <Text
                        numberOfLines={2}
                        style={style.title}>{title}</Text>
                    <Text style={style.dateTime}>{fullDate}</Text>
                </View >
            </View >
        )
    }
}

const { width } = Dimensions.get('window'),
    cardWidth = (width - 45) / 2,
    style = {
        card: {
            width: cardWidth,
            maxHeight:cardWidth - 15
        },
        image: {
            width: cardWidth,
            height: cardWidth / 2,
            borderRadius:5,
        },
        dateCard: {
            position: 'absolute',
            backgroundColor: '#ffffff',
            elevation:2,
            alignItems: 'center',
            padding: 4,
            justifyContent: 'center',
            borderRadius:2
        },
        dateMonth: {
            fontSize: 12,
            color: '#685BA9',
            fontWeight: 'bold'
        },
        title: {
            fontWeight: 'bold',
            marginBottom: 5,
            textTransform: 'capitalize'
        },
        dateTime: {
            fontSize: 10,
            color: 'gray',
            fontWeight: 'bold'

        }
    }