import React from 'react';
import { StyleSheet, View, } from 'react-native';
import PlaceList from '../src/components/PlaceList/PlaceList';
import PlaceInput from '../src/components/PlaceInput/PlaceInput';
import PlaceDetail from '../src/components/PlaceDetail/PlaceDetail';
import placeImage from '../src/assets/beautiful-place.jpg';
import { connect } from 'react-redux';
import configureStore from '../src/store/configureStore';
import { addPlace, deletePlace, selectPlace, deSelectPlace } from '../src/store/actions/index';

class Opening extends React.Component {

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    };

    placeDeletedHandler = () => {

        this.props.onDeletePlace();

    };
    modalClosedHandler = () => {
        this.props.onDeselectPlace();
    };
    placeSelectedHandler = key => {
        this.props.onSelectPlace(key);
    };
    render() {

        const store = configureStore();
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.props.selectedPlace}
                    onItemDeleted={this.placeDeletedHandler}
                    onModalClosed={this.modalClosedHandler} />
                <PlaceInput onplaceAdded={this.placeAddedHandler} />
                <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    listContainer: {
        width: "100%"
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deSelectPlace())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Opening)