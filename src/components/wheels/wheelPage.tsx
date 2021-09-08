import * as React from 'react';
import { Router, RouteComponentProps, Link } from "@reach/router"

import './wheels.css'
import Wheel from './wheel'
import WheelForm from './wheelForm'
import { SectionsList } from '../interfaces'

interface WheelPageProps extends RouteComponentProps {
	// wheelId?: string;
}

const WheelPage: React.FC<WheelPageProps> = (props) => {
  const [wheelTitle, setWheelTitle] = React.useState<string>("New Wheel");
  const [wheelSections, setWheelSections] = React.useState<SectionsList>(["Add more sections!", "And even more!"])

  const sanitizedSections = (): SectionsList => {
    return wheelSections.filter(section => section.length)
  }

  return (
    <div className="wheelPage">
      <h1>{wheelTitle}</h1>
      <Wheel title={wheelTitle} sections={sanitizedSections()} />
      <WheelForm sections={wheelSections}
                  onUpdate={setWheelSections} />
    </div>
  );
}

export default WheelPage;
