
export enum RoutesEnum {
    NOTES = "notes",
    PROFILE ="profile"
}
export enum NoteRoutesEnum {
NOTE_DETAIL = "noteDetail",
EDIT_NOTE = "editNote",
CREATE_NOTE = "createNote",
}

type Routes ={
    [x in RoutesEnum|NoteRoutesEnum]: string
}
export const routes:Routes = {
    notes: "/",
    noteDetail: '/notes/:id',
    createNote:'/notes/new',
    editNote:'/notes/edit/:id',
    profile: "/profile"
}