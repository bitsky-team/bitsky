module.exports = {
    env: {
        es6: true,
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint'],
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'no-unused-vars': 'off',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: false,
            },
        ],
        '@typescript-eslint/no-floating-promises': [
            'error',
            {
                ignoreVoid: false,
            },
        ],
        '@typescript-eslint/no-misused-promises': ['error'],
        '@typescript-eslint/no-require-imports': ['error'],
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: true,
                allowedNames: ['self'],
            },
        ],
        '@typescript-eslint/no-throw-literal': ['error'],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
        '@typescript-eslint/no-unused-vars-experimental': ['error'],
        '@typescript-eslint/no-var-requires': ['error'],
        '@typescript-eslint/prefer-includes': ['error'],
        '@typescript-eslint/prefer-nullish-coalescing': ['error'],
        '@typescript-eslint/prefer-optional-chain': ['error'],
        '@typescript-eslint/prefer-regexp-exec': ['error'],
        '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
        '@typescript-eslint/promise-function-async': [
            'error',
            {
                allowedPromiseNames: ['Thenable'],
                checkArrowFunctions: true,
                checkFunctionDeclarations: true,
                checkFunctionExpressions: true,
                checkMethodDeclarations: true,
            },
        ],
        '@typescript-eslint/restrict-plus-operands': ['error'],
        '@typescript-eslint/restrict-template-expressions': ['error'],
        '@typescript-eslint/type-annotation-spacing': ['error'],
        '@typescript-eslint/typedef': [
            'error',
            {
                arrayDestructuring: true,
                arrowParameter: true,
                memberVariableDeclaration: true,
                objectDestructuring: true,
                parameter: true,
                propertyDeclaration: true,
                variableDeclaration: false,
                variableDeclarationIgnoreFunction: false,
            },
        ],
        '@typescript-eslint/unified-signatures': ['error'],
    },
    overrides: [
        {
            // enable the rule specifically for TypeScript files
            files: ['*.ts'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': [
                    'error',
                    {
                        allowExpressions: true,
                    },
                ],
            },
        },
    ],
}
