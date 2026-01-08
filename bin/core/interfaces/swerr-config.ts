export interface SwerrConfig {
    sourceFile: {
        meta: {
            projectName: string | null;
            version: string | null;
            description: string | null;
        };
        paths: {
            inputDir: string | null;
            outputDir: string | null;
        };
        options: {
            ignoreDirs: string[] | null;
            whitelistExtensions: string[] | null;
        }
    },
    converter: ConverterFn<any>[] | null
}

export type ConverterFn<CFG> = (args: CFG) => void;
