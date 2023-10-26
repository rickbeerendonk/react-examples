/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

function formatUrl(url) {
  // Dynamically find the start of the path after the domain and port
  const protocolEndIndex = url.indexOf('//') + 2;
  const pathStartIndex = url.indexOf('/', protocolEndIndex);

  // Find the end of the relevant part, marked by '/esbuild'
  const endPath = '/esbuild';
  const pathEndIndex = url.indexOf(endPath, pathStartIndex);

  // Extract, decode, and format the relevant part of the URL
  let relevantPart = url.slice(pathStartIndex + 1, pathEndIndex);
  return decodeURIComponent(relevantPart).replace(/\//g, ' | ');
}

document.title = formatUrl(document.URL);
