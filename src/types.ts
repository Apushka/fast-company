export interface IProfessions {
    [key: string]: {
        _id: string,
        name: string
    }
}

interface IProfession {
    _id: string,
    name: string
}

export interface IQualities {
    [key: string]: {
        _id: string,
        name: string,
        color: string
    }
}

interface IQuality {
    _id: string,
    name: string,
    color: string
}

export interface IUser {
    _id: string,
    name: string,
    profession: IProfession,
    qualities: IQuality[],
    completedMeetings: number,
    rate: number,
    bookmark: boolean
}