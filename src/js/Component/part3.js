import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import './../../css/part2.css';


class Part3 extends React.Component {
    render() {
        return (
            <div className = "part2row">
            <Accordion defaultActiveKey="1">
                <Card className = "card" id="keyskills">
                    <Card.Header className = "accheader">
                        <Accordion.Toggle className="tog" variant="link" eventKey="0">
                        <div className="button_cont" align="center">
                            <a className="example_d">Key Skills</a></div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse className="colapText" eventKey="0">
                        <Card.Body className="cbody" id="list">
                            <div className="keylist">
                                <ul>
                                    <li>Effective time management and problem-solving skills with ability to prioritise workload.</li>
                                    <li>Awareness of health and safety.</li>
                                    <li>Excellent written and verbal communication skills.</li>
                                    <li>Flexible approach to all tasks.</li>
                                    <li>High attention to detail.</li>
                                </ul>
                            </div>
                             </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
        );
    }
}

export default Part3