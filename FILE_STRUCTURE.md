# Aetheris - Complete File Structure

## 🌳 Complete Visual File Tree

```
Aetheris/
│
├── app/
│   ├── (Desktop)/
│   │   └── @me/
│   │       ├── layout.tsx
│   │       └── page.tsx
│   │
│   ├── (no-navbar)/
│   │   ├── (Auth)/
│   │   │   ├── Login/
│   │   │   │   └── page.tsx
│   │   │   └── Register/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (Chat)/
│   │   │   ├── message/
│   │   │   │   ├── [userID]/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── Chat.tsx
│   │   │   │   └── components/
│   │   │   │       ├── MessageHader.tsx
│   │   │   │       ├── TextArea.tsx
│   │   │   │       ├── Userchat.tsx
│   │   │   │       ├── YourChat.tsx
│   │   │   │       ├── Vclog.tsx
│   │   │   │       └── Ui/
│   │   │   │           ├── ChatBubble.tsx
│   │   │   │           ├── ImageBuble.tsx
│   │   │   │           ├── Video.tsx
│   │   │   │           ├── Visiluaser.tsx
│   │   │   │           └── VoiceNote.tsx
│   │   │   │
│   │   │   └── Vc/
│   │   │       ├── [userID]/
│   │   │       │   ├── page.tsx
│   │   │       │   └── Vc.tsx
│   │   │       └── Components/
│   │   │           ├── SmallSlidingWindows.tsx
│   │   │           ├── VcAudioSelection.tsx
│   │   │           ├── VcHadder.tsx
│   │   │           ├── VcNavbar.tsx
│   │   │           └── Vcusercard.tsx
│   │   │
│   │   ├── (UserAdditionalPages)/
│   │   │   ├── ProfileEdit/
│   │   │   │   ├── page.tsx
│   │   │   │   └── ProfileEdit.tsx
│   │   │   └── Setting/
│   │   │       └── page.tsx
│   │   │
│   │   ├── AccountSetup/
│   │   │   └── page.tsx
│   │   │
│   │   ├── AddFriend/
│   │   │   ├── page.tsx
│   │   │   └── AddFriends.tsx
│   │   │
│   │   ├── Profilee/
│   │   │   ├── page.tsx
│   │   │   ├── Profile.tsx
│   │   │   ├── Block.tsx
│   │   │   ├── Copied.tsx
│   │   │   ├── Menuebox.tsx
│   │   │   ├── Report.tsx
│   │   │   └── ThankYouForReporting.tsx
│   │   │
│   │   └── SearchFriends/
│   │       ├── page.tsx
│   │       └── SearchFriends.tsx
│   │
│   ├── (with-navbar)/
│   │   ├── chat/
│   │   │   ├── dm/
│   │   │   │   ├── page.tsx
│   │   │   │   └── dm.tsx
│   │   │   ├── notifications/
│   │   │   │   ├── page.tsx
│   │   │   │   └── Notifications.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── Profile/
│   │   │   ├── page.tsx
│   │   │   └── Profile.tsx
│   │   │
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Element/
│   │   │   ├── FriendsList.tsx
│   │   │   ├── FriendsStatus.tsx
│   │   │   └── Navbar.tsx
│   │   │
│   │   ├── Profile Compoenets/
│   │   │   └── Userbanner.tsx
│   │   │
│   │   └── UI/
│   │       ├── AddFriend.tsx
│   │       ├── FreiendReq.tsx
│   │       ├── FreiendsStatusCard.tsx
│   │       ├── FriendCard.tsx
│   │       ├── FriendsListCard.tsx
│   │       └── Notifications.tsx
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
│
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── node_modules/
│   └── [dependencies...]
│
├── .eslintrc.json
├── .gitignore
├── FILE_STRUCTURE.md
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

---

## 📁 Project Root
```
Aetheris/
├── app/                                    # Next.js App Directory
├── public/                                 # Static Assets
├── node_modules/                           # Dependencies
├── .eslintrc.json                          # ESLint Config
├── .gitignore                              # Git Ignore
├── next.config.ts                          # Next.js Config
├── package.json                            # Dependencies
├── package-lock.json                       # Lock File
├── postcss.config.mjs                      # PostCSS Config
├── tailwind.config.ts                      # Tailwind Config
├── tsconfig.json                           # TypeScript Config
├── README.md                               # Documentation
└── FILE_STRUCTURE.md                       # This File
```

---

## 📱 App Directory Structure

### **Root Level**
```
app/
├── favicon.ico                             # App Icon
├── globals.css                             # Global Styles
├── layout.tsx                              # Root Layout
├── page.tsx                                # Landing Page
└── providers.tsx                           # App Providers (Context, etc.)
```

---

### **🚫 (no-navbar) - Routes Without Navigation**

#### **Authentication**
```
app/(no-navbar)/(Auth)/
├── Login/
│   └── page.tsx                            # Login Page
└── Register/
    └── page.tsx                            # Registration Page
