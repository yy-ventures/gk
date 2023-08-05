import React from 'react';

import style from './detailSection.module.scss';
import { Button } from '@/shared/components';

const { detailSection, contentContainer, btnContainer } = style;

const DetailSection = () => {
  return (
    <div className={detailSection}>
      <div className={contentContainer}>
        <h1>DetailSection</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga repellat perspiciatis aut officiis dolorum incidunt suscipit velit exercitationem? Voluptas beatae corporis, sit officia sunt cum ad consequuntur suscipit architecto eum.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga repellat perspiciatis aut officiis dolorum incidunt suscipit velit exercitationem? Voluptas beatae corporis, sit officia sunt cum ad consequuntur suscipit architecto eum.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga repellat perspiciatis aut officiis dolorum incidunt suscipit velit exercitationem? Voluptas beatae corporis, sit officia sunt cum ad consequuntur suscipit architecto eum.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga repellat perspiciatis aut officiis dolorum incidunt suscipit velit exercitationem? Voluptas beatae corporis, sit officia sunt cum ad consequuntur suscipit architecto eum.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga repellat perspiciatis aut officiis dolorum incidunt suscipit velit exercitationem? Voluptas beatae corporis, sit officia sunt cum ad consequuntur suscipit architecto eum.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga repellat perspiciatis aut officiis dolorum incidunt suscipit velit exercitationem? Voluptas beatae corporis, sit officia sunt cum ad consequuntur suscipit architecto eum.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga repellat perspiciatis aut officiis dolorum incidunt suscipit velit exercitationem? Voluptas beatae corporis, sit officia sunt cum ad consequuntur suscipit architecto eum.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga repellat perspiciatis aut officiis dolorum incidunt suscipit velit exercitationem? Voluptas beatae corporis, sit officia sunt cum ad consequuntur suscipit architecto eum.</p>
      </div>
      <div className={btnContainer}>
        <Button text='Back' url='/services' btnSecondary/>
      </div>
    </div>
  );
};

export default DetailSection;
