# EduFace – Homepage & Administration

EduFace is a digital attendance management system designed for schools. It combines a web-based administration interface with classroom attendance terminals using facial recognition and NFC.

This repository contains the **public EduFace website, authentication, and administration interface**.

The application allows authorized users to manage students, teachers, classes, users, attendance records and absences through a central web interface.

---

## Overview

EduFace consists of two main software components:

1. **Web application** – public homepage and administration interface
2. **Raspberry Pi application** – classroom attendance terminal and backend

This repository contains the first component.

```text
                         ┌──────────────────────────┐
                         │        EduFace Web        │
                         │                          │
                         │  Homepage                │
                         │  Login / Registration    │
                         │  Administration          │
                         └────────────┬─────────────┘
                                      │
                                      │ Firebase
                                      ▼
                         ┌──────────────────────────┐
                         │         Firebase         │
                         │                          │
                         │  Authentication          │
                         │  Firestore               │
                         │  Students                │
                         │  Teachers                │
                         │  Classes                 │
                         │  Attendance              │
                         │  Absences                │
                         └────────────┬─────────────┘
                                      │
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │ Raspberry Pi / Backend   │
                         │                          │
                         │ Classroom terminals      │
                         │ Face recognition         │
                         │ NFC                      │
                         └──────────────────────────┘
```

---

## Features

### Public Homepage

The homepage provides information about EduFace and its purpose.

It includes:

* Hero section
* Feature overview
* Call-to-action sections
* FAQ
* Contact section
* Navigation and footer
* Documentation page
* Responsive interface

### Authentication

Users can register and log in using Firebase Authentication.

After authentication, EduFace checks the corresponding user document in Firestore and determines the user's role.

Supported roles currently include:

* `admin`
* `lehrer`

Newly registered users can be created in Firestore without an assigned role. An administrator can subsequently assign the appropriate role.

### Administration Interface

The administration interface provides different functionality depending on the user's role.

#### Dashboard

The dashboard provides an overview of the system and currently contains areas for:

* Overview
* Statistics
* Notifications

#### Students

Administrators and teachers can manage students, including:

* Viewing students
* Creating students
* Editing students
* Deleting students
* Assigning students to classes
* Managing student IDs

#### Teachers

Teachers can be managed through the administration interface.

Available operations include:

* Viewing teachers
* Creating teachers
* Editing teachers
* Deleting teachers
* Managing teacher IDs and abbreviations

#### Classes

Classes can be:

* Viewed
* Created
* Edited
* Deleted

Class data is connected to the corresponding timetable information.

#### Attendance

EduFace stores attendance records for students.

Attendance records contain information such as:

* Student ID
* Arrival time
* Departure time

#### Absences

The administration interface provides an interface for managing calculated and manually created absences.

Absences can be:

* Filtered
* Sorted
* Created
* Edited
* Deleted
* Marked as excused or unexcused
* Assigned a reason

#### User Management

Administrators can manage application users.

This includes:

* Viewing users
* Creating users
* Editing users
* Deleting users
* Assigning roles

#### Settings

The interface also provides user settings such as:

* Theme
* Font size
* Language
* Automatic login

---

## Technology Stack

### Frontend

