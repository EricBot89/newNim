module.exports =  {
    "mode": "production",
    "entry": "./client/index.js",
    "output": {
        "path": __dirname+'/public',
        "filename": "[name].[chunkhash:8].js"
    },
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env",
                            "react"
                        ]
                    }
                }
            }
        ]
    }
}
