module.exports = {
  reactScriptsVersion: "react-scripts",
  webpack: {
    configure: (webpackConfig) => {
      // Allow extension-less ESM imports like 'react/jsx-runtime'
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        fullySpecified: false,
      };

      const applyResolveFlag = (rules) => {
        if (!Array.isArray(rules)) {
          return;
        }

        rules.forEach((rule) => {
          if (!rule || typeof rule !== "object") {
            return;
          }

          if (rule.test || rule.include || rule.exclude || rule.oneOf || rule.rules) {
            rule.resolve = {
              ...rule.resolve,
              fullySpecified: false,
            };
          }

          if (rule.oneOf) {
            applyResolveFlag(rule.oneOf);
          }

          if (rule.rules) {
            applyResolveFlag(rule.rules);
          }
        });
      };

      applyResolveFlag(webpackConfig.module.rules);

      return webpackConfig;
    },
  },
  style: {
    css: {
      loaderOptions: () => {
        return {
          url: false,
        };
      },
    },
  },
};
