# Detailed Folder Structure - Aetheris Project

## Project Root: `/app`

```
app/
├── globals.css
├── layout.tsx
├── page.tsx
├── providers.tsx
│
├── (Desktop)/
│   ├── layout.tsx
│   └── me/
│       └── page.tsx
│
├── (no-navbar)/
│   ├── (Auth)/
│   │   ├── Login/
│   │   │   └── page.tsx
│   │   ├── Register/
│   │   │   └── page.tsx
│   │   │
│   │   └── Verification/
│   │       ├── page.tsx
│   │       └── actions.ts
│   │
│   ├── (Chat)/
│   │   ├── message/
│   │   │   ├── [userID]/
│   │   │   │   ├── Chat.tsx
│   │   │   │   └── page.tsx
│   │   │   └── components/
│   │   │       ├── MessageHader.tsx
│   │   │       ├── TextArea.tsx
│   │   │       ├── Userchat.tsx
│   │   │       ├── Vclog.tsx
│   │   │       ├── YourChat.tsx
│   │   │       └── Ui/
│   │   │           ├── ChatBubble.tsx
│   │   │           ├── ImageBuble.tsx
│   │   │           ├── Video.tsx
│   │   │           ├── Visiluaser.tsx
│   │   │           └── VoiceNote.tsx
│   │   │
│   │   └── Vc/
│   │       ├── [userID]/
│   │       │   ├── Vc.tsx
│   │       │   └── page.tsx
│   │       └── Components/
│   │           ├── SmallSlidingWindows.tsx
│   │           ├── VcAudioSelection.tsx
│   │           ├── VcHadder.tsx
│   │           ├── VcNavbar.tsx
│   │           └── Vcusercard.tsx
│   │
│   ├── (UserAdditionalPages)/
│   │   ├── Account Archive/
│   │   │   └── page.tsx
│   │   ├── Notifications Setting/
│   │   │   └── page.tsx
│   │   ├── Password/
│   │   │   └── page.tsx
│   │   ├── ProfileEdit/
│   │   │   ├── ProfileEdit.tsx
│   │   │   └── page.tsx
│   │   ├── Setting/
│   │   │   └── page.tsx
│   │   └── UserEmail/
│   │       └── page.tsx
│   │
│   ├── AccountSetup/
│   │   ├── page.tsx
│   │   ├── actions.ts
│   │   └── validators.ts
│   │
│   ├── AddFriend/
│   │   ├── AddFriends.tsx
│   │   └── page.tsx
│   │
│   ├── Profilee/
│   │   ├── Block.tsx
│   │   ├── Copied.tsx
│   │   ├── Menuebox.tsx
│   │   ├── Profile.tsx
│   │   ├── Report.tsx
│   │   ├── ThankYouForReporting.tsx
│   │   └── page.tsx
│   │
│   └── SearchFriends/
│       ├── SearchFriends.tsx
│       └── page.tsx
│
├── (with-navbar)/
│   ├── layout.tsx
│   ├── page.tsx
│   │
│   ├── chat/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   │
│   │   ├── dm/
│   │   │   ├── dm.tsx
│   │   │   └── page.tsx
│   │   │
│   │   └── notifications/
│   │       ├── Notifications.tsx
│   │       └── page.tsx
│   │
│   └── Profile/
│       ├── Profile.tsx
│       └── page.tsx
│
└── components/
    ├── Element/
    │   ├── FriendsList.tsx
    │   ├── FriendsStatus.tsx
    │   └── Navbar.tsx
    │
    ├── Profile Compoenets/
    │   └── Userbanner.tsx
    │
    └── UI/
        ├── AddFriend.tsx
        ├── FreiendReq.tsx
        ├── FreiendsStatusCard.tsx
        ├── FriendCard.tsx
        ├── FriendsListCard.tsx
        └── Notifications.tsx
│
├── api/
│   ├── username/
│   │   └── route.ts
│   │
│   └── auth/
│       └── callback/
│           └── route.ts
```

