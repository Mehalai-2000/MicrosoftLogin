import SingleLineChart from "./Singlelinechart";
import React from "react";
import { View, Text , StyleSheet } from "react-native";
const DesignSigleLinechart = () => {
    const ptData = [
        { value: 160, date: '1 Apr 2022' , labelComponent: () => customLabel('22 Nov'),},
        { value: 180, date: '2 Apr 2022' },
        { value: 190, date: '3 Apr 2022' },
        { value: 180, date: '4 Apr 2022' },
        { value: 140, date: '5 Apr 2022' },
        { value: 145, date: '6 Apr 2022', labelComponent: () => customLabel('22 Nov'), },
        { value: 160, date: '7 Apr 2022' },
        { value: 200, date: '8 Apr 2022' },
        { value: 280, date: '15 Apr 2022' },
        { value: 390, date: '16 Apr 2022' },
        { value: 210, date: '5 May 2022' , labelComponent: () => customLabel('22 Nov'),},
        { value: 160, date: '1 Apr 2022' },
        { value: 180, date: '2 Apr 2022' },
        { value: 190, date: '3 Apr 2022' },
        { value: 180, date: '4 Apr 2022', labelComponent: () => customLabel('22 Nov'), },
        { value: 140, date: '5 Apr 2022' },
        { value: 145, date: '6 Apr 2022' },
        { value: 160, date: '7 Apr 2022' , labelComponent: () => customLabel('22 Nov'),},
        { value: 200, date: '8 Apr 2022' },
        { value: 280, date: '15 Apr 2022' },
        { value: 390, date: '16 Apr 2022' },
        { value: 210, date: '5 May 2022' },
    ];

    return (
        <View
            style={{
                flex : 1,
                justifyContent: 'center',
                // paddingVertical: 30,
                marginHorizontal : 10
               
            }}
        >
            <View style={styles.card}>
                <SingleLineChart
                    data={ptData}
                    spacing={30}
                    color="#3a9de7"
                    thickness={3}
                    startFillColor="#3a9de7"
                    endFillColor="#3a9de7"
                    startOpacity={0.9}
                    endOpacity={0.2}
                    initialSpacing={10}
                    noOfSections={3}
                    maxValue={600}
                    yAxisColor="white"
                    yAxisThickness={0}
                    rulesType="solid"
                    rulesColor="gray"
                    yAxisTextStyle={{ color: 'red' }}
                    yAxisSide='right'
                    xAxisColor="lightgray"
                    pointerConfig={{
                        pointerStripHeight: 160,
                        pointerStripColor: 'lightgray',
                        pointerStripWidth: 2,
                        pointerColor: 'lightgray',
                        radius: 6,
                        pointerLabelWidth: 100,
                        pointerLabelHeight: 90,
                        activatePointersOnLongPress: true,
                        autoAdjustPointerLabelPosition: false,
                        pointerLabelComponent: items => {
                            return (
                                <View
                                    style={{
                                        height: 90,
                                        width: 100,
                                        justifyContent: 'center',
                                        marginLeft: -40,
                                    }}
                                >
                                    <Text style={{ color: 'white', fontSize: 14, marginBottom: 6, textAlign: 'center' }}>
                                        {items[0].date}
                                    </Text>

                                    <View style={{ paddingHorizontal: 14, paddingVertical: 6, borderRadius: 16, backgroundColor: 'white' }}>
                                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
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
}

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
    // title: {
    //   fontSize: 18,
    //   fontWeight: 'bold',
    //   marginBottom: 8,
    // },
    // content: {
    //   fontSize: 16,
    // },
  });

export default DesignSigleLinechart;
