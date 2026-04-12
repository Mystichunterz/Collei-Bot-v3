module.exports = {
    apps: [{
        name: "Collei-Bot-v3",
        script: "index.js",
        interpreter: "/home/pi/.nvm/versions/node/v20.11.1/bin/node",
        env: {
            NODE_ENV: "production"
        }
    }]
}
