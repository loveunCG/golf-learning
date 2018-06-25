export class Playitem {
    id: number;
    playlist_id: number;
    video_uid: number;
    name: string;
}
export class Playlist {
    id: number;
    user_id: number;
    name: string;
    is_expand: boolean;
    playitems: Playitem[];
}
