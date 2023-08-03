import React from "react";
import { findMean, findMedian, findMode } from "../lib/helper";
import TabularData from "./TabularData";


const GammaMeanModeMedian = (props) => {

    const { data } = props;

    const groupedData = data.reduce((acc, item) => {
        // console.log(item, 'item-----');
        if (!acc[item.Alcohol]) {
        acc[item.Alcohol] = [];
        }
        const gamma = (item.Ash * item.Hue) / item.Magnesium;
        acc[item.Alcohol].push(Number(gamma.toFixed(3)));
        return acc;
    }, {});

    const results = Object.keys(groupedData).map((key) => {
        const gammaValues = groupedData[key];
        console.log(gammaValues, 'magnesiumValue');
        const mean = findMean(gammaValues);
        const mode = findMode(gammaValues);
        const median = findMedian(gammaValues);

        return {
        alcohol: key,
        mean,
        mode,
        median,
        };
    });

    return (
        <div className="overflow_scroll margin_auto">
            <h1>{'The mean,mode & median for Gamma '}</h1>
            <TabularData tableTitle={'Gamma'} results={results} />
        </div>
    );
};

export default GammaMeanModeMedian;
