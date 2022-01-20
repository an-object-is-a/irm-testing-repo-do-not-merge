/*
  It looks like a previous developer coded a custom function for handling page scrolling.
  It seems that on certain 'marketplace' routes, the website wasn't scrolling to the top automatically.
  The coded solution took a look at which page the user was on and if they navigated to a different 'marketplace'
  route, the JavaScript code would scroll to the top with 'window.scrollTo(0, 0)'.

  While testing, this code doesn't seem like it's needed.
  I've kept it here just in case, however.
*/
/*
exports.shouldUpdateScroll = ({
  routerProps: { location },
  prevRouterProps,
  getSavedScrollPosition
}) => {
  const { pathname } = location;
  const { location: prevLoc } = prevRouterProps || {};
  const currentPosition = prevLoc ? getSavedScrollPosition(prevLoc) : [0, 0];
  const scrollToTopRoutes = [
    `/marketplace`,
    `/marketplace/penetration-testing`, '/marketplace/network-monitoring', '/marketplace/privacy', '/marketplace/password',
    '/marketplace/endpoint-security', '/marketplace/firewall', '/marketplace/safe-browsing',
    '/marketplace/security-mis-configuration', '/marketplace/siem', '/marketplace/vulnerability-assessment',
    '/marketplace/intrusion-detection', '/marketplace/human-security-awareness'
  ];

  if (!prevLoc?.pathname?.includes('/marketplace') || scrollToTopRoutes.indexOf(pathname) === -1) {
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(currentPosition[0], currentPosition[1]);
    return false;
  }
};
*/