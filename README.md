Overview
This project is a React Native application designed for managing a restaurant menu. It includes features for adding dishes, filtering menu items, and viewing the menu with real-time calculations like the average price of items.

Screens
  1. HomeScreen
    Purpose: Acts as the main dashboard for the menu management system.
    Key Features:
      Displays the list of menu items.
      Allows navigation to AddMenuScreen and FilterMenuScreen.
      Calculates and displays the average price of menu items.
      Supports the removal of menu items with confirmation.
    Components:
      FlatList for displaying menu items.
      Dynamic calculations for total items and average price.
    Navigation:
      Navigates to the AddMenuScreen for adding new items.
      Navigates to the FilterMenuScreen for filtering menu items by course.

  2. AddMenuScreen
    Purpose: Enables users to add new dishes to the menu.
    Key Features:
      Input fields for dish name, description, price, and course selection.
      Utilizes Picker for selecting a course (e.g., Starters, Mains, Desserts).
      Sends newly created items back to the HomeScreen using navigation parameters.
    Components:
      Form with text inputs and a picker.
      Validations for numeric input (price).

  3. FilterMenuScreen
    Purpose: Provides functionality to filter the menu items based on the course type.
    Key Features:
      Buttons to filter menu items by categories such as Appetizers, Mains, and Desserts.
      Clear filter option to reset the menu to its original state.
    Components:
      FlatList for filtered menu items.
      State management with useState and useEffect.

Folder Structure:
  screens/: Contains all the screen components for the app.
  HomeScreen.tsx: The main screen for viewing and managing the menu.
  AddMenuScreen.tsx: A form-based screen for adding new menu items.
  FilterMenuScreen.tsx: A screen for filtering menu items based on their course.

Navigation:
  The app uses React Navigation's Native Stack Navigator for seamless transitions between screens.
  Features
    Add, filter, and view menu items.
    Real-time average price calculation.
    Smooth navigation between screens.
  
Technologies Used:
  React Native: Framework for building the mobile application.
  React Navigation: Library for screen navigation.
  React Native Picker: Dropdown menu for course selection.

Future Improvements:
  Add validation for all input fields.
  Improve the UI design with additional styling.
  Integrate persistent storage to save menu items.
  Add unit tests for components.
