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
                <span>{content.master.branch} - {content.master.merge}</span>
                <p className="small">{content.master.commit}</p>
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
