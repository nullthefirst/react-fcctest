import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Reactest extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <script type="text/javascript" 
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" >
          </script>
        </Helmet>
      </div>
    );
  }
};