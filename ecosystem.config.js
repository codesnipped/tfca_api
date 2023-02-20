module.exports = {
    apps: [
        {
            name: "backend_api",
            script: "./app.js",
            watch: true,
            development: {
                "PORT": 5000,
                "NODE_ENV": "development"
            },
            production: {
                "PORT": 5000,
                "NODE_ENV": "production",
            },
        }
    ]
}