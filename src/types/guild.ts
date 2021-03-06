import { Guild } from "../api/structures/mod.ts";
import { ChannelCreatePayload, ChannelTypes } from "./channel.ts";
import { Emoji, StatusType } from "./discord.ts";
import { MemberCreatePayload } from "./member.ts";
import { Activity, Application } from "./message.ts";
import { Permission } from "./permission.ts";
import { ClientStatusPayload } from "./presence.ts";
import { RoleData } from "./role.ts";

export interface GuildRolePayload {
  /** The id of the guild */
  guild_id: string;
  /** The role object of the role created, deleted, or updated */
  role: RoleData;
}

export interface GuildRoleDeletePayload {
  /** The id of the guild */
  guild_id: string;
  /** The id of the role */
  role_id: string;
}

export interface GuildMemberChunkPayload {
  /** The id of the guild */
  guild_id: string;
  /** The set of guild members */
  members: MemberCreatePayload[];
  /** The chunk index in the expected chunks for this response */
  chunk_index: number;
  /** The total number of expected chunks for this response */
  chunk_count: number;
  /** if passing an invalid id, it will be found here */
  not_found?: string[];
  /** if passing true, presences of the members will be here */
  presences?: Presence[];
  /** The nonce to help identify */
  nonce?: string;
}

export interface GuildMemberUpdatePayload {
  /** The id of the guild */
  guild_id: string;
  /** The user's role ids */
  roles: string[];
  /** The user */
  user: UserPayload;
  /** The nickname of the user in the guild */
  nick: string;
  /** When the user used their nitro boost on the guild. */
  premium_since: string | null;
  /** whether the user has not yet passed the guild's Membership Screening requirements */
  pending?: boolean;
}

export interface GuildMemberAddPayload extends MemberCreatePayload {
  guild_id: string;
}

export interface GuildEmojisUpdatePayload {
  guild_id: string;
  emojis: Emoji[];
}

export interface GuildBanPayload {
  /** The id of the guild */
  guild_id: string;
  /** The banned user. Not a member as you can ban users outside of your guild. */
  user: UserPayload;
}

export interface GuildDeletePayload {
  /** The id of the guild */
  id: string;
  /** Whether this guild went unavailable. */
  unavailable?: boolean;
}

export interface UpdateGuildPayload {
  /** The guild id */
  id: string;
  /** The guild name 2-100 characters */
  name: string;
  /** The guild icon image hash */
  icon: string | null;
  /** The guild splash image hash */
  splash: string | null;
  /** Discovery splash has; only present for guilds with the "DISCOVERABLE" feature */
  disovery_splash: string | null;
  /** The id of the owner */
  owner_id: string;
  /** The voice region id for the guild */
  region: string;
  /** The afk channel id */
  afk_channel_id: string | null;
  /** AFK Timeout in seconds. */
  afk_timeout: number;
  /** The verification level required for the guild */
  verification_level: number;
  /** Default message notifications level */
  default_message_notifications: number;
  /** Explicit content filter level */
  explicit_content_filter: number;
  /** The roles in the guild */
  roles: RoleData[];
  /** The custom guild emojis */
  emojis: Emoji[];
  /** Enabled guild features */
  features: GuildFeatures[];
  /** Required MFA level for the guild */
  mfa_level: number;
  /** True if the server widget is enabled */
  widget_enabled?: boolean;
  /** The channel id that the widget will generate an invite to, or null if set to no invite. */
  widget_channel_id?: string | null;
  /** The id of the channel to which system mesages are sent */
  system_channel_id: string | null;
  /** System channel flags */
  system_channel_flags: number;
  /** The id of the channel where guilds with the PUBLIC feature can display rules and or guidelines. */
  rules_channel_id: string | null;
  /** The maximum amount of presences for the guild(the default value, currently 5000 is in effect when null is returned.) */
  max_presences?: number | null;
  /** The maximum amount of members for the guild */
  max_members?: number;
  /** The vanity url code for the guild */
  vanity_url_code: string | null;
  /** The description for the guild */
  description: string | null;
  /** The banner hash */
  banner: string | null;
  /** The premium tier */
  premium_tier: number;
  /** The total number of users currently boosting this server. */
  premium_subscription_count: number;
  /** The preferred local of this guild only set if guild has the DISCOVERABLE feature, defaults to en-US */
  preferred_locale: string;
  /** The id of the channel where admins and moderators of guilds with the PUBLIC feature receive notices from Discord */
  public_updates_channel_id: string | null;
  /** The maximum amount of users in a video channel. */
  max_video_channel_users?: number;
  /** The approximate number of members in this guild, returned from the GET /guild/id endpoint when with_counts is true */
  approximate_member_count?: number;
  /** The approximate number of non-offline members in this guild, returned from the GET /guild/id endpoint when with_counts is true */
  approximate_presence_count?: number;
}

