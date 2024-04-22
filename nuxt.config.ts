export default defineNuxtConfig({
    // ssr: false,
    nitro: {
        // plugins: ['~/server/database.ts'],
        // 代理配置
        devProxy: {
            "/proxy/weixin": {
                target: "https://mp.weixin.qq.com/",
                changeOrigin: true,
            },
        },
    },
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1.0",
            meta: [
                { name: "description", content: "pangu" },
                {
                    name: "keywords",
                    content: "Pangu-Network",
                },
            ],
            link: [
                { rel: 'icon', type: 'image/jpg', href: '/favicon.jpg' },
            ],
            noscript: [{ children: "JavaScript is required" }]
        }
    },
    css: [
        "@/assets/main.scss"
    ],
    plugins: [
        "@/plugins/directives",
    ],
    modules: [
        "@element-plus/nuxt",
        "@nuxt/image",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    tiptap: {
        prefix: "Tiptap", //prefix for Tiptap imports, composables not included
    },
    elementPlus: {
        icon: "ElIcon",
    },
    vite: {
        // 打包后清除console和debugger，注意：server下文件的不会删除
        esbuild: {
          // drop: ["console", "debugger"],
        },
    },
    postcss: {
        plugins: {
          "postcss-preset-env": {
                stage: 1,
                // 自动补全CSS前缀
                autoprefixer: {
                    overrideBrowserslist: [
                        "> 0%", // 表示支持市面上多少比例的浏览器
                        // "Android > 4.1",
                        // "iOS > 7.1",
                        // "Chrome > 31",
                        // "ff > 31",
                        // "ie >= 10",
                        //'last 2 versions', // 所有主流浏览器最近2个版本
                    ],
                    grid: true,
                },
            }
        },
    },
    render: {
        csp: {
            policies: {
                'script-src': ["'self'", "'unsafe-eval'"],
            },
        },
    },
});
