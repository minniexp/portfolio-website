import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { renderToString } from 'react-dom/server';

const icon = renderToString(
  <FontAwesomeIcon icon={faFile} style={{ color: '#383838' }} />
);

// Save the SVG string as favicon.ico in the public directory
// You'll need to use a conversion tool to convert SVG to ICO format