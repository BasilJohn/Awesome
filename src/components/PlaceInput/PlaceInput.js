import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ""
    };

    placeChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onplaceAdded(this.state.placeName)
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput style={styles.placeInput}
                    placeholder={'An Awesome Place'}
                    value={this.state.placeName}
                    onChangeText={this.placeChangedHandler} />
                <Button style={styles.placeButton}
                    title="Add"
                    onPress={this.placeSubmitHandler} />
            </View>
        )
    }
}

const styles = StyleSheet.create({


    inputContainer: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%"
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }

})


export default PlaceInput;