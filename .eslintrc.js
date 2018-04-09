module.exports = {
    "env": {
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab",
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-filename-extension": 0,
        "function-paren-newline": 0,
        "linebreak-style": 0,
        "import/extensions": 0,
        "react/require-default-props": 0,
        "react/jsx-indent": 0,
        "indent": 0,
    }
};