// TYPES
import type { ChatMessageType } from "./chat/chatMessageType.type";
import type { OnlineUserType } from "./user/onlineUserType.type";

export type WsMessageType =
  | { type: 'users_online'; data: OnlineUserType[] }
  | { type: 'set_user'; data: { name: string } }
  | { type: 'chat_update'; data: ChatMessageType[] }
  | { type: 'moviment'; data: any }
