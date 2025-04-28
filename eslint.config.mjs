import { defineConfig, globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier"; // Import prettier config

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    { ignores: ["**/*.js", "dist/", "node_modules/"] }, // Refined ignores
    {
        files: ["**/*.{ts,tsx}"], // Apply this config block to TS/TSX files

        plugins: {
            react,
            "@typescript-eslint": typescriptEslint,
            "react-hooks": fixupPluginRules(reactHooks),
            prettier,
            "simple-import-sort": simpleImportSort,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true, // Use jsx here
                },
                project: true, // Add project reference for type-aware rules
                tsconfigRootDir: __dirname, // Specify root directory for tsconfig lookup
            },
        },

        settings: {
            react: {
                version: "detect",
            },
        },

        rules: {
            // ... other existing rules ...
            camelcase: "error",
            "no-duplicate-imports": "error",
            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "react/react-in-jsx-scope": "off",
            "no-console": "warn", // Consider using warn instead of error during development
            "no-alert": "error",
            // Ensure react-hooks rules are correctly specified if not using recommended set
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn", // Changed from off to warn
            "react/prop-types": 0,
            "react/display-name": 0,
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "@typescript-eslint/no-empty-function": "off",
            "react/no-unknown-property": "off",
            "react/no-unescaped-entities": "off", // Corrected typo (removed trailing space)
            "@typescript-eslint/no-unused-vars": "off",

            // Explicitly configure the problematic rule
            "no-unused-expressions": "off", // Disable base ESLint rule
            "@typescript-eslint/no-unused-expressions": ["error", { // Configure TS version
                "allowShortCircuit": true, // Allow callback && callback()
                "allowTernary": true,      // Allow isValid ? foo() : bar()
                "allowTaggedTemplates": true // Allow styled`...`
            }],
            // ... other rules ...
        },
    },
    // Include base recommended rules
    js.configs.recommended,
    // Include Prettier config (disables conflicting rules) - should be near the end
    eslintConfigPrettier,
    // Enable the Prettier rule via the plugin
    {
        plugins: { prettier },
        rules: { "prettier/prettier": "error" }
    }
]);