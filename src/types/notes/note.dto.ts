export interface ICreateNoteDTO{
    title?: string | null
    description?: string | null
    tags?: String[] | undefined
    updatedAt?: Date;
    readonly private?: boolean
}