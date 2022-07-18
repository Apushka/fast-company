export interface IProfessions {
  [key: string]: IProfession;
}

interface IProfession {
  _id: string;
  name: string;
}

export interface IQualities {
  [key: string]: IQuality;
}

export interface IQuality {
  _id: string;
  name: string;
  color: string;
}

export interface IUser {
  _id: string;
  name: string;
  profession: IProfession;
  qualities: IQuality[];
  completedMeetings: number;
  rate: number;
  bookmark: boolean;
}

export type handleToogleBookMark = (id: string) => void;
export type handleDelete = (id: string) => void;