export interface CreateGuildPayload extends UpdateGuildPayload {
  /** When this guild was joined at */
  joined_at: string;
  /** Whether this is considered a large guild */
  large: boolean;
  /** Whether this guild is unavailable */
  unavailable: boolean;
  /** Total number of members in this guild */
  member_count?: number;
  voice_states: VoiceState[];
  /** Users in the guild */
  members: MemberCreatePayload[];
  /** Channels in the guild */
  channels: ChannelCreatePayload[];
  presences: Presence[];
}

export type GuildFeatures =
  | "INVITE_SPLASH"
  | "VIP_REGIONS"
  | "VANITY_URL"
  | "VERIFIED"
  | "PARTNERED"
  | "PUBLIC"
  | "COMMERCE"
  | "NEWS"
  | "DISCOVERABLE"
  | "FEATURABLE"
  | "ANIMATED_ICON"
  | "BANNER"
  /** guild has enabled Membership Screening */
  | "MEMBER_VERIFICATION_GATE_ENABLED"
  /** guild can be previewed before joining via Membership Screening or the directory */
  | "PREVIEW_ENABLED";

export interface VoiceRegion {
  /** unique ID for the region */
  id: string;
  /** name of the region */
  name: string;
  /** true if this is a vip-only server */
  vip: boolean;
  /** true for a single server that is closest to the current user's client */
  optimal: boolean;
  /** whether this is a deprecated voice region (avoid switching to these) */
  deprecated: boolean;
  /** whether this is a custom voice region (used for events/etc) */
  custom: boolean;
}

export interface BanOptions {
  /** number of days to delete messages for (0-7) */
  days?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /** The reason for the ban. */
  reason?: string;
}

export interface BannedUser {
  /** The reason for the ban */
  reason?: string;
  /** The banned user object */
  user: UserPayload;
}

export interface PositionSwap {
  /** The unique id */
  id: string;
  /** The sorting position number. */
  position: number;
}

export interface GuildEditOptions {
  /** The guild name */
  name?: string;
  /** The guild voice region id */
  region?: string;
  /** The verification level. 0 is UNRESTRICTED. 1 is Verified email. 2 is 5 minutes user. 3 is 10 minutes member in guild. 4 is verified phone number */
  verification_level?: 0 | 1 | 2 | 3;
  /** The default message notification level. 0 is ALL_MESSAGES and 1 is ONLY_MENTINS */
  default_message_notifications?: 0 | 1;
  /** Explicit content filter level. 0 is DISABLED 1 is members without roles. 2 is all members */
  explicit_content_filter?: 0 | 1 | 2;
  /** The id for the afk channel. */
  afk_channel_id?: string;
  /** The afk timeout in seconds. */
  afk_timeout?: number;
  /** If a URL is provided to the image parameter, Discordeno will automatically convert it to a base64 string internally. base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when the server has ANIMATED_ICON feature) */
  icon?: string;
  /** user id to transfer guild ownership to (must be owner) */
  owner_id?: string;
  /** If a URL is provided to the image parameter, Discordeno will automatically convert it to a base64 string internally. base64 16:9 png/jpeg image for the guild splash (when the server has INVITE_SPLASH feature) */
  splash?: string;
  /** If a URL is provided to the image parameter, Discordeno will automatically convert it to a base64 string internally. base64 16:9 png/jpeg image for the guild banner (when the server has BANNER feature) */
  banner?: string;
  /** the id of the channel to which system messages are sent */
  system_channel_id?: string;
}

export interface EditIntegrationOptions {
  /** The behavior when an integration subscription lapses. */
  expire_behavior: number;
  /** The period in seconds where the integration will ignore lapsed subscriptions */
  expire_grace_period: number;
  /** Whether emoticons should be synced for this integrations (twitch only currently) */
  enable_emoticons: boolean;
}

