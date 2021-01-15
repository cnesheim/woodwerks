import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderItem({item}) {
    if (item) {
        return (
            <Card 
                featuredTitle={item.name}
                image={require('./images/blackHorseBench.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function ItemInfo(props) {
    return <RenderItem item={props.item} />;
}

export default ItemInfo;