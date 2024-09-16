export type Character = {
    id: number;
    picture: string;
    gridPicture: string;
    country: string;
    selected: boolean;
    iconPosition: { top: number; left: number; width: number; height: number };
};
