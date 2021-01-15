import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { ITEMS } from '../shared/items';
import ItemInfo from './ItemInfoComponent';
import { View } from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ITEMS,
            selectedItem: null
        };
    }

    onItemSelect(itemId) {
        this.setState({selectedItem: itemId});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Directory
                    items={this.state.items}
                    onPress={itemId => this.onItemSelect(itemId)}
                />
                <ItemInfo
                    item={this.state.items.filter(
                        item => item.id === this.state.selectedItem)[0]}
                />
            </View>
        );
    }
}

export default Main;