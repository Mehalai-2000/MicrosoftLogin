import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LineChartValues from './Linechartcomponent';

const LineChartDesign = () => {
    const lineData1 = [{ value: 0, label: 'Jan'  , id : 1}, { value: 10, label: 'feb' }, { value: 8, label: 'Mar' }, { value: 18, label: 'Apr' }, { value: 38, label: 'May' }, { value: 10, label: 'Jun' }, { value: 35, label: 'Jul' }, { value: 20, label: 'Aug' }, { value: 18, label: 'Sep' }, { value: 40, label: 'Oct' }, { value: 36, label: 'Nov' }, { id : 12, value: 36, label: 'Dec' }];
    const lineData2 = [{ value: 0 }, { value: 20 }, { value: 18 }, { value: 40 }, { value: 36 }, { value: 60 }, { value: 10 }, { value: 85 }];
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                marginHorizontal: 10

            }}
        >
            <View style={styles.card}>
                <LineChartValues
                    data={lineData1}
                    data2={lineData2}
                    height={250}
                    spacing={25}
                    noOfSections={5}
                    curved={false}
                    maxValue={60}
                    initialSpacing={10}
                    // showVerticalLines={true}
                    overflowTop={100}
                    disableScroll={true}
                    color1='#3a9de7'
                    color2='red'
                    highlightedRange={{
                        from: 5,
                        to: 12,
                        color: 'green',
                    }}
                    // width={200}
                    // cardWidth={500}
                    // backgroundColor = {'yellow'}
                    xAxisLabelTextStyle={{ textAlign: 'right', color: 'black', }}
                    yAxisTextStyle={{ color: 'red' }}
                    dataPointsColor1='red'
                    dataPointsColor2="blue"
                    // yAxisThickness = {5}
                    // xAxisThickness = {5}
                    dataPointsHeight={10}
                    dataPointsWidth={10}
                    pointerConfig={{
                        // pointerStripHeight: 160,
                        pointerStripColor: 'black',
                        pointerStripWidth: 2,
                        pointerColor: 'red',
                        radius: 6,
                        pointerLabelWidth: 100,
                        // leftShiftForTooltip:20,
                        pointerLabelHeight: 90,
                        activatePointersOnLongPress: true,
                        autoAdjustPointerLabelPosition: false,
                        pointerLabelComponent: (items) => {
                            return (
                                <View
                                    style={{
                                        position : 'absolute',
                                        height: 90,
                                        width: 100,
                                        justifyContent: 'center',
                                        marginLeft: -40,
                                        right:items[0].id === 1 ? 0 : 'null',
                                        left:items[0].id === 12 ? -30 : 'null',
                                    }}
                                >
                                    <Text style={{ color: 'white', fontSize: 14, marginBottom: 6, textAlign: 'center' }}>
                                        {items[0].date}
                                    </Text>

                                    <View style={{ paddingHorizontal: 14, paddingVertical: 6, borderRadius: 16, backgroundColor: 'black' }}>
                                        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
                                            {'$' + items[0].value + '.0'}
                                        </Text>
                                    </View>
                                </View>
                            );
                        },
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
});

export default LineChartDesign;
