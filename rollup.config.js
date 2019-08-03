import typescript from 'rollup-plugin-typescript2';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';

export default {
    input: ['./src/main.ts'],
    output: {
        format: 'esm',
        dir: 'dist',
    },

    plugins: [
        typescript(),
        postcss({ extendions: ['.css'], plugins: [postcssImport] }),
        serve({
            contentBase: 'dist',
            open: true,
        }),
        livereload({ watch: 'dist' }),
    ],
};