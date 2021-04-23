import React from 'react';

interface WheelFormProps {
  sections: string[]
  onUpdate: any
}

export default function WheelForm(props: WheelFormProps) {
  return (
    <div className='wheelForm'>
      <textarea
        value={props.sections.join(String.fromCharCode(13, 10))}
        onChange={(event) => props.onUpdate(event.target.value.split(/\r?\n/))}
      />
    </div>
  );
}
