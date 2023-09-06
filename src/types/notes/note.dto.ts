export interface ICreateNoteDTO{
    title?: string | null
    description?: string | null
    tags?: String[]
    updatedAt?: Date;
    readonly private?: boolean
}