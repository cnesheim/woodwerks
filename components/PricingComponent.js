import React, { Component } from 'react';
import { FlatList, View, Image } from 'react-native';
import { PricingCard } from 'react-native-elements';
import { ITEMS } from '../shared/items';

class Pricing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ITEMS
        };
    }

    static navigationOptions = {
        title: 'For Sale'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderSalesItem = ({item}) => {
            return (
                <View>
                    {/*
                    <Image
                          source={ require ({ item.image })}
                          style={{ width: 200, height: 200 }}
                    />
                    */}
                    <PricingCard
                        color="#4f9deb"
                        title= {item.name}
                        price= {item.price}
                        info = {[item.description]}
                        button={{ title: 'Buy Now' }}
                        onButtonPress={() => navigate('ItemInfo', { itemId: item.id })}
                        leftAvatar={{ source: require('./images/blackHorseBench.jpg')}}
                    />
                </View>
        );
    };

    return (
        <FlatList
            data={this.state.items}
            renderItem={renderSalesItem}
            keyExtractor={item => item.id.toString()}
        />
        );
    }
}

export default Pricing;