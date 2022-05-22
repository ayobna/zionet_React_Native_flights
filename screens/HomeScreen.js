import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button } from "react-native-paper";
import openskyNetwork from "../apis/opensky-network";
import Table from "../components/Table";
import { AddFlightToTable, DeleteAllFlightFromTable, GetTopNineCountryFlights } from "../database/FlightsDB";

const HomeScreen = (props) => {
    const [data, setData] = useState([]);

    const handleGetData = async () => {
        const respone = await openskyNetwork.get();
        if (!(respone.status >= 200 && respone.status <= 299)) {
            console.log("Error while get the flights from the api!");
            return;
        }
        DeleteAllFlightFromTable().then(() => {
            console.log("Delete all flights success")
        }).catch((err) => {
            console.log(err)
        })

        for (let i = 0; i < respone.data.states.length; i++) {
            const fly = respone.data.states[i];
            AddFlightToTable({ icao24: fly[0], callsign: fly[1], origin_country: fly[2], longitude: fly[5], latitude: fly[6], baro_altitude: fly[7], on_ground: fly[8], geo_altitude: fly[13] }).catch((error) => {
                console.log(error)
            });
        }

        GetTopNineCountryFlights().then((res) => {
            setData(res.rows._array);
        }).catch((error) => {
            console.log(error)

        })
    };

    return (
        <View style={styles.container}>
            <Button mode="contained" onPress={handleGetData}>Get Data From Server</Button>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Table data={data} titleArr={["Country", "Flights num"]} />
            </ScrollView>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView:{
        flexGrow:1
    }
});

export default HomeScreen;