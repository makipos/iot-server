/*eslint-disable new-cap*/
import React, {Component} from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import SwaggerUIBundle from '../../static/pages/api/swagger-ui-bundle.js';
import SwaggerUIStandalonePreset from '../../static/pages/api/swagger-ui-standalone-preset.js';
import '../../static/pages/api/swagger-ui.css';
import './api.css';

class Swagger extends Component {
  componentDidMount() {
    SwaggerUIBundle({
      url: 'api_doc/swagger.yaml',
      'dom_id': '#swaggerContainer',
      deepLinking: true,
      persistAuthorization: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: 'BaseLayout'
    });
    // SwaggerUi({
    //   dom_id: '#swaggerContainer',
    //   url: 'http://petstore.swagger.io/v2/swagger.json',
    //   presets: [presets.apis],
    // });
  }

  render() {
    return (
      <Layout>
        <div id="swaggerContainer" />
      </Layout>
    );
  }
}

export default Swagger;
