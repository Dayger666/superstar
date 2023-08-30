# Starbucks Clone Project

---

## Overview

This project aims to:

1. Replicate the homepage and sign-in pages.
2. Ensure responsiveness across devices from mobile to desktop, closely mirroring the original design.
3. Implement robust password requirements for users.
4. Ensure sign-in persistence.
5. Track and report button clicks in banners.
6. Fetch content dynamically via a dashboard (CMS).
7. Offer an Admin dashboard for content management.
8. Enable banner data creation.

## Prerequisites

- Node.js and npm/yarn installed.
- A running instance of AWS RDS for the database.

## Installation & Running

1. Clone the repository:
   ```bash
   git clone https://github.com/Dayger666/superstar
   ```

2. Navigate to the project directory:
   ```bash
   cd superstar
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm run dev
   ```

The application should now be accessible at `http://localhost:3000`.

---

## Technology Stack

- **Framework**: Next.js ^13
    - **Justification**: Next.js offers a comprehensive solution for server-rendered React applications, which is crucial for SEO and performance.

- **Language**: JavaScript
    - **Justification**: Sticking to plain JavaScript as per the project requirements to ensure broader compatibility.

- **Database ORM**: Prisma with SQL
    - **Justification**: Prisma offers a type-safe database access with an auto-generated query builder, making data operations more secure and efficient.

- **Database**: AWS RDS
    - **Justification**: AWS RDS is a reliable and scalable relational database service provided by AWS.

- **State Management**: React’s Context API
    - **Justification**: For the project's scale, the Context API offers sufficient state management without adding unnecessary complexity.

- **Code Quality**: ESLint
    - **Justification**: ESLint helps in maintaining code quality and ensuring codebase consistency.

- **Styling**: CSS with classnames utility
    - **Justification**: For dynamic styling and better CSS management, the classnames utility offers a simple API to achieve that.

---

## Features Implemented

- **Adaptive Header**: The header adapts its display based on the device's screen width.
## Dependencies Used

- classnames: ^2.3.2
- eslint: 8.48.0
- eslint-config-next: 13.4.19
- next: 13.4.19
- prop-types: ^15.8.1
- react: 18.2.0
- react-dom: 18.2.0

---

Certainly! Here's the `Future Improvements` section for a `README.md` file:

---

## Future Improvements

As of now, the project foundation has been set up, and we have successfully implemented an adaptive header. While these are important first steps, there are several areas of improvement and additions to be made:

1. **Page Implementations**: Start with the design and implementation of primary pages - the homepage and the sign-in page. Ensure that these pages closely resemble the original designs in terms of functionality and aesthetics.

2. **Dynamic Content Management**: The next significant step is to develop and integrate the admin dashboard (CMS). This will allow for seamless content updates on the website without requiring frequent changes in the codebase.

3. **User Authentication**: Incorporate a reliable user authentication mechanism. Taking into account the stipulated password criteria, build a system that enhances user security while maintaining ease of use.

4. **Sign-in Persistence**: The user experience will be substantially improved by ensuring the persistence of user sessions, even after the browser window is closed.

5. **Banner Button Analytics**: Develop a feature that effectively tracks and captures data related to banner button clicks, ensuring that all necessary details, such as button text, banner content, and user information, are accurately recorded.

6. **Database Integration**: As the project evolves, establishing a connection with AWS RDS via Prisma becomes crucial. This will be foundational for features that rely on dynamic content fetching and user data storage.

7. **State Management**: With React’s Context at our disposal, state management will become more streamlined and efficient as the application grows.

8. **Performance Optimization**: Prioritize the app's performance by employing techniques such as lazy-loading, code-splitting, and database query optimization.

9. **Testing**: Introduce comprehensive testing strategies - including unit, integration, and end-to-end tests - to ensure the application's reliability.

10. **Responsive Design**: The implemented adaptive header sets the standard for other components. As we develop other parts of the application, it's essential to ensure consistent responsiveness across all device sizes.
---
