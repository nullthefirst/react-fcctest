import React from 'react';
import { Helmet } from 'react-helmet';

const ReactFCCtest = () => {
  return (
    <div>
      <Helmet>
        <script type="text/javascript" 
                src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" >
        </script>
      </Helmet>
    </div>
  );
};

export default ReactFCCtest;