const variant = process.env.APP_VARIANT ?? "development";

const getUniqueIdentifier = () => {
  switch (variant) {
    case "production":
      return "com.lordsama.elikiamarket";

    case "preview":
      return "com.elikiamarket.preview";

    default:
      return "com.elikiamarket.dev";
  }
};

const getAppName = () => {
  switch (variant) {
    case "production":
      return "ElikiaMarket";

    case "preview":
      return "ElikiaMarket Preview";

    default:
      return "ElikiaMarket Dev";
  }
};

export default ({ config }) => ({
  ...config,
  name: getAppName(),
  android: {
    ...config.android,
    package: getUniqueIdentifier(),
  },
});