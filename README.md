This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
project/ ├── src/ # Source code │ ├── assets/ # Static files like images, fonts, sounds │ │ ├── fonts/ # Custom fonts │ │ ├── icons/ # Icon files │ │ └── images/ # Image files │ ├── components/ # Components │ │ ├── shared/ # Cross-platform reusable components │ │ │ ├── Button.tsx # Cross-platform button component │ │ │ ├── Header.tsx # Shared header for app screens │ │ │ ├── Modal.tsx # Cross-platform modal │ │ │ ├── LoadingSpinner.tsx # Cross-platform loader │ │ │ ├── ChatBubble.tsx # Chat bubble component shared across platforms │ │ │ └── MapView.tsx # Map view that adapts between mobile and web │ │ ├── mobile/ # Mobile-specific components │ │ │ ├── BottomTabBar.tsx # Bottom tab bar navigation for mobile │ │ │ ├── NotificationBadge.tsx # Mobile-styled notification badge │ │ │ └── SwipeableList.tsx # Swipeable list component specific to mobile │ │ └── web/ # Web-specific components │ │ ├── SideNavBar.tsx # Side navigation bar for web │ │ ├── WebPushHandler.tsx # Web push notification handler │ │ └── DataTable.tsx # Table for displaying data, optimized for web │ ├── hooks/ # Custom React hooks │ │ ├── useAuth.ts # Hook for authentication │ │ ├── useLocation.ts # Hook for location tracking │ │ ├── useNotifications.ts # Hook for handling notifications │ │ └── useGroups.ts # Hook for managing groups and subgroups │ ├── navigation/ # Navigation setup │ │ ├── BottomTabNavigator.tsx # Bottom tabs for mobile │ │ ├── RootNavigator.tsx # Entry point for navigation │ │ └── WebNavigator.tsx # Navigation setup for web │ ├── screens/ # Screen components │ │ ├── OnboardingScreen.tsx # Onboarding flow │ │ ├── LoginScreen.tsx # Login screen │ │ ├── GroupChatScreen.tsx # Chat with group and location tracking │ │ ├── TrailsScreen.tsx # Trail-related information │ │ ├── SettingsScreen.tsx # Settings screen │ │ └── NotFoundScreen.tsx # 404 or fallback screen │ ├── services/ # API integrations and services │ │ ├── ably/ # Ably-related logic │ │ │ ├── channels.ts # Channel setup and messaging │ │ │ ├── notifications.ts # Notifications using Ably │ │ │ └── location.ts # Real-time location tracking │ │ ├── auth/ # Authentication logic │ │ │ └── authService.ts # Login, register, and logout │ │ └── api.ts # Axios or fetch wrapper for API requests │ ├── state/ # Global state management │ │ ├── reducers/ # Reducers for different state slices │ │ │ ├── authReducer.ts # Authentication state │ │ │ ├── chatReducer.ts # Group chat state │ │ │ ├── groupReducer.ts # Group and subgroup management │ │ │ └── locationReducer.ts # Location-related