import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { ITEMS } from '../shared/items';

function RenderItem(props) {
    
    const {item} = props;
    
    if (item) {
        return (
            <Card 
                featuredTitle={item.name}
                image={require('./images/blackHorseBench.jpg')}>
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='tan'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        );
    }
    return <View />;
}

class ItemInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: ITEMS,
            favorite: false
        };
    }

    markFavorite() {
        this.setState({favorite: true});
    }

    static navigationOptions = {
        title: 'Item Information'
    }

    render() {
        const itemId = this.props.navigation.getParam('itemId');
        const item = this.state.items.filter(item => item.id === itemId)[0];
        return <RenderItem item={item} 
                    favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()}
        />;
    }
}

export default ItemInfo;