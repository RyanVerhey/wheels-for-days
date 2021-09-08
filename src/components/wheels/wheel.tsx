/*

  The wheel that will be spun.
  This is much more well documented than I would normally do, but I know that if
  I don't document this well, I'll forget how it works

*/

import * as React from 'react';

import { SectionsList } from '../interfaces'

interface WheelProps {
  title?: string;
  sections: SectionsList;
}

const WheelElement: React.FC<WheelProps> = (props) => {
  const canvasDimensions: number = 150;

  React.useEffect(() => {
    drawWheel();
  })

  const drawWheel = (): void|null => {
    const canvas = document.getElementById('wheel') as HTMLCanvasElement;
    if (canvas === null || !canvas.getContext) return null;
    const ctx = canvas.getContext('2d');
    if (ctx === null) return null;
    const wheelCenterX: number = canvasDimensions / 2;
    const wheelCenterY: number = canvasDimensions / 2;
    const wheelRadius: number = canvasDimensions / 2;

    if (!props.sections.length) {
      // Drawing wheel when sections aren't available

      // Creating the wheel
      const wheel: Path2D = new Path2D();
      // Drawing the arc for whe whole wheel, remembering geometry
      wheel.arc(wheelCenterX, wheelCenterY, wheelRadius, 0, Math.PI * 2);
      // Adding a stroke
      ctx.stroke(wheel);
      // Coloring the wheel gray
      ctx.fillStyle = "gray";
      ctx.fill(wheel);
    }

    const sectionColors: string[] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    // Create array of start points to arc and iterate through them. Iterate through colors too?
    const sections = props.sections.map((sectionName: string, index: number) => {
      const numberOfSections: number = props.sections.length;

      // The angle/length in radians of each section of the wheel's circumference
      const sectionLengthRadians: number = Math.PI * ((1/numberOfSections) * 2);

      // The starting and ending angles in radians
      const radiansStart: number = sectionLengthRadians * index;
      const radiansEnd: number = radiansStart + sectionLengthRadians;

      // Thanks to markE for reminding me how geometry/calc/trig works
      // https://stackoverflow.com/questions/18342216/how-to-get-an-array-of-coordinates-that-make-up-a-circle-in-canvas#answer-18342872
      // The starting coordinates for the arc for this section
      const arcCoordsStartX: number = wheelCenterX + wheelRadius * Math.cos(sectionLengthRadians * index);
      const arcCoordsStartY: number = wheelCenterY + wheelRadius * Math.sin(sectionLengthRadians * index);

      // Starting new section
      const section: Path2D = new Path2D();
      // Moving to the center of the wheel
      section.moveTo(wheelCenterX, wheelCenterY);
      // Drawing a line to that starting place for the arc
      section.lineTo(arcCoordsStartX, arcCoordsStartY);
      // Drawing the arc for this section
      section.arc(wheelCenterX, wheelCenterY, wheelRadius, radiansStart, radiansEnd);
      // Drawing a line back to the center to close the section
      section.lineTo(wheelCenterX, wheelCenterY);

      // Picking a color for this section
      ctx.fillStyle = sectionColors[index % (sectionColors.length - 1)];
      // Filling in the section
      ctx.fill(section);
      // Adding a stroke for this section
      ctx.stroke(section);

      return section;
    });
  }

  return (
    <canvas style={{border: "1px solid black"}} id='wheel' height={canvasDimensions} width={canvasDimensions}>
      Upgrade your browser
    </canvas>
  )
}

export default WheelElement;