```

#### **Chat & Messaging**
```
app/(no-navbar)/(Chat)/
├── message/
│   ├── [userID]/
│   │   ├── page.tsx                        # Chat Page Wrapper
│   │   └── Chat.tsx                        # Chat Component
│   └── components/
│       ├── MessageHader.tsx                # Chat Header
│       ├── TextArea.tsx                    # Message Input
│       ├── Userchat.tsx                    # User Message Bubble
│       ├── YourChat.tsx                    # Your Message Bubble
│       ├── Vclog.tsx                       # Video Call Log
│       └── Ui/
│           ├── ChatBubble.tsx              # Base Chat Bubble
│           ├── ImageBuble.tsx              # Image Message
│           ├── Video.tsx                   # Video Message
│           ├── Visiluaser.tsx              # Visual User Component
│           └── VoiceNote.tsx               # Voice Note Message
│
└── Vc/
    ├── [userID]/
    │   ├── page.tsx                        # Video Call Page Wrapper
    │   └── Vc.tsx                          # Video Call Component
    └── Components/
        ├── SmallSlidingWindows.tsx         # Picture-in-Picture
        ├── VcAudioSelection.tsx            # Audio Device Selector
        ├── VcHadder.tsx                    # Video Call Header
        ├── VcNavbar.tsx                    # Video Call Controls
        └── Vcusercard.tsx                  # User Video Card
```

#### **User Pages**
```
app/(no-navbar)/(UserAdditionalPages)/
├── ProfileEdit/
│   ├── page.tsx                            # Profile Edit Page Wrapper
│   └── ProfileEdit.tsx                     # Profile Edit Component
└── Setting/
    └── page.tsx                            # Settings Page
```

#### **Other Pages**
```
app/(no-navbar)/
├── AccountSetup/
│   └── page.tsx                            # Initial Account Setup
│
├── AddFriend/
│   ├── page.tsx                            # Add Friend Page Wrapper
│   └── AddFriends.tsx                      # Add Friend Component
│
├── Profilee/
│   ├── page.tsx                            # Profile View Page
│   ├── Profile.tsx                         # Profile Component
│   ├── Block.tsx                           # Block User Modal
│   ├── Copied.tsx                          # Copy Confirmation
│   ├── Menuebox.tsx                        # Profile Menu
│   ├── Report.tsx                          # Report User Modal
│   └── ThankYouForReporting.tsx            # Report Confirmation
│
└── SearchFriends/
    ├── page.tsx                            # Search Friends Page Wrapper
    └── SearchFriends.tsx                   # Search Friends Component
```

---

### **📱 (with-navbar) - Routes With Navigation**

```
app/(with-navbar)/
├── layout.tsx                              # Layout with Navbar
├── page.tsx                                # Home/Dashboard
│
├── chat/
│   ├── layout.tsx                          # Chat Layout
│   ├── page.tsx                            # Chat Overview
│   │
│   ├── dm/
│   │   ├── page.tsx                        # DM Page Wrapper
│   │   └── dm.tsx                          # DM List Component
│   │
│   └── notifications/
│       ├── page.tsx                        # Notifications Page Wrapper
│       └── Notifications.tsx               # Notifications Component
│
└── Profile/
    ├── page.tsx                            # Profile Page Wrapper
    └── Profile.tsx                         # Profile Component
```

---

### **🖥️ (Desktop) - Desktop-Optimized Routes**

```
app/(Desktop)/
└── @me/
    ├── layout.tsx                          # Desktop Layout
    └── page.tsx                            # Desktop Main Page (Empty)
