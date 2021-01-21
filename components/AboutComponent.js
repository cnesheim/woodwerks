import React, { Component } from 'react';
import { ListItem, Card } from 'react-native-elements';
import { Text, FlatList, ScrollView, View } from 'react-native';
import { PARTNERS } from '../shared/partners';

function Mission(props){
    return(
        <View>
            <Card>
                <Text>
                    WoodWerks represents some of the best artists in live edge woodworking in the world.
                    We offer a low cost oppourtunity for small, indipendent artists to show their wares to a large 
                    audience. We offer coonsumers the chance to find one-of-a-kind pieces of furnature at all ranges
                    of pricing. We aim to share wood art throughout the world.
                </Text>
            </Card>
        </View>
    )
}

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
          };
    }

    static navigationOptions = {
        title: 'Our Mission'
    }

    render() { 
        const renderPartner = ({item}) => {
            return(
                <ListItem
                    title = {item.name}
                    subtitle = {item.description}
                    leftAvatar = {{ source: require('./images/woodwerksLogo.png')}}
                />
            );
        };

        return ( 
            <ScrollView>
                <Mission />
                <Card title='Communuty Partners'>
                    <Text>
                        We would like to thank the following partners for supporting WoodWerks and the artists
                        that use this site. If you are interested in woodworking, please check out their sites below.
                    </Text>
                    <FlatList 
                    data = {this.state.partners}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderPartner}/>
                </Card>

            </ScrollView>
         );
    }
}
 
export default About;