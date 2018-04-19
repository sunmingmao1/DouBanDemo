/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    StatusBar,
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import Hotting from "./src/hot/Hotting.js";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
 class Splash extends Component<Props> {
    skipTime = 3;

    constructor(props) {
        super(props);
        this.state = {
            time: 3,
        }

    }

    componentWillUnmount() {
        clearInterval(this.TimeId);
    }

    componentDidMount() {
        this.setState({
            time: this.skipTime
        });
        this.TimeId = setInterval(() => this.skip(), 1000);
    }

    skip() {
        this.skipTime = this.skipTime - 1;
        this.setState({
            time: this.skipTime
        });
    }

    render() {
        const dimensions = require('Dimensions');
        const screenWidth = dimensions.get('window').width;
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}/>
                <Image
                    source={{uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1374626695,218677536&fm=27&gp=0.jpg'}}
                    style={{width: screenWidth, flex: 5}}/>
                <View style={styles.bottomContainer}>
                    <Image
                        source={{uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=268239269,888833832&fm=27&gp=0.jpg'}}
                        style={styles.bottomImage}/>
                    <View style={{width: screenWidth}}>
                        <Button style={styles.bottomSkip}>
                            跳过 {this.state.time}
                        </Button>
                    </View>
                </View>

            </View>
        );
    }
}


const App = StackNavigator({
    Splash: {screen: Splash},
    Hotting: {screen: Hotting},
});
export default  App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    bottomContainer: {
        flex: 1,
        alignItems: 'flex-end',
        padding: 20,
    },
    bottomImage: {
        width: 140,
        flex: 4,
        marginTop: 20,
        alignSelf: 'center'
    },
    bottomSkip: {
        width: 60,
        height: 24,
        borderRadius: 15,
        backgroundColor: '#f7f7f7',
        fontSize: 12,
        color: '#b5b5b5',
        textAlign: 'center',
        lineHeight: 24,
        alignSelf: 'flex-end',
        marginRight: 20,
    }
});
