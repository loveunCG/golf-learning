export enum MessageType {
    MessageText = 0,
    MessageImage,
    MessageVideo
}
export enum MessageStatus {
    Unread = 0,
    Read
}
export class Message {
    id: number;
    type: number;
    message: string;
    ext: string;
    created_at: Date;
    sender: number;
    receiver: string;
    status: number;
}

export class Contact {
    id: number;
    name: string;
    image: string;
    message: string;
    time: Date;
    diff_time: Date;
    unreads: number;
}