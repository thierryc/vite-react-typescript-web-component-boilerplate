import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';

export default {
  plugins: [
    postcssPresetEnv({
      stage: 3, // Use Stage 3 features
      features: {
        'nesting-rules': true, // Enable CSS nesting
      },
      browsers: 'last 2 versions', // Browser targets
    }),
    cssnano({
      preset: 'default', // Default minification settings
    }),
  ],
};