---

## File Summary by Type

### CSS Files (1)
- `app/globals.css` - Global styles

### TSX Files (66)

#### Root Level Files (3)
- `app/layout.tsx`
- `app/page.tsx`
- `app/providers.tsx`

#### Desktop Layout (2)
- `app/(Desktop)/layout.tsx`
- `app/(Desktop)/me/page.tsx`

#### Authentication Pages (2)
- `app/(no-navbar)/(Auth)/Login/page.tsx`
- `app/(no-navbar)/(Auth)/Register/page.tsx`

#### Email Verification (2)
- `app/(no-navbar)/(Auth)/Verification/page.tsx`
- `app/(no-navbar)/(Auth)/Verification/actions.ts`

#### Chat - Messaging Feature (12)
- `app/(no-navbar)/(Chat)/message/[userID]/Chat.tsx`
- `app/(no-navbar)/(Chat)/message/[userID]/page.tsx`
- `app/(no-navbar)/(Chat)/message/components/MessageHader.tsx`
- `app/(no-navbar)/(Chat)/message/components/TextArea.tsx`
- `app/(no-navbar)/(Chat)/message/components/Userchat.tsx`
- `app/(no-navbar)/(Chat)/message/components/YourChat.tsx`
- `app/(no-navbar)/(Chat)/message/components/Vclog.tsx`
- `app/(no-navbar)/(Chat)/message/components/Ui/ChatBubble.tsx`
- `app/(no-navbar)/(Chat)/message/components/Ui/ImageBuble.tsx`
- `app/(no-navbar)/(Chat)/message/components/Ui/Video.tsx`
- `app/(no-navbar)/(Chat)/message/components/Ui/Visiluaser.tsx`
- `app/(no-navbar)/(Chat)/message/components/Ui/VoiceNote.tsx`

#### Video Call Feature (8)
- `app/(no-navbar)/(Chat)/Vc/[userID]/Vc.tsx`
- `app/(no-navbar)/(Chat)/Vc/[userID]/page.tsx`
- `app/(no-navbar)/(Chat)/Vc/Components/SmallSlidingWindows.tsx`
- `app/(no-navbar)/(Chat)/Vc/Components/VcAudioSelection.tsx`
- `app/(no-navbar)/(Chat)/Vc/Components/VcHadder.tsx`
- `app/(no-navbar)/(Chat)/Vc/Components/VcNavbar.tsx`
- `app/(no-navbar)/(Chat)/Vc/Components/Vcusercard.tsx`

#### User Settings & Profile (9)
- `app/(no-navbar)/(UserAdditionalPages)/Account Archive/page.tsx`
- `app/(no-navbar)/(UserAdditionalPages)/Notifications Setting/page.tsx`
- `app/(no-navbar)/(UserAdditionalPages)/Password/page.tsx`
- `app/(no-navbar)/(UserAdditionalPages)/ProfileEdit/ProfileEdit.tsx`
- `app/(no-navbar)/(UserAdditionalPages)/ProfileEdit/page.tsx`
- `app/(no-navbar)/(UserAdditionalPages)/Setting/page.tsx`
- `app/(no-navbar)/(UserAdditionalPages)/UserEmail/page.tsx`

#### Additional Pages (5)
- `app/(no-navbar)/AccountSetup/page.tsx`
- `app/(no-navbar)/AccountSetup/actions.ts`
- `app/(no-navbar)/AccountSetup/validators.ts`
- `app/(no-navbar)/AddFriend/AddFriends.tsx`
- `app/(no-navbar)/AddFriend/page.tsx`

#### Profile Feature (6)
- `app/(no-navbar)/Profilee/Block.tsx`
- `app/(no-navbar)/Profilee/Copied.tsx`
- `app/(no-navbar)/Profilee/Menuebox.tsx`
- `app/(no-navbar)/Profilee/Profile.tsx`
- `app/(no-navbar)/Profilee/Report.tsx`
- `app/(no-navbar)/Profilee/ThankYouForReporting.tsx`
- `app/(no-navbar)/Profilee/page.tsx`

