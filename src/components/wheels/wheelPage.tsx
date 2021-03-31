import React from 'react';
import { Router, RouteComponentProps, Link } from "@reach/router"

import './wheels.css'
import Wheel from './wheel'
import WheelForm from './wheelForm'

interface WheelPageProps extends RouteComponentProps {
	// wheelId?: string;
}

interface WheelPageState {
  wheelTitle: string
  wheelSections: string[]
}

class WheelPage extends React.Component<WheelPageProps, WheelPageState> {
  constructor(props: WheelPageProps) {
    super(props);

    this.state = {
      wheelTitle: "New Wheel",
      wheelSections: ["Add more!"]
    }
  }

  updateSections(sections: string[]) {
    console.log(sections);
    this.setState({
      wheelSections: sections
    });
  }

  render() {
    return (
      <div className="wheelPage">
        <h1>{this.state.wheelTitle}</h1>
        <Wheel title={this.state.wheelTitle} sections={this.state.wheelSections} />
        <WheelForm sections={this.state.wheelSections}
                   onUpdate={(sections: string[]) => this.updateSections(sections)} />
      </div>
    );
  }
}

export default WheelPage;