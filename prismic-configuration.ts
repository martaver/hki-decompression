// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const repoName = `hki-decompression`
export const repoUrl = `https://${repoName}.cdn.prismic.io`;
export const apiEndpoint = `${repoUrl}/api`
export const graphqlEndpoint = `${repoUrl}/graphql`

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc: any) => {
  if (doc.type === 'page') {
    return `/${doc.lang}/${doc.uid}`;
  }
  if (doc.type === 'homepage') {
    return `/${doc.lang}`;
  }
  return '/';
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc: any) => {
  if (doc.type === 'page') {
    return `/${doc.lang}/${doc.uid}`;
  }
  if (doc.type === 'homepage') {
    return `/${doc.lang}`;
  }
  return '/';
}
