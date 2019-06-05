module.exports =  {
    "mode": "development",
    "entry": ["babel-polyfill","./client/index.js"],
    "output": {
        "path": __dirname+'/public',
        "filename": "bundle.js"
    },
    "devtool": "source-map",
    "module": {
        "rules": [
/*            {
                "enforce": "pre",
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": "eslint-loader"
            },*/
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
