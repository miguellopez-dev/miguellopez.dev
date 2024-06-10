# Portfolio Website

This repository contains the source code for my personal portfolio website, which showcases my projects, skills, and professional details as a Full Stack Developer.

## Features

-   **Project Showcase**: Detailed cards for each project with descriptions, technologies used, and links to live sites, source code, or additional resources.
-   **Responsive Design**: Fully responsive web design ensuring a seamless experience across various devices and screen sizes.
-   **Dynamic Project Loading**: Projects details are fetched from a SQL database to keep the site updated with the latest projects.
-   **Technology Tags**: Each project card displays technology tags that describe the tech stack used in that project.

## Technologies Used

-   **Frontend**: React.js, Next.js, Tailwind CSS
-   **Backend**: Node.js, Express.js (API handling)
-   **Database**: MySQL

## Challenges

### Responsive Design

-   **Challenge**: Creating a design that is both aesthetically pleasing and functional across all device sizes.
-   **Solution**: Used Tailwind CSS for its utility-first classes that made it easier to adjust layouts dynamically and ensure a consistent look and feel.

### Integrating Technologies

-   **Challenge**: Displaying a dynamic set of technologies for each project in a visually appealing manner.
-   **Solution**: Developed a flexible tagging system that fetches technology data from the backend and displays it in bubble-like tags on each project card.

### Managing Dynamic Data

-   **Challenge**: Ensuring that project details are up-to-date and can be easily maintained and updated through the database without direct code changes.
-   **Solution**: Used a relational database (MySQL) to manage project data, which is then fetched via an API to ensure the website remains updated and scalable.

## Contributing

If you have suggestions for improving the portfolio, please feel free to open an issue with the tag "enhancement".

## Contact

Miguel Lopez – [Website](https://miguellopez.dev) – hello@miguellopez.dev