* [Vue 3](https://vuejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vite.dev/)
* [Vue Router](https://router.vuejs.org/)
* [Firebase](https://firebase.google.com/)
* Pinia
* Axios
* Fuse.js
* Vue Datepicker

### Development

* ESLint
* Prettier
* Vue TypeScript Compiler (`vue-tsc`)
* Vite Vue DevTools

---

## Project Structure

```text
EduFace-main/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── homepage/
│   │   │   ├── CTA.vue
│   │   │   ├── FAQ.vue
│   │   │   ├── Feature.vue
│   │   │   ├── FeatureCard.vue
│   │   │   ├── Footer.vue
│   │   │   ├── Hero.vue
│   │   │   ├── Kontakt.vue
│   │   │   └── Navbar.vue
│   │   │
│   │   ├── Interface/
│   │   │   ├── Create/
│   │   │   ├── Edit/
│   │   │   ├── Abwesenheiten.vue
│   │   │   ├── Dashboard.vue
│   │   │   ├── Einstellungen.vue
│   │   │   ├── Klassen.vue
│   │   │   ├── Lehrer.vue
│   │   │   ├── Schueler.vue
│   │   │   ├── Sidebar.vue
│   │   │   └── UserVerwaltung.vue
│   │   │
│   │   └── Login/
│   │       ├── Login.vue
│   │       └── Register.vue
│   │
│   ├── firebase/
│   │   ├── firebase.ts
│   │   ├── queries.ts
│   │   └── users.ts
│   │
│   ├── router/
│   │   └── index.ts
│   │
│   ├── util/
│   │   └── apiRequests.ts
│   │
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── InterfaceView.vue
│   │   ├── LoginView.vue
│   │   ├── RegisterView.vue
│   │   ├── DokumentationView.vue
│   │   └── KontaktView.vue
│   │
│   └── main.ts
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Firebase

The application uses Firebase for authentication and data storage.

The main Firestore structure is:

```text
EduFace
└── Schulzentrum-ybbs
    ├── User
    ├── Schueler
    ├── Lehrer
    ├── Klassen
    ├── Stundenplan
    ├── Anwesenheiten
    └── Abwesenheiten
```

### Authentication

Firebase Authentication is used for user login and registration.

The application then uses the authenticated user's email to find the corresponding document in the `User` collection.

The user's role determines which parts of the administration interface are accessible.

---

## Environment Variables

Firebase configuration is loaded through Vite environment variables.

Create a local environment file:

```text
.env.local
```

The application expects:

```env
VITE_API_KEY=...
VITE_AUTH_DOMAIN=...
VITE_DATABASE_URL=...
VITE_PROJECT_ID=...
VITE_STORAGE_BUCKET=...
VITE_MESSAGING_SENDER_ID=...
VITE_APP_ID=...
VITE_MEASUREMENT_ID=...
```

Do **not** commit your actual Firebase credentials or environment files to the repository.

The repository's `.gitignore` already excludes environment files.

---

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

---

## Development

Start the Vite development server:

```bash
npm run dev
```

Vite is configured to expose the development server through the host network.

---

## Production Build

To type-check and build the application:

```bash
npm run build
```

To build without the type-check step:

```bash
npm run build-only
```

Preview the production build locally:

```bash
npm run preview
```

---

## Code Quality

Run ESLint:

```bash
npm run lint
```

Format the source code:

```bash
npm run format
```

Run TypeScript/Vue type checking:

```bash
npm run type-check
```

---

## Application Routes

The main routes are:

| Route            | Purpose                  |
| ---------------- | ------------------------ |
| `/`              | Public homepage          |
| `/interface`     | Administration interface |
| `/login`         | Login                    |
| `/register`      | Registration             |
| `/Dokumentation` | Documentation            |
| `/Kontakt`       | Contact                  |

The administration interface uses hash navigation for its individual sections.

Examples:

```text
/interface#dashboard
/interface#lehrer
/interface#schueler
/interface#klassen
/interface#abwesenheiten
/interface#einstellungen
/interface#userverwaltung
```

---

## Related Repository

The classroom Raspberry Pi application and its backend are maintained separately:

**EduFace-Raspapp**

That repository contains the software running on the classroom attendance terminals as well as the backend responsible for communication, face recognition/NFC requests and attendance processing.

---

## Project Context

EduFace was developed as a diploma project with the goal of creating a digital attendance system for schools.

The system combines traditional attendance management with automated identification using:

* Facial recognition
* NFC
* Classroom-based attendance terminals
* Centralized administration
* Automatic absence calculation

The web application provides the central interface for managing the data generated by the classroom terminals.

---

## Status

EduFace is a diploma project and is not intended to be considered a production-ready school management system without further development, testing and security hardening.
