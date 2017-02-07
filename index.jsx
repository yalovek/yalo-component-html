import React, { PropTypes } from 'react';

function Html({ title, description, children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
      </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default Html;
