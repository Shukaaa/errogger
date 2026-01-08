export type SwerrScheme = {
    name: string;
    description: string;
    version: string;
    errors: SwerrSchemeError[];
}

export type SwerrSchemeError = {
    name: string;
    description: string;
    tags: SwerrSchemeTag[];
}

export type SwerrSchemeTag = {
    name: string;
    description: string;
}