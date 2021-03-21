import React, { Component } from 'react';
import Subcontent from './Subcontent';
import Advertisement from './Advertisement';

class Main extends Component {
    render() {
        return(
            <div style={{
                height: "300px",
                width: "600px",
                backgroundColor: "red",
                display: "inline-block",
                verticalAlign: "top",
                marginLeft: "10px",
                padding: '15px',
            }}>
                <Subcontent />
                <Subcontent />
                <Subcontent />
                <Advertisement />
            </div>
        )
    }
}
export default Main;