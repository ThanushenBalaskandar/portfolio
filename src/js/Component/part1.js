import React from 'react';
import './../../css/part1.css';

class Part1 extends React.Component {
    render() {
        return (
            <div className = "part1row">
                <div className="text-title">Thanushen Balaskandar</div>
                <div className="details-row">
                    <div class="button_cont" align="center" onClick = {() => window.location.href = "https://github.com/ThanushenBalaskandar"}>
                        <a class="example_c" href="add-website-here" target="_blank" rel="nofollow noopener">GitHub</a></div>
                    <div class="button_cont" align="center" onClick = {() => window.location.href = "https://www.linkedin.com/in/thanushen-balaskandar-83a359176/"}>
                        <a class="example_c" href="add-website-here" target="_blank" rel="nofollow noopener">Linkedin</a></div>
                </div> 
            </div>
        )
    }
}

export default Part1