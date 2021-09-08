import * as React from 'react';
import { Router, RouteComponentProps, Link } from "@reach/router"

import './wheels.css'
import Wheel from './wheel'
import WheelForm from './wheelForm'
import { SectionsList } from '../interfaces'

interface WheelPageProps extends RouteComponentProps {
	// wheelId?: string;
}

interface WheelPageState {
  wheelTitle: string;
  wheelSections: SectionsList;
}


class WheelPage extends React.Component<WheelPageProps, WheelPageState> {
  constructor(props: WheelPageProps) {
    super(props);

    this.state = {
      wheelTitle: "New Wheel",
      wheelSections: ["Add more sections!", "And even more!"]
    }
  }

  updateSections(sections: SectionsList): void {
    this.setState({
      wheelSections: sections
    });
  }

  sanitizedSections(): SectionsList {
    return this.state.wheelSections.filter(section => section.length)
  }

  render(): JSX.Element {
    return (
      <div className="wheelPage">
        <h1>{this.state.wheelTitle}</h1>
        <Wheel title={this.state.wheelTitle} sections={this.sanitizedSections()} />
        <WheelForm sections={this.state.wheelSections}
                   onUpdate={(sections: SectionsList) => this.updateSections(sections)} />
      </div>
    );
  }
}

export default WheelPage;
