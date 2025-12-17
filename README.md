# Aetheris

A modern, mobile-first chat application built with Next.js, featuring real-time messaging, video calls, and social features.

## 🚀 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Runtime**: Node.js

## 📁 Project Structure

```
Aetheris/
├── app/                                    # Next.js App Router
│   ├── (no-navbar)/                        # Routes without navbar
│   │   ├── (Auth)/                         # Authentication pages
│   │   │   ├── Login/
│   │   │   │   └── page.tsx                # Login page
│   │   │   └── Register/
│   │   │       └── page.tsx                # Registration page
│   │   │
│   │   ├── (Chat)/                         # Chat-related pages
│   │   │   ├── message/
│   │   │   │   ├── [userID]/
│   │   │   │   │   └── page.tsx            # Individual chat page
│   │   │   │   └── components/
│   │   │   │       ├── MessageHader.tsx    # Chat header component
│   │   │   │       ├── TextArea.tsx        # Message input component
│   │   │   │       ├── Userchat.tsx        # User message bubble
│   │   │   │       ├── YourChat.tsx        # Your message bubble
│   │   │   │       ├── Vclog.tsx           # Video call log component
│   │   │   │       └── Ui/
│   │   │   │           ├── ChatBubble.tsx  # Base chat bubble
│   │   │   │           ├── ImageBuble.tsx  # Image message
│   │   │   │           ├── Video.tsx       # Video message
│   │   │   │           ├── Visiluaser.tsx  # Visual user component
│   │   │   │           └── VoiceNote.tsx   # Voice note message
│   │   │   │
│   │   │   └── Vc/                         # Video call pages
│   │   │       ├── [userID]/
│   │   │       │   └── page.tsx            # Video call page
│   │   │       └── Components/
│   │   │           ├── SmallSlidingWindows.tsx
│   │   │           ├── VcAudioSelection.tsx
│   │   │           ├── VcHadder.tsx
│   │   │           ├── VcNavbar.tsx
│   │   │           └── Vcusercard.tsx
│   │   │
│   │   ├── (UserAdditionalPages)/          # User settings & profile
│   │   │   ├── ProfileEdit/
│   │   │   │   └── page.tsx                # Profile edit page
│   │   │   └── Setting/
│   │   │       └── page.tsx                # Settings page
│   │   │
│   │   ├── AccountSetup/
│   │   │   └── page.tsx                    # Initial account setup
│   │   │
│   │   ├── AddFriend/
│   │   │   └── page.tsx                    # Add friend page
│   │   │
│   │   ├── Profilee/                       # User profile pages
│   │   │   ├── page.tsx                    # Main profile page
│   │   │   ├── Profile.tsx                 # Profile component
│   │   │   ├── Block.tsx                   # Block user modal
│   │   │   ├── Copied.tsx                  # Copy confirmation
│   │   │   ├── Menuebox.tsx                # Profile menu
│   │   │   ├── Report.tsx                  # Report user modal
│   │   │   └── ThankYouForReporting.tsx    # Report confirmation
│   │   │
│   │   └── SearchFriends/
│   │       └── page.tsx                    # Friend search page
│   │
│   ├── (with-navbar)/                      # Routes with navbar
│   │   ├── layout.tsx                      # Layout with navbar
│   │   ├── page.tsx                        # Home page
│   │   │
│   │   ├── chat/                           # Chat section
│   │   │   ├── layout.tsx                  # Chat layout
│   │   │   ├── page.tsx                    # Chat overview
│   │   │   ├── dm/
│   │   │   │   └── page.tsx                # Direct messages list
│   │   │   └── notifications/
│   │   │       └── page.tsx                # Chat notifications
│   │   │
│   │   └── Profile/
│   │       └── page.tsx                    # User's own profile
│   │
│   ├── components/                         # Shared components
│   │   ├── Element/                        # Layout elements
│   │   │   ├── FriendsList.tsx             # Friends list component
│   │   │   ├── FriendsStatus.tsx           # Friends status bar
│   │   │   └── Navbar.tsx                  # Main navigation bar
│   │   │
│   │   ├── Profile Compoenets/
│   │   │   └── Userbanner.tsx              # User profile banner
│   │   │
│   │   └── UI/                             # UI components
│   │       ├── AddFriend.tsx               # Add friend button/modal
│   │       ├── FreiendReq.tsx              # Friend request component
│   │       ├── FreiendsStatusCard.tsx      # Friend status card
│   │       ├── FriendCard.tsx              # Friend card component
│   │       ├── FriendsListCard.tsx         # Friends list card
│   │       └── Notifications.tsx           # Notifications component
│   │
│   ├── favicon.ico                         # App favicon
│   ├── globals.css                         # Global styles
│   ├── layout.tsx                          # Root layout
│   ├── page.tsx                            # Landing page
│   └── providers.tsx                       # App providers
│
├── public/                                 # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── node_modules/                           # Dependencies
│
├── .eslintrc.json                          # ESLint configuration
├── .gitignore                              # Git ignore rules
├── next.config.ts                          # Next.js configuration
├── package.json                            # Project dependencies
├── package-lock.json                       # Dependency lock file
├── postcss.config.mjs                      # PostCSS configuration
├── tailwind.config.ts                      # Tailwind CSS configuration
├── tsconfig.json                           # TypeScript configuration
└── README.md                               # This file
```

