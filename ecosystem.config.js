module.exports = {
    apps: [
        {
            name: "backend_api",
            script: "./app.js",
            watch: true,
            master: {
                "PORT": 5000,
                "NODE_ENV": "master"
            },
            slave: {
                "PORT": 5000,
                "NODE_ENV": "slave",
            }
        }
    ]
}