const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "xxx",
        mongodb_password: "xxx",
        mongodb_clustername: "xxx",
        mongodb_database: "xxx",
      },
    };
  }

  return {};
};
