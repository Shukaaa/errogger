import {markdownConverter} from "@swerr/converter"

export default {
    sourceFile: {
        inputDir: "./src/exceptions",
        meta: {
            projectName: "Muffin API",
            description: "The API description",
            version: "1.0.5",
        },
        export: {
            saveToFile: true,
            fileName: "swerr-source.json",
            outputDir: "./docs",
        },
        options: {
            ignoreDirs: [],
            whitelistExtensions: [
                ".js"
            ],
        }
    },
    converter: [
        {
            factory: markdownConverter,
            config: {
                outputPath: "./docs",
            }
        }
    ]
}