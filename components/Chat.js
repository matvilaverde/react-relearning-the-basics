import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfilePicture from './ProfilePicture';

export default function Chat(props){
    return (
        <View>
            <ProfilePicture id="setokaiba" />
            <View>
                <Text style={styles.userName}>{props.name}</Text>
                <Text style={styles.lastMessage}>{props.message}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    userName: {
      fontWeight: 'bold',
    },
    lastMessage: {
      color: 'green'
    }
});