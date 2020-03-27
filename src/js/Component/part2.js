import React from 'react';
import './../../css/part2.css';

class Part2 extends React.Component {
    render() {
        return (
        <div className = "part2row">
            <button type="button" class="collapsible">-Profile</button>
            <div class="content">
                <p>Lorem ipsum...</p>
            </div>
        </div>
        );
    }
}

export default Part2