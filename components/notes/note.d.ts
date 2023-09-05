export interface Note {
  id?: string;
  dateCreated: Date;
  dateLastUpdated: Date;
  title: string;
  content: JSONContent;
}
