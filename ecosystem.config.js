module.exports = {
    apps: [
        {
            name: "backend_api",
            script: "./app.js",
            watch: true,
            dev: {
                "PORT": 5000,
                "NODE_ENV": "development"
            },
            prod: {
                "PORT": 5000,
                "NODE_ENV": "production",
            },
            rp: {
                "PORT": 5000,
                "NODE_ENV": "rp",
            },
        }
    ]
}