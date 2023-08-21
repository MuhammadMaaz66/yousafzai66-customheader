import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface Props {
    title: string;
    onPress: () => void;
    onRightIconPress: () => void;
    addRightIcon: any;
    RightIconStyling: any,
    customHeaderStyling: any,
}
interface Style {
    [key: string]: string | number;
}

const CustomHeader: React.FC<Props> = ({ title, onPress, addRightIcon, onRightIconPress, RightIconStyling, customHeaderStyling }) => {
    return (
        <View style={[styles.HeaderSection as Style, customHeaderStyling]}>
            <View style={styles.Header as Style}>
                <TouchableOpacity style={styles.HeaderBackIconStyling as Style} onPress={onPress}>
                    <FontAwesome5 name="chevron-left" size={18} color={"#314f33"} />
                </TouchableOpacity>
                <Text style={styles.ForgotPasswordHeading as Style}>{title}</Text>
                <TouchableOpacity onPress={onRightIconPress} style={RightIconStyling}>
                    {addRightIcon}
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CustomHeader;

const styles = StyleSheet.create({
    HeaderSection:{
        backgroundColor: "#314f33",
        height: 80,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    Header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '6%',
        marginHorizontal: '5%',
        alignContent: 'center',
        // flex: 1,
        alignItems: 'center'
    },
    HeaderBackIconStyling:{ 
        marginRight: '2%', 
        borderWidth: 1, 
        borderColor: "#fff", 
        borderRadius: 50, 
        width: 40, 
        height: 40, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: "#fff" 
    },
    ForgotPasswordHeading:{
        fontSize: 18,
        color: "#fff",
        // fontFamily: 'NunitoSans-Bold',
        marginLeft: '-5%', 
        fontWeight: '700'
    },
})