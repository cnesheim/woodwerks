import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ITEMS } from '../shared/items';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ITEMS
        };
    }

    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('ItemInfo', { itemId: item.id })}
                    leftAvatar={{ source: require('./images/blackHorseBench.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.items}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;