const merge = require('webpack-merge');
const customCompile = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    }
};

export default {
    public: './docs/assets',
    title: 'TM React',
    description: 'This is React Material UI, UI Projects',
    themeConfig: {
        colors: {
            primary: 'tomato',
        },
    },
    base: "/tm-react-doc/",
    files: '**/*.{md,markdown,mdx}',
    plugins: [],
    dest: './../../docs',
    modifyBundlerConfig: config => {
        return merge(config, customCompile);
    },
    menu: [
        "Bismillah",
        {
            name: "JSON API",
            menu: [
                'API Request Response'
            ]
        },
        {
            name: 'TM React',
            menu: [
                'Layout',
                'Layout Renderer',

                'Page',
                'Page Manager',
                'React Component',
                'TR Component',

                'URL Mapping',

                'App Config',
                'Before Render View',
                'Page Not Found',
                'Suspense Loader',

                'Browser Storage',
                'Axios',
                'Util',
            ]
        }
    ]
}
