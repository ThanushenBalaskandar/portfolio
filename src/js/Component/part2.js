import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import './../../css/part2.css';

class Part2 extends React.Component {
    render() {
        return (
            <div className = "part2row">
                <Accordion defaultActiveKey="1">
                    <Card className = "card">
                        <Card.Header className = "accheader">
                            <Accordion.Toggle className="tog" variant="link" eventKey="0">
                            <div className="button_cont" align="center">
                                <a className="example_d">Profile</a></div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse className="colapText" eventKey="0">
                            <Card.Body className="cbody">
                                <div id="box" className="gradient-border">
                                    <img id="me" src="https://i.imgur.com/6YfSxtV.jpg" alt=""></img>
                                </div>
                                <div>Full stack software development is my one true passion. Experience that I currently hold will benefit me greatly in work both in programming and working in teams. As an employee of the company, I ensure I am, communicative, passionate, and a good team worker who will approach any task with enthusiasm and good work ethic, even under pressure I will always aim for the best results. And most importantly, I will be an employee that shows passion and constant interest in the business I work for.</div>
                                 </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );
    }
}

export default Part2