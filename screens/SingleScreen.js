import React from 'react';
import {ScrollView, StyleSheet, BackHandler} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import Search from "../components/Search/Search";
import {Text, Icon} from "react-native-elements";
import {render} from "react-native-web";
import {songs} from "../src/data/songs";

export default class SingleScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songId: this.props.navigation.state.params,
            song: songs[0]
        };
        this.backButtonClick = this.backButtonClick.bind(this);
    }

    componentDidMount() {
        let index = parseInt(this.props.navigation.state.params) - 1;
        if (index >= 0) {
            this.setState({song: songs[index]});
        }
    }

    static navigationOptions = {
        tabBarVisible: false,
    }

    // Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode.
    // In React 17.x, only the UNSAFE_ name will work.
    // To rename all deprecated lifecycles to their new names,
    // you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.

    UNSAFE_componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backButtonClick);
    }

    UNSAFE_componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backButtonClick);
    }

    backButtonClick() {
        if (this.props.navigation && this.props.navigation.goBack) {
            this.props.navigation.navigate('Home');
            // this.props.navigation.popToTop(null);
            // this.props.navigation.goBack(null);
            return true;
        }
        return false;
    }

    render() {
        let displayId = (this.state.song.id) ? this.state.song.id : '1';
        let displayTitle = (this.state.song.id) ? this.state.song.title : 'Title of song';
        let displayText = (this.state.song.id) ? this.state.song.text : 'Song full text..';

        return (
            <ScrollView style={styles.container}>
                <Text h1>{displayTitle}</Text>
                <Text h4>{displayText}</Text>
            </ScrollView>
        )
    };
}

SingleScreen.navigationOptions = {
    title: 'Single',
    tabBarVisible: false,
    header: null,
    headerLeft: null
};

/*static navigationOptions = ({ navigation, screenProps }) => ({
    title:  'Header Title',
    headerLeft: <Icon name={'arrow-left'}
                      onPress={ () => { navigation.goBack() }} />,
    headerRight: <Icon name={'cog'}
                       onPress={ () => { navigation.navigate('Settings') }} />,
});*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
