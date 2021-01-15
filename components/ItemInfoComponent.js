import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { ITEMS } from '../shared/items';

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

class ItemInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: ITEMS
        };
    }

    static navigationOptions = {
        title: 'Item Information'
    }

    render() {
        const itemId = this.props.navigation.getParam('itemId');
        const item = this.state.items.filter(item => item.id === itemId)[0];
        return <RenderItem item={item} />;
    }
}

export default ItemInfo;