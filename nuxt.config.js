/* eslint-disable prettier/prettier */
export default {
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
                href: '/bootstrap/dist/css/bootstrap-reboot.css'
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/bootstrap/dist/css/bootstrap.css'
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/bootstrap/dist/css/bootstrap-grid.css'
            },
            // <!-- Main Font -->
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/css/fonts.css'
            },
            // <!-- Main Styles CSS -->
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/css/main.css'
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/css/style.css'
            }
        ],
        script: [

            {
                src: '/js/webfontloader.min.js'
            },
            // <!-- JS Scripts -->
            {
                src: '/js/jquery-3.2.1.js',
                body: true
            },
            {
                src: '/js/swiper.jquery.js',
                body: true
            },
            {
                src: '/js/bootstrap-select.js',
                body: true
            },
            {
                src: '/js/base-init.js',
                body: true
            },
            {
                src: '/fonts/fontawesome-all.js',
                body: true
            },
            {
                src: '/bootstrap/dist/js/bootstrap.bundle.min.js',
                body: true
            },
            {
                src: '/js/script.js',
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
            dev: true,
            offlineStrategy: 'CacheFirst',
            onlineStrategy: 'NetworkFirst',
        },
        icon: {
            iconSrc: "/coronavirus.png",
            iconFileName: "coronavirus.png",
            sizes: [64, 120, 144, 152, 192, 384, 512],
            targetDir: "icons"
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
            background_color: '#ff5e3a',
            display: 'standalone',
            scope: '/',
            theme_color: '#ff5e3a'
        }
    }
}