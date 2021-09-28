/*eslint-disable new-cap*/
import React, {Component, useEffect} from 'react';
import Layout from '@theme/Layout';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import useIsBrowser from '@docusaurus/useIsBrowser';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import SwaggerUI from 'swagger-ui';
import SwaggerUIStandalonePreset from 'swagger-ui/dist/swagger-ui-standalone-preset.js';
import 'swagger-ui/dist/swagger-ui.css';
import './api.css';


const SwaggerPage = ()=>{
  const swaggerFile = useBaseUrl('/api_doc/swagger.yaml');
  return (
    <Layout>
      <div ref={()=>{
        SwaggerUI({
          url: swaggerFile,
          'dom_id': '#swaggerContainer',
          deepLinking: true,
          persistAuthorization: true,
          presets: [
            SwaggerUI.presets.apis,
            SwaggerUI.SwaggerUIStandalonePreset
          ],
          plugins: [
            SwaggerUI.plugins.DownloadUrl
          ],
          layout: 'BaseLayout'
        });
      }} id="swaggerContainer" />
    </Layout>
  );
};


export default SwaggerPage;
