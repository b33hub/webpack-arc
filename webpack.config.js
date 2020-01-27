// Set the event based on the npm script that is running (start, build, test, etc.)
const npmEvent = process.env.npm_lifecycle_event;

// export the specific config for current process
module.exports = require(`./config/webpack.${npmEvent}.config.js`);