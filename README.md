# health-nav

Navbar
Purpose and Behavior:

Serves as the primary means of navigation within the application.
Contains links to main sections: Home, My Bookings, Settings, Logout.
Remains visible and fixed at the top of the screen as the user scrolls.
Visual Description and Styling:

Background color is deep blue, providing high contrast with text and icons.
Text and icons are in white or light gray to stand out against the dark background. This includes clear, sans-serif typography that is easy to read.
Each navigation item has a generous padding of about 15 pixels on all sides to ensure they are perceived as distinct and separate elements.
Hovering over navigation items changes their background to a slightly lighter shade of blue and text to teal, offering a visual cue of interactivity.
Search and Filter Section
Purpose and Behavior:

Allows users to filter and search for health professionals based on name, specialty, or availability.
Features dropdown menus for specialties and date pickers for availability, along with a text input field for name searches.
Visual Description and Styling:

The section is backed by a light gray color, which contrasts subtly with white input fields, making them prominent.
Input fields and dropdowns have rounded corners with a border color slightly darker than the field color for definition.
Each field includes ample internal padding, around 10 pixels, to ensure the text does not touch the edges, enhancing readability.
Active fields or selections are highlighted with a border in teal to visually indicate focus.
Professional List
Purpose and Behavior:

Displays search results, listing available health professionals in a card format.
Each card is clickable and leads to more detailed information or booking options.
Visual Description and Styling:

Cards are laid out on an off-white background, each with a slight shadow effect to create the illusion of elevation off the page.
Professional images or icons in grayscale are placed at the top of each card, round-shaped with a thin border in light gray.
Below the image, the professional’s name, specialty, and a brief bio are displayed using dark gray text. The name is in a larger font size for emphasis.
Each card has a consistent margin of about 20 pixels between them to avoid visual clutter.
Booking Form
Purpose and Behavior:

Facilitates the completion of booking details such as selecting the date, time, and entering any special instructions.
Visual Description and Styling:

Presented as a modal that overlays the main content, with a semi-transparent black backdrop to reduce distractions from other elements.
The form fields are styled with a white background and teal borders when active to draw attention.
Submit and cancel buttons are prominently displayed, the former in teal and the latter in gray, both with rounded corners and bold text for clarity.
Calendar View
Purpose and Behavior:

Displays a visual calendar allowing users to see available and booked times.
Users can navigate through months and select days to view or manage bookings.
Visual Description and Styling:

The calendar grid is delineated by light gray lines with sufficient contrast against the white background of the days.
Current day is highlighted with a subtle teal border.
Booked slots are marked in red, while available slots are marked in green, both with hover states in a slightly darker shade of the respective color to indicate interactivity.
Footer
Purpose and Behavior:

Provides additional navigation links and legal information in a less prominent manner.
Visual Description and Styling:

The background mirrors the Navbar with a deep blue color.
Text and link icons are in light gray, arranged in columns for organized access. Each text link has adequate spacing to prevent overlapping and maintain legibility.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/health-nav.git
cd health-nav
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
