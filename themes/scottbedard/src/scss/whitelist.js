// unfortunately, purgecss isn't perfect. it has trouble finding css
// that are composed, inserted as part of jsx, etc... if there are
// classes that are being removed, you can whitelist them here.
// see docs here: https://www.purgecss.com/whitelisting.html
module.exports = [
    // purgecss cannot pick up classes used in index.htm, for maintainability
    // this section of the whitelist should contain only those classes. all
    // other whitelisted classes should be listed below.
    'bg-grey-lighter',
    'font-sans',
    'text-grey-darkest',
];
