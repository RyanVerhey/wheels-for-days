import React from 'react';
import { SectionsList } from '../interfaces';

interface WheelFormProps {
  sections: SectionsList;
  onUpdate: (sections: SectionsList) => void;
}

const WheelForm: React.FunctionComponent<WheelFormProps> = ({ sections, onUpdate }): JSX.Element => {
  return (
    <div className='wheelForm'>
      <textarea
        value={sections.join(String.fromCharCode(13, 10))}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => onUpdate(event.target.value.split(/\r?\n/))}
      />
    </div>
  );
}

export default WheelForm;