#### Search Feature (2)
- `app/(no-navbar)/SearchFriends/SearchFriends.tsx`
- `app/(no-navbar)/SearchFriends/page.tsx`

#### With Navbar Layout (7)
- `app/(with-navbar)/layout.tsx`
- `app/(with-navbar)/page.tsx`
- `app/(with-navbar)/chat/layout.tsx`
- `app/(with-navbar)/chat/page.tsx`
- `app/(with-navbar)/chat/dm/dm.tsx`
- `app/(with-navbar)/chat/dm/page.tsx`
- `app/(with-navbar)/chat/notifications/Notifications.tsx`
- `app/(with-navbar)/chat/notifications/page.tsx`
- `app/(with-navbar)/Profile/Profile.tsx`
- `app/(with-navbar)/Profile/page.tsx`

#### Shared Components (12)
**Element Components:**
- `app/components/Element/FriendsList.tsx`
- `app/components/Element/FriendsStatus.tsx`
- `app/components/Element/Navbar.tsx`

**Profile Components:**
- `app/components/Profile Compoenets/Userbanner.tsx`

**UI Components:**
- `app/components/UI/AddFriend.tsx`
- `app/components/UI/FreiendReq.tsx`
- `app/components/UI/FreiendsStatusCard.tsx`
- `app/components/UI/FriendCard.tsx`
- `app/components/UI/FriendsListCard.tsx`
- `app/components/UI/Notifications.tsx`

#### API Routes (2)
- `app/api/username/route.ts`
- `app/api/auth/callback/route.ts`

---

## Project Statistics

- **Total CSS Files:** 1
- **Total TSX Files:** 70
- **Total TS Files:** 3 (actions.ts, validators.ts, route.ts)
- **Main Layouts:** 5 (Root, Desktop, Desktop-me, No-navbar, With-navbar, Chat)
- **API Routes:** 2 (username check, auth callback)
- **Feature Modules:** 8 (Auth, Chat, VC, Profile, Search, Settings, Friends, Notifications)
- **Shared Components:** 12
- **Dynamic Routes:** 2 ([userID])

---

## Architecture Overview

### Layout Structure
- **Root Layout:** `app/layout.tsx` + `app/providers.tsx`
- **Desktop Layout:** `app/(Desktop)/layout.tsx` - Desktop specific routes
- **No Navbar Layout:** `app/(no-navbar)/` - Pages without navbar (Auth, Chat, Profile setup)
- **With Navbar Layout:** `app/(with-navbar)/` - Pages with navbar (Main app)

### Feature Organization
1. **Authentication** - Login/Register pages
2. **Chat System** - Direct messages and chat interface
3. **Video Calls** - Video chat components
4. **User Profile** - Profile viewing and editing
5. **Friends Management** - Add, search, and manage friends
6. **Notifications** - Real-time notifications
7. **Settings** - User preferences and account management

### Component Structure
- **Element Components** - Core reusable elements (Navbar, Friends List, etc.)
- **UI Components** - Styled UI components (Cards, Notifications, etc.)
- **Profile Components** - Profile-specific components
- **Chat Components** - Message UI elements (Bubbles, Media, etc.)
- **VC Components** - Video call interface components

here is my db strucuture 
create table public.users (
  id uuid not null,
  email text not null,
  username text not null,
  display_name text null,
  avatar_url text null,
  banner_url text null,
  about text null,
  pronoun text null,
  status_message text null,
  date_of_birth date null,
  date_joined timestamp without time zone null default now(),
  last_online timestamp without time zone null,
  is_online boolean null default false,
  google_uid text null,
  profile_complete boolean null default false,
  constraint users_pkey primary key (id),
  constraint users_email_key unique (email),
  constraint users_username_key unique (username)
) TABLESPACE pg_default;

