import React from "react";
import { Text, StyleSheet, backgroundColor } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";


const RestaurantCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
margin-top: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Title = styled.Text`
font-family: ${(props) => props.theme.fonts.body};
font-size: ${(props) => props.theme.fontSizes.body};
color: ${(props) => props.theme.colors.text.primary};
`;

const Address = styled.Text`
font-family: ${(props) => props.theme.fonts.heading};
font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
padding: ${(props) => props.theme.space[3]};
`;
const Close = styled.Text`
color: ${(props) => props.theme.colors.text.error};
`;
const Star = styled.View`
display: flex;
flex-direction: row;
justify-content: flex-start;
`;
const Items = styled.View`
flex:1;
flex-direction: row;
justify-content: flex-end;
`;

export const RestaurantInfoCard = (restaurant = {}) => {
    const {
        name = "Some nice restaurant",
        icon,
        photos = ["https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"],
        address = "some random street",
        isOpenNow = true,
        rating = 5,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.ceil(rating)));
    console.log(isOpenNow);
    function Open() {
        const Open = isOpenNow;
        if (Open != false) {
            return <SvgXml xml={open} width={20} height={20} />
        }
        return null
    }
    function Temporarily() {
        const tempo = isClosedTemporarily;
        if (tempo != false) {
            return <Close>CLOSED TEMPORARILY</Close>
        }
        return null
    }
    return (
        <RestaurantCard>
            <RestaurantCardCover elevation={5} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Star>
                    {ratingArray.map(() => (
                        <SvgXml xml={star} width={20} height={20} />
                    ))}
                    <Items>
                        <Temporarily />
                        <Open />
                    </Items>
                </Star>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
}
const styles = StyleSheet.create({
    card: { backgroundColor: "white", padding: 16 },
    cover: { backgroundColor: "white" },
    title: { padding: 16 },
});