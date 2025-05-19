import { defineConfig } from "vite";
import path from "path";
import fs from "fs";

const input = fs.readdirSync(path.resolve("./client/pages")).reduce((acc, file) => {
    const name = file.replace(/\.html$/, "");
    const filePath = path.resolve("./client/pages", file);

    acc[name] = filePath;
    return acc;
}, {})

const config = defineConfig({
    root: './client',
    build: {
        assetsDir: "_",
        outDir: path.resolve("./dist/client"),
        rollupOptions: {
            input,
            output: {

                entryFileNames: "_/[hash].js",
                chunkFileNames: "_/[hash].js",
                assetFileNames: "_/[hash][extname]",
            },
        }
    }

})

export default config;