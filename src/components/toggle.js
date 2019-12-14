import React from 'react';

export default class ToggleSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {on: props.defaultOff ? false : true};
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState({on: !this.state.on})
        this.props.onChange(!this.state.on);
    }

    render() {
        return (
            <label className="switch round">
                <span className={"switch-text " + (this.state.on ? 'selected' : '')}>{this.props.on}</span>
                <span className={"switch-text right " + (this.state.on ? '' : 'selected')}>{this.props.off}</span>
                <input type="checkbox" onChange={this.onChange} />
                <span className="slider round" />
            </label>
        );
    }
}