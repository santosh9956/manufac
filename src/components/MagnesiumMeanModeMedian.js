import React from "react";
import { findMean, findMedian, findMode } from "../lib/helper";
import TabularData from "./TabularData";


const MagnesiumMeanModeMedian = (props) => {
    const { data } = props;

    const groupedData = data.reduce((acc, item) => {
        // console.log(item, 'item-----');
        if (!acc[item.Alcohol]) {
            acc[item.Alcohol] = [];
        }
        acc[item.Alcohol].push(item.Magnesium);
        return acc;
    }, {});

    const results = Object.keys(groupedData).map((key) => {
        const magnesiumValues = groupedData[key];
        const mean = findMean(magnesiumValues);
        const mode = findMode(magnesiumValues);
        const median = findMedian(magnesiumValues);

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
