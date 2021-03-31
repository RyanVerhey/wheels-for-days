import React from 'react';

interface WheelProps {
  title?: string
  sections: string[]
}

export default function Wheel(props: WheelProps) {
  return (
    <div className='wheel'>
      {props.sections.map((text, index) => {
        return (
          <p>{text === "" ? String.fromCharCode(160) : text}</p>
        );
      })}
    </div>
  );
}
