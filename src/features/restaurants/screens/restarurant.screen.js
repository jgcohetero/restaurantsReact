import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View, StyleSheet, Platform, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";


const SafeArea = styled(SafeAreaView)`
flex: 1;
margin-top: ${StatusBar.currentHeight}px;
`;
const SearchBox = styled(View)`
padding: ${(props) => props.theme.space[3]};
`;
// const ListCards = styled(View)`
// flex: 1;
// padding: ${(props) => props.theme.space[3]};
// `;
const isAndroid = Platform.OS === "android"

export const RestaurantScreen = () => {
    return (
        <SafeArea>
            <SearchBox>
                <Searchbar></Searchbar>
            </SearchBox>
            <FlatList
                data = {[{name:1}, {name:2}, {name:3}]}
                renderItem={()=>  <RestaurantInfoCard/>}
                keyExtractor={(item)=>item.id}
                contentContainerStyle={{padding:16}}
            />
        </SafeArea>
    );
}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: isAndroid && StatusBar.currentHeight
//     },
//     search: {
//         padding: 16,
//         backgroundColor: "green"
//     },
//     list: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: "blue"
//     }
// });