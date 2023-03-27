import React from "react";
import { Helmet } from 'react-helmet';
import './error.scss';


export function Error() {
    return(
        <div className="exception404">
            <Helmet>
                <title>ERROR</title>
            </Helmet>
            <p>Oops, something went wrong...</p>
        </div>
    );
}