import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import { Text  } from 'react-native-elements';
export default function SongPreview({song}) {
    return (
        <View>
            <Text h4>{song.title}</Text>
            <Text >{song.text}</Text>
        </View>
    );
}