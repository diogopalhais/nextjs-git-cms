import React, { Component } from 'react';

import content from '../content/about.md';

export default class Home extends Component {
    render() {
        const { attributes, html } = content;
        return (
            <React.Fragment>
                <h1>{attributes.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </React.Fragment>
        );
    }
}