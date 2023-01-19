/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type AchClearing = {
  __typename?: 'ACHClearing';
  destination?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type ActivateWalletArguments = {
  address1: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  dateOfBirth: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  ipAddress?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  operation: DwollaCustomerOperation;
  phone?: InputMaybe<Scalars['String']>;
  postalCode: Scalars['String'];
  ssn: Scalars['String'];
  state: Scalars['String'];
};

export type ActivitiesOnContentDrafts = {
  __typename?: 'ActivitiesOnContentDrafts';
  activity?: Maybe<PreferenceActivity>;
  activityId?: Maybe<Scalars['Int']>;
  content: Content;
  contentDraftId: Scalars['Int'];
  id: Scalars['Int'];
};

export type ActivitiesOnContents = {
  __typename?: 'ActivitiesOnContents';
  activity?: Maybe<PreferenceActivity>;
  activityId?: Maybe<Scalars['Int']>;
  content: Content;
  contentId: Scalars['Int'];
  id: Scalars['Int'];
};

export type ActivitiesOnNfTs = {
  __typename?: 'ActivitiesOnNFTs';
  activity?: Maybe<PreferenceActivity>;
  activityId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  nft: Nft;
  nftId: Scalars['Int'];
};

export type ActivityAttribute = {
  __typename?: 'ActivityAttribute';
  activities?: Maybe<Array<Maybe<PreferenceActivity>>>;
  activityId?: Maybe<Scalars['Int']>;
  attributesOnActivities?: Maybe<Array<Maybe<AttributesOnActivities>>>;
  attributesOnContentDrafts?: Maybe<Array<Maybe<AttributesOnContentDrafts>>>;
  attributesOnContents?: Maybe<Array<Maybe<AttributesOnContents>>>;
  attributesOnNfts?: Maybe<Array<Maybe<AttributesOnNfTs>>>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isActivity?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  isMedia?: Maybe<Scalars['Boolean']>;
  isSeason?: Maybe<Scalars['Boolean']>;
  isShared?: Maybe<Scalars['Boolean']>;
  isSingleSelectList?: Maybe<Scalars['Boolean']>;
  listName?: Maybe<Scalars['String']>;
  measureData?: Maybe<AttributeMeasureField>;
  name: Scalars['String'];
  segmentName?: Maybe<Scalars['String']>;
  showOnAllActivityMedia?: Maybe<Scalars['Boolean']>;
  showOnMainProfile?: Maybe<Scalars['Boolean']>;
  showOnTeams?: Maybe<Scalars['Boolean']>;
  userActivityFeatureThumbnail?: Maybe<UserActivityFeatureThumbnail>;
};

export type ActivityAttributeAttributesOnActivitiesArgs = {
  activityId: Scalars['Int'];
};

export type ActivityAttributeAttributesOnContentDraftsArgs = {
  userId?: InputMaybe<Scalars['Int']>;
};

export type ActivityAttributeAttributesOnContentsArgs = {
  userId?: InputMaybe<Scalars['Int']>;
};

export type ActivityAttributeAttributesOnNftsArgs = {
  userId?: InputMaybe<Scalars['Int']>;
};

export type ActivityAttributeUserActivityFeatureThumbnailArgs = {
  userId: Scalars['Int'];
};

export type ActivityIdAndNameObject = {
  __typename?: 'ActivityIdAndNameObject';
  activityId?: Maybe<Scalars['Int']>;
  activityName?: Maybe<Scalars['String']>;
};

export type ActivityImageInput = {
  croppedImage?: InputMaybe<Scalars['String']>;
  isFromGallery?: InputMaybe<Scalars['Boolean']>;
  originalImage?: InputMaybe<Scalars['String']>;
  userActivityId: Scalars['Int'];
};

export enum ActivityType {
  Listed = 'Listed',
  Minted = 'Minted',
  Purchase = 'Purchase',
  SecondarySaleListed = 'SecondarySaleListed',
  SecondarySaleRemoved = 'SecondarySaleRemoved',
  SecondarySaleUpdated = 'SecondarySaleUpdated',
}

export type AddFundToWalletArguments = {
  amount: Scalars['Float'];
  fundingSourceId: Scalars['String'];
};

export type AddFundToWalletResponse = {
  __typename?: 'AddFundToWalletResponse';
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type AmountType = {
  __typename?: 'AmountType';
  currency?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type AppVersionType = {
  __typename?: 'AppVersionType';
  androidForceUpdate?: Maybe<Scalars['Boolean']>;
  androidVersion?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  iosForceUpdate?: Maybe<Scalars['Boolean']>;
  iosVersion?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ApplicationFlags = {
  __typename?: 'ApplicationFlags';
  flags: Scalars['JSON'];
  id: Scalars['Int'];
};

export type AttributeMeasureField = {
  __typename?: 'AttributeMeasureField';
  activityLabel?: Maybe<Scalars['String']>;
  buttonLabel?: Maybe<Scalars['String']>;
  dbUnit?: Maybe<DbUnitType>;
  defaultUnit?: Maybe<Scalars['String']>;
  list?: Maybe<Array<Maybe<Scalars['String']>>>;
  mask?: Maybe<Array<Maybe<Mask>>>;
  max?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['String']>;
  picker?: Maybe<AttributeValuePicker>;
  seasonLabel?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
  type?: Maybe<AttributeValueType>;
  unitChange?: Maybe<Scalars['Boolean']>;
};

export type AttributeValueInput = {
  dbUnit?: InputMaybe<DbUnitType>;
  displayValue?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  type?: InputMaybe<SelectionType>;
  userUnit?: InputMaybe<Scalars['String']>;
  userValue?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Any']>;
};

export type AttributeValueOutput = {
  __typename?: 'AttributeValueOutput';
  dbUnit?: Maybe<DbUnitType>;
  displayValue?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  type?: Maybe<SelectionType>;
  userUnit?: Maybe<Scalars['String']>;
  userValue?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Any']>;
};

export enum AttributeValuePicker {
  Count = 'Count',
  Distance = 'Distance',
  List = 'List',
  Percent = 'Percent',
  Speed = 'Speed',
  Time = 'Time',
  Weight = 'Weight',
}

export enum AttributeValueType {
  Input = 'Input',
  List = 'List',
  Picker = 'Picker',
}

export type AttributesOnActivities = {
  __typename?: 'AttributesOnActivities';
  activityId?: Maybe<Scalars['Int']>;
  attributeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  positionIndex?: Maybe<Scalars['Int']>;
};

export type AttributesOnContentDrafts = {
  __typename?: 'AttributesOnContentDrafts';
  attribute?: Maybe<ActivityAttribute>;
  attributeId?: Maybe<Scalars['Int']>;
  content: Content;
  contentDraftId: Scalars['Int'];
  id: Scalars['Int'];
};

export type AttributesOnContents = {
  __typename?: 'AttributesOnContents';
  attribute?: Maybe<ActivityAttribute>;
  attributeId?: Maybe<Scalars['Int']>;
  content: Content;
  contentId: Scalars['Int'];
  id: Scalars['Int'];
};

export type AttributesOnNfTs = {
  __typename?: 'AttributesOnNFTs';
  attribute?: Maybe<ActivityAttribute>;
  attributeId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  nft: Nft;
  nftId: Scalars['Int'];
};

export type AttributesWithContent = {
  __typename?: 'AttributesWithContent';
  activities?: Maybe<Array<Maybe<PreferenceActivity>>>;
  attributesOnContents?: Maybe<Array<Maybe<AttributesOnContents>>>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isActivity?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  isMedia?: Maybe<Scalars['Boolean']>;
  isSeason?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  showOnAllActivityMedia?: Maybe<Scalars['Boolean']>;
  showOnMainProfile?: Maybe<Scalars['Boolean']>;
};

export type AuthInput = {
  accessToken: Scalars['String'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isEmailConfirmed?: Maybe<Scalars['Boolean']>;
  lastname?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
  username?: Maybe<Scalars['String']>;
  xmppUsername?: Maybe<Scalars['String']>;
};

export type BackgroundVideoDataInput = {
  isReplace?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['Int'];
  videoData?: InputMaybe<UserVideoDataInput>;
  videoThumbnail?: InputMaybe<Scalars['String']>;
};

export type BackgroundVideoDataInputForActivity = {
  activityId: Scalars['Int'];
  isReplace?: InputMaybe<Scalars['Boolean']>;
  videoData?: InputMaybe<UserVideoDataInput>;
  videoThumbnail?: InputMaybe<Scalars['String']>;
};

export type BackgroundVideoDataRes = {
  __typename?: 'BackgroundVideoDataRes';
  signedUrl?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
  videoThumbnail?: Maybe<Scalars['String']>;
};

export type BackgroundVideoDataResForActivity = {
  __typename?: 'BackgroundVideoDataResForActivity';
  activityId: Scalars['Int'];
  signedUrl?: Maybe<Scalars['String']>;
  videoThumbnail?: Maybe<Scalars['String']>;
};

export enum BlockType {
  Block = 'Block',
  Report = 'Report',
}

export type BlockedCursor = {
  __typename?: 'BlockedCursor';
  pageEdges?: Maybe<Array<Maybe<BlockedEdge>>>;
  pageInfo?: Maybe<UserPageInfo>;
};

export type BlockedEdge = {
  __typename?: 'BlockedEdge';
  node?: Maybe<ReportBlock>;
};

export type BookmarkInstitution = {
  __typename?: 'BookmarkInstitution';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  institutionId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export enum BookmarkType {
  Edition = 'Edition',
  Institution = 'Institution',
  Item = 'Item',
  Nft = 'Nft',
  User = 'User',
}

export type BookmarkUser = {
  __typename?: 'BookmarkUser';
  bookmarkedUserId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type BuySecondaryNftArgs = {
  buyerId: Scalars['Int'];
  nftItemId: Scalars['Int'];
  quantity: Scalars['Int'];
  sellerId: Scalars['Int'];
  totalPrice: Scalars['Float'];
};

export type BuyingNftEditionResponse = {
  __typename?: 'BuyingNftEditionResponse';
  dwollaFee: Scalars['Float'];
  leftQuantity: Scalars['Int'];
};

export type BuyingNftItemResponse = {
  __typename?: 'BuyingNftItemResponse';
  dwollaFee: Scalars['Float'];
  leftQuantity: Scalars['Int'];
};

export type Category = {
  __typename?: 'Category';
  activities?: Maybe<Array<Maybe<PreferenceActivity>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  iconURL?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum CategoryDomain {
  Amazon = 'Amazon',
  AmazonMusic = 'AmazonMusic',
  AppleMusic = 'AppleMusic',
  ApplePay = 'ApplePay',
  ApplePodcasts = 'ApplePodcasts',
  Audiomack = 'Audiomack',
  Bandcamp = 'Bandcamp',
  Cameo = 'Cameo',
  CashApp = 'CashApp',
  Clubhouse = 'Clubhouse',
  DailyMotion = 'DailyMotion',
  Deezer = 'Deezer',
  Discord = 'Discord',
  Etsy = 'Etsy',
  Facebook = 'Facebook',
  FacebookWatch = 'FacebookWatch',
  FansMeetIdols = 'FansMeetIdols',
  GooglePay = 'GooglePay',
  Hudl = 'Hudl',
  Instagram = 'Instagram',
  LinkedIn = 'LinkedIn',
  Mixcloud = 'Mixcloud',
  Myspace = 'Myspace',
  Opendorse = 'Opendorse',
  Pandora = 'Pandora',
  Patreon = 'Patreon',
  Paypal = 'Paypal',
  Pinterest = 'Pinterest',
  PlayerFm = 'PlayerFM',
  Podcast = 'Podcast',
  Reddit = 'Reddit',
  Shopify = 'Shopify',
  Snapchat = 'Snapchat',
  Soundcloud = 'Soundcloud',
  Spotify = 'Spotify',
  SquareCash = 'SquareCash',
  Stitcher = 'Stitcher',
  Strava = 'Strava',
  Tidal = 'Tidal',
  TikTok = 'TikTok',
  Twitch = 'Twitch',
  Twitter = 'Twitter',
  Venmo = 'Venmo',
  Vevo = 'Vevo',
  VideosHub = 'VideosHub',
  Vimeo = 'Vimeo',
  VimeoMusic = 'VimeoMusic',
  YouTube = 'YouTube',
  YouTubeMusic = 'YouTubeMusic',
  Youtube = 'Youtube',
  Zelle = 'Zelle',
  ITunes = 'iTunes',
}

export enum CategoryType {
  Ads = 'Ads',
  CollectMoney = 'CollectMoney',
  Endorsements = 'Endorsements',
  EverythingElse = 'EverythingElse',
  GrowYourFollowing = 'GrowYourFollowing',
  MusicChannel = 'MusicChannel',
  MyNews = 'MyNews',
  MyWebsite = 'MyWebsite',
  NxlvlVideos = 'NxlvlVideos',
  Podcasts = 'Podcasts',
  SocialNetwork = 'SocialNetwork',
  Store = 'Store',
  UniqueProduct = 'UniqueProduct',
  VideoLinks = 'VideoLinks',
}

export type ChatImageInput = {
  request: Array<ChatImageInputPayload>;
};

export type ChatImageInputPayload = {
  extension?: InputMaybe<ContentImageExtensions>;
  galleryImageUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};

export type ChatImageResponse = {
  __typename?: 'ChatImageResponse';
  id: Scalars['String'];
  imageURL: Scalars['String'];
  uploadUrl?: Maybe<Scalars['String']>;
};

export type ChatVideoInput = {
  request: Array<ChatVideoInputPayload>;
};

export type ChatVideoInputPayload = {
  extension?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  videoData?: InputMaybe<Scalars['JSON']>;
};

export type ChatVideoResponse = {
  __typename?: 'ChatVideoResponse';
  SASUrl?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  thumbnailURL?: Maybe<Scalars['String']>;
  videoData?: Maybe<Scalars['JSON']>;
  videoId?: Maybe<Scalars['String']>;
  videoURL?: Maybe<Scalars['String']>;
};

export type CheckIfBlockedResponse = {
  __typename?: 'CheckIfBlockedResponse';
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type CoRoyaltyParams = {
  coRoyaltyFee?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type CoRoyaltyUser = {
  __typename?: 'CoRoyaltyUser';
  coRoyaltyFee?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type CommentLike = {
  __typename?: 'CommentLike';
  commentId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  likedBy: Scalars['Int'];
  liker?: Maybe<User>;
  reaction?: Maybe<Reactions>;
};

export type CommentLikeArgument = {
  commentUserId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  likedBy: Scalars['Int'];
  reaction?: InputMaybe<Reactions>;
};

export type CommentLikeCursor = {
  __typename?: 'CommentLikeCursor';
  pageEdges?: Maybe<Array<Maybe<CommentLikeEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type CommentLikeEdge = {
  __typename?: 'CommentLikeEdge';
  node?: Maybe<CommentLike>;
};

export type ConnectedUser = {
  __typename?: 'ConnectedUser';
  backgroundImage?: Maybe<Scalars['String']>;
  backgroundImageThumbnail?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  id: Scalars['Int'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  lastname: Scalars['String'];
  profileImage?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  xmppUsername?: Maybe<Scalars['String']>;
};

export type ConnectedUserIsFollowingArgs = {
  type?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type ConnectionCursor = {
  __typename?: 'ConnectionCursor';
  pageEdges?: Maybe<Array<Maybe<ConnectionEdge>>>;
  pageInfo?: Maybe<UserPageInfo>;
};

export type ConnectionEdge = {
  __typename?: 'ConnectionEdge';
  node?: Maybe<UserConnection>;
};

export enum ConnectionStatus {
  Approved = 'Approved',
  Pending = 'Pending',
  Rejected = 'Rejected',
}

export type Content = {
  __typename?: 'Content';
  activitiesOnContents?: Maybe<Array<Maybe<ActivitiesOnContents>>>;
  activityCount?: Maybe<Scalars['Int']>;
  allowComments?: Maybe<Scalars['Boolean']>;
  allowRepost?: Maybe<Scalars['Boolean']>;
  allowSharing?: Maybe<Scalars['Boolean']>;
  attributeValues?: Maybe<Array<Maybe<AttributeValueOutput>>>;
  attributesOnContents?: Maybe<Array<Maybe<AttributesOnContents>>>;
  commentCount?: Maybe<Scalars['Int']>;
  contentComments?: Maybe<ContentCommentCursor>;
  contentData?: Maybe<Scalars['JSON']>;
  contentHeight?: Maybe<Scalars['Int']>;
  contentLikes?: Maybe<ContentLikeCursor>;
  contentType: MediaType;
  contentWidth?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  dateOfEvent?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  displayTags?: Maybe<Scalars['JSON']>;
  feedCategory?: Maybe<Scalars['String']>;
  hashTags?: Maybe<Array<Maybe<ContentTag>>>;
  id: Scalars['Int'];
  imageURL?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isActivityThumbnail?: Maybe<Scalars['Boolean']>;
  isCommented?: Maybe<Scalars['Boolean']>;
  isCommitment?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isFeatureThumbnail?: Maybe<Scalars['Boolean']>;
  isFlagged?: Maybe<Scalars['Boolean']>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  isLiked?: Maybe<Scalars['Boolean']>;
  isNxtag?: Maybe<Scalars['Boolean']>;
  isPinned?: Maybe<Scalars['Boolean']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  likeCount?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['JSON']>;
  parentPost?: Maybe<Content>;
  pinnedDate?: Maybe<Scalars['DateTime']>;
  publishToFeed?: Maybe<Scalars['Boolean']>;
  reaction?: Maybe<Reactions>;
  repostDescription?: Maybe<Scalars['String']>;
  repostParentId?: Maybe<Scalars['Int']>;
  taggedContentBy?: Maybe<Array<Maybe<Scalars['Int']>>>;
  taggedContentUser?: Maybe<User>;
  taggedUserIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  taggedUsers?: Maybe<Array<Maybe<User>>>;
  taggedUsersCount?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
  visibility?: Maybe<Visibility>;
};

export type ContentContentCommentsArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type ContentContentLikesArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type ContentIsActivityThumbnailArgs = {
  activityId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ContentIsFeatureThumbnailArgs = {
  featureId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ContentArgs = {
  activityIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  addToMyNews?: InputMaybe<Scalars['Boolean']>;
  allowComments?: InputMaybe<Scalars['Boolean']>;
  allowRepost?: InputMaybe<Scalars['Boolean']>;
  allowSharing?: InputMaybe<Scalars['Boolean']>;
  attributeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  attributeValues?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
  contentDataInput?: InputMaybe<ContentDataInput>;
  contentHeight?: InputMaybe<Scalars['Int']>;
  contentTags?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contentType: MediaType;
  contentWidth?: InputMaybe<Scalars['Int']>;
  dateOfEvent?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  displayTags?: InputMaybe<Scalars['JSON']>;
  isPinned?: InputMaybe<Scalars['Boolean']>;
  isPrimary?: InputMaybe<Scalars['Boolean']>;
  isUserCommitment?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['JSON']>;
  publishToFeed?: InputMaybe<Scalars['Boolean']>;
  taggedContentBy?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  taggedUserIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  updateSharedAttributeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  userId: Scalars['Int'];
  visibility: Visibility;
};

export type ContentComment = {
  __typename?: 'ContentComment';
  _count?: Maybe<Scalars['JSON']>;
  childComments?: Maybe<ContentCommentCursor>;
  commentLikes?: Maybe<CommentLikeCursor>;
  commentText: Scalars['String'];
  commentedBy: Scalars['Int'];
  commenter: User;
  contentId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isEdited?: Maybe<Scalars['Boolean']>;
  isFlagged?: Maybe<Scalars['Boolean']>;
  isLiked?: Maybe<Scalars['Boolean']>;
  likeCount?: Maybe<Scalars['Int']>;
  parentComment?: Maybe<ContentComment>;
  parentId?: Maybe<Scalars['Int']>;
  reaction?: Maybe<Reactions>;
  taggedUserIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  taggedUsers?: Maybe<Array<Maybe<User>>>;
};

export type ContentCommentChildCommentsArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type ContentCommentCommentLikesArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type ContentCommentArgs = {
  commentText: Scalars['String'];
  commentedBy: Scalars['Int'];
  contentId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  taggedUserIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ContentCommentCursor = {
  __typename?: 'ContentCommentCursor';
  pageEdges?: Maybe<Array<Maybe<ContentCommentEdge>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCommentCount?: Maybe<Scalars['Int']>;
};

export type ContentCommentEdge = {
  __typename?: 'ContentCommentEdge';
  node?: Maybe<ContentComment>;
};

export type ContentCreateResponse = {
  __typename?: 'ContentCreateResponse';
  blobUrl?: Maybe<Scalars['String']>;
  contentId: Scalars['Int'];
  imageContentSignedUrl?: Maybe<Scalars['String']>;
  signedUrl?: Maybe<Scalars['String']>;
  thumbnailSignedUrl?: Maybe<Scalars['String']>;
  videoThumbnailURL?: Maybe<Scalars['String']>;
};

export type ContentCursor = {
  __typename?: 'ContentCursor';
  pageEdges?: Maybe<Array<Maybe<ContentEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ContentDataInput = {
  assetId?: InputMaybe<Scalars['String']>;
  contentImageUrl?: InputMaybe<Scalars['String']>;
  dataUri?: InputMaybe<Scalars['String']>;
  imageData?: InputMaybe<Scalars['String']>;
  imageExtension?: InputMaybe<UserImageExtensionsContent>;
  metadata?: InputMaybe<Scalars['JSON']>;
  playbackId?: InputMaybe<Scalars['String']>;
  videoThumbnail?: InputMaybe<Scalars['String']>;
};

export type ContentDraft = {
  __typename?: 'ContentDraft';
  activitiesOnContentDrafts?: Maybe<Array<Maybe<ActivitiesOnContentDrafts>>>;
  addToMyNews?: Maybe<Scalars['Boolean']>;
  allowComments?: Maybe<Scalars['Boolean']>;
  allowRepost?: Maybe<Scalars['Boolean']>;
  allowSharing?: Maybe<Scalars['Boolean']>;
  attributeValues?: Maybe<Array<Maybe<AttributeValueOutput>>>;
  attributesOnContentDrafts?: Maybe<Array<Maybe<AttributesOnContentDrafts>>>;
  contentData?: Maybe<Scalars['JSON']>;
  contentHeight?: Maybe<Scalars['Int']>;
  contentType: MediaType;
  contentWidth?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  dateOfEvent?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  displayTags?: Maybe<Scalars['JSON']>;
  hashTags?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id: Scalars['Int'];
  imageURL?: Maybe<Scalars['String']>;
  isPinned?: Maybe<Scalars['Boolean']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['JSON']>;
  publishToFeed?: Maybe<Scalars['Boolean']>;
  taggedContentBy?: Maybe<Array<Maybe<Scalars['Int']>>>;
  taggedContentUser?: Maybe<User>;
  taggedUserIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  taggedUsers?: Maybe<Array<Maybe<User>>>;
  taggedUsersCount?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
  visibility?: Maybe<Visibility>;
};

export type ContentEdge = {
  __typename?: 'ContentEdge';
  node?: Maybe<Content>;
};

export enum ContentImageExtensions {
  Jpeg = 'jpeg',
  Jpg = 'jpg',
  Png = 'png',
}

export type ContentLike = {
  __typename?: 'ContentLike';
  contentId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  likedBy: Scalars['Int'];
  liker: User;
  reaction?: Maybe<Reactions>;
};

export type ContentLikeCountsGroupedByReaction = {
  __typename?: 'ContentLikeCountsGroupedByReaction';
  _count?: Maybe<Scalars['JSON']>;
  reaction?: Maybe<Reactions>;
};

export type ContentLikeCursor = {
  __typename?: 'ContentLikeCursor';
  pageEdges?: Maybe<Array<Maybe<ContentLikeEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ContentLikeEdge = {
  __typename?: 'ContentLikeEdge';
  node?: Maybe<ContentLike>;
};

export type ContentTag = {
  __typename?: 'ContentTag';
  content: Content;
  contentId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  tag: Tag;
  tagId: Scalars['Int'];
};

export type ContentTagCursor = {
  __typename?: 'ContentTagCursor';
  pageEdges?: Maybe<Array<Maybe<ContentTagEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ContentTagEdge = {
  __typename?: 'ContentTagEdge';
  node?: Maybe<ContentTag>;
};

export enum ContentType {
  Comment = 'Comment',
  Content = 'Content',
  UserBio = 'UserBio',
}

export type DashboardArgs = {
  activity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  availableForSale?: InputMaybe<MarketplaceType>;
  cursor: Scalars['Int'];
  pageNo: Scalars['Int'];
  priceRange?: InputMaybe<PriceRange>;
  sortBy?: InputMaybe<NftSortBy>;
  take: Scalars['Int'];
  tier?: InputMaybe<Array<InputMaybe<NftEditionTier>>>;
  type: SectionType;
};

export type DashboardCursor = {
  __typename?: 'DashboardCursor';
  pageEdges?: Maybe<Array<Maybe<DashboardEdge>>>;
  pageInfo?: Maybe<DashboardPageInfo>;
};

export type DashboardEdge = {
  __typename?: 'DashboardEdge';
  node?: Maybe<DashboardNft>;
};

export type DashboardNft = {
  __typename?: 'DashboardNFT';
  associatedTiers?: Maybe<Array<Maybe<NftEditionTier>>>;
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  isLiked?: Maybe<Scalars['Boolean']>;
  isNFTBookmarked?: Maybe<Scalars['Boolean']>;
  likeCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  videoData?: Maybe<Scalars['JSON']>;
};

export type DashboardNftAssociatedTiersArgs = {
  nftStatus?: InputMaybe<Array<InputMaybe<NftStatus>>>;
};

export type DashboardPageInfo = {
  __typename?: 'DashboardPageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  pageNo?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum DbUnitType {
  G = 'g',
  MeterPerHour = 'meterPerHour',
  Mm = 'mm',
  Ms = 'ms',
}

export type DeleteBankAccountArguments = {
  fundingSourceId: Scalars['String'];
};

export type DeleteBankAccountResponse = {
  __typename?: 'DeleteBankAccountResponse';
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type DwollaBanksResponse = {
  __typename?: 'DwollaBanksResponse';
  bankAccountType: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  status: Scalars['String'];
};

export type DwollaCustomer = {
  __typename?: 'DwollaCustomer';
  DwollaFundingSource?: Maybe<Array<Maybe<DwollaFundingSource>>>;
  id: Scalars['Int'];
  status: DwollaCustomerStatus;
  url: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['Int'];
};

export enum DwollaCustomerOperation {
  Insert = 'Insert',
  Update = 'Update',
}

export enum DwollaCustomerStatus {
  Deactivated = 'deactivated',
  Document = 'document',
  Retry = 'retry',
  ReverifyingDetails = 'reverifyingDetails',
  ReviewingDocument = 'reviewingDocument',
  Suspended = 'suspended',
  Unverified = 'unverified',
  Verified = 'verified',
}

export type DwollaFundingSource = {
  __typename?: 'DwollaFundingSource';
  accessToken?: Maybe<Scalars['String']>;
  dwollaCustomer?: Maybe<DwollaCustomer>;
  dwollaCustomerId: Scalars['Int'];
  id: Scalars['Int'];
  status: Scalars['String'];
  url: Scalars['String'];
};

export enum DwollaTnxDateFilters {
  CurrentYear = 'CurrentYear',
  LastSixMonths = 'LastSixMonths',
  LastThirtyDays = 'LastThirtyDays',
  LastThreeMonths = 'LastThreeMonths',
}

export type DwollaTnxPageInfo = {
  __typename?: 'DwollaTnxPageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  pageNo?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum DwollaTnxStatus {
  Cancelled = 'Cancelled',
  Completed = 'Completed',
  Failed = 'Failed',
  Processing = 'Processing',
}

export enum DwollaTnxType {
  FundAdded = 'FundAdded',
  FundWithdrawn = 'FundWithdrawn',
  Purchased = 'Purchased',
  Sold = 'Sold',
}

export type DwollaVerifiedUser = {
  __typename?: 'DwollaVerifiedUser';
  status?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type DwollaWalletBalanceResponse = {
  __typename?: 'DwollaWalletBalanceResponse';
  balance: Scalars['Float'];
};

export type EsContentPageInfo = {
  __typename?: 'ESContentPageInfo';
  totalCount?: Maybe<Scalars['Int']>;
};

export type EsCreatorPageInfo = {
  __typename?: 'ESCreatorPageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  pageNo?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EsnftPageInfo = {
  __typename?: 'ESNFTPageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  pageNo?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EsUserPageInfo = {
  __typename?: 'ESUserPageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EvmAccount = {
  __typename?: 'EVMAccount';
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export type ElasticContent = {
  __typename?: 'ElasticContent';
  activity?: Maybe<Array<Maybe<ElasticContentActivitiesOnContents>>>;
  allowComments?: Maybe<Scalars['Boolean']>;
  allowRepost?: Maybe<Scalars['Boolean']>;
  allowSharing?: Maybe<Scalars['Boolean']>;
  commentCount?: Maybe<Scalars['Int']>;
  contentData?: Maybe<Scalars['JSON']>;
  contentHeight?: Maybe<Scalars['Int']>;
  contentThumbnail?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  contentWidth?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfEvent?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  feedCategory?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageURL?: Maybe<Scalars['String']>;
  isCommitment?: Maybe<Scalars['Boolean']>;
  isFlagged?: Maybe<Scalars['Boolean']>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  isLiked?: Maybe<Scalars['Boolean']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  likeCount?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['JSON']>;
  playbackId?: Maybe<Scalars['String']>;
  reaction?: Maybe<Reactions>;
  taggedContentBy?: Maybe<Array<Maybe<Scalars['Int']>>>;
  taggedContentUser?: Maybe<User>;
  taggedUsers?: Maybe<Array<Maybe<User>>>;
  taggedUsersCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  visibility?: Maybe<Visibility>;
};

export type ElasticContentActivitiesOnContents = {
  __typename?: 'ElasticContentActivitiesOnContents';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type ElasticCreator = {
  __typename?: 'ElasticCreator';
  backgroundImageThumbnail?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  followerCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  instituteName?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  profileThumbnail?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  username?: Maybe<Scalars['String']>;
};

export type ElasticNft = {
  __typename?: 'ElasticNFT';
  activity?: Maybe<Array<Maybe<ElasticNftActivitiesOnNfTs>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  editions?: Maybe<Array<Maybe<ElasticNftEdition>>>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageURL?: Maybe<Scalars['String']>;
  isLiked?: Maybe<Scalars['Boolean']>;
  isNFTBookmarked?: Maybe<Scalars['Boolean']>;
  lastname?: Maybe<Scalars['String']>;
  likeCount?: Maybe<Scalars['Int']>;
  listedDate?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  playbackId?: Maybe<Scalars['String']>;
  profileImage?: Maybe<Scalars['String']>;
  tier?: Maybe<Array<Maybe<NftEditionTier>>>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  viewCount?: Maybe<Scalars['Int']>;
};

export type ElasticNftActivitiesOnNfTs = {
  __typename?: 'ElasticNFTActivitiesOnNFTs';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type ElasticNftEdition = {
  __typename?: 'ElasticNFTEdition';
  autogenerated?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  seriesNumber?: Maybe<Scalars['Int']>;
  status?: Maybe<NftStatus>;
  tier?: Maybe<NftEditionTier>;
};

export type EsUser = {
  __typename?: 'EsUser';
  backgroundImageThumbnail?: Maybe<Scalars['String']>;
  connectionStatus?: Maybe<UserConnection>;
  firstname?: Maybe<Scalars['String']>;
  followerCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  instituteName?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  mutualConnectionCount?: Maybe<Scalars['Int']>;
  profileThumbnail?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  xmppUsername?: Maybe<Scalars['String']>;
};

export type FeaturedCreator = {
  __typename?: 'FeaturedCreator';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  score: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['Int'];
};

export type FeaturedCreatorCursor = {
  __typename?: 'FeaturedCreatorCursor';
  pageEdges?: Maybe<Array<Maybe<FeaturedCreatorEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type FeaturedCreatorEdge = {
  __typename?: 'FeaturedCreatorEdge';
  node?: Maybe<FeaturedCreator>;
};

export type FirebaseNotification = {
  __typename?: 'FirebaseNotification';
  createdAt: Scalars['DateTime'];
  extraParameters?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  isActionRequired?: Maybe<Scalars['Boolean']>;
  isRead: Scalars['Boolean'];
  isViewed: Scalars['Boolean'];
  nft?: Maybe<Nft>;
  nftEdition?: Maybe<NftEdition>;
  nftEditionId?: Maybe<Scalars['Int']>;
  nftId?: Maybe<Scalars['Int']>;
  receiver?: Maybe<User>;
  receiverId?: Maybe<Scalars['Int']>;
  redirectLink?: Maybe<Scalars['String']>;
  sender?: Maybe<User>;
  senderId: Scalars['Int'];
  title: Scalars['String'];
  type?: Maybe<FirebaseNotificationType>;
};

export type FirebaseNotificationCursor = {
  __typename?: 'FirebaseNotificationCursor';
  pageEdges?: Maybe<Array<Maybe<FirebaseNotificationEdge>>>;
  pageInfo?: Maybe<FirebaseNotificationPageInfo>;
};

export type FirebaseNotificationEdge = {
  __typename?: 'FirebaseNotificationEdge';
  node?: Maybe<FirebaseNotification>;
};

export type FirebaseNotificationPageInfo = {
  __typename?: 'FirebaseNotificationPageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum FirebaseNotificationType {
  Dwolla = 'Dwolla',
  ListedNft = 'ListedNFT',
  MintedNft = 'MintedNFT',
  TransferNft = 'TransferNFT',
}

export type FirebaseToken = {
  __typename?: 'FirebaseToken';
  deviceId?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type FlagContentInput = {
  contentId: Scalars['Int'];
  contentType: ContentType;
  description?: InputMaybe<Scalars['String']>;
  reason: FlagContentReason;
  reporteeUserId: Scalars['Int'];
  reporterUserId: Scalars['Int'];
};

export enum FlagContentReason {
  BullyingAndHarassment = 'Bullying_and_Harassment',
  Misinformation = 'Misinformation',
  ObjectionableContent = 'Objectionable_Content',
  Other = 'Other',
  PrivacyViolations = 'Privacy_Violations',
  ViolenceAndCriminalBehavior = 'Violence_and_Criminal_Behavior',
}

export type FollowsEdge = {
  __typename?: 'FollowsEdge';
  node?: Maybe<UserFollows>;
};

export type ForgotPasswordInput = {
  country?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  ipAddress?: InputMaybe<Scalars['String']>;
  isMarketplace?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<Scalars['String']>;
  platform?: InputMaybe<Scalars['String']>;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Other = 'Other',
  PreferNotToSay = 'Prefer_Not_To_Say',
}

export type GetChatVideosInput = {
  videoIds: Array<Scalars['String']>;
};

export type GetContentsArgs = {
  activityId?: InputMaybe<Scalars['Int']>;
  attributeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contentType?: InputMaybe<Array<InputMaybe<MediaType>>>;
  cursor?: InputMaybe<Scalars['Int']>;
  getLatest?: InputMaybe<Scalars['Boolean']>;
  isOwnPublicProfile?: InputMaybe<Scalars['Boolean']>;
  isPost?: InputMaybe<Scalars['Boolean']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  isTagged?: InputMaybe<Scalars['Boolean']>;
  pageNo?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type GetDwollaCustomerResponse = {
  __typename?: 'GetDwollaCustomerResponse';
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  dateOfBirth?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  ssn?: Maybe<Scalars['String']>;
  state: Scalars['String'];
};

export type GetGroupedAttributesInput = {
  activityIds?: InputMaybe<Array<Scalars['Int']>>;
  isActivity?: InputMaybe<Scalars['Boolean']>;
  isFeature?: InputMaybe<Scalars['Boolean']>;
  isMedia?: InputMaybe<Scalars['Boolean']>;
  isSeason?: InputMaybe<Scalars['Boolean']>;
  isShared?: InputMaybe<Scalars['Boolean']>;
  showOnAllActivityMedia?: InputMaybe<Scalars['Boolean']>;
  showOnMainProfile?: InputMaybe<Scalars['Boolean']>;
  showOnTeams?: InputMaybe<Scalars['Boolean']>;
};

export type GetGroupedAttributesResponse = {
  __typename?: 'GetGroupedAttributesResponse';
  activityId?: Maybe<Scalars['Int']>;
  activityName?: Maybe<Scalars['String']>;
  groupedAttributes?: Maybe<Array<Maybe<GroupedAttributeType>>>;
};

export type GetGroupedUserActivitiesResponse = {
  __typename?: 'GetGroupedUserActivitiesResponse';
  groupedUserActivities?: Maybe<Array<Maybe<GroupedActivityType>>>;
  userActivities?: Maybe<Array<Maybe<ActivityIdAndNameObject>>>;
};

export type GetNftEditionsArgs = {
  activityIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  availableForSale?: InputMaybe<MarketplaceType>;
  cursor?: InputMaybe<Scalars['Int']>;
  nftEditionStatus?: InputMaybe<NftEditionStatus>;
  pageNo?: InputMaybe<Scalars['Int']>;
  priceRange?: InputMaybe<PriceRange>;
  sortBy?: InputMaybe<NftSortBy>;
  take?: InputMaybe<Scalars['Int']>;
  tiers?: InputMaybe<Array<InputMaybe<NftEditionTier>>>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type GetSecondaryItemArgs = {
  cursor: Scalars['Int'];
  nftEditionId: Scalars['Int'];
  sortBy?: InputMaybe<SecondaryItemSortBy>;
  take: Scalars['Int'];
};

export type GetUploadUrlProfilePayload = {
  extensions: UserImageExtensions;
  userId: Scalars['Int'];
};

export type GetUploadUrlProfileResponse = {
  __typename?: 'GetUploadUrlProfileResponse';
  croppedImageBlobUrl: Scalars['String'];
  croppedImageUploadUrl: Scalars['String'];
  imageThumbnailUploadUrl: Scalars['String'];
  userId: Scalars['Int'];
};

export type GetUserActivitiesAndInterestsResponse = {
  __typename?: 'GetUserActivitiesAndInterestsResponse';
  additionalActivities?: Maybe<Array<Maybe<ActivityIdAndNameObject>>>;
  userActivities?: Maybe<Array<Maybe<ActivityIdAndNameObject>>>;
};

export enum GradeSchool {
  Eight = 'Eight',
  Five = 'Five',
  Four = 'Four',
  Freshman = 'Freshman',
  GraduateStudent = 'Graduate_Student',
  Junior = 'Junior',
  One = 'One',
  PreferNotToSay = 'Prefer_Not_To_Say',
  Senior = 'Senior',
  Seven = 'Seven',
  Six = 'Six',
  Sophomore = 'Sophomore',
  Three = 'Three',
  Two = 'Two',
}

export type GroupedActivityType = {
  __typename?: 'GroupedActivityType';
  activities?: Maybe<Array<Maybe<PreferenceActivity>>>;
  name?: Maybe<Scalars['String']>;
};

export type GroupedAttributeType = {
  __typename?: 'GroupedAttributeType';
  attributes?: Maybe<Array<Maybe<ActivityAttribute>>>;
  name?: Maybe<Scalars['String']>;
};

export enum Hand {
  Ambidextrous = 'Ambidextrous',
  Left = 'Left',
  Right = 'Right',
}

export type Institution = {
  __typename?: 'Institution';
  address?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dwollaCustomerId?: Maybe<Scalars['Int']>;
  endGrade?: Maybe<Scalars['Int']>;
  enrollment?: Maybe<Scalars['Int']>;
  evmAccountId?: Maybe<Scalars['Int']>;
  ftTeacher?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Int']>;
  stGrade?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  user?: Maybe<Array<Maybe<User>>>;
  userCommitments?: Maybe<Array<Maybe<UserCommitment>>>;
  userOffers?: Maybe<Array<Maybe<UserOffers>>>;
  userTeams?: Maybe<Array<Maybe<UserTeams>>>;
  website?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  zip4?: Maybe<Scalars['String']>;
};

export type InstitutionBookmarkCursor = {
  __typename?: 'InstitutionBookmarkCursor';
  pageEdges?: Maybe<Array<Maybe<InstitutionBookmarkEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type InstitutionBookmarkEdge = {
  __typename?: 'InstitutionBookmarkEdge';
  node?: Maybe<BookmarkInstitution>;
};

export enum Level {
  Coach = 'Coach',
  College = 'College',
  HighSchool = 'HighSchool',
  MiddleSchool = 'MiddleSchool',
  PreferNotToSay = 'Prefer_Not_To_Say',
  Professional = 'Professional',
}

export type LikeArgument = {
  contentUserId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  likedBy: Scalars['Int'];
  reaction?: InputMaybe<Reactions>;
};

export type LinkCategoryType = {
  __typename?: 'LinkCategoryType';
  category?: Maybe<CategoryType>;
  displayName?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  limitation?: Maybe<Scalars['Int']>;
  linkDomain?: Maybe<Array<Maybe<LinkDomain>>>;
  orderIndex?: Maybe<Scalars['Int']>;
  totalLinks?: Maybe<Scalars['Int']>;
};

export type LinkDomain = {
  __typename?: 'LinkDomain';
  categoryType?: Maybe<LinkCategoryType>;
  categoryTypeId?: Maybe<Scalars['Int']>;
  domain?: Maybe<CategoryDomain>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  linkData?: Maybe<UserLink>;
  rootUrl?: Maybe<Scalars['String']>;
};

export type LinkIconUploadSasUrlResponse = {
  __typename?: 'LinkIconUploadSASUrlResponse';
  SASUrl: Scalars['String'];
  blobUrl: Scalars['String'];
};

export type LinkReOrderArgs = {
  orderIndex: Scalars['Int'];
  userLinkId: Scalars['Int'];
};

export type ListBanksArguments = {
  dwollaCustomerUrl: Scalars['String'];
};

export type ListForSaleNft = {
  nftEditionId?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  sellingPrice?: InputMaybe<Scalars['Float']>;
};

export type LoginInput = {
  checkEmailVerified?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<SocialProvider>;
  socialAuthId?: InputMaybe<Scalars['String']>;
};

export enum MarketplaceType {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

export type Mask = {
  __typename?: 'Mask';
  displayFormat?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  pickers?: Maybe<Scalars['String']>;
};

export enum MediaType {
  Image = 'Image',
  News = 'News',
  Text = 'Text',
  Video = 'Video',
}

export type Metadata = {
  __typename?: 'Metadata';
  bankName?: Maybe<Scalars['String']>;
  bankType?: Maybe<Scalars['String']>;
  nftId?: Maybe<Scalars['Int']>;
  nftName?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  tier?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateWallet?: Maybe<DwollaCustomer>;
  addActivityBackgroundVideo: BackgroundVideoDataResForActivity;
  addActivityImage?: Maybe<UserActivity>;
  addBackgroundVideo: BackgroundVideoDataRes;
  addComment: ContentComment;
  addCommentLike: Scalars['Boolean'];
  addConnection?: Maybe<Scalars['Boolean']>;
  addFollowers: Scalars['Boolean'];
  addFundToWallet?: Maybe<AddFundToWalletResponse>;
  addLike: Scalars['Boolean'];
  addProfileView?: Maybe<ProfileView>;
  addSearchAppearance?: Maybe<SearchAppearance>;
  addTags: Array<Tag>;
  addUserAchievement?: Maybe<UserAchievements>;
  addUserOffers?: Maybe<UserOffers>;
  addUserTeam?: Maybe<UserTeams>;
  authFacebook: SocialAuthResponse;
  authGoogle: SocialAuthResponse;
  autoLogin: AuthResponse;
  blockUser?: Maybe<ReportBlock>;
  buyNFT: NftBuyResponse;
  buySecondaryNFT: NftBuyResponse;
  changeConnectionStatus?: Maybe<Scalars['Boolean']>;
  changePassword: Scalars['Boolean'];
  checkEmailAvailability: Scalars['Boolean'];
  confirmEmail?: Maybe<User>;
  createBookmark: BookmarkResponse;
  createContent: ContentCreateResponse;
  createContentDraft?: Maybe<ContentCreateResponse>;
  createContentFromDraft: ContentCreateResponse;
  createNFT: NftCreateResponse;
  createNFTLike: Scalars['Boolean'];
  createNFTListing: NftListingResponse;
  createTempAppleUser?: Maybe<Scalars['Boolean']>;
  createUserActivityTeam: UserActivityTeam;
  createUserLink: UserLink;
  deleteActivityBackground?: Maybe<Scalars['Boolean']>;
  deleteBankAccount?: Maybe<DeleteBankAccountResponse>;
  deleteBookmark: BookmarkResponse;
  deleteComment: Scalars['Boolean'];
  deleteCommentLike: Scalars['Boolean'];
  deleteContent: Scalars['Boolean'];
  deleteContentDraft?: Maybe<Scalars['Boolean']>;
  deleteLike: Scalars['Boolean'];
  deleteNFTEditionDraft: DeleteNftEditionDraftResponse;
  deleteNFTLike: Scalars['Boolean'];
  deleteNotification?: Maybe<Scalars['Boolean']>;
  deleteProfileImage?: Maybe<Scalars['Boolean']>;
  deleteUser: Scalars['Boolean'];
  deleteUserAchievement?: Maybe<UserAchievements>;
  deleteUserActivity?: Maybe<Scalars['Boolean']>;
  deleteUserActivitySeason?: Maybe<UserActivitySeasonAttribute>;
  deleteUserActivityTeam: Scalars['Boolean'];
  deleteUserBackground?: Maybe<Scalars['Boolean']>;
  deleteUserLink: Scalars['Boolean'];
  deleteUserOffers?: Maybe<Scalars['Boolean']>;
  deleteUserTeam?: Maybe<Scalars['Boolean']>;
  editActivityImage?: Maybe<UserActivity>;
  editComment: ContentComment;
  editUserActivityTeam: UserActivityTeam;
  editUserLink: UserLink;
  exchangePublicToken?: Maybe<PlaidExchangePublicTokenResponse>;
  flagContent: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  generateVideoContentSASUrl?: Maybe<UploadContent>;
  incrementProfileViewCount?: Maybe<Scalars['Boolean']>;
  listForSaleNFTSecondaryMarket?: Maybe<Scalars['Boolean']>;
  login: AuthResponse;
  logout: Scalars['Boolean'];
  markAllFirebaseNotificationAsRead?: Maybe<Scalars['Boolean']>;
  markAllFirebaseNotificationAsViewed?: Maybe<Scalars['Boolean']>;
  markAllNotificationAsRead?: Maybe<Scalars['Boolean']>;
  markAllNotificationAsViewed?: Maybe<Scalars['Boolean']>;
  markChatVideoPublished: Scalars['Boolean'];
  markFirebaseNotificationAsRead?: Maybe<Scalars['Boolean']>;
  markNotificationAsDisabled?: Maybe<Scalars['Boolean']>;
  markNotificationAsRead?: Maybe<Scalars['Boolean']>;
  pinContent: Content;
  populateDataToRedis: Scalars['Boolean'];
  reListNFT: NftReListResponse;
  refreshContentUpload: ContentCreateResponse;
  refreshToken: AuthResponse;
  registerFCMToken?: Maybe<Scalars['Boolean']>;
  registerFirebaseToken?: Maybe<RegisterFirebaseToken>;
  removeConnection?: Maybe<Scalars['Boolean']>;
  removeFollowers: Scalars['Boolean'];
  removeFromSaleNFTSecondaryMarket?: Maybe<Scalars['Boolean']>;
  removeUserCommitment?: Maybe<UserCommitment>;
  removeUserCommitmentVideo?: Maybe<UserCommitment>;
  removeUserPrimaryVideo?: Maybe<UserPrimaryVideo>;
  reorderUserActivity?: Maybe<Scalars['Boolean']>;
  reorderUserLink?: Maybe<Scalars['Boolean']>;
  reorderUserOffer?: Maybe<Scalars['Boolean']>;
  reorderUserTeams?: Maybe<Array<Maybe<UserTeams>>>;
  replaceActivityImage?: Maybe<UserActivity>;
  reportNFT: Scalars['Boolean'];
  reportUser?: Maybe<ReportBlock>;
  repostContent: Scalars['Boolean'];
  resendEmailVerification?: Maybe<Scalars['Boolean']>;
  saveUserActivity?: Maybe<UserActivity>;
  saveUserActivitySeason?: Maybe<UserActivitySeasonAttribute>;
  sendConfirmation: Scalars['Boolean'];
  sendConfirmationEmail: Scalars['Boolean'];
  sendContentImageToHiveInput: Scalars['Boolean'];
  setActivityThumbnail: Scalars['Boolean'];
  setFeatureThumbnail: Scalars['Boolean'];
  signUp: AuthResponse;
  subscribeAndUnsubscribeFirebaseTopicTokens: Scalars['Boolean'];
  unPinContent: Content;
  unTagUser?: Maybe<Scalars['Boolean']>;
  unblockUser: Scalars['Boolean'];
  updateBackgroundImage?: Maybe<Scalars['Boolean']>;
  updateCommentLike: Scalars['Boolean'];
  updateContent: Content;
  updateContentDraft?: Maybe<ContentDraft>;
  updateDwollaCustomerStatus?: Maybe<DwollaCustomer>;
  updateFCMToken?: Maybe<Scalars['Boolean']>;
  updateLike: Scalars['Boolean'];
  updateNFT: NftCreateResponse;
  updateNotification?: Maybe<NotificationSetting>;
  updateProfileImage?: Maybe<Scalars['Boolean']>;
  updateSettings?: Maybe<UserLinksSettings>;
  updateUserAchievement?: Maybe<Scalars['Boolean']>;
  updateUserActivity?: Maybe<UserActivity>;
  updateUserActivitySeason?: Maybe<UserActivitySeasonAttribute>;
  updateUserBackground?: Maybe<Scalars['Boolean']>;
  updateUserCommitment?: Maybe<UserCommitment>;
  updateUserData?: Maybe<User>;
  updateUserInstitutions?: Maybe<Scalars['Boolean']>;
  updateUserOffers?: Maybe<UserOffers>;
  updateUserPreferences: Scalars['Boolean'];
  updateUserPrimary?: Maybe<UserPrimaryVideo>;
  updateUserSocialFollow?: Maybe<UpdateSocialFollow>;
  updateUserTeam?: Maybe<UserTeams>;
  uploadChatImage: Array<ChatImageResponse>;
  uploadChatVideo?: Maybe<Array<Maybe<ChatVideoResponse>>>;
  verifyOldPassword: Scalars['Boolean'];
  verifyResetToken: User;
  verifyToken: User;
  viewProfile?: Maybe<Scalars['Boolean']>;
  withdrawFundFromWallet?: Maybe<WithdrawFundFromWalletResponse>;
};

export type MutationActivateWalletArgs = {
  ActivateWalletArguments: ActivateWalletArguments;
};

export type MutationAddActivityBackgroundVideoArgs = {
  backgroundVideoDataInputForActivity?: InputMaybe<BackgroundVideoDataInputForActivity>;
};

export type MutationAddActivityImageArgs = {
  activityImageInput?: InputMaybe<ActivityImageInput>;
};

export type MutationAddBackgroundVideoArgs = {
  backgroundVideoDataInput?: InputMaybe<BackgroundVideoDataInput>;
};

export type MutationAddCommentArgs = {
  contentCommentArgs: ContentCommentArgs;
};

export type MutationAddCommentLikeArgs = {
  commentLikeArgs: CommentLikeArgument;
};

export type MutationAddConnectionArgs = {
  connectionId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MutationAddFollowersArgs = {
  followingId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MutationAddFundToWalletArgs = {
  AddFundToWalletArguments: AddFundToWalletArguments;
};

export type MutationAddLikeArgs = {
  contentLikeArgs: LikeArgument;
};

export type MutationAddProfileViewArgs = {
  fromId: Scalars['Int'];
  toUserId: Scalars['Int'];
};

export type MutationAddSearchAppearanceArgs = {
  fromId: Scalars['Int'];
  toUserId: Scalars['Int'];
};

export type MutationAddTagsArgs = {
  names: Array<Scalars['String']>;
};

export type MutationAddUserAchievementArgs = {
  userAchievement?: InputMaybe<UserAchievementInput>;
};

export type MutationAddUserOffersArgs = {
  userOffer?: InputMaybe<UserOfferInput>;
};

export type MutationAddUserTeamArgs = {
  userTeam?: InputMaybe<UserTeamsInput>;
};

export type MutationAuthFacebookArgs = {
  input?: InputMaybe<AuthInput>;
};

export type MutationAuthGoogleArgs = {
  input?: InputMaybe<AuthInput>;
};

export type MutationAutoLoginArgs = {
  uniqueKey: Scalars['String'];
};

export type MutationBlockUserArgs = {
  userAction?: InputMaybe<UserReportBlock>;
};

export type MutationBuyNftArgs = {
  paymentArgument: PaymentArgument;
};

export type MutationBuySecondaryNftArgs = {
  buySecondaryNFT: BuySecondaryNftArgs;
};

export type MutationChangeConnectionStatusArgs = {
  connectionId: Scalars['Int'];
  status: ConnectionStatus;
  userId: Scalars['Int'];
};

export type MutationChangePasswordArgs = {
  id: Scalars['Int'];
  password: Scalars['String'];
};

export type MutationCheckEmailAvailabilityArgs = {
  email: Scalars['String'];
};

export type MutationConfirmEmailArgs = {
  emailConfirmToken: Scalars['String'];
};

export type MutationCreateBookmarkArgs = {
  bookmarkArgs: BookmarkArgument;
};

export type MutationCreateContentArgs = {
  contentArgs: ContentArgs;
};

export type MutationCreateContentDraftArgs = {
  contentArgs: ContentArgs;
};

export type MutationCreateContentFromDraftArgs = {
  draftId: Scalars['Int'];
  updateSharedAttributeIds?: InputMaybe<Array<Scalars['Int']>>;
};

export type MutationCreateNftArgs = {
  nftArgs: NftArgs;
};

export type MutationCreateNftLikeArgs = {
  nftLikeArgs: NftLikeArgument;
};

export type MutationCreateNftListingArgs = {
  nftArgs: NftListingArgument;
};

export type MutationCreateTempAppleUserArgs = {
  id: Scalars['String'];
  user: Scalars['JSON'];
};

export type MutationCreateUserActivityTeamArgs = {
  userActivityTeamInput?: InputMaybe<UserActivityTeamInput>;
};

export type MutationCreateUserLinkArgs = {
  userLinkArgs?: InputMaybe<UserLinkArgs>;
};

export type MutationDeleteActivityBackgroundArgs = {
  userActivityId: Scalars['Int'];
};

export type MutationDeleteBankAccountArgs = {
  DeleteBankAccountArguments: DeleteBankAccountArguments;
};

export type MutationDeleteBookmarkArgs = {
  bookmarkArgs: BookmarkArgument;
};

export type MutationDeleteCommentArgs = {
  commentId: Scalars['Int'];
};

export type MutationDeleteCommentLikeArgs = {
  commentId?: InputMaybe<Scalars['Int']>;
  likedBy?: InputMaybe<Scalars['Int']>;
};

export type MutationDeleteContentArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteContentDraftArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteLikeArgs = {
  contentId: Scalars['Int'];
  contentUserId: Scalars['Int'];
  likedBy: Scalars['Int'];
};

export type MutationDeleteNftEditionDraftArgs = {
  id: Scalars['Int'];
};

export type MutationDeleteNftLikeArgs = {
  nftDeleteArgs: NftDeleteArgument;
};

export type MutationDeleteNotificationArgs = {
  notificationId: Scalars['Int'];
};

export type MutationDeleteProfileImageArgs = {
  userId: Scalars['Int'];
};

export type MutationDeleteUserArgs = {
  userId: Scalars['Int'];
};

export type MutationDeleteUserAchievementArgs = {
  achievementId: Scalars['Int'];
};

export type MutationDeleteUserActivityArgs = {
  userActivityId: Scalars['Int'];
};

export type MutationDeleteUserActivitySeasonArgs = {
  seasonId: Scalars['Int'];
};

export type MutationDeleteUserActivityTeamArgs = {
  userActivityTeamId: Scalars['Int'];
};

export type MutationDeleteUserBackgroundArgs = {
  userId: Scalars['Int'];
};

export type MutationDeleteUserLinkArgs = {
  userLinkId: Scalars['Int'];
};

export type MutationDeleteUserOffersArgs = {
  offerId: Scalars['Int'];
};

export type MutationDeleteUserTeamArgs = {
  teamId: Scalars['Int'];
};

export type MutationEditActivityImageArgs = {
  activityImageInput?: InputMaybe<ActivityImageInput>;
};

export type MutationEditCommentArgs = {
  contentCommentArgs: ContentCommentArgs;
};

export type MutationEditUserActivityTeamArgs = {
  userActivityTeamId: Scalars['Int'];
  userActivityTeamInput?: InputMaybe<UserActivityTeamInput>;
};

export type MutationEditUserLinkArgs = {
  userLinkArgs?: InputMaybe<UserLinkArgs>;
  userLinkId: Scalars['Int'];
};

export type MutationExchangePublicTokenArgs = {
  exchangeTokenArguments: ExchangeTokenArguments;
};

export type MutationFlagContentArgs = {
  flagContentInput: FlagContentInput;
};

export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};

export type MutationGenerateVideoContentSasUrlArgs = {
  fileExtension?: InputMaybe<Scalars['String']>;
};

export type MutationIncrementProfileViewCountArgs = {
  userId: Scalars['Int'];
};

export type MutationListForSaleNftSecondaryMarketArgs = {
  listForSaleNFTArgs?: InputMaybe<ListForSaleNft>;
};

export type MutationLoginArgs = {
  loginInput?: InputMaybe<LoginInput>;
};

export type MutationLogoutArgs = {
  deviceId?: InputMaybe<Scalars['String']>;
  logOutVia?: InputMaybe<SignUpOrLogoutType>;
};

export type MutationMarkAllNotificationAsReadArgs = {
  userId: Scalars['Int'];
};

export type MutationMarkAllNotificationAsViewedArgs = {
  userId: Scalars['Int'];
};

export type MutationMarkChatVideoPublishedArgs = {
  getChatVideosInput?: InputMaybe<GetChatVideosInput>;
};

export type MutationMarkFirebaseNotificationAsReadArgs = {
  notificationId: Scalars['Int'];
};

export type MutationMarkNotificationAsDisabledArgs = {
  notificationId?: InputMaybe<Scalars['Int']>;
};

export type MutationMarkNotificationAsReadArgs = {
  notificationId: Scalars['Int'];
};

export type MutationPinContentArgs = {
  contentId: Scalars['Int'];
};

export type MutationPopulateDataToRedisArgs = {
  populateDataToRedisInput?: InputMaybe<PopulateDataToRedisInput>;
};

export type MutationReListNftArgs = {
  nftId: Scalars['Int'];
  reListNFTArgs: ReListNftArgs;
};

export type MutationRefreshContentUploadArgs = {
  contentId: Scalars['Int'];
  isDraft?: InputMaybe<Scalars['Boolean']>;
};

export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};

export type MutationRegisterFcmTokenArgs = {
  deviceId?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
  userId: Scalars['Int'];
};

export type MutationRegisterFirebaseTokenArgs = {
  deviceId?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
  userId: Scalars['Int'];
};

export type MutationRemoveConnectionArgs = {
  connectionId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MutationRemoveFollowersArgs = {
  followingId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MutationRemoveFromSaleNftSecondaryMarketArgs = {
  nftEditionId?: InputMaybe<Scalars['Int']>;
};

export type MutationRemoveUserCommitmentArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

export type MutationRemoveUserCommitmentVideoArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

export type MutationRemoveUserPrimaryVideoArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

export type MutationReorderUserActivityArgs = {
  userActivityReOrderArgs?: InputMaybe<Array<InputMaybe<UserActivityReOrderArgs>>>;
};

export type MutationReorderUserLinkArgs = {
  linkReOrderArgs?: InputMaybe<Array<InputMaybe<LinkReOrderArgs>>>;
};

export type MutationReorderUserOfferArgs = {
  userOffer?: InputMaybe<Array<InputMaybe<UserOfferInput>>>;
};

export type MutationReorderUserTeamsArgs = {
  userTeamsInput?: InputMaybe<Array<InputMaybe<UserTeamsInput>>>;
};

export type MutationReplaceActivityImageArgs = {
  activityImageInput?: InputMaybe<ActivityImageInput>;
};

export type MutationReportNftArgs = {
  userAction?: InputMaybe<ReportNftArgs>;
};

export type MutationReportUserArgs = {
  userAction?: InputMaybe<UserReportBlock>;
};

export type MutationRepostContentArgs = {
  repostContentArgs: RepostContentArgs;
};

export type MutationResendEmailVerificationArgs = {
  userId: Scalars['Int'];
};

export type MutationSaveUserActivityArgs = {
  activityId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MutationSaveUserActivitySeasonArgs = {
  userActivitySeason: UserActivitySeasonInput;
};

export type MutationSendConfirmationArgs = {
  email: Scalars['String'];
};

export type MutationSendConfirmationEmailArgs = {
  email: Scalars['String'];
  id: Scalars['Int'];
};

export type MutationSendContentImageToHiveInputArgs = {
  sendContentImageToHiveInput: SendContentImageToHiveInput;
};

export type MutationSetActivityThumbnailArgs = {
  activityId: Scalars['Int'];
  contentId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MutationSetFeatureThumbnailArgs = {
  contentId: Scalars['Int'];
  featureId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MutationSignUpArgs = {
  signupInput?: InputMaybe<SignupInput>;
};

export type MutationSubscribeAndUnsubscribeFirebaseTopicTokensArgs = {
  isSubscribe: Scalars['Boolean'];
  token: Scalars['String'];
};

export type MutationUnPinContentArgs = {
  contentId: Scalars['Int'];
};

export type MutationUnTagUserArgs = {
  contentId: Scalars['Int'];
  isDraft?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['Int'];
};

export type MutationUnblockUserArgs = {
  userAction?: InputMaybe<UserReportBlock>;
};

export type MutationUpdateBackgroundImageArgs = {
  updateProfileImageInput?: InputMaybe<UpdateProfileImageInput>;
};

export type MutationUpdateCommentLikeArgs = {
  commentLikeArgs: CommentLikeArgument;
};

export type MutationUpdateContentArgs = {
  contentArgs: ContentArgs;
  id: Scalars['Int'];
};

export type MutationUpdateContentDraftArgs = {
  contentArgs: ContentArgs;
  id: Scalars['Int'];
};

export type MutationUpdateDwollaCustomerStatusArgs = {
  status: DwollaCustomerStatus;
};

export type MutationUpdateFcmTokenArgs = {
  deviceId: Scalars['String'];
  token: Scalars['String'];
  userId: Scalars['Int'];
};

export type MutationUpdateLikeArgs = {
  contentLikeArgs: LikeArgument;
};

export type MutationUpdateNftArgs = {
  nftArgs: NftUpdateArgs;
  nftEditionId: Scalars['Int'];
  nftId: Scalars['Int'];
};

export type MutationUpdateNotificationArgs = {
  notificationInput?: InputMaybe<NotificationInput>;
};

export type MutationUpdateProfileImageArgs = {
  updateProfileImageInput?: InputMaybe<UpdateProfileImageInput>;
};

export type MutationUpdateSettingsArgs = {
  settingData?: InputMaybe<SettingArgs>;
};

export type MutationUpdateUserAchievementArgs = {
  userAchievement?: InputMaybe<Array<InputMaybe<UserAchievementInput>>>;
};

export type MutationUpdateUserActivityArgs = {
  userActivity: UserActivityInput;
  userActivityId: Scalars['Int'];
};

export type MutationUpdateUserActivitySeasonArgs = {
  seasonId?: InputMaybe<Scalars['Int']>;
  userActivitySeason: UserActivitySeasonInput;
};

export type MutationUpdateUserBackgroundArgs = {
  updateProfileImageInput?: InputMaybe<UpdateProfileImageInput>;
};

export type MutationUpdateUserCommitmentArgs = {
  id: Scalars['Int'];
  updateUserCommitmentInput?: InputMaybe<UpdateUserCommitmentInput>;
};

export type MutationUpdateUserDataArgs = {
  userInput: UserInput;
};

export type MutationUpdateUserInstitutionsArgs = {
  userId: Scalars['Int'];
  userInstitutionInputType?: InputMaybe<UserInstitutionInputType>;
};

export type MutationUpdateUserOffersArgs = {
  userOffer?: InputMaybe<UserOfferInput>;
};

export type MutationUpdateUserPreferencesArgs = {
  updateUserPreferencesInput?: InputMaybe<UpdateUserPreferencesInput>;
};

export type MutationUpdateUserPrimaryArgs = {
  id: Scalars['Int'];
  updateUserPrimaryVideoInput?: InputMaybe<UpdateUserPrimaryVideoInput>;
};

export type MutationUpdateUserSocialFollowArgs = {
  updateSocial?: InputMaybe<UpdateSocialFollowInput>;
};

export type MutationUpdateUserTeamArgs = {
  userTeam?: InputMaybe<UserTeamsInput>;
};

export type MutationUploadChatImageArgs = {
  chatImageInput?: InputMaybe<ChatImageInput>;
};

export type MutationUploadChatVideoArgs = {
  chatVideoInput?: InputMaybe<ChatVideoInput>;
};

export type MutationVerifyOldPasswordArgs = {
  id: Scalars['Int'];
  password: Scalars['String'];
};

export type MutationVerifyResetTokenArgs = {
  token: Scalars['String'];
};

export type MutationVerifyTokenArgs = {
  email: Scalars['String'];
  id: Scalars['Int'];
  token: Scalars['String'];
};

export type MutationViewProfileArgs = {
  loggedInUserId: Scalars['Int'];
  profileOwner: Scalars['Int'];
};

export type MutationWithdrawFundFromWalletArgs = {
  WithdrawFundFromWalletArguments: WithdrawFundFromWalletArguments;
};

export type MutualConnectionsWithCount = {
  __typename?: 'MutualConnectionsWithCount';
  count?: Maybe<Scalars['Int']>;
  mutualConnections?: Maybe<Array<Maybe<User>>>;
};

export type MyOrder = {
  __typename?: 'MyOrder';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  nft?: Maybe<Nft>;
  nftId: Scalars['Int'];
  qty?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MyOrderEdge = {
  __typename?: 'MyOrderEdge';
  node?: Maybe<MyOrder>;
};

export type MyOrdersCursor = {
  __typename?: 'MyOrdersCursor';
  pageEdges?: Maybe<Array<Maybe<MyOrderEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Nft = {
  __typename?: 'NFT';
  activitiesOnNfts?: Maybe<Array<Maybe<ActivitiesOnNfTs>>>;
  attributeValues?: Maybe<Array<Maybe<AttributeValueOutput>>>;
  attributesOnNfts?: Maybe<Array<Maybe<AttributesOnNfTs>>>;
  createdAt: Scalars['DateTime'];
  creator?: Maybe<EvmAccount>;
  creatorId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  editions?: Maybe<Array<Maybe<NftEdition>>>;
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  ipfsUrl?: Maybe<Scalars['String']>;
  isAnyEditionMinted?: Maybe<Scalars['Boolean']>;
  isLiked?: Maybe<Scalars['Boolean']>;
  isNFTBookmarked?: Maybe<Scalars['Boolean']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  isReported?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<NftItem>>>;
  likeCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  videoData?: Maybe<Scalars['JSON']>;
  viewCount?: Maybe<Scalars['Int']>;
};

export type NftEditionsArgs = {
  nftStatus?: InputMaybe<NftStatus>;
};

export type NftActivitiesArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  nftEditionId: Scalars['Int'];
  sortBy?: InputMaybe<SortByActivityType>;
  take?: InputMaybe<Scalars['Int']>;
};

export type NftActivity = {
  __typename?: 'NFTActivity';
  buyer?: Maybe<User>;
  buyerId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  nft?: Maybe<Nft>;
  nftEdition?: Maybe<NftEdition>;
  nftEditionId?: Maybe<Scalars['Int']>;
  nftId?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Int']>;
  seller?: Maybe<User>;
  sellerId?: Maybe<Scalars['Int']>;
  type?: Maybe<ActivityType>;
};

export type NftArgs = {
  activityIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  attributeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  attributeValues?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
  coRoyaltyData?: InputMaybe<Array<InputMaybe<CoRoyaltyParams>>>;
  description?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nftDataInput?: InputMaybe<NftVideoDataInput>;
  nftFirstSaleShare?: InputMaybe<Array<InputMaybe<NftFirstSaleShare>>>;
  price: Scalars['Float'];
  royaltyFee: Scalars['Float'];
  seriesNumber?: InputMaybe<Scalars['Int']>;
  size: Scalars['Int'];
  tier: NftEditionTier;
  tokenId?: InputMaybe<Scalars['String']>;
  type: NftType;
};

export type NftBuyResponse = {
  __typename?: 'NFTBuyResponse';
  message: Scalars['String'];
  orderId?: Maybe<Scalars['Int']>;
  status: Scalars['Boolean'];
};

export type NftCreateResponse = {
  __typename?: 'NFTCreateResponse';
  croppedUrl?: Maybe<Scalars['String']>;
  nftEditionId: Scalars['Int'];
  nftId: Scalars['Int'];
  originalUrl?: Maybe<Scalars['String']>;
  signedUrl?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  videoThumbnailURL?: Maybe<Scalars['String']>;
};

export type NftEdition = {
  __typename?: 'NFTEdition';
  CoRoyaltyUser?: Maybe<Array<Maybe<CoRoyaltyUser>>>;
  associatedTiers?: Maybe<Array<Maybe<NftEditionTier>>>;
  autoGenerated?: Maybe<Scalars['Boolean']>;
  availableTiers?: Maybe<Array<Maybe<NftEditionTier>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstSaleShareUser?: Maybe<Array<Maybe<NftFirstSaleShareUser>>>;
  forSale?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inProgressQuantity?: Maybe<Scalars['Int']>;
  isBookmarked?: Maybe<Scalars['Boolean']>;
  isRelisted?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<NftItem>>>;
  left?: Maybe<Scalars['Int']>;
  listedDate?: Maybe<Scalars['DateTime']>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  minted?: Maybe<Scalars['Boolean']>;
  mintedDate?: Maybe<Scalars['DateTime']>;
  nft?: Maybe<Nft>;
  nftId?: Maybe<Scalars['Int']>;
  ownedEditions?: Maybe<Scalars['Int']>;
  ownedEditionsDetail?: Maybe<NftItem>;
  price?: Maybe<Scalars['Float']>;
  royaltyFee?: Maybe<Scalars['Float']>;
  serialized?: Maybe<Scalars['Boolean']>;
  seriesNumber?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  status?: Maybe<NftStatus>;
  tier?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  txHash?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NftEditionAssociatedTiersArgs = {
  nftEditionStatus?: InputMaybe<NftEditionStatus>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type NftEditionActivitiesCursor = {
  __typename?: 'NFTEditionActivitiesCursor';
  pageEdges?: Maybe<Array<Maybe<NftEditionActivitiesEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type NftEditionActivitiesEdge = {
  __typename?: 'NFTEditionActivitiesEdge';
  node?: Maybe<NftActivity>;
};

export type NftEditionBookmark = {
  __typename?: 'NFTEditionBookmark';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  nftEditionId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type NftEditionBookmarkCursor = {
  __typename?: 'NFTEditionBookmarkCursor';
  pageEdges?: Maybe<Array<Maybe<NftEditionBookmarkEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type NftEditionBookmarkEdge = {
  __typename?: 'NFTEditionBookmarkEdge';
  node?: Maybe<NftEditionBookmark>;
};

export type NftEditionBookmarks = {
  __typename?: 'NFTEditionBookmarks';
  id?: Maybe<Scalars['Int']>;
  nft?: Maybe<Nft>;
  nftEdition?: Maybe<NftEdition>;
};

export type NftEditionCursor = {
  __typename?: 'NFTEditionCursor';
  pageEdges?: Maybe<Array<Maybe<NftEditionEdge>>>;
  pageInfo?: Maybe<NftPageNoPageInfo>;
};

export type NftEditionEdge = {
  __typename?: 'NFTEditionEdge';
  node?: Maybe<NftEdition>;
};

export enum NftEditionStatus {
  Bookmarked = 'Bookmarked',
  Created = 'Created',
  Draft = 'Draft',
  Listed = 'Listed',
  Purchased = 'Purchased',
  Sold = 'Sold',
}

export enum NftEditionTier {
  Common = 'Common',
  Elite = 'Elite',
  Epic = 'Epic',
  Legendary = 'Legendary',
  Rare = 'Rare',
}

export type NftFirstSaleShare = {
  userId: Scalars['Int'];
  value: Scalars['Float'];
};

export type NftFirstSaleShareUser = {
  __typename?: 'NFTFirstSaleShareUser';
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  userId: Scalars['Int'];
  value: Scalars['Float'];
};

export type NftItem = {
  __typename?: 'NFTItem';
  createdAt?: Maybe<Scalars['DateTime']>;
  evmAccount?: Maybe<EvmAccount>;
  evmAccountId?: Maybe<Scalars['Int']>;
  forSale?: Maybe<Scalars['Boolean']>;
  forSaleQty?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inProgressItems?: Maybe<Scalars['Int']>;
  lastSoldPrice?: Maybe<Scalars['Float']>;
  minted?: Maybe<Scalars['Boolean']>;
  nft?: Maybe<Nft>;
  nftEdition?: Maybe<NftEdition>;
  nftEditionId?: Maybe<Scalars['Int']>;
  nftId?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Int']>;
  qtyLeft?: Maybe<Scalars['Int']>;
  sellingPrice?: Maybe<Scalars['Float']>;
  tokenId?: Maybe<Scalars['String']>;
  txHash?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type NftItemArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  nftEditionId: Scalars['Int'];
  sortBy?: InputMaybe<SortByType>;
  take?: InputMaybe<Scalars['Int']>;
};

export type NftItemCursor = {
  __typename?: 'NFTItemCursor';
  pageEdges?: Maybe<Array<Maybe<NftItemEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type NftItemEdge = {
  __typename?: 'NFTItemEdge';
  node?: Maybe<NftItem>;
};

export type NftLike = {
  __typename?: 'NFTLike';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  nftId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type NftLikeCursor = {
  __typename?: 'NFTLikeCursor';
  pageEdges?: Maybe<Array<Maybe<NftLikeEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type NftLikeEdge = {
  __typename?: 'NFTLikeEdge';
  node?: Maybe<NftLike>;
};

export type NftListingResponse = {
  __typename?: 'NFTListingResponse';
  listedNFT: Scalars['Boolean'];
  nftEditionId: Scalars['Int'];
  nftId: Scalars['Int'];
  waitForNotification: Scalars['Boolean'];
};

export type NftPageNoPageInfo = {
  __typename?: 'NFTPageNoPageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  pageNo?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NftReListResponse = {
  __typename?: 'NFTReListResponse';
  nftEditionId: Scalars['Int'];
  nftId: Scalars['Int'];
  seriesNumber: Scalars['Int'];
};

export enum NftSortBy {
  MostLiked = 'MostLiked',
  MostViewed = 'MostViewed',
  Newest = 'Newest',
  Oldest = 'Oldest',
  PriceHighToLow = 'PriceHighToLow',
  PriceLowToHigh = 'PriceLowToHigh',
}

export type NftStatistic = {
  __typename?: 'NFTStatistic';
  bookmarkCount?: Maybe<Scalars['Int']>;
  createdCount?: Maybe<Scalars['Int']>;
  draftCount?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  listedCount?: Maybe<Scalars['Int']>;
  purchaseCount?: Maybe<Scalars['Int']>;
  soldCount?: Maybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export enum NftStatus {
  Draft = 'Draft',
  Listed = 'Listed',
  Sold = 'Sold',
}

export enum NftType {
  Image = 'Image',
  Video = 'Video',
}

export type NftUpdateArgs = {
  activityIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  attributeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  attributeValues?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
  coRoyaltyData?: InputMaybe<Array<InputMaybe<CoRoyaltyParams>>>;
  description?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  nftDataInput?: InputMaybe<NftVideoDataInput>;
  nftFirstSaleShare?: InputMaybe<Array<InputMaybe<NftFirstSaleShare>>>;
  price?: InputMaybe<Scalars['Float']>;
  royaltyFee?: InputMaybe<Scalars['Float']>;
  seriesNumber?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  tier?: InputMaybe<NftEditionTier>;
  tokenId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<NftType>;
};

export type NftVideoDataInput = {
  assetId?: InputMaybe<Scalars['String']>;
  contentId?: InputMaybe<Scalars['Int']>;
  extension?: InputMaybe<Scalars['String']>;
  oldAssetId?: InputMaybe<Scalars['String']>;
  oldContentId?: InputMaybe<Scalars['Int']>;
  oldImageFileName?: InputMaybe<Scalars['String']>;
  playbackId?: InputMaybe<Scalars['String']>;
  videoThumbnail?: InputMaybe<Scalars['String']>;
};

export type NetworkStatus = {
  __typename?: 'NetworkStatus';
  isFollowing?: Maybe<Scalars['Boolean']>;
  userConnection?: Maybe<UserConnection>;
};

export type NetworkStatusIsFollowingArgs = {
  userId: Scalars['Int'];
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  isRead: Scalars['Boolean'];
  isViewed: Scalars['Boolean'];
  receiverId?: Maybe<Scalars['Int']>;
  redirectLink?: Maybe<Scalars['String']>;
  sender?: Maybe<User>;
  senderId: Scalars['Int'];
  title: Scalars['String'];
  type?: Maybe<NotificationType>;
};

export type NotificationCursor = {
  __typename?: 'NotificationCursor';
  pageEdges?: Maybe<Array<Maybe<NotificationEdge>>>;
  pageInfo?: Maybe<NotificationPageInfo>;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  node?: Maybe<Notification>;
};

export type NotificationInput = {
  advanceNotification?: InputMaybe<Scalars['JSON']>;
  emailSetting?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['Int']>;
  mutedWords?: InputMaybe<Scalars['Boolean']>;
  notificationBadge?: InputMaybe<Scalars['Boolean']>;
  pushNotifications?: InputMaybe<Scalars['JSON']>;
  userId: Scalars['Int'];
};

export type NotificationPageInfo = {
  __typename?: 'NotificationPageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NotificationSetting = {
  __typename?: 'NotificationSetting';
  advanceNotification?: Maybe<Scalars['JSON']>;
  emailSetting?: Maybe<Scalars['JSON']>;
  id: Scalars['Int'];
  mutedWords: Scalars['Boolean'];
  notificationBadge: Scalars['Boolean'];
  pushNotifications?: Maybe<Scalars['JSON']>;
  userId?: Maybe<Scalars['Int']>;
};

export enum NotificationType {
  NewFollower = 'NewFollower',
  ReceiveCommentLike = 'ReceiveCommentLike',
  ReceiveConnectionApproval = 'ReceiveConnectionApproval',
  ReceiveConnectionRequest = 'ReceiveConnectionRequest',
  ReceiveContentComment = 'ReceiveContentComment',
  ReceiveContentLike = 'ReceiveContentLike',
  ReceiveContentMention = 'ReceiveContentMention',
  ReceiveContentRepost = 'ReceiveContentRepost',
  ReceiveContentTag = 'ReceiveContentTag',
  ReceiveManuallyRemoveContentNotification = 'ReceiveManuallyRemoveContentNotification',
  ReceiveMessage = 'ReceiveMessage',
  ReceiveRemoveContentNotification = 'ReceiveRemoveContentNotification',
  ReceiveVideoProcessed = 'ReceiveVideoProcessed',
  ReceiveViewProfile = 'ReceiveViewProfile',
}

export type Order = {
  __typename?: 'Order';
  buyer?: Maybe<User>;
  buyerFee?: Maybe<Scalars['Float']>;
  buyerId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Int']>;
  seller?: Maybe<User>;
  sellerFee?: Maybe<Scalars['Float']>;
  sellerId?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['Float']>;
  transferHash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type OrderCursor = {
  __typename?: 'OrderCursor';
  pageEdges?: Maybe<Array<Maybe<OrderEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum OrderDate {
  CurrentYear = 'CurrentYear',
  LastSixMonths = 'LastSixMonths',
  LastThirtyDays = 'LastThirtyDays',
  LastThreeMonths = 'LastThreeMonths',
}

export type OrderDetailsResponse = {
  __typename?: 'OrderDetailsResponse';
  buyer?: Maybe<User>;
  buyerId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fees?: Maybe<Scalars['Float']>;
  nft?: Maybe<Nft>;
  nftEdition?: Maybe<NftEdition>;
  nftEditionId?: Maybe<Scalars['Int']>;
  nftId?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  orderType?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  qty?: Maybe<Scalars['Int']>;
  seller?: Maybe<User>;
  sellerId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  totalPrice?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['String']>;
  transferHash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  node?: Maybe<Order>;
};

export enum OrderStatus {
  Completed = 'Completed',
  Failed = 'Failed',
  Processing = 'Processing',
}

export enum OrderType {
  Purchased = 'Purchased',
  Sold = 'Sold',
}

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PaymentArgument = {
  buyerId: Scalars['Int'];
  nftEditionId: Scalars['Int'];
  quantity: Scalars['Int'];
  sellerId: Scalars['Int'];
  totalPrice: Scalars['Float'];
};

export type Permission = {
  __typename?: 'Permission';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export enum PickerType {
  Distance = 'Distance',
  Percent = 'Percent',
  Speed = 'Speed',
  Time = 'Time',
  Weight = 'Weight',
}

export type PopulateDataToRedisInput = {
  isBlockedData?: InputMaybe<Scalars['Boolean']>;
  isFlush?: InputMaybe<Scalars['Boolean']>;
  isNetworkData?: InputMaybe<Scalars['Boolean']>;
};

export enum PostSortByOptions {
  MostCommented = 'MostCommented',
  MostLiked = 'MostLiked',
  Relevance = 'Relevance',
}

export type PreferenceActivity = {
  __typename?: 'PreferenceActivity';
  activitiesOnContentDrafts?: Maybe<Array<Maybe<ActivitiesOnContentDrafts>>>;
  activitiesOnContents?: Maybe<Array<Maybe<ActivitiesOnContents>>>;
  activitiesOnNfts?: Maybe<Array<Maybe<ActivitiesOnNfTs>>>;
  attributes?: Maybe<Array<Maybe<ActivityAttribute>>>;
  groupName?: Maybe<Array<Maybe<Scalars['String']>>>;
  iconURL?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  recruitmentStatus?: Maybe<Scalars['Boolean']>;
  seasonAttributes?: Maybe<Array<Maybe<SeasonAttribute>>>;
  showTeams?: Maybe<Scalars['Boolean']>;
  userActivity?: Maybe<UserActivity>;
  userActivityFeatureThumbnail?: Maybe<UserActivityFeatureThumbnail>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type PreferenceActivityActivitiesOnContentDraftsArgs = {
  userId?: InputMaybe<Scalars['Int']>;
};

export type PreferenceActivityActivitiesOnContentsArgs = {
  userId?: InputMaybe<Scalars['Int']>;
};

export type PreferenceActivityActivitiesOnNftsArgs = {
  userId?: InputMaybe<Scalars['Int']>;
};

export type PreferenceActivityAttributesArgs = {
  isActivity?: InputMaybe<Scalars['Boolean']>;
  isFeature?: InputMaybe<Scalars['Boolean']>;
  isMedia?: InputMaybe<Scalars['Boolean']>;
  isSeason?: InputMaybe<Scalars['Boolean']>;
  isShared?: InputMaybe<Scalars['Boolean']>;
  showOnAllActivityMedia?: InputMaybe<Scalars['Boolean']>;
  showOnMainProfile?: InputMaybe<Scalars['Boolean']>;
  showOnTeams?: InputMaybe<Scalars['Boolean']>;
};

export type PreferenceActivityUserActivityFeatureThumbnailArgs = {
  userId: Scalars['Int'];
};

export type PriceRange = {
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};

export type ProfileCursor = {
  __typename?: 'ProfileCursor';
  pageEdges?: Maybe<Array<Maybe<ProfileEdge>>>;
  pageInfo?: Maybe<UserPageInfo>;
};

export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  node?: Maybe<ProfileView>;
};

export type ProfileView = {
  __typename?: 'ProfileView';
  connectionStatus?: Maybe<UserConnection>;
  followerCount?: Maybe<Scalars['Int']>;
  fromUser?: Maybe<User>;
  fromUserId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mutualConnection?: Maybe<Scalars['Int']>;
  toUser?: Maybe<User>;
  toUserId?: Maybe<Scalars['Int']>;
  viewDate?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  checkAppVersion?: Maybe<AppVersionType>;
  checkIfBlocked: CheckIfBlockedResponse;
  checkIfUserWithNFT: Scalars['Boolean'];
  getAllContentDraft?: Maybe<Array<Maybe<ContentDraft>>>;
  getAllUserActivities?: Maybe<Array<Maybe<UserActivity>>>;
  getApplicationFlags?: Maybe<ApplicationFlags>;
  getAttributeById?: Maybe<ActivityAttribute>;
  getAttributesWithContent?: Maybe<Array<Maybe<AttributesWithContent>>>;
  getBackGroundSASUrl?: Maybe<LinkIconUploadSasUrlResponse>;
  getBlockedUsers?: Maybe<UserCursor>;
  getBookmarkedInstitutions: InstitutionBookmarkCursor;
  getBookmarkedNFTEdition: NftEditionBookmarkCursor;
  getBookmarkedUsers: UserBookmarkCursor;
  getBuyingNftEditionDetails: BuyingNftEditionResponse;
  getBuyingNftItemDetails: BuyingNftItemResponse;
  getCategory: Array<Category>;
  getChatVideos?: Maybe<Array<Maybe<ChatVideoResponse>>>;
  getCommentLikesById?: Maybe<CommentLikeCursor>;
  getCommentsByContent?: Maybe<ContentCommentCursor>;
  getConnectionRequests?: Maybe<Array<Maybe<UserConnection>>>;
  getConnectionStatus?: Maybe<UserConnection>;
  getContentById?: Maybe<Content>;
  getContentByIds?: Maybe<Array<Maybe<Content>>>;
  getContentDraftById?: Maybe<ContentDraft>;
  getContents?: Maybe<ContentCursor>;
  getContentsES?: Maybe<ContentCursor>;
  getContentsFromTag?: Maybe<ContentTagCursor>;
  getDashboardNFTs: DashboardCursor;
  getDwollaBanksByDwollaCustomerUrl?: Maybe<Array<Maybe<DwollaBanksResponse>>>;
  getDwollaCustomer?: Maybe<GetDwollaCustomerResponse>;
  getDwollaCustomerByUserId?: Maybe<DwollaCustomer>;
  getDwollaTransactionHistory?: Maybe<TransactionHistoryCursor>;
  getDwollaVerifiedUser: Array<DwollaVerifiedUser>;
  getDwollaWalletBalance?: Maybe<DwollaWalletBalanceResponse>;
  getFeaturedCreators: FeaturedCreatorCursor;
  getFirebaseNotificationCount?: Maybe<Scalars['Int']>;
  getFirebaseNotifications?: Maybe<FirebaseNotificationCursor>;
  getForYouFeed?: Maybe<ContentCursor>;
  getGroupedAttributes?: Maybe<Array<Maybe<GetGroupedAttributesResponse>>>;
  getGroupedCommentReactionsById?: Maybe<Array<Maybe<ContentLikeCountsGroupedByReaction>>>;
  getGroupedContentReactionsById?: Maybe<Array<Maybe<ContentLikeCountsGroupedByReaction>>>;
  getGroupedUserActivities?: Maybe<GetGroupedUserActivitiesResponse>;
  getGuestEndpointsToken?: Maybe<Tokens>;
  getItemsToSellOnSecondary?: Maybe<SecondaryItemsCursor>;
  getLegendaryNFTEditionDetail?: Maybe<NftEdition>;
  getLikesByContent?: Maybe<ContentLikeCursor>;
  getLinkDomains?: Maybe<Array<Maybe<LinkDomain>>>;
  getLinkIconUploadSASUrl?: Maybe<LinkIconUploadSasUrlResponse>;
  getLinkSettings?: Maybe<UserLinksSettings>;
  getLinkToken?: Maybe<PlaidGetLinkTokenResponse>;
  getLinkTypes?: Maybe<Array<Maybe<LinkCategoryType>>>;
  getMutualConnectionCount?: Maybe<Scalars['Int']>;
  getMutualConnections?: Maybe<Array<Maybe<User>>>;
  getMutualConnectionsWithCount?: Maybe<MutualConnectionsWithCount>;
  getMyFeed?: Maybe<ContentCursor>;
  getMyOrders?: Maybe<MyOrdersCursor>;
  getNFTById?: Maybe<Nft>;
  getNFTEdition: NftEditionCursor;
  getNFTEditionActivities: NftEditionActivitiesCursor;
  getNFTEditionById?: Maybe<NftEdition>;
  getNFTItems: NftItemCursor;
  getNFTLike: NftLikeCursor;
  getNFTStatistics?: Maybe<NftStatistic>;
  getNFTs: NftEditionCursor;
  getNetworkStatus?: Maybe<NetworkStatus>;
  getNotificationSetting?: Maybe<NotificationSetting>;
  getNotifications?: Maybe<NotificationCursor>;
  getOrderDetailsById?: Maybe<OrderDetailsResponse>;
  getOrderedCatgories?: Maybe<Array<Maybe<LinkCategoryType>>>;
  getPreferenceActivities: Array<PreferenceActivity>;
  getProfileViews?: Maybe<ProfileCursor>;
  getReportedNFT?: Maybe<ReportNftCursor>;
  getReportedUsers?: Maybe<Array<Maybe<ReportBlock>>>;
  getRoles: Array<Role>;
  getStates?: Maybe<Array<Maybe<State>>>;
  getSuggestedUsers?: Maybe<SearchUserCursor>;
  getSuggestionsBasedOnConnection?: Maybe<UserCursor>;
  getSuggestionsBasedOnFollowing?: Maybe<UserCursor>;
  getSuggestionsBasedOnProfile?: Maybe<SearchUserCursor>;
  getTaggedUsers?: Maybe<Array<Maybe<TaggedUser>>>;
  getTagsByContent?: Maybe<Array<Maybe<ContentTag>>>;
  getTempAppleUser?: Maybe<TempAppleUser>;
  getTopTraders: TopTraderCursor;
  getTransactionPDP: OrderCursor;
  getUniqueFeaturedMediaAttributes?: Maybe<Array<Maybe<ActivityAttribute>>>;
  getUnreadNotificationCount: Scalars['Int'];
  getUploadUrlProfile?: Maybe<GetUploadUrlProfileResponse>;
  getUploadUrlUserBackground?: Maybe<GetUploadUrlProfileResponse>;
  getUserAchievements?: Maybe<Array<Maybe<UserAchievements>>>;
  getUserActivitiesAndInterests: GetUserActivitiesAndInterestsResponse;
  getUserActivity?: Maybe<UserActivity>;
  getUserActivityAttributeValue?: Maybe<UserActivityAttributeValue>;
  getUserActivityTeamById?: Maybe<UserActivityTeam>;
  getUserActivityTeams?: Maybe<Array<Maybe<UserActivityTeam>>>;
  getUserByEmail: User;
  getUserById: User;
  getUserByIds: Array<Maybe<User>>;
  getUserByUsername: User;
  getUserConnections?: Maybe<ConnectionCursor>;
  getUserDetailsById: User;
  getUserInterestData?: Maybe<GetUserInterestDataResponse>;
  getUserLinkById?: Maybe<UserLink>;
  getUserLinks?: Maybe<UserLinkCursor>;
  getUserOfferById?: Maybe<UserOffers>;
  getUserOffers?: Maybe<Array<Maybe<UserOffers>>>;
  getUserSocialMedia?: Maybe<UpdateSocialFollow>;
  getUserStatistic: UserStatistic;
  getUserTeamById?: Maybe<UserTeams>;
  getUserTeams?: Maybe<Array<Maybe<UserTeams>>>;
  getUsers: Array<User>;
  getUsersByXMPPUsername?: Maybe<Array<Maybe<User>>>;
  pingPostService?: Maybe<Scalars['String']>;
  searchContent?: Maybe<SearchContentCursor>;
  searchCreator?: Maybe<SearchCreatorCursor>;
  searchInstituteByText?: Maybe<Array<Maybe<SearchInstituteByTextResponse>>>;
  searchInstitution?: Maybe<Array<Maybe<Institution>>>;
  searchMutualConnections?: Maybe<UserCursor>;
  searchNFT?: Maybe<SearchNftCursor>;
  searchNXTagByText?: Maybe<Array<Maybe<Tag>>>;
  searchUser?: Maybe<SearchUserCursor>;
};

export type QueryCheckAppVersionArgs = {
  appVersion?: InputMaybe<Scalars['String']>;
};

export type QueryCheckIfBlockedArgs = {
  blockedUserId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type QueryCheckIfUserWithNftArgs = {
  userId: Scalars['Int'];
};

export type QueryGetAllContentDraftArgs = {
  activityId?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type QueryGetAllUserActivitiesArgs = {
  userId: Scalars['Int'];
};

export type QueryGetAttributeByIdArgs = {
  attributeId?: InputMaybe<Scalars['Int']>;
};

export type QueryGetAttributesWithContentArgs = {
  activityId?: InputMaybe<Scalars['Int']>;
  isFeatured?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['Int'];
};

export type QueryGetBackGroundSasUrlArgs = {
  extension?: InputMaybe<Scalars['String']>;
};

export type QueryGetBlockedUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  searchString?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type QueryGetBookmarkedInstitutionsArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  institutionId: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryGetBookmarkedNftEditionArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  nftEditionId: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryGetBookmarkedUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type QueryGetBuyingNftEditionDetailsArgs = {
  nftEditionId: Scalars['Int'];
};

export type QueryGetBuyingNftItemDetailsArgs = {
  nftItemId: Scalars['Int'];
};

export type QueryGetCategoryArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  searchString?: InputMaybe<Scalars['String']>;
};

export type QueryGetChatVideosArgs = {
  getChatVideosInput?: InputMaybe<GetChatVideosInput>;
};

export type QueryGetCommentLikesByIdArgs = {
  commentId: Scalars['Int'];
  cursor?: InputMaybe<Scalars['Int']>;
  reaction?: InputMaybe<Reactions>;
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryGetCommentsByContentArgs = {
  contentId: Scalars['Int'];
  cursor?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryGetConnectionRequestsArgs = {
  requireMutualConnectionCount?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<ConnectionStatus>;
  userId: Scalars['Int'];
};

export type QueryGetConnectionStatusArgs = {
  connectionId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type QueryGetContentByIdArgs = {
  id: Scalars['Int'];
};

export type QueryGetContentByIdsArgs = {
  ids: Array<Scalars['Int']>;
};

export type QueryGetContentDraftByIdArgs = {
  id: Scalars['Int'];
};

export type QueryGetContentsArgs = {
  getContentsArgs?: InputMaybe<GetContentsArgs>;
};

export type QueryGetContentsEsArgs = {
  getContentsArgs?: InputMaybe<GetContentsArgs>;
};

export type QueryGetContentsFromTagArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  tagId: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryGetDashboardNfTsArgs = {
  dashboardArgs?: InputMaybe<DashboardArgs>;
};

export type QueryGetDwollaBanksByDwollaCustomerUrlArgs = {
  ListBanksArguments: ListBanksArguments;
};

export type QueryGetDwollaTransactionHistoryArgs = {
  transHistoryArgs: TransactionHistoryArgs;
};

export type QueryGetDwollaVerifiedUserArgs = {
  searchString?: InputMaybe<Scalars['String']>;
};

export type QueryGetFeaturedCreatorsArgs = {
  cursor: Scalars['Int'];
  take: Scalars['Int'];
};

export type QueryGetFirebaseNotificationsArgs = {
  notificationArgs?: InputMaybe<NotificationArgument>;
};

export type QueryGetForYouFeedArgs = {
  id: Scalars['Int'];
  pageNo?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryGetGroupedAttributesArgs = {
  groupedAttributesInput?: InputMaybe<GetGroupedAttributesInput>;
};

export type QueryGetGroupedCommentReactionsByIdArgs = {
  commentId: Scalars['Int'];
};

export type QueryGetGroupedContentReactionsByIdArgs = {
  contentId: Scalars['Int'];
};

export type QueryGetGroupedUserActivitiesArgs = {
  filterUserActivities?: InputMaybe<Scalars['Boolean']>;
  isUserActivity?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type QueryGetItemsToSellOnSecondaryArgs = {
  getSecondaryItemArgs: GetSecondaryItemArgs;
};

export type QueryGetLegendaryNftEditionDetailArgs = {
  nftId: Scalars['Int'];
};

export type QueryGetLikesByContentArgs = {
  contentId: Scalars['Int'];
  cursor?: InputMaybe<Scalars['Int']>;
  reaction?: InputMaybe<Reactions>;
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryGetLinkDomainsArgs = {
  typeId: Scalars['Int'];
};

export type QueryGetLinkIconUploadSasUrlArgs = {
  extension?: InputMaybe<Scalars['String']>;
};

export type QueryGetLinkSettingsArgs = {
  userId: Scalars['Int'];
};

export type QueryGetMutualConnectionCountArgs = {
  connectionUserId: Scalars['Int'];
  loggedInUserId: Scalars['Int'];
};

export type QueryGetMutualConnectionsArgs = {
  connectionUserId: Scalars['Int'];
  limit?: InputMaybe<Scalars['Int']>;
  loggedInUserId: Scalars['Int'];
  pageNo: Scalars['Int'];
};

export type QueryGetMutualConnectionsWithCountArgs = {
  connectionUserId: Scalars['Int'];
  limit?: InputMaybe<Scalars['Int']>;
  loggedInUserId: Scalars['Int'];
  pageNo?: InputMaybe<Scalars['Int']>;
};

export type QueryGetMyFeedArgs = {
  id: Scalars['Int'];
  pageNo?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryGetMyOrdersArgs = {
  cursor: Scalars['Int'];
  nftEditionId?: InputMaybe<Scalars['Int']>;
  orderDate?: InputMaybe<OrderDate>;
  sortBy?: InputMaybe<OrderType>;
  status?: InputMaybe<Array<InputMaybe<OrderStatus>>>;
  take: Scalars['Int'];
};

export type QueryGetNftByIdArgs = {
  id: Scalars['Int'];
};

export type QueryGetNftEditionArgs = {
  getNFTEditionsArgs?: InputMaybe<GetNftEditionsArgs>;
};

export type QueryGetNftEditionActivitiesArgs = {
  nftActivitiesArgs?: InputMaybe<NftActivitiesArgs>;
};

export type QueryGetNftEditionByIdArgs = {
  id: Scalars['Int'];
};

export type QueryGetNftItemsArgs = {
  nftItemArgs?: InputMaybe<NftItemArgs>;
};

export type QueryGetNftLikeArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  nftId?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryGetNftStatisticsArgs = {
  userId?: InputMaybe<Scalars['Int']>;
};

export type QueryGetNfTsArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryGetNetworkStatusArgs = {
  networkUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type QueryGetNotificationSettingArgs = {
  userId: Scalars['Int'];
};

export type QueryGetNotificationsArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type QueryGetOrderDetailsByIdArgs = {
  id: Scalars['Int'];
};

export type QueryGetOrderedCatgoriesArgs = {
  userId: Scalars['Int'];
};

export type QueryGetPreferenceActivitiesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  searchString?: InputMaybe<Scalars['String']>;
};

export type QueryGetProfileViewsArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type QueryGetReportedNftArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryGetReportedUsersArgs = {
  userId?: InputMaybe<Scalars['Int']>;
};

export type QueryGetSuggestedUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  searchString: Scalars['String'];
  take?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type QueryGetSuggestionsBasedOnConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  loggedInUserId: Scalars['Int'];
  pageNo: Scalars['Int'];
};

export type QueryGetSuggestionsBasedOnFollowingArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  loggedInUserId: Scalars['Int'];
  pageNo: Scalars['Int'];
};

export type QueryGetSuggestionsBasedOnProfileArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  pageNo: Scalars['Int'];
  userId: Scalars['Int'];
};

export type QueryGetTaggedUsersArgs = {
  contentId: Scalars['Int'];
  isDraft?: InputMaybe<Scalars['Boolean']>;
  loggedInUserId: Scalars['Int'];
};

export type QueryGetTagsByContentArgs = {
  contentId: Scalars['Int'];
};

export type QueryGetTempAppleUserArgs = {
  id: Scalars['String'];
};

export type QueryGetTopTradersArgs = {
  cursor: Scalars['Int'];
  take: Scalars['Int'];
};

export type QueryGetTransactionPdpArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type QueryGetUniqueFeaturedMediaAttributesArgs = {
  activityId?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type QueryGetUnreadNotificationCountArgs = {
  userId: Scalars['Int'];
};

export type QueryGetUploadUrlProfileArgs = {
  getUploadUrlProfilePayload?: InputMaybe<GetUploadUrlProfilePayload>;
};

export type QueryGetUploadUrlUserBackgroundArgs = {
  getUploadUrlProfilePayload?: InputMaybe<GetUploadUrlProfilePayload>;
};

export type QueryGetUserAchievementsArgs = {
  userId?: InputMaybe<Scalars['Int']>;
};

export type QueryGetUserActivitiesAndInterestsArgs = {
  searchString?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type QueryGetUserActivityArgs = {
  userActivityId: Scalars['Int'];
};

export type QueryGetUserActivityAttributeValueArgs = {
  userId: Scalars['Int'];
};

export type QueryGetUserActivityTeamByIdArgs = {
  userActivityTeamId: Scalars['Int'];
};

export type QueryGetUserActivityTeamsArgs = {
  activityId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type QueryGetUserByEmailArgs = {
  email: Scalars['String'];
};

export type QueryGetUserByIdArgs = {
  id: Scalars['Int'];
};

export type QueryGetUserByIdsArgs = {
  ids: Array<Scalars['Int']>;
};

export type QueryGetUserByUsernameArgs = {
  username: Scalars['String'];
};

export type QueryGetUserConnectionsArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  isRequest?: InputMaybe<Scalars['Boolean']>;
  requireMutualConnectionCount?: InputMaybe<Scalars['Boolean']>;
  searchString?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ConnectionStatus>;
  take?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type QueryGetUserDetailsByIdArgs = {
  id: Scalars['Int'];
};

export type QueryGetUserInterestDataArgs = {
  userId: Scalars['Int'];
};

export type QueryGetUserLinkByIdArgs = {
  userLinkId: Scalars['Int'];
};

export type QueryGetUserLinksArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type QueryGetUserOfferByIdArgs = {
  offerId: Scalars['Int'];
};

export type QueryGetUserOffersArgs = {
  userId: Scalars['Int'];
};

export type QueryGetUserSocialMediaArgs = {
  userId?: InputMaybe<Scalars['Int']>;
};

export type QueryGetUserStatisticArgs = {
  userId: Scalars['Int'];
};

export type QueryGetUserTeamByIdArgs = {
  teamId: Scalars['Int'];
};

export type QueryGetUserTeamsArgs = {
  userId: Scalars['Int'];
};

export type QueryGetUsersByXmppUsernameArgs = {
  xmppUsernames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuerySearchContentArgs = {
  searchContentArgs?: InputMaybe<SearchContentArgs>;
};

export type QuerySearchCreatorArgs = {
  searchCreatorArgs?: InputMaybe<SearchCreatorArgs>;
};

export type QuerySearchInstituteByTextArgs = {
  level?: InputMaybe<Level>;
  limit?: InputMaybe<Scalars['Int']>;
  pageNo?: InputMaybe<Scalars['Int']>;
  searchString: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
};

export type QuerySearchInstitutionArgs = {
  level?: InputMaybe<Level>;
  searchString: Scalars['String'];
};

export type QuerySearchMutualConnectionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  loggedInUserId: Scalars['Int'];
  pageNo: Scalars['Int'];
  searchString?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type QuerySearchNftArgs = {
  searchNFTArgs?: InputMaybe<SearchNftArgs>;
};

export type QuerySearchNxTagByTextArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  searchString: Scalars['String'];
};

export type QuerySearchUserArgs = {
  searchUserInput?: InputMaybe<SearchUserInput>;
};

export type ReListNftArgs = {
  activityIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  attributeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  attributeValues?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
  coRoyaltyData?: InputMaybe<Array<InputMaybe<CoRoyaltyParams>>>;
  description?: InputMaybe<Scalars['String']>;
  nftFirstSaleShare?: InputMaybe<Array<InputMaybe<NftFirstSaleShare>>>;
  price: Scalars['Float'];
  royaltyFee: Scalars['Float'];
  size: Scalars['Int'];
  tier: NftEditionTier;
};

export enum Reactions {
  Emphasis = 'Emphasis',
  Haha = 'Haha',
  HappyFace = 'Happy_Face',
  Heart = 'Heart',
  Question = 'Question',
  ThumbsUp = 'Thumbs_Up',
}

export type RegisterFirebaseToken = {
  __typename?: 'RegisterFirebaseToken';
  deviceId?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type ReportBlock = {
  __typename?: 'ReportBlock';
  blockedUser?: Maybe<User>;
  blockedUserId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  reason?: Maybe<ReportUserReason>;
  type?: Maybe<BlockType>;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type ReportNft = {
  __typename?: 'ReportNFT';
  createdAt: Scalars['DateTime'];
  nftId: Scalars['Int'];
  reason?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type ReportNftArgs = {
  nftId: Scalars['Int'];
  reason?: InputMaybe<Scalars['String']>;
};

export type ReportNftCursor = {
  __typename?: 'ReportNFTCursor';
  pageEdges?: Maybe<Array<Maybe<ReportNftEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ReportNftEdge = {
  __typename?: 'ReportNFTEdge';
  node?: Maybe<ReportNft>;
};

export enum ReportUserReason {
  FakeProfile = 'Fake_profile',
  InappropriateBehavior = 'Inappropriate_behavior',
  InappropriateProfilePicture = 'Inappropriate_profile_picture',
  InappropriateUsernameBio = 'Inappropriate_username_bio',
}

export type RepostContentArgs = {
  contentId: Scalars['Int'];
  contentTags?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  repostDescription?: InputMaybe<Scalars['String']>;
  taggedUserIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  userId: Scalars['Int'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['Int'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<Permission>>>;
};

export type SearchAppearance = {
  __typename?: 'SearchAppearance';
  fromUser?: Maybe<User>;
  fromUserId?: Maybe<Scalars['Int']>;
  searchDate?: Maybe<Scalars['DateTime']>;
  toUser?: Maybe<User>;
  toUserId?: Maybe<Scalars['Int']>;
};

export enum SearchByDate {
  Newest = 'Newest',
  Oldest = 'Oldest',
}

export type SearchContentArgs = {
  activity?: InputMaybe<Array<Scalars['Int']>>;
  attributeIds?: InputMaybe<Array<Scalars['Int']>>;
  contentType?: InputMaybe<MediaType>;
  datePosted?: InputMaybe<SearchContentDatePosted>;
  isCommitment?: InputMaybe<Scalars['Boolean']>;
  isPrimary?: InputMaybe<Scalars['Boolean']>;
  isPublishedToFeed?: InputMaybe<Scalars['Boolean']>;
  pageNo?: InputMaybe<Scalars['Int']>;
  searchString?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<PostSortByOptions>;
  sortDate?: InputMaybe<SearchPostDate>;
  take?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type SearchContentCursor = {
  __typename?: 'SearchContentCursor';
  pageEdges?: Maybe<SearchContentEdge>;
  pageInfo?: Maybe<EsContentPageInfo>;
};

export enum SearchContentDatePosted {
  AllTime = 'AllTime',
  LastSixMonths = 'LastSixMonths',
  LastThreeMonths = 'LastThreeMonths',
  ThisMonth = 'ThisMonth',
  Today = 'Today',
  Yesterday = 'Yesterday',
}

export type SearchContentEdge = {
  __typename?: 'SearchContentEdge';
  node?: Maybe<Array<Maybe<ElasticContent>>>;
};

export type SearchCreatorArgs = {
  activity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  pageNo?: InputMaybe<Scalars['Int']>;
  searchString?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<SearchByDate>;
  take?: InputMaybe<Scalars['Int']>;
};

export type SearchCreatorCursor = {
  __typename?: 'SearchCreatorCursor';
  pageEdges?: Maybe<SearchCreatorEdge>;
  pageInfo?: Maybe<EsCreatorPageInfo>;
};

export type SearchCreatorEdge = {
  __typename?: 'SearchCreatorEdge';
  node?: Maybe<Array<Maybe<ElasticCreator>>>;
};

export type SearchCursor = {
  __typename?: 'SearchCursor';
  pageEdges?: Maybe<Array<Maybe<SearchEdge>>>;
  pageInfo?: Maybe<UserPageInfo>;
};

export type SearchEdge = {
  __typename?: 'SearchEdge';
  node?: Maybe<SearchAppearance>;
};

export type SearchNftArgs = {
  activity?: InputMaybe<Array<Scalars['Int']>>;
  attributeIds?: InputMaybe<Array<Scalars['Int']>>;
  availableForSale?: InputMaybe<MarketplaceType>;
  editions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageNo?: InputMaybe<Scalars['Int']>;
  priceRange?: InputMaybe<PriceRange>;
  searchString?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<NftSortBy>;
  take?: InputMaybe<Scalars['Int']>;
};

export type SearchNftCursor = {
  __typename?: 'SearchNFTCursor';
  pageEdges?: Maybe<SearchNftEdge>;
  pageInfo?: Maybe<EsnftPageInfo>;
};

export type SearchNftEdge = {
  __typename?: 'SearchNFTEdge';
  node?: Maybe<Array<Maybe<ElasticNft>>>;
};

export enum SearchPostDate {
  Newest = 'Newest',
  Oldest = 'Oldest',
}

export type SearchUserCursor = {
  __typename?: 'SearchUserCursor';
  pageEdges?: Maybe<SearchUserEdge>;
  pageInfo?: Maybe<EsUserPageInfo>;
};

export type SearchUserEdge = {
  __typename?: 'SearchUserEdge';
  node?: Maybe<Array<Maybe<EsUser>>>;
};

export type SearchUserInput = {
  activity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  hasCommitment?: InputMaybe<Scalars['Boolean']>;
  isPrimary?: InputMaybe<Scalars['Boolean']>;
  orderByConnectedUsers?: InputMaybe<Scalars['Boolean']>;
  pageNo?: InputMaybe<Scalars['Int']>;
  searchString?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<SearchUserSortBy>;
  take?: InputMaybe<Scalars['Int']>;
  userActivity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  userCreated?: InputMaybe<SearchUserUserCreated>;
  userId: Scalars['Int'];
};

export enum SearchUserSortBy {
  MostFollowers = 'MostFollowers',
  Relevance = 'Relevance',
}

export enum SearchUserUserCreated {
  AllTime = 'AllTime',
  LastSixMonths = 'LastSixMonths',
  LastThreeMonths = 'LastThreeMonths',
  ThisMonth = 'ThisMonth',
  Today = 'Today',
  Yesterday = 'Yesterday',
}

export type SeasonAttribute = {
  __typename?: 'SeasonAttribute';
  activities?: Maybe<Array<Maybe<PreferenceActivity>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  format?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export type SecondaryItem = {
  __typename?: 'SecondaryItem';
  forSaleQty: Scalars['Int'];
  id: Scalars['Int'];
  nft: Nft;
  nftEdition: NftEdition;
  nftEditionId: Scalars['Int'];
  nftId: Scalars['Int'];
  sellingPrice: Scalars['Float'];
  user: User;
};

export type SecondaryItemEdge = {
  __typename?: 'SecondaryItemEdge';
  node?: Maybe<NftItem>;
};

export enum SecondaryItemSortBy {
  EditionHighToLow = 'EditionHighToLow',
  EditionLowToHigh = 'EditionLowToHigh',
  PriceHighToLow = 'PriceHighToLow',
  PriceLowToHigh = 'PriceLowToHigh',
}

export type SecondaryItemsCursor = {
  __typename?: 'SecondaryItemsCursor';
  pageEdges?: Maybe<Array<Maybe<SecondaryItemEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum SelectionType {
  Input = 'Input',
  List = 'List',
  Picker = 'Picker',
}

export type SendContentImageToHiveInput = {
  contentId: Scalars['Int'];
  imageURL: Scalars['String'];
  isDraft?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['Int'];
};

export type SettingArgs = {
  backgroundImage?: InputMaybe<Scalars['String']>;
  businessEmail?: InputMaybe<Scalars['String']>;
  categoryOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  collapsedPreview?: InputMaybe<Scalars['Boolean']>;
  isVideoEnable?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['Int'];
};

export enum SignUpOrLogoutType {
  CoreApp = 'CoreApp',
  Marketplace = 'Marketplace',
  Nil = 'NIL',
}

export type SignupInput = {
  birthDate?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  preferencesIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  provider?: InputMaybe<SocialProvider>;
  signUpVia?: InputMaybe<SignUpOrLogoutType>;
  socialAccessToken?: InputMaybe<Scalars['String']>;
  socialAuthId?: InputMaybe<Scalars['String']>;
};

export type SocialAuthResponse = {
  __typename?: 'SocialAuthResponse';
  email?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  socialAccessToken: Scalars['String'];
  socialAuthId: Scalars['String'];
};

export enum SocialProvider {
  Apple = 'Apple',
  Facebook = 'Facebook',
  Google = 'Google',
}

export type State = {
  __typename?: 'State';
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type SuggestedCursor = {
  __typename?: 'SuggestedCursor';
  pageEdges?: Maybe<Array<Maybe<SuggestionEdge>>>;
  pageInfo?: Maybe<UserPageInfo>;
};

export type SuggestionEdge = {
  __typename?: 'SuggestionEdge';
  node?: Maybe<User>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TaggedUser = {
  __typename?: 'TaggedUser';
  backgroundImageThumbnail?: Maybe<Scalars['String']>;
  connectionStatus?: Maybe<UserConnection>;
  firstname?: Maybe<Scalars['String']>;
  followerCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isTagged?: Maybe<Scalars['Boolean']>;
  lastname?: Maybe<Scalars['String']>;
  mutualConnectionCount?: Maybe<Scalars['Int']>;
  profileThumbnail?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  xmppUsername?: Maybe<Scalars['String']>;
};

export type TempAppleUser = {
  __typename?: 'TempAppleUser';
  id?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['JSON']>;
};

export type Tokens = {
  __typename?: 'Tokens';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type TopTrader = {
  __typename?: 'TopTrader';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  score: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['Int'];
};

export type TopTraderCursor = {
  __typename?: 'TopTraderCursor';
  pageEdges?: Maybe<Array<Maybe<TopTraderEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type TopTraderEdge = {
  __typename?: 'TopTraderEdge';
  node?: Maybe<TopTrader>;
};

export type TransactionHistoryArgs = {
  orderDate?: InputMaybe<DwollaTnxDateFilters>;
  pageNo?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<InputMaybe<DwollaTnxType>>>;
  status?: InputMaybe<Array<InputMaybe<DwollaTnxStatus>>>;
  take?: InputMaybe<Scalars['Int']>;
};

export type TransactionHistoryCursor = {
  __typename?: 'TransactionHistoryCursor';
  pageEdges?: Maybe<Array<Maybe<TransactionHistoryEdge>>>;
  pageInfo?: Maybe<DwollaTnxPageInfo>;
};

export type TransactionHistoryEdge = {
  __typename?: 'TransactionHistoryEdge';
  node?: Maybe<TransactionHistoryResponse>;
};

export type TransactionHistoryResponse = {
  __typename?: 'TransactionHistoryResponse';
  amount?: Maybe<AmountType>;
  clearing?: Maybe<AchClearing>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  individualAchId?: Maybe<Scalars['String']>;
  metadata?: Maybe<Metadata>;
  status?: Maybe<Scalars['String']>;
  tnxType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UpdateBackgroundImageInput = {
  contentId?: InputMaybe<Scalars['Int']>;
  croppedImageBlobUrl?: InputMaybe<Scalars['String']>;
  imageHeight?: InputMaybe<Scalars['Int']>;
  imageWidth?: InputMaybe<Scalars['Int']>;
  isFromGallery?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['Int'];
};

export type UpdateProfileImageInput = {
  contentId?: InputMaybe<Scalars['Int']>;
  croppedImageBlobUrl?: InputMaybe<Scalars['String']>;
  imageHeight?: InputMaybe<Scalars['Int']>;
  imageWidth?: InputMaybe<Scalars['Int']>;
  isFromGallery: Scalars['Boolean'];
  userId: Scalars['Int'];
};

export type UpdateSocialFollow = {
  __typename?: 'UpdateSocialFollow';
  facebookLink?: Maybe<Scalars['String']>;
  flickrLink?: Maybe<Scalars['String']>;
  instagramLink?: Maybe<Scalars['String']>;
  linkOrder?: Maybe<Scalars['JSON']>;
  linkedInLink?: Maybe<Scalars['String']>;
  pinterestLink?: Maybe<Scalars['String']>;
  quoraLink?: Maybe<Scalars['String']>;
  redditLink?: Maybe<Scalars['String']>;
  snapchatLink?: Maybe<Scalars['String']>;
  spotifyLink?: Maybe<Scalars['String']>;
  tiktokLink?: Maybe<Scalars['String']>;
  tumblrLink?: Maybe<Scalars['String']>;
  twitterLink?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
  youtubeLink?: Maybe<Scalars['String']>;
};

export type UpdateSocialFollowInput = {
  facebookLink?: InputMaybe<Scalars['String']>;
  flickrLink?: InputMaybe<Scalars['String']>;
  instagramLink?: InputMaybe<Scalars['String']>;
  linkOrder?: InputMaybe<Scalars['JSON']>;
  linkedInLink?: InputMaybe<Scalars['String']>;
  pinterestLink?: InputMaybe<Scalars['String']>;
  quoraLink?: InputMaybe<Scalars['String']>;
  redditLink?: InputMaybe<Scalars['String']>;
  snapchatLink?: InputMaybe<Scalars['String']>;
  spotifyLink?: InputMaybe<Scalars['String']>;
  tiktokLink?: InputMaybe<Scalars['String']>;
  tumblrLink?: InputMaybe<Scalars['String']>;
  twitterLink?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
  youtubeLink?: InputMaybe<Scalars['String']>;
};

export type UpdateUserCommitmentInput = {
  contentId?: InputMaybe<Scalars['Int']>;
  institutionId?: InputMaybe<Scalars['Int']>;
  isActivelyLooking?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  videoData?: InputMaybe<UserVideoDataInput>;
};

export type UpdateUserPreferencesInput = {
  selectPreferencesIds?: InputMaybe<Array<Scalars['Int']>>;
  unSelectPreferencesIds?: InputMaybe<Array<Scalars['Int']>>;
  userId: Scalars['Int'];
};

export type UpdateUserPrimaryVideoInput = {
  contentId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  videoData?: InputMaybe<UserVideoDataInput>;
};

export type UploadContent = {
  __typename?: 'UploadContent';
  SASUrl?: Maybe<Scalars['String']>;
  blobUrl?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  HSGraduationYear?: Maybe<Scalars['Int']>;
  SATScore?: Maybe<Scalars['Float']>;
  backgroundImage?: Maybe<Scalars['String']>;
  backgroundImageThumbnail?: Maybe<Scalars['String']>;
  backgroundVideoData?: Maybe<Scalars['JSON']>;
  bio?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  blockedByUsers?: Maybe<UserCursor>;
  blockedUsers?: Maybe<UserCursor>;
  businessEmail?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  commentLike?: Maybe<CommentLikeCursor>;
  connectionStatus?: Maybe<UserConnection>;
  connectionUsers?: Maybe<ConnectionCursor>;
  contentComments?: Maybe<ContentCommentCursor>;
  contentLikes?: Maybe<ContentLikeCursor>;
  contents?: Maybe<ContentCursor>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dwollaCustomer?: Maybe<DwollaCustomer>;
  email?: Maybe<Scalars['String']>;
  firebaseToken?: Maybe<FirebaseToken>;
  firstname: Scalars['String'];
  followedBy?: Maybe<UserFollowsCursor>;
  followerCount?: Maybe<Scalars['Int']>;
  following?: Maybe<UserFollowsCursor>;
  gender?: Maybe<Gender>;
  height?: Maybe<Scalars['String']>;
  highSchoolLevel?: Maybe<Level>;
  id: Scalars['Int'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  isEmailConfirmed?: Maybe<Scalars['Boolean']>;
  isFlagged?: Maybe<Scalars['Boolean']>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  isPeopleBookmarked?: Maybe<Scalars['Boolean']>;
  lastname: Scalars['String'];
  marketplaceFullAccess?: Maybe<Scalars['Boolean']>;
  mutualConnectionCount?: Maybe<Scalars['Int']>;
  notificationSetting?: Maybe<NotificationSetting>;
  preferences?: Maybe<Array<Maybe<PreferenceActivity>>>;
  profileImage?: Maybe<Scalars['String']>;
  profileViewsFrom?: Maybe<ProfileCursor>;
  profileViewsTo?: Maybe<ProfileCursor>;
  provider?: Maybe<Scalars['String']>;
  searchFromUsers?: Maybe<SearchCursor>;
  searchToUsers?: Maybe<SearchCursor>;
  signUpVia?: Maybe<SignUpOrLogoutType>;
  state?: Maybe<Scalars['String']>;
  uniqueKey?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userAchievements?: Maybe<Array<Maybe<UserAchievements>>>;
  userActivities?: Maybe<Array<Maybe<UserActivity>>>;
  userCommitment?: Maybe<UserCommitment>;
  userFlags?: Maybe<Scalars['JSON']>;
  userInstitutions?: Maybe<UserInstitutionType>;
  userOffers?: Maybe<Array<Maybe<UserOffers>>>;
  userPrimaryVideo?: Maybe<UserPrimaryVideo>;
  userSocialMedia?: Maybe<UpdateSocialFollow>;
  userStatistics?: Maybe<UserStatistic>;
  userTeams?: Maybe<Array<Maybe<UserTeams>>>;
  username: Scalars['String'];
  videoThumbnail?: Maybe<Scalars['String']>;
  viewEditProfile?: Maybe<Scalars['Boolean']>;
  weight?: Maybe<Scalars['String']>;
  xmppUsername?: Maybe<Scalars['String']>;
};

export type UserBlockedByUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserBlockedUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserCommentLikeArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserConnectionUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  requireMutualConnectionCounts?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<ConnectionStatus>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserContentCommentsArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserContentLikesArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserContentsArgs = {
  getContentsArgs?: InputMaybe<GetContentsArgs>;
};

export type UserFirebaseTokenArgs = {
  deviceId?: InputMaybe<Scalars['String']>;
};

export type UserFollowedByArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  requireMutualConnectionCounts?: InputMaybe<Scalars['Boolean']>;
  searchString?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserFollowingArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  requireMutualConnectionCounts?: InputMaybe<Scalars['Boolean']>;
  searchString?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserIsFollowingArgs = {
  type?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type UserProfileViewsFromArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserProfileViewsToArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserSearchFromUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserSearchToUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserAchievementInput = {
  achievement: Scalars['String'];
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type UserAchievements = {
  __typename?: 'UserAchievements';
  achievement: Scalars['String'];
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type UserActivity = {
  __typename?: 'UserActivity';
  activityId?: Maybe<Scalars['Int']>;
  backgroundImage?: Maybe<Scalars['String']>;
  backgroundVideoData?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  orderIndex?: Maybe<Scalars['Int']>;
  preferenceActivity?: Maybe<PreferenceActivity>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userActivityAttributeValue?: Maybe<UserActivityAttributeValue>;
  userActivitySeasonAttributes?: Maybe<Array<Maybe<UserActivitySeasonAttribute>>>;
  userId?: Maybe<Scalars['Int']>;
  videoThumbnail?: Maybe<Scalars['String']>;
};

export type UserActivityAttributeValue = {
  __typename?: 'UserActivityAttributeValue';
  attributeValues?: Maybe<Array<Maybe<AttributeValueOutput>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserActivityFeatureThumbnail = {
  __typename?: 'UserActivityFeatureThumbnail';
  activity?: Maybe<PreferenceActivity>;
  activityId?: Maybe<Scalars['Int']>;
  content: Content;
  contentId: Scalars['Int'];
  feature?: Maybe<ActivityAttribute>;
  featureId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type UserActivityInput = {
  activityId: Scalars['Int'];
  attributeValues?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
  userId: Scalars['Int'];
};

export type UserActivityReOrderArgs = {
  orderIndex: Scalars['Int'];
  userActivityId: Scalars['Int'];
};

export type UserActivitySeasonAttribute = {
  __typename?: 'UserActivitySeasonAttribute';
  attributeValues?: Maybe<Array<Maybe<AttributeValueOutput>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  season?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userActivity?: Maybe<UserActivity>;
  userActivityId?: Maybe<Scalars['Int']>;
};

export type UserActivitySeasonInput = {
  attributeValues?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
  season?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Scalars['String']>;
  userActivityId?: InputMaybe<Scalars['Int']>;
};

export type UserActivityTeam = {
  __typename?: 'UserActivityTeam';
  activity: PreferenceActivity;
  activityId: Scalars['Int'];
  city?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  institution?: Maybe<Institution>;
  institutionId?: Maybe<Scalars['Int']>;
  institutionName?: Maybe<Scalars['String']>;
  lists?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  season: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['Int'];
};

export type UserActivityTeamInput = {
  activityId: Scalars['Int'];
  city?: InputMaybe<Scalars['String']>;
  institutionId?: InputMaybe<Scalars['Int']>;
  institutionName?: InputMaybe<Scalars['String']>;
  lists?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  season: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type UserBookmarkCursor = {
  __typename?: 'UserBookmarkCursor';
  pageEdges?: Maybe<Array<Maybe<UserBookmarkEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type UserBookmarkEdge = {
  __typename?: 'UserBookmarkEdge';
  node?: Maybe<BookmarkUser>;
};

export type UserCommitment = {
  __typename?: 'UserCommitment';
  content?: Maybe<Content>;
  contentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  institution?: Maybe<Institution>;
  institutionId?: Maybe<Scalars['Int']>;
  isActivelyLooking?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId: Scalars['Int'];
  videoData?: Maybe<Scalars['JSON']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  connectionUser?: Maybe<ConnectedUser>;
  connectionUserId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  followerCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isRequest?: Maybe<Scalars['Boolean']>;
  mutualConnection?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<ConnectedUser>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserCursor = {
  __typename?: 'UserCursor';
  pageEdges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo?: Maybe<UserPageInfo>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  node?: Maybe<User>;
};

export type UserFollows = {
  __typename?: 'UserFollows';
  createdAt?: Maybe<Scalars['DateTime']>;
  followerCount?: Maybe<Scalars['Int']>;
  followerId?: Maybe<Scalars['Int']>;
  followerUser?: Maybe<User>;
  followingId?: Maybe<Scalars['Int']>;
  followingUser?: Maybe<User>;
  id?: Maybe<Scalars['Int']>;
  mutualConnection?: Maybe<Scalars['Int']>;
  parentType?: Maybe<Scalars['String']>;
};

export type UserFollowsCursor = {
  __typename?: 'UserFollowsCursor';
  pageEdges?: Maybe<Array<Maybe<FollowsEdge>>>;
  pageInfo?: Maybe<UserPageInfo>;
};

export enum UserImageExtensions {
  Jpeg = 'jpeg',
  Jpg = 'jpg',
  Png = 'png',
}

export enum UserImageExtensionsContent {
  Jpeg = 'jpeg',
  Jpg = 'jpg',
  Png = 'png',
}

export type UserInput = {
  HSGraduationYear?: InputMaybe<Scalars['Int']>;
  SATScore?: InputMaybe<Scalars['Float']>;
  backgroundImage?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  birthDate?: InputMaybe<Scalars['DateTime']>;
  businessEmail?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  height?: InputMaybe<Scalars['String']>;
  highSchoolLevel?: InputMaybe<Level>;
  id: Scalars['Int'];
  lastname?: InputMaybe<Scalars['String']>;
  profileImage?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  userFlags?: InputMaybe<Scalars['JSON']>;
  username?: InputMaybe<Scalars['String']>;
  viewEditProfile?: InputMaybe<Scalars['Boolean']>;
  weight?: InputMaybe<Scalars['String']>;
};

export type UserInstitutionDataInputType = {
  gpa?: InputMaybe<Scalars['String']>;
  grade?: InputMaybe<Scalars['String']>;
  institutionDetail?: InputMaybe<Scalars['JSON']>;
  institutionId?: InputMaybe<Scalars['Int']>;
};

export type UserInstitutionDataType = {
  __typename?: 'UserInstitutionDataType';
  gpa?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  institution: Institution;
  institutionId?: Maybe<Scalars['Int']>;
};

export type UserInstitutionInputType = {
  College?: InputMaybe<UserInstitutionDataInputType>;
  HighSchool?: InputMaybe<UserInstitutionDataInputType>;
  MiddleSchool?: InputMaybe<UserInstitutionDataInputType>;
  Professional?: InputMaybe<UserInstitutionDataInputType>;
};

export type UserInstitutionType = {
  __typename?: 'UserInstitutionType';
  College?: Maybe<UserInstitutionDataType>;
  HighSchool?: Maybe<UserInstitutionDataType>;
  MiddleSchool?: Maybe<UserInstitutionDataType>;
  Professional?: Maybe<UserInstitutionDataType>;
};

export type UserLink = {
  __typename?: 'UserLink';
  category?: Maybe<CategoryType>;
  categoryOrderIndex?: Maybe<Scalars['Int']>;
  companyIcon?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  domain?: Maybe<CategoryDomain>;
  id: Scalars['Int'];
  linkName?: Maybe<Scalars['String']>;
  linkURL: Scalars['String'];
  metadata?: Maybe<Scalars['JSON']>;
  orderIndex?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['Int'];
};

export type UserLinkArgs = {
  category?: InputMaybe<CategoryType>;
  categoryOrderIndex?: InputMaybe<Scalars['Int']>;
  companyIcon?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<CategoryDomain>;
  linkName?: InputMaybe<Scalars['String']>;
  linkURL: Scalars['String'];
  metadata?: InputMaybe<Scalars['JSON']>;
  userId: Scalars['Int'];
};

export type UserLinkCursor = {
  __typename?: 'UserLinkCursor';
  pageEdges?: Maybe<Array<Maybe<UserLinkEdge>>>;
  pageInfo?: Maybe<UserPageInfo>;
};

export type UserLinkEdge = {
  __typename?: 'UserLinkEdge';
  node?: Maybe<UserLink>;
};

export type UserLinksSettings = {
  __typename?: 'UserLinksSettings';
  backgroundImage?: Maybe<Scalars['String']>;
  businessEmail?: Maybe<Scalars['String']>;
  categoryOrder?: Maybe<Array<Maybe<Scalars['Int']>>>;
  collapsedPreview?: Maybe<Scalars['Boolean']>;
  contents?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['Int']>;
  isVideoEnable?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserOfferInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  institutionId?: InputMaybe<Scalars['Int']>;
  orderIndex?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type UserOffers = {
  __typename?: 'UserOffers';
  description: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  institution?: Maybe<Institution>;
  institutionId?: Maybe<Scalars['Int']>;
  orderIndex?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  userId: Scalars['Int'];
};

export type UserPageInfo = {
  __typename?: 'UserPageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UserPrimaryVideo = {
  __typename?: 'UserPrimaryVideo';
  content?: Maybe<Content>;
  contentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId: Scalars['Int'];
  videoData?: Maybe<Scalars['JSON']>;
};

export type UserReportBlock = {
  blockedUserId: Scalars['Int'];
  deviceId?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<ReportUserReason>;
  type?: InputMaybe<BlockType>;
  userId: Scalars['Int'];
};

export type UserStatistic = {
  __typename?: 'UserStatistic';
  connectionCount?: Maybe<Scalars['Int']>;
  contentCount?: Maybe<Scalars['Int']>;
  contentLikes?: Maybe<Scalars['Int']>;
  firebaseNotificationCount?: Maybe<Scalars['Int']>;
  followerCount?: Maybe<Scalars['Int']>;
  followingCount?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  notificationCount?: Maybe<Scalars['Int']>;
  profileViews?: Maybe<Scalars['Int']>;
  searchAppearances?: Maybe<Scalars['Int']>;
  user: User;
  userId: Scalars['Int'];
};

export type UserTeams = {
  __typename?: 'UserTeams';
  id?: Maybe<Scalars['Int']>;
  institution?: Maybe<Institution>;
  institutionId?: Maybe<Scalars['Int']>;
  orderIndex?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  userId: Scalars['Int'];
};

export type UserTeamsInput = {
  id?: InputMaybe<Scalars['Int']>;
  institutionId: Scalars['Int'];
  orderIndex?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type UserVideoDataInput = {
  assetId: Scalars['String'];
  duration?: InputMaybe<Scalars['String']>;
  playbackId: Scalars['String'];
};

export type UserWithContent = {
  __typename?: 'UserWithContent';
  HSGraduationYear?: Maybe<Scalars['Int']>;
  SATScore?: Maybe<Scalars['Float']>;
  backgroundImage?: Maybe<Scalars['String']>;
  backgroundImageThumbnail?: Maybe<Scalars['String']>;
  backgroundVideoData?: Maybe<Scalars['JSON']>;
  bio?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  blockedByUsers?: Maybe<UserCursor>;
  blockedUsers?: Maybe<UserCursor>;
  businessEmail?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  connectionUsers?: Maybe<ConnectionCursor>;
  contentId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  followedBy?: Maybe<UserFollowsCursor>;
  following?: Maybe<UserFollowsCursor>;
  gender?: Maybe<Gender>;
  height?: Maybe<Scalars['String']>;
  highSchoolLevel?: Maybe<Level>;
  id: Scalars['Int'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  isEmailConfirmed?: Maybe<Scalars['Boolean']>;
  isFlagged?: Maybe<Scalars['Boolean']>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  lastname: Scalars['String'];
  mutualConnectionCount?: Maybe<Scalars['Int']>;
  notificationSetting?: Maybe<NotificationSetting>;
  preferences?: Maybe<Array<Maybe<PreferenceActivity>>>;
  profileImage?: Maybe<Scalars['String']>;
  profileViewsFrom?: Maybe<ProfileCursor>;
  profileViewsTo?: Maybe<ProfileCursor>;
  provider?: Maybe<Scalars['String']>;
  searchFromUsers?: Maybe<SearchCursor>;
  searchToUsers?: Maybe<SearchCursor>;
  state?: Maybe<Scalars['String']>;
  uniqueKey?: Maybe<Scalars['String']>;
  userAchievements?: Maybe<Array<Maybe<UserAchievements>>>;
  userActivities?: Maybe<Array<Maybe<UserActivity>>>;
  userCommitment?: Maybe<UserCommitment>;
  userFlags?: Maybe<Scalars['JSON']>;
  userInstitutions?: Maybe<UserInstitutionType>;
  userOffers?: Maybe<Array<Maybe<UserOffers>>>;
  userPrimaryVideo?: Maybe<UserPrimaryVideo>;
  userSocialMedia?: Maybe<UpdateSocialFollow>;
  userStatistics?: Maybe<UserStatistic>;
  userTeams?: Maybe<Array<Maybe<UserTeams>>>;
  username: Scalars['String'];
  videoThumbnail?: Maybe<Scalars['String']>;
  viewEditProfile?: Maybe<Scalars['Boolean']>;
  weight?: Maybe<Scalars['String']>;
  xmppUsername?: Maybe<Scalars['String']>;
};

export type UserWithContentBlockedByUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserWithContentBlockedUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserWithContentConnectionUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  requireMutualConnectionCounts?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<ConnectionStatus>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserWithContentFollowedByArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  requireMutualConnectionCounts?: InputMaybe<Scalars['Boolean']>;
  searchString?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserWithContentFollowingArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  requireMutualConnectionCounts?: InputMaybe<Scalars['Boolean']>;
  searchString?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserWithContentIsFollowingArgs = {
  type?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type UserWithContentProfileViewsFromArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserWithContentProfileViewsToArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserWithContentSearchFromUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type UserWithContentSearchToUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export enum Visibility {
  Connections = 'Connections',
  Followers = 'Followers',
  OnlyMe = 'OnlyMe',
  Public = 'Public',
}

export type WithdrawFundFromWalletArguments = {
  amount: Scalars['Float'];
  fundingSourceId: Scalars['String'];
};

export type WithdrawFundFromWalletResponse = {
  __typename?: 'WithdrawFundFromWalletResponse';
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type BookmarkArgument = {
  bookmarkType: BookmarkType;
  institutionId?: InputMaybe<Scalars['Int']>;
  nftEditionId?: InputMaybe<Scalars['Int']>;
  nftId?: InputMaybe<Scalars['Int']>;
  nftItemId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type BookmarkResponse = {
  __typename?: 'bookmarkResponse';
  message: Scalars['String'];
};

export type DeleteNftEditionDraftResponse = {
  __typename?: 'deleteNFTEditionDraftResponse';
  message: Scalars['String'];
};

export type ExchangeTokenArguments = {
  accountId: Scalars['String'];
  clientId: Scalars['String'];
  fundingSourceName: Scalars['String'];
  token: Scalars['String'];
};

export type GetUserInterestDataResponse = {
  __typename?: 'getUserInterestDataResponse';
  trendingActivities?: Maybe<Array<Maybe<PreferenceActivity>>>;
  userInterests?: Maybe<Array<Maybe<PreferenceActivity>>>;
};

export type NftDeleteArgument = {
  nftId: Scalars['Int'];
};

export type NftLikeArgument = {
  nftId: Scalars['Int'];
};

export type NftListingArgument = {
  nftEditionId: Scalars['Int'];
  nftId: Scalars['Int'];
  shareToFeed: Scalars['Boolean'];
};

export type NotificationArgument = {
  cursor?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type PlaidExchangePublicTokenResponse = {
  __typename?: 'plaidExchangePublicTokenResponse';
  bankName?: Maybe<Scalars['String']>;
  bankType?: Maybe<Scalars['String']>;
  fundingSourceId?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type PlaidGetLinkTokenResponse = {
  __typename?: 'plaidGetLinkTokenResponse';
  linkToken?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type SearchInstituteByTextResponse = {
  __typename?: 'searchInstituteByTextResponse';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  endGrade?: Maybe<Scalars['Int']>;
  enrollment?: Maybe<Scalars['Int']>;
  ftTeacher?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  population?: Maybe<Scalars['Int']>;
  stGrade?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  zip4?: Maybe<Scalars['String']>;
};

export enum SectionType {
  ForYou = 'ForYou',
  LatestDrop = 'LatestDrop',
  TopPick = 'TopPick',
  TopSales = 'TopSales',
  Trending = 'Trending',
}

export enum SortByActivityType {
  Newest = 'Newest',
  Oldest = 'Oldest',
}

export enum SortByType {
  NameAsc = 'NameAsc',
  NameDesc = 'NameDesc',
  Newest = 'Newest',
  Oldest = 'Oldest',
}

export type CategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type CategoriesQuery = {
  __typename?: 'Query';
  getCategory: Array<{
    __typename?: 'Category';
    id?: number | null;
    name?: string | null;
    iconURL?: string | null;
    activities?: Array<{
      __typename?: 'PreferenceActivity';
      id: number;
      name: string;
      iconURL?: string | null;
    } | null> | null;
  }>;
};

export type BookmarkedUsersQueryVariables = Exact<{
  cursor: Scalars['Int'];
  take: Scalars['Int'];
  userId: Scalars['Int'];
}>;

export type BookmarkedUsersQuery = {
  __typename?: 'Query';
  getBookmarkedUsers: {
    __typename?: 'UserBookmarkCursor';
    pageEdges?: Array<{
      __typename?: 'UserBookmarkEdge';
      node?: {
        __typename?: 'BookmarkUser';
        id: number;
        user: {
          __typename?: 'User';
          id: number;
          firstname: string;
          lastname: string;
          username: string;
          profileImage?: string | null;
          dwollaCustomer?: { __typename?: 'DwollaCustomer'; status: DwollaCustomerStatus } | null;
        };
      } | null;
    } | null> | null;
    pageInfo?: {
      __typename?: 'PageInfo';
      totalCount?: number | null;
      hasNextPage?: boolean | null;
    } | null;
  };
};

export const CategoriesDocument = gql`
  query categories {
    getCategory(ids: 2) {
      id
      name
      iconURL
      activities {
        id
        name
        iconURL
      }
    }
  }
`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
}
export function useCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    options,
  );
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const BookmarkedUsersDocument = gql`
  query bookmarkedUsers($cursor: Int!, $take: Int!, $userId: Int!) {
    getBookmarkedUsers(userId: $userId, cursor: $cursor, take: $take) {
      pageEdges {
        node {
          id
          user {
            id
            firstname
            lastname
            username
            profileImage
            dwollaCustomer {
              status
            }
          }
        }
      }
      pageInfo {
        totalCount
        hasNextPage
      }
    }
  }
`;

/**
 * __useBookmarkedUsersQuery__
 *
 * To run a query within a React component, call `useBookmarkedUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookmarkedUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookmarkedUsersQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useBookmarkedUsersQuery(
  baseOptions: Apollo.QueryHookOptions<BookmarkedUsersQuery, BookmarkedUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BookmarkedUsersQuery, BookmarkedUsersQueryVariables>(
    BookmarkedUsersDocument,
    options,
  );
}
export function useBookmarkedUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BookmarkedUsersQuery, BookmarkedUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BookmarkedUsersQuery, BookmarkedUsersQueryVariables>(
    BookmarkedUsersDocument,
    options,
  );
}
export type BookmarkedUsersQueryHookResult = ReturnType<typeof useBookmarkedUsersQuery>;
export type BookmarkedUsersLazyQueryHookResult = ReturnType<typeof useBookmarkedUsersLazyQuery>;
export type BookmarkedUsersQueryResult = Apollo.QueryResult<
  BookmarkedUsersQuery,
  BookmarkedUsersQueryVariables
>;
