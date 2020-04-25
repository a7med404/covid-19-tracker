/* eslint-disable prettier/prettier */
export default {
    // universal or spa
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
            { name: 'apple-mobile-web-app-title', content: 'COVID-19' },
            {
                viewport: 'width=device-width, initial-scale=1, user-scalable=no',
                mobileAppIOS: true
            }
        ],

        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            // <!-- Bootstrap CSS -->
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/css/bootstrap/bootstrap.css'
            },
            // <!-- Main Styles CSS -->
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/css/main.min.css'
            },
            // <!-- place this in a head section -->
            {
                rel: 'apple-touch-startup-image',
                href: '/coronavirus.png'
            }
            // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
            // { rel: 'apple-touch-icon', href: 'icon-152x152.png' },
            // { rel: "apple-touch-startup-image", href: "launch-1125x2436.png", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" },
            // { rel: "apple-touch-startup-image", href: "launch-750x1334.png", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" },
            // { rel: "apple-touch-startup-image", href: "launch-1242x2208.png", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)" },
            // { rel: "apple-touch-startup-image", href: "launch-640x1136.png", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" }
        ],

        script: [{
                src: '/js/webfontloader.min.js'
            },
            // <!-- JS Scripts -->
            {
                src: '/js/jquery-3.2.1.js',
                body: true
            },
            {
                src: '/js/bootstrap-select.js',
                body: true
            },
            {
                src: '/fonts/fontawesome-all.js',
                body: true
            },
            {
                src: '/js/bootstrap/bootstrap.bundle.min.js',
                body: true
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#ff5e3a'
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv'
    ],
    'no-console': 'off',
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    pwa: {
        workbox: {
            // dev: true,
            // offline: true,
            // offlineStrategy: 'NetworkFirst',
            // onlineStrategy: 'NetworkFirst',
            // globPatterns: ['**/*.{js,css}', '**/img/*'],
            offlinePage: 'off-line',
            offlineAssets: [
                // '/',
                'coronavirus.png',
                'img/breath.png',
                'img/sneeze.png',
                'img/fever.png',
                'img/headache.png',
                'img/chills.png',
                'img/fatigue.png',
                'svg-icons/back-to-top.svg',
                'css/bootstrap/bootstrap.css',
                'css/main.min.css',
                'js/bootstrap/bootstrap.bundle.min.js',
                'js/jquery-3.2.1.js',
                'js/bootstrap-select.js'
            ]
        },
        generate: {
            fallback: true
        },
        icon: {
            iconSrc: '/coronavirus.png',
            iconFileName: 'coronavirus.png',
            sizes: [64, 120, 144, 152, 192, 384, 512],
            targetDir: 'icons',
            purpose: 'any '
        },
        manifest: {
            short_name: 'COVID-19',
            name: 'COVID-19 Tracker',
            description: 'covid-19 tracker app for information',
            categories: ['education', 'medical'],
            orientation: 'portrait-primary',
            dir: 'auto',
            lang: 'en',
            start_url: '/?source=pwa',
            background_color: '#f4f4f4',
            display: 'standalone',
            scope: '/',
            theme_color: '#f7f7f7'
        }
    },
    /*
     ** Allow dev tools in production
     */
    vue: {
        config: {
            productionTip: false,
            devtools: true
        }
    }
}