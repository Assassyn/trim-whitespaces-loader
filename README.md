# trim-whitespaces-loader
A quick solution to vue's typescript linting problem where single vue file produces a lot of white spaces.


# Example of use:
```
{
    test: /\.vue$/,
loader: 'vue-loader',
options: {
    loaders: {
    'ts': [
        'vue-ts-loader',
        'tslint-loader?{"emitErrors":true}',
        'trim-whitespaces-loader',
    ],
```