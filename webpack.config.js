import sass from 'sass';
import fibers from 'fibers';

module.exports = {
  rules: [
    {
      test: /\.sass$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: sass,
            fiber: fibers,
            indentedSyntax: true, // optional
          },
        },
      ],
    },
  ],
};
