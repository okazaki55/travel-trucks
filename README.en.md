[🇹🇷 Bu projeyi Türkçe okuyun](./README.md)

# 🚐 TravelTrucks - Camper Van Rental App

A modern, responsive, and fully functional Single Page Application (SPA) for renting camper vans. Users can browse a catalog of available vehicles, filter them based on their preferences (location, equipment, type), view detailed vehicle specifications, and fill out a booking form.

## ✨ Features

- **Dynamic Catalog:** Browse a rich list of camper vans fetched from a REST API.
- **Advanced Filtering:** Filter vehicles by location, transmission type, vehicle form, and included equipment (AC, Kitchen, TV, etc.).
- **State Management:** Fully integrated with Redux Toolkit for seamless global state management across components.
- **Custom Iconography:** Implemented a custom lightweight icon set using IcoMoon for optimal performance and infinite scalable SVGs.
- **Responsive Design:** Fluid layouts that adapt perfectly to Desktop, Tablet, and Mobile screens.
- **Client-Side Routing:** Fast and smooth page transitions using React Router Dom.
- **Vercel Ready:** Pre-configured for seamless deployment on Vercel with SPA routing support.

## 🛠️ Tech Stack

- **Framework:** React (Bootstrapped with Vite)
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **Routing:** React Router v6 (`react-router-dom`)
- **Styling:** CSS Modules (Component-scoped styling)
- **Icons:** Custom IcoMoon Font Package
- **API/Backend:** Axios with MockAPI (for simulating a real backend)
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   bash
   git clone [github](https://github.com/okazaki55/travel-trucks.git)

2. Navigate into the project directory:
   Bash
   cd traveltrucks

3. Install the dependencies:
   Bash
   npm install

4. Start the development server:
   Bash
   npm run dev

5. Open your browser and visit http://localhost:5173 to see the app running.

📁 Project Structure

src/components/: Reusable UI components (CamperCard, FilterSidebar, BookingForm, etc.)

src/pages/: Main page views (HomePage, CatalogPage, CamperDetailsPage)

src/redux/: Redux slices (campersSlice.js, filtersSlice.js) and store configuration.

src/assets/: Static files including the custom IcoMoon font package and global CSS.

src/services/: API configuration and Axios instances.

🔗 Deployment
This project includes a vercel.json configuration file to handle SPA client-side routing. It can be instantly deployed to Vercel by importing the GitHub repository.

Designed and developed with care.
