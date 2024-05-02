import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const LineChartValues = (props) => {
    return (
        <LineChart
            data={props.data}
            data2={props.data2}
            color={props.color}
            color1={props.color1}
            color2={props.color2}
            height={props.height}
            spacing={props.spacing}
            initialSpacing={props.initialSpacing}
            xAxisLabelTextStyle={props.xAxisLabelTextStyle}
            width={props.width}
            backgroundColor={props.backgroundColor}
            dataPointsColor={props.dataPointsColor}
            dataPointsColor1={props.dataPointsColor1}
            dataPointsColor2={props.dataPointsColor2}
            yAxisTextStyle={props.yAxisTextStyle}
            curved={props.curved}
            lineGradient={props.lineGradient}
            showVerticalLines={props.showVerticalLines}
            highlightedRange={props.highlightedRange}
            xAxisLength={props.xAxisLength}
            xAxisType={props.xAxisType}
            xAxisColor={props.xAxisColor}
            xAxisThickness={props.xAxisThickness}
            yAxisThickness={props.yAxisThickness}
            yAxisTextNumberOfLines={props.yAxisTextNumberOfLines}
            yAxisLabelContainerStyle={props.yAxisLabelContainerStyle}
            yAxisExtraHeight={props.yAxisExtraHeight}
            yAxisColor={props.yAxisColor}
            yAxisLabelWidth={props.yAxisLabelWidth}
            yAxisSide={props.yAxisSide}
            yAxisLabelPrefix={props.yAxisLabelPrefix}
            yAxisLabelSuffix={props.yAxisLabelSuffix}
            hideYAxisText={props.hideYAxisText}
            dataPointsHeight={props.dataPointsHeight}
            dataPointsWidth={props.dataPointsWidth}
            rulesType={props.rulesType}
            dashGap={props.dashGap}
            verticalLinesUptoDataPoint={props.verticalLinesUptoDataPoint}
            rulesLength={props.rulesLength}
            dashWidth={props.dashWidth}
            rulesColor={props.rulesColor}
            rulesThickness={props.rulesThickness}
            hideRules={props.hideRules}
            trimYAxisAtTop={props.trimYAxisAtTop}
            verticalLinesColor={props.verticalLinesColor}
            verticallinesThickness={props.verticallinesThickness}
            verticalLinesHeight={props.verticalLinesHeight}
            textShiftY={props.textShiftY}
            roundToDigits={props.roundToDigits}
            noOfVerticalLines={props.noOfVerticalLines}
            verticalLinesSpacing={props.verticalLinesSpacing}
            textShiftX={props.textShiftX}
            textFontSize={props.textFontSize}
            scrollToIndex={props.scrollToIndex}
            disableScroll={props.disableScroll}
            showScrollIndicator={props.showScrollIndicator}
            isAnimated={props.isAnimated}
            onPress={props.onPress}
            scrollToEnd={props.scrollToEnd}
            onScroll={props.onScroll}
            lineGradientId={props.lineGradientId}
            lineGradientComponent={props.lineGradientComponent}
            lineGradientDirection = {props.lineGradientDirection}
            lineGradientStartColor = {props.lineGradientStartColor}
            lineGradientEndColor = {props.lineGradientEndColor}
            maxValue={props.maxValue}
            areaGradientId={props.areaGradientId}
            areaGradientComponent={props.areaGradientComponent}
            leftShiftForLastIndexTooltip={props.leftShiftForLastIndexTooltip} // Shift the tooltip of the last bar by 20
            leftShiftForTooltip={props.leftShiftForTooltip}
            noOfSections={props.noOfSections}
            pointerConfig={props.pointerConfig}
            label={props.label}
            dataSet={props.dataSet}
        />
    );
};

export default LineChartValues;