export interface Integration {
  /** The integrations unique id */
  id: string;
  /** the integrations name */
  name: string;
  /** The integration type like twitch, youtube etc */
  type: string;
  /** Is this integration enabled */
  enabled: boolean;
  /** is this integration syncing */
  syncing?: boolean;
  /** id that this integration uses for "subscribers" */
  role_id?: string;
  /** whether emoticons should be synced for this integration (twitch only currently) */
  enable_emoticons?: boolean;
  /** The behavior of expiring subscribers */
  expire_behavior?: IntegrationExpireBehaviors;
  /** The grace period before expiring subscribers */
  expire_grace_period?: number;
  /** The user for this integration */
  user?: UserPayload;
  /** The integration account information */
  account: Account;
  /** When this integration was last synced */
  synced_at?: string;
  /** how many subscribers this integration has */
  subscriber_count?: number;
  /** has this integration been revoked */
  revoked?: boolean;
  /** The bot/OAuth2 application for discord integrations */
  application?: Application;
}

export enum IntegrationExpireBehaviors {
  RemoveRole,
  Kick,
}

export interface Account {
  /** id of the account */
  id: string;
  /** name of the account */
  name: string;
}

export interface UserPayload {
  /** The user's id */
  id: string;
  /** the user's username, not unique across the platform */
  username: string;
  /** The user's 4 digit discord tag */
  discriminator: string;
  /** The user's avatar hash */
  avatar: string | null;
  /** Whether the user is a bot */
  bot?: boolean;
  /** Whether the user is an official discord system user (part of the urgent message system.) */
  system?: boolean;
  /** Whether the user has two factor enabled on their account */
  mfa_enabled?: boolean;
  /** the user's chosen language option */
  locale?: string;
  /** Whether the email on this account has been verified */
  verified?: boolean;
  /** The user's email */
  email?: string;
  /** The flags on a user's account. */
  flags?: number;
  /** The type of Nitro subscription on a user's account. */
  premium_type?: number;
}

export interface PartialUser {
  /** The user's id */
  id: string;
  /** the user's username, not unique across the platform */
  username?: string;
  /** The user's 4 digit discord tag */
  discriminator?: string;
  /** The user's avatar hash */
  avatar?: string | null;
  /** Whether the user is a bot */
  bot?: boolean;
  /** Whether the user is an official discord system user (part of the urgent message system.) */
  system?: boolean;
  /** Whether the user has two factor enabled on their account */
  mfa_enabled?: boolean;
  /** the user's chosen language option */
  locale?: string;
  /** Whether the email on this account has been verified */
  verified?: boolean;
  /** The user's email */
  email?: string;
  /** The flags on a user's account. */
  flags?: number;
  /** The type of Nitro subscription on a user's account. */
  premium_type?: number;
}

export enum UserFlags {
  NONE,
  DISCORD_EMPLOYEE,
  DISCORD_PARTNER,
  HYPE_SQUAD_EVENTS = 1 << 2,
  BUG_HUNTER = 1 << 3,
  HOUSE_BRAVERY = 1 << 6,
  HOUSE_BRILLIANCE = 1 << 7,
  HOUSE_BALANCE = 1 << 8,
  EARLY_SUPPORTER = 1 << 9,
  TEAM_USER = 1 << 10,
  SYSTEM = 1 << 12,
}

export enum NitroTypes {
  NITRO_CLASSIC = 1,
  NITRO,
}

export interface VanityInvite {
  code: string | null;
  uses: number;
}

export interface GuildEmbed {
  /** Whether the embed is enabled. */
  enabled: boolean;
}

export interface GetAuditLogsOptions {
  /** Filter the logs for actions made by this user. */
  user_id?: string;
  /** The type of audit log. */
  action_type?: AuditLogType;
  /** Filter the logs before a certain log entry. */
  before?: string;
  /** How many entries are returned. Between 1-100. Default 50. */
  limit?: number;
}

export type AuditLogType =
  | "GUILD_UPDATE"
  | "CHANNEL_CREATE"
  | "CHANNEL_UPDATE"
  | "CHANNEL_DELETE"
  | "CHANNEL_OVERWRITE_CREATE"
  | "CHANNEL_OVERWRITE_UPDATE"
  | "CHANNEL_OVERWRITE_DELETE"
  | "MEMBER_KICK"
  | "MEMBER_PRUNE"
  | "MEMBER_BAN_ADD"
  | "MEMBER_BAN_REMOVE"
  | "MEMBER_UPDATE"
  | "MEMBER_ROLE_UPDATE"
  | "MEMBER_MOVE"
  | "MEMBER_DISCONNECT"
  | "BOT_ADD"
  | "ROLE_CREATE"
  | "ROLE_UPDATE"
  | "ROLE_DELETE"
  | "INVITE_CREATE"
  | "INVITE_UPDATE"
  | "INVITE_DELETE"
  | "WEBHOOK_CREATE"
  | "WEBHOOK_UPDATE"
  | "WEBHOOK_DELETE"
  | "EMOJI_CREATE"
  | "EMOJI_UPDATE"
  | "EMOJI_DELETE"
  | "MESSAGE_DELETE"
  | "MESSAGE_BULK_DELETE"
  | "MESSAGE_PIN"
  | "MESSAGE_UNPIN"
  | "INTEGRATION_CREATE"
  | "INTEGRATION_UPDATE"
  | "INTEGRATION_DELETE";