create table public.notifications (
  id uuid not null default extensions.uuid_generate_v4 (),
  user_id uuid not null,
  type text null,
  content text null,
  is_read boolean null default false,
  created_at timestamp without time zone null default now(),
  constraint notifications_pkey primary key (id),
  constraint notifications_user_id_fkey foreign KEY (user_id) references users (id)
) TABLESPACE pg_default;

create index IF not exists notifications_user_id_idx on public.notifications using btree (user_id) TABLESPACE pg_default;


create table public.messages (
  id uuid not null default extensions.uuid_generate_v4 (),
  chat_id uuid not null,
  sender_id uuid not null,
  content text null,
  type text null default 'text'::text,
  media_url text null,
  created_at timestamp without time zone null default now(),
  is_deleted boolean null default false,
  constraint messages_pkey primary key (id),
  constraint messages_chat_id_fkey foreign KEY (chat_id) references chats (id) on delete CASCADE,
  constraint messages_sender_id_fkey foreign KEY (sender_id) references users (id)
) TABLESPACE pg_default;

create index IF not exists messages_chat_id_idx on public.messages using btree (chat_id) TABLESPACE pg_default;

create index IF not exists messages_created_at_idx on public.messages using btree (created_at) TABLESPACE pg_default;

create index IF not exists messages_sender_id_idx on public.messages using btree (sender_id) TABLESPACE pg_default;


create table public.media (
  id uuid not null default extensions.uuid_generate_v4 (),
  type text not null,
  url text not null,
  uploaded_by uuid not null,
  chat_id uuid null,
  created_at timestamp without time zone null default now(),
  expires_at timestamp without time zone null,
  duration numeric null,
  is_deleted boolean null default false,
  constraint media_pkey primary key (id),
  constraint media_chat_id_fkey foreign KEY (chat_id) references chats (id) on delete CASCADE,
  constraint media_uploaded_by_fkey foreign KEY (uploaded_by) references users (id) on delete CASCADE,
  constraint media_type_check check (
    (
      type = any (
        array[
          'image'::text,
          'video'::text,
          'audio'::text,
          'file'::text
        ]
      )
    )
  )
) TABLESPACE pg_default;

create index IF not exists media_uploaded_by_idx on public.media using btree (uploaded_by) TABLESPACE pg_default;


create table public.chats (
  id uuid not null default extensions.uuid_generate_v4 (),
  name text null,
  is_group boolean null default false,
  created_at timestamp without time zone null default now(),
  constraint chats_pkey primary key (id)
) TABLESPACE pg_default;

create table public.chat_members (
  chat_id uuid not null,
  user_id uuid not null,
  constraint chat_members_pkey primary key (chat_id, user_id),
  constraint chat_members_chat_id_fkey foreign KEY (chat_id) references chats (id) on delete CASCADE,
  constraint chat_members_user_id_fkey foreign KEY (user_id) references users (id) on delete CASCADE
) TABLESPACE pg_default;

create index IF not exists chat_members_user_id_idx on public.chat_members using btree (user_id) TABLESPACE pg_default;





create table public.call_logs (
  id uuid not null default extensions.uuid_generate_v4 (),
  chat_id uuid null,
  caller_id uuid null,
  receiver_id uuid null,
  call_type text null,
  started_at timestamp without time zone null,
  ended_at timestamp without time zone null,
  status text null,
  constraint call_logs_pkey primary key (id),
  constraint call_logs_caller_id_fkey foreign KEY (caller_id) references users (id),
  constraint call_logs_chat_id_fkey foreign KEY (chat_id) references chats (id),
  constraint call_logs_receiver_id_fkey foreign KEY (receiver_id) references users (id)
) TABLESPACE pg_default;

create index IF not exists call_logs_caller_id_idx on public.call_logs using btree (caller_id) TABLESPACE pg_default;

create index IF not exists call_logs_receiver_id_idx on public.call_logs using btree (receiver_id) TABLESPACE pg_default;