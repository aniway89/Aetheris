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
│   │   └── Register/
│   │       └── page.tsx
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
│   │   └── page.tsx
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

---

## Project Statistics

- **Total CSS Files:** 1
- **Total TSX Files:** 66
- **Total HTML Files:** 0
- **Main Layouts:** 5 (Desktop, Desktop-me, No-navbar, With-navbar, Chat)
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

