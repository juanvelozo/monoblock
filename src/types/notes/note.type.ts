export interface PublicNote {
    id: number;
    title: string | null;
    description: string | null;
    createdAt: Date;
    tags?: String[]
    updatedAt: Date;
    readonly private?: boolean
}