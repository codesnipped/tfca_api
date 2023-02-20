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
            }
        }
    ]
}

module.exports = {
    apps: [{
        name: "backend_api",
        script: "./app.js",
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        }
    }]
}