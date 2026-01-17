E‑learning Web 🌐

An educational platform in Greek built through five exercises, showcasing step‑by‑step the capabilities of HTML5, CSS3 and JavaScript.






📑 Table of Contents

Project Overview

Repository Structure

Features

Installation & Usage

Technologies

Contributors

License

Project Overview

The E‑learning Web project was developed as part of a university course. Its goal is to build a static e‑learning platform entirely in Greek while gradually enhancing its functionality and aesthetics. Across five separate exercises, the developers enrich the web site—starting with plain HTML pages and culminating with a registration form and client‑side validation via JavaScript. The repository serves as a hands‑on introduction to core front‑end technologies.

Repository Structure

The repository is organized as follows:

index.html – main entry point linking to each of the five exercises.

Exercise1/ – contains basic HTML pages with thematic categories such as Artificial Intelligence, Databases, Software Technology, Programming and Cybersecurity, along with an “About Us” page introducing the authors.

Exercise2/ – introduces the first stylesheet (style.css) to improve layout, color scheme and hover effects.

Exercise3/ – adopts CSS Grid and Flexbox for a responsive layout, adds promotional banners and a carousel to showcase recent books.

Exercise4/ – adds responsive images via srcset and optimises performance on different screen sizes.

Exercise5/ – implements a registration form with multiple fields and client‑side validation in JavaScript (strong password, age check and required fields).

Features

✅ Purely static content: all pages run without any server‑side logic.

🎨 Progressive design upgrades: each exercise introduces better styling through CSS—colours, layouts, grid/flexbox and responsive images.

📚 Rich content: curated lists of books with titles, authors, descriptions, page counts and ratings.

👥 Team presentation: an “About Us” page with photos and short biographies of the developers.

🧾 Registration form: collects personal details, contact preferences and learning preferences with robust client‑side validation.

Installation & Usage

Clone the repository:

git clone https://github.com/alexllks/e-learning-web.git
cd e-learning-web


Run without a server:

Open index.html in your favourite browser. A menu will appear allowing you to explore each exercise.

Run with a local server (optional):

Serve the files through a simple HTTP server to ensure relative paths work as expected:

python3 -m http.server


Then visit http://localhost:8000 in your browser and browse the exercises.

Technologies

This project leverages the following client‑side technologies:

Technology	Description
HTML5	Provides the structure and semantics of the web pages.
CSS3	Controls styling using Grid, Flexbox, animations and responsive images.
JavaScript	Adds basic interactivity and registration form validation.
Contributors

This project was created by students:

Alexandros Loulakis (A.M. 3200260) – front‑end development and styling.

Dimitrios Maniatis (A.M. 3160088) – content creation and registration form.

For questions or suggestions, refer to the contact details within the project pages.

License

This repository is provided for non‑commercial, educational use. For other uses or distribution please contact the authors.
