# Geeks For Code

**Geeks For Code** is a collaborative platform and community for developers to learn, build, and support each other through real-world projects, technical upskilling, and coding help. The project showcases a modern web application built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

---

## 🚀 Features

- **Landing Page:** Modern, responsive homepage introducing the community and its mission.
- **What We Do:** Overview of services—upskilling, development, collaboration, and peer support.
- **Team Section:** Meet the team with member profiles and contact links.
- **Projects:** Showcases featured and upcoming projects, including real estate, medical, and e-commerce platforms.
- **Contact Form:** Users can reach out for help, collaboration, or inquiries.
- **Dark Mode:** Seamless light/dark theme toggle.
- **Responsive Design:** Mobile-friendly and accessible UI.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, shadcn/ui, custom CSS
- **Routing:** React Router DOM
- **State/Async:** React Query
- **Icons:** Lucide React
- **Other:** Radix UI, date-fns, recharts, and more

---

## 📁 Project Structure

```
src/
  components/      # Reusable UI and page components
  hooks/           # Custom React hooks
  lib/             # Utility functions
  pages/           # Main pages (Home, Services, Projects, Contact, NotFound)
  services/        # API and auth utilities
  App.tsx          # Main app with routing
  main.tsx         # Entry point
  index.css        # Tailwind and global styles
public/
  # Static assets (images, logos, etc.)
```

---

## 🖥️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm, npm, or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/Miss-Maggie/geeks-for-code.git
cd geeks-for-code

# Install dependencies
pnpm install   # or npm install or yarn install

# Start the development server
pnpm dev       # or npm run dev or yarn dev
```

Visit [http://localhost:8080](http://localhost:8080) to view the app.

---

## ✨ Customization

- **Update Team Members:** Edit `src/components/TeamSection.tsx`.
- **Add Projects:** Edit `src/components/ProjectsSection.tsx` or `ProjectsMain.tsx`.
- **Contact Form:** The form currently simulates sending. Integrate with a backend or service (e.g., Formspree, EmailJS) to receive real messages.
- **Branding:** Replace images in `public/` and update text in components as needed.

---

## 📦 Scripts

- `pnpm dev` – Start development server
- `pnpm build` – Build for production
- `pnpm preview` – Preview production build
- `pnpm lint` – Lint code

---

## 🤝 Contributing

Pull requests and suggestions are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📬 Contact

- Use the contact form on the site, or email: geeksforcode@gmail.com
- Connect with team members via their profiles in the Team section.
