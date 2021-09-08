import * as React from 'react';
import { SectionsList } from '../interfaces';

interface WheelFormProps {
  sections: SectionsList;
  onUpdate: (sections: SectionsList) => void;
}

const WheelForm: React.FC<WheelFormProps> = ({ sections, onUpdate }) => {
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
