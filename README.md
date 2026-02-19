# IHCHS Class of '92 — Secured Electronic Voting System

A secure, cloud-connected electronic voting platform built for the Immaculate Heart Comprehensive High School (IHCHS) Class of '92 Alumni Set Executive Election. This version uses Firebase Realtime Database so that 400+ alumni can vote from different locations worldwide, with all votes collected centrally and results updating in real time.

## Features

- **Cloud-based voting** — All votes are collected in a central Firebase database, accessible from any device worldwide
- **Real-time results** — Vote tallies update instantly across all connected devices
- **Phone-based voter verification** — Unique 7-digit codes derived from registered phone numbers
- **Two voting modes** — Candidate selection for contested positions, YES/NO endorsement for unopposed positions
- **Atomic vote counting** — Firebase transactions prevent race conditions when multiple alumni vote simultaneously
- **Admin panel** — Password-protected control center for candidates, voter registry, and election management
- **7-layer security** — Brute-force protection, one-vote enforcement, edit locks, and more
- **Connection handling** — Timeout detection with retry for unreliable internet connections

## Election Details

- **9 positions** with **11 candidates**
- **2 contested positions**: Secretary General, Socials/Welfare Director
- **7 unopposed positions** with YES/NO endorsement voting
- **Abstain option** available for every position

## How It Works

When an alumnus opens the election link, the app connects to the Firebase cloud database and loads the current election data (candidates, positions, whether the election is open). When the alumnus casts a vote, it is written directly to Firebase using atomic transactions — meaning even if two people press "Submit" at the exact same millisecond, both votes are counted correctly. Every other device connected to the app sees the updated totals instantly.

## Setup — Two Steps

### 1. Set Up Firebase (10 minutes)

Follow the complete step-by-step guide in **[FIREBASE_SETUP.md](FIREBASE_SETUP.md)**. This walks you through creating a free Firebase project, setting up the database, getting your credentials, and pasting them into the app.

### 2. Deploy to Vercel (2 minutes)

After Firebase is configured, drag the project folder onto [vercel.com/new](https://vercel.com/new) to deploy. Full instructions are in the Firebase setup guide.

## Project Structure

| File | Purpose |
|------|---------|
| `index.html` | HTML page with meta tags for WhatsApp link previews |
| `package.json` | Dependencies: React 18, Firebase 10, Vite 5 |
| `vite.config.js` | Vite build configuration |
| `src/firebase.js` | **Your Firebase credentials go here** |
| `src/main.jsx` | React entry point |
| `src/App.jsx` | The entire election application (2,072 lines) |
| `FIREBASE_SETUP.md` | Complete Firebase setup guide |

## Default Admin Password

**IHCHS92ADMIN** — Change this immediately after first login via the Control Tab.

## Technical Details

- **Framework**: React 18 with Firebase Realtime Database
- **Build Tool**: Vite 5
- **Hosting**: Vercel (Hobby plan, free)
- **Database**: Firebase Realtime Database (Spark plan, free)
- **Vote Integrity**: Firebase `runTransaction()` for atomic counting
- **Real-time Sync**: Firebase `onValue()` listeners for instant cross-device updates

---

© 2026 IHCHS Class of '92 Electoral Commission
