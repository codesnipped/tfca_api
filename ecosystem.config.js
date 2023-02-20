module.exports = {
    apps: [
        {
            name: "backend_api",
            script: "./app.js",
            watch: true,
            dev: {
                "PORT": 5000,
                "NODE_ENV": "dev"
            },
            prod: {
                "PORT": 5000,
                "NODE_ENV": "prod",
            },
        }
    ]
}