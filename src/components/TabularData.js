import React from 'react';

const TabularData = (props) => {
    const {results, tableTitle}  = props;
    return (
        <>
        <table className="d_flex justify_content_center mt_3"> 
                    <thead>
                        <tr className="font_bold">Measure</tr>
                        <tr className="font_bold">{tableTitle} Mean</tr>
                        <tr className="font_bold">{tableTitle} Mode</tr>
                        <tr className="font_bold">{tableTitle} Median</tr>
                    </thead>
                    <tbody className="d_flex">
                        {results.map((result) => {
                            return (
                        
                                <div key={result.alcohol}>
                                    <tr className="font_bold">{`Class ${result.alcohol}` }</tr>
                                    <tr>{result.mean.toFixed(3)}</tr>
                                    <tr>{result.mode}</tr>
                                    <tr>{result.median.toFixed(3)}</tr>
                                </div>
                            )
                        } )}
                    </tbody>
                </table>
        </>
    )
}

export default TabularData;