## 🎯 Key Features

### 💬 Messaging
- Real-time one-on-one chat
- Support for text, images, videos, and voice notes
- Message bubbles with different styles for sender/receiver
- Video call logs in chat history
- Mobile-optimized chat interface with keyboard-aware layout

### 👥 Social Features
- Friend system (add, search, manage friends)
- Friend requests and status updates
- User profiles with banners
- Block and report functionality
- Friend status indicators

### 📱 Mobile-First Design
- Responsive layout optimized for mobile devices
- Keyboard-aware chat interface
- Smooth scrolling and animations
- Bottom-aligned chat messages (like WhatsApp/Telegram)
- Fixed header and input areas

### 🎥 Video Calls
- One-on-one video calls
- Audio selection controls
- Video call UI with user cards
- Call history tracking

### 🔔 Notifications
- Chat notifications
- Friend request notifications
- Dedicated notifications page

## 🏗️ Architecture

### Route Groups

**`(no-navbar)`**: Pages without navigation bar
- Authentication flows
- Chat conversations
- Video calls
- Profile editing
- Full-screen experiences

**`(with-navbar)`**: Pages with persistent navigation
- Home/Dashboard
- Chat overview
- User profile
- Main app navigation

### Component Organization

**`components/Element/`**: Layout and structural components
- Navbar, Friends lists, Status bars

**`components/UI/`**: Reusable UI components
- Cards, Buttons, Modals, Notifications

**`components/Profile Components/`**: Profile-specific components
- Banners, Profile displays

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd Aetheris

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Classes**: Defined in `globals.css`
- **Color Scheme**: Dark theme with neutral colors
- **Responsive**: Mobile-first approach with breakpoints

## 📝 Development Notes

### Chat Interface
The chat interface uses a flexbox layout that:
- Keeps messages anchored to the bottom
- Allows the keyboard to push header out of view
- Auto-scrolls to latest messages on load
- Provides smooth scrolling experience

### Dynamic Routes
- `[userID]`: Dynamic user-specific pages for chats and video calls
- Allows for scalable user-to-user interactions

### TypeScript
- Strict type checking enabled
- Interface definitions for props
- Type-safe component development

## 🔧 Configuration Files

- **`next.config.ts`**: Next.js configuration
- **`tailwind.config.ts`**: Tailwind CSS customization
- **`tsconfig.json`**: TypeScript compiler options
- **`.eslintrc.json`**: Code linting rules

## 📦 Main Dependencies

- `next`: React framework with App Router
- `react` & `react-dom`: UI library
- `react-icons`: Icon library
- `tailwindcss`: CSS framework
- `typescript`: Type safety

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

[Add your license information here]

## 👨‍💻 Author

[Add your information here]

---

**Built with ❤️ using Next.js and TypeScript**
