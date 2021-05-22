import React, { Component } from 'react';
import reactDom from 'react-dom';
import './assets/style.css';


class Quiz extends Component {
    render() {
        return (
            <div className="containers">
                <div className="title">Simple Quiz</div>
            </div>
        );
    }
}

reactDom.render(<Quiz/>, document.getElementById('root'));
