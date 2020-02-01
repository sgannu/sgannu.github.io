import React, {useRef} from 'react';
import {content} from './helpers';
import ReactToPrint from 'react-to-print';

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            work: content.work.slice(0).reverse(),
            edu: content.edu.slice(0).reverse(),
            masterCommits: content.master.commits.slice(0).reverse()
        }
    }

    render() {
        return (<div className="content">
            <div className="gray">
                <span className="selected">{content.master.branch}</span>&nbsp;&nbsp;
                <a className="gray" href="mailto:sgannu.e@gmail.com">
                    <img src="email.png" alt="icon" style={{width: '15px'}} />
                    <span>sgannu.e@gmail.com</span>
                </a>&nbsp;&nbsp;
                <a className="gray" href="https://www.linkedin.com/in/srinivasgannu">
                    <img src="lin.png" alt="icon" style={{width: '15px'}} />
                    <span>https://www.linkedin.com/in/srinivasgannu</span>
                </a>&nbsp;&nbsp;
                <a className="gray" href="tel:989-383-0030">
                    <img src="phone.png" alt="icon" style={{width: '15px'}} />
                    <span>989.383.0030</span>
                </a>
                <span>, Dallas, TX.</span>
                {this.state.masterCommits.map((commit, i) => {
                    return <p className="small">{commit}</p>
                })}<br />
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
        </div>);
    }
}


const PrintMode = () => {
    const componentRef = useRef();
    return (
        <div>
            <ReactToPrint
                trigger={() =>
                    <div style={{float: "left"}}>
                        <button class="gray" style={{padding: "10px", borderRadius: "25px", border: "3px solid #008fb5", margin: "15px", font: ".8rem Arial"}}>Print this out!</button>
                    </div>}
                content={() => componentRef.current}
            />
            <Resume ref={componentRef} />
        </div>
    );
};

export default Resume;