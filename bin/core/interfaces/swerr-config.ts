export interface SwerrConfig {
    sourceFile: {
        inputDir?: string;
        meta?: {
            projectName?: string;
            version?: string;
            description?: string;
        };
        export?: {
            saveToFile?: boolean;
            fileName?: string;
            outputDir?: string;
        };
        options?: {
            ignoreDirs?: string[];
            whitelistExtensions?: string[];
        }
    },
    converter: ConverterFn<any>[]
}

export type ConverterFn<CFG> = (args: CFG) => void;
