import React from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';

const ReactFCCtest = () => {
  return (
    <div>
      <Helmet>
        <script type="text/javascript" 
                src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" >
        </script>
      </Helmet>
      <h5>react-fcctest running</h5>
    </div>
  );
};

export default ReactFCCtest;