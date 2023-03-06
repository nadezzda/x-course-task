import React from "react";
import { Helmet } from 'react-helmet';
import './exception404.scss';

export default function Exception404() {
    return(
        <div className="exception404">
            <Helmet>
                <title>EROR 404</title>
            </Helmet>
            <p>Oops, something went wrong...</p>
        </div>
    );
}