```

---

### **🧩 Shared Components**

#### **Element Components** (Layout Elements)
```
app/components/Element/
├── FriendsList.tsx                         # Friends List
├── FriendsStatus.tsx                       # Friends Status Bar
└── Navbar.tsx                              # Bottom Navigation Bar
```

#### **Profile Components**
```
app/components/Profile Compoenets/
└── Userbanner.tsx                          # User Profile Banner
```

#### **UI Components** (Reusable UI)
```
app/components/UI/
├── AddFriend.tsx                           # Add Friend Button/Modal
├── FreiendReq.tsx                          # Friend Request Card
├── FreiendsStatusCard.tsx                  # Friend Status Card
├── FriendCard.tsx                          # Friend Card
├── FriendsListCard.tsx                     # Friends List Card
└── Notifications.tsx                       # Notification Card
```

---

## 🎨 Styling Files

### **Global Styles**
```
app/
└── globals.css                             # Global CSS Styles
```

### **Tailwind Configuration**
```
Root/
├── tailwind.config.ts                      # Tailwind Config
└── postcss.config.mjs                      # PostCSS Config
```

---

## 📊 File Count Summary

### **By Category**
- **Page Files**: 20+ pages
- **Component Files**: 30+ components
- **Layout Files**: 4 layouts
- **Config Files**: 6 configuration files
- **Style Files**: 1 global CSS + Tailwind

### **By Route Group**
- **(no-navbar)**: 15+ pages
- **(with-navbar)**: 5+ pages
- **(Desktop)**: 2 files
- **Shared Components**: 12+ components

---

## 🗂️ Component Organization Pattern

Your project follows this pattern:

```
Feature/
├── page.tsx                                # Page wrapper (imports component)
└── ComponentName.tsx                       # Actual component logic
```

**Example:**
```
chat/dm/
├── page.tsx                                # Wrapper: imports <Dm />
└── dm.tsx                                  # Component: exports Dm
```

**Benefits:**
- ✅ Cleaner separation of concerns
- ✅ Easier to reuse components
- ✅ Better for testing
- ✅ Follows Next.js conventions

---

## 📝 Key File Descriptions

### **Core Files**

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with metadata, fonts, providers |
| `app/page.tsx` | Landing/home page |
| `app/globals.css` | Global styles, Tailwind directives |
| `app/providers.tsx` | Context providers, theme providers |

### **Layout Files**

| File | Purpose |
|------|---------|
| `(with-navbar)/layout.tsx` | Adds bottom navigation bar |
| `(Desktop)/@me/layout.tsx` | Desktop three-column layout |
| `(with-navbar)/chat/layout.tsx` | Chat-specific layout |

### **Important Components**

| Component | Purpose |
|-----------|---------|
| `Navbar.tsx` | Bottom navigation (Home, Notifications, Profile) |
| `MessageHader.tsx` | Chat header with back button and call buttons |
| `TextArea.tsx` | Auto-growing message input |
| `FriendsList.tsx` | Scrollable list of friends/DMs |
| `Userbanner.tsx` | Profile banner image |

---

## 🔧 Configuration Files

### **TypeScript**
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./app/*"]  // Allows @/components/... imports
    }
  }
}
```

### **Tailwind**
```typescript
// tailwind.config.ts
- Custom colors (neutral grays)
- Custom utilities
- Dark mode support
```

### **Next.js**
```typescript
// next.config.ts
- App Router enabled
- TypeScript support
- Image optimization
```

---

## 📱 Mobile vs Desktop

### **Mobile Routes**
- `(no-navbar)/*` - Full-screen experiences
- `(with-navbar)/*` - With bottom nav

### **Desktop Routes**
- `(Desktop)/@me/*` - Three-column layout
- Future: Desktop-optimized views

---

## 🎯 Quick Navigation

**To find:**
- **Chat UI**: `(no-navbar)/(Chat)/message/`
- **Video Calls**: `(no-navbar)/(Chat)/Vc/`
- **Profile**: `(with-navbar)/Profile/` or `(no-navbar)/Profilee/`
- **Friends**: `(with-navbar)/chat/dm/`
- **Settings**: `(no-navbar)/(UserAdditionalPages)/Setting/`
- **Shared Components**: `components/`

---

**Last Updated**: 2025-12-18
**Total Files**: 50+ TSX files, 1 CSS file, 6 config files
