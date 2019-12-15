import React from 'react';
import {content} from './helpers';

export default class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            work: content.work.slice(0).reverse(),
            edu: content.edu.slice(0).reverse()
        }
    }

    render() {
        return (<div className="content">
            <div className="gray">
                <span className="selected">{content.master.branch}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="gray" href="mailto:sgannu.e@gmail.com">
                    <img src="email.png" alt="icon" style={{width: '15px'}} />
                    <span>sgannu.e@gmail.com</span>
                </a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="gray" href="tel:989-383-0030">
                    <img src="phone.png" alt="icon" style={{width: '15px'}} />
                    <span>989.383.0030</span>
                </a>
                <p className="small">{content.master.commit}</p>
                <p className="small">Father, runner, love recreational sports (biking, volleyball, ping-pong, tennis, foosball).</p>
                <br />
            </div>

            <div className="lists">
                {this.state.work.map((edu, index) => {
                    return <div><span className="gray">{edu.branch} ({edu.tag})</span>
                        <p className="gray small">{edu.merge}</p>
                        <ul>
                            {edu.commits.map((commit, i) => {
                                return <li>{commit}</li>
                            })}
                        </ul>
                    </div>
                })}

                {this.state.edu.map((edu, index) => {
                    return <div>
                        <span className="gray">{edu.branch} ({edu.tag})</span>
                        <p className="gray small">{edu.merge}</p>
                        <ul>
                            {edu.commits.map((commit, i) => {
                                return <li>{commit}</li>
                            })}
                        </ul>
                    </div>
                })}
            </div>
        </div >);
    }
}
