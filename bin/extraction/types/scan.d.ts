import {SwerrConfig} from "../../core/interfaces/swerr-config.js";

export type ScanResult = {
    rootDir: string;
    blocks: JsdocBlock[];
    scannedFiles: number;
    skippedFiles: number;
};

export type ScanOptions = SwerrConfig["sourceFile"]["options"]