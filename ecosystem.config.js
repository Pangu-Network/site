module.exports = {
    apps: [
        {
            name: 'Pangu-Network',
            port: '3002',
            exec_mode: 'cluster',
            instances: '3',
            script: './.output/server/index.mjs'
        }
    ]
}
