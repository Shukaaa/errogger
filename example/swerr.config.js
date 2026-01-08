export default {
    sourceFile: {
        meta: {
            projectName: "Muffin API - Error Documentation",
            description: "The API description",
            version: "1.0.5",
        },
        paths: {
            inputDir: "./src/exceptions",
            outputDir: "./docs",
        },
        generatorOptions: {
            ignoreDirs: [],
            whitelistExtensions: [
                ".js"
            ],
        }
    },
    converter: [

    ]
}