export enum AuditLogs {
  GUILD_UPDATE = 1,
  CHANNEL_CREATE = 10,
  CHANNEL_UPDATE,
  CHANNEL_DELETE,
  CHANNEL_OVERWRITE_CREATE,
  CHANNEL_OVERWRITE_UPDATE,
  CHANNEL_OVERWRITE_DELETE,
  MEMBER_KICK = 20,
  MEMBER_PRUNE,
  MEMBER_BAN_ADD,
  MEMBER_BAN_REMOVE,
  MEMBER_UPDATE,
  MEMBER_ROLE_UPDATE,
  MEMBER_MOVE,
  MEMBER_DISCONNECT,
  BOT_ADD,
  ROLE_CREATE = 30,
  ROLE_UPDATE,
  ROLE_DELETE,
  INVITE_CREATE = 40,
  INVITE_UPDATE,
  INVITE_DELETE,
  WEBHOOK_CREATE = 50,
  WEBHOOK_UPDATE,
  WEBHOOK_DELETE,
  EMOJI_CREATE = 60,
  EMOJI_UPDATE,
  EMOJI_DELETE,
  MESSAGE_DELETE = 72,
  MESSAGE_BULK_DELETE,
  MESSAGE_PIN,
  MESSAGE_UNPIN,
  INTEGRATION_CREATE = 80,
  INTEGRATION_UPDATE,
  INTEGRATION_DELETE,
}

export interface Overwrite {
  /** The role or user id */
  id: string;
  /** Whether this is a role or a member */
  type: OverwriteType;
  /** The permissions that this id is allowed to do. (This will mark it as a green check.) */
  allow: Permission[];
  /** The permissions that this id is NOT allowed to do. (This will mark it as a red x.) */
  deny: Permission[];
}

export enum OverwriteType {
  ROLE,
  MEMBER,
}

export interface RawOverwrite {
  /** The role or user id */
  id: string;
  /** Whether this is a role or a member */
  type: OverwriteType;
  /** The permissions that this id is allowed to do. (This will mark it as a green check.) */
  allow: string;
  /** The permissions that this id is NOT allowed to do. (This will mark it as a red x.) */
  deny: string;
}

export interface PermissionOverwrite
  extends Omit<RawOverwrite, "allow" | "deny"> {
  allow: Permission[];
  deny: Permission[];
}

export interface ChannelCreateOptions {
  /** The type of the channel */
  type?: ChannelTypes;
  /** The channel topic. (0-1024 characters) */
  topic?: string;
  /** The bitrate(in bits) of the voice channel. */
  bitrate?: number;
  /** The user limit of the voice channel. */
  user_limit?: number;
  /** The amount of seconds a user has to wait before sending another message. (0-21600 seconds). Bots, as well as users with the permission `manage_messages or manage_channel` are unaffected. */
  rate_limit_per_user?: number;
  /** The sorting position of the channel */
  position?: number;
  /** The channel's permission overwrites */
  permissionOverwrites?: Overwrite[];
  /** The id of the parent category for the channel */
  parent_id?: string;
  /** Whether the channel is nsfw */
  nsfw?: boolean;
  /** The reason to add in the Audit Logs. */
  reason?: string;
}

export interface CreateEmojisOptions {
  /** The roles for which this emoji will be whitelisted. Only the users with one of these roles can use this emoji. */
  roles: string[];
  /** The reason to have in the Audit Logs. */
  reason: string;
}

export interface EditEmojisOptions {
  /** The name of the emoji */
  name: string;
  /** The roles for which this emoji will be whitelisted. Only the users with one of these roles can use this emoji. */
  roles: string[];
}

export interface CreateRoleOptions {
  name?: string;
  permissions?: Permission[];
  color?: number;
  hoist?: boolean;
  mentionable?: boolean;
}

export interface PrunePayload {
  pruned: number;
}

export interface PruneOptions {
  /** number of days to count prune for (1 - 30). Defaults to 7 days. */
  days: number;
  /** Include members with these role ids */
  roles: string[];
}

export interface VoiceState {
  /** the guild id this voice state is for */
  guild_id?: string;
  /** the channel id this user is connected to */
  channel_id: string | null;
  /** the user id this voice state is for */
  user_id: string;
  /** the guild member this voice state is for */
  member?: MemberCreatePayload;
  /** the session id for this voice state */
  session_id: string;
  /** whether this user is deafened by the server */
  deaf: boolean;
  /** whether this user is muted by the server */
  mute: boolean;
  /** whether this user is locally deafened */
  self_deaf: boolean;
  /** whether this user is locally muted */
  self_mute: boolean;
  /** whether this user is streaming using "Go Live" */
  self_stream?: boolean;
  /** whether this user's camera is enabled */
  self_video?: boolean;
  /** whether this user is muted by the current user */
  suppress: boolean;
}

export interface Presence {
  /** The user presence is being updated for */
  user: UserPayload;
  /** The roles this user is in */
  roles: string[];
  /** The id of the guild */
  guild_id: string;
  /** Either idle */
  status: StatusType;
  activities: Activity[];
  client_status: ClientStatusPayload;
  premium_since?: string | null;
  nick?: string | null;
}

export interface FetchMembersOptions {
  /** Used to specify if you want the presences of the matched members. Default = false. */
  presences?: boolean;
  /** Only returns members whose username or nickname starts with this string. DO NOT INCLUDE discriminators. If a string is provided, the max amount of members that can be fetched is 100. Default = return all members. */
  query?: string;
  /** Used to specify which users to fetch specifically. */
  userIDs?: string[];
  /** Maximum number of members to return that match the query. Default = 0 which will return all members. */
  limit?: number;
}

export interface CreateServerOptions {
  /** name of the guild (2-100 characters) */
  name: string;
  /** voice region id */
  region?: string;
  /** guild icon image url or base64 128x128 image for the guild icon */
  icon?: string;
  /** verification level */
  verification_level?: number;
  /** default message notification level */
  default_message_notifications?: number;
  /** explicit content filter level */
  explicit_content_filter?: number;
  /** array of role objects	new guild roles */
  roles?: RoleData[];
  /** array of partial channel objects	new guild's channels */
  channels?: ChannelCreatePayload[];
  /** id for afk channel */
  afk_channel_id?: string;
  /** afk timeout in seconds */
  afk_timeout?: number;
  /** the id of the channel where guild notices such as welcome messages and boost events are posted */
  system_channel_id?: string;
}

// https://discord.com/developers/docs/resources/template#template-object
export interface GuildTemplate {
  /** the template code (unique ID) */
  code: string;
  /** template name */
  name: string;
  /** the description for the template */
  description: string | null;
  /** number of times this template has been used */
  usage_count: number;
  /** the ID of the user who created the template */
  creator_id: string;
  /** the user who created the template */
  user: UserPayload;
  /** when this template was created */
  created_at: string;
  /** when this template was last synced to the source guild */
  updated_at: string;
  /** the ID of the guild this template is based on */
  source_guild_id: string;
  /** the guild snapshot this template contains */
  serialized_source_guild: Guild;
  /** whether the template has unsynced changes */
  is_dirty: boolean | null;
}

export interface CreateGuildFromTemplate {
  /** name of the guild (2-100 characters) */
  name: string;
  /** base64 128x128 image for the guild icon */
  icon?: string;
}

export interface CreateGuildTemplate {
  /** name of the template (1-100 characters) */
  name: string;
  /** description for the template (0-120 characters) */
  description?: string;
}

export interface EditGuildTemplate {
  /** name of the template (1-100 characters) */
  name?: string;
  /** description for the template (0-120 characters) */
  description?: string | null;
}

export interface MembershipScreeningPayload {
  /** when the fields were last updated */
  version: string;
  /** the steps in the screening form */
  form_fields: MembershipScreeningFieldPayload[];
  /** the server description shown in the screening form */
  description: string | null;
}

export interface MembershipScreeningFieldPayload {
  /** the type of field */
  field_type: MembershipScreeningFieldTypes;
  /** the title of the field */
  label: string;
  /** the list of rules */
  values?: string[];
  /** whether the user has to fill out this field */
  required: boolean;
}

export type MembershipScreeningFieldTypes =
  /** Server Rules */
  "TERMS";
