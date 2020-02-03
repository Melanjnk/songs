import React, {Component, useState} from 'react';
import {
    StyleSheet,
    View,
    Text, FlatList, TouchableHighlight, ScrollView
} from 'react-native';
import SongPreview from "./SongPreview";

export default class SongsResultList extends React.Component {
    constructor(props) {
        super(props);

        this.viewabilityConfig = {
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 95
        }
    }


    render() {
        return (
            <FlatList
                keyExtractor={(_, index) => index.toString()}
                data={this.props.songs}
                viewabilityConfig={this.viewabilityConfig}
                renderItem={({item, index, separators}) => (
                    <TouchableHighlight
                        onPress={() => this.props.navigation.push('Single', item.id)}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>
                        <SongPreview song={item}/>

                    </TouchableHighlight>
                )}
            />
        );
    }
}