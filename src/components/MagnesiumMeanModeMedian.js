import React from "react";
import { findMean, findMedian, findMode } from "../lib/helper";
import TabularData from "./TabularData";


const MagnesiumMeanModeMedian = (props) => {
    const { data } = props;

    const groupedData = data.reduce((acc, item) => {
        if (!acc[item.Alcohol]) {
            acc[item.Alcohol] = [];
        }
        const falavanoids = item.Flavanoids;
        acc[item.Alcohol].push(Number(falavanoids.toFixed(3)));
        return acc;
    }, {});

    const results = Object.keys(groupedData).map((key) => {
        const flavanoidsValues = groupedData[key];
        const mean = findMean(flavanoidsValues);
        const mode = findMode(flavanoidsValues);
        const median = findMedian(flavanoidsValues);

        return {
            alcohol: key,
            mean,
            mode,
            median,
        };
    });

    return (
        <div className="overflow_scroll margin_auto">
            <h1>{'The mean,mode & median for Flavanoids '}</h1>
            <TabularData tableTitle={'Flavanoids'} results={results} />
        </div>

    );
};

export default MagnesiumMeanModeMedian;
