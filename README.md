# Link Sharing App

A modern React application that allows users to create and share their important links in a beautiful profile-like interface. The app provides an intuitive way to manage and showcase your online presence through a customizable link-sharing platform.

## Technologies Used

- **React (v18.2.0)**: Core framework for building the user interface
- **React Router (v6.14.1)**: For handling navigation and routing within the application
- **Styled Components (v6.0.3)**: For component-level styling with CSS-in-JS
- **React Beautiful DND (v13.1.1)**: Implements drag-and-drop functionality for link reordering
- **React DND (v16.0.1)**: Additional drag-and-drop utilities
- **UUID (v6.2.13)**: For generating unique identifiers
- **Context API**: Used for state management across components

## Features

- **Profile Management**: Custom profile UI for personalizing user information
- **Link Management**: Add, edit, and delete multiple links
- **Drag and Drop**: Intuitive interface for reordering links
- **Preview Mode**: Dedicated preview page to see how your profile looks
- **Responsive Design**: Works seamlessly across different device sizes

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rishabhkumar1211/Link-Sharing-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Link-Sharing-App
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Development Decisions and Assumptions

1. **Context API Implementation**: Chose to use React Context API for state management instead of Redux or other state management libraries due to the app's moderate size and requirements.

2. **Profile UI Enhancement**: Added a custom profile interface to improve user experience and provide more personalization options.

3. **Routing Structure**: Implemented a simple two-page routing system:

   - Homepage for link management
   - Preview page for viewing the final output

4. **Component Organization**: Structured the project with separate directories for:

   - Components
   - Context providers
   - Assets
   - Path-specific components

5. **Styling Approach**: Utilized styled-components for better component isolation and maintainable styling.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
