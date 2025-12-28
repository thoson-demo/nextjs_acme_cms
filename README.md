# NextJS Dashboard Project

- 🔗 **[Live Demo on GitHub Pages](https://thoson-demo.github.io/nextjs_acme_cms/)**
- 📐 **UI Template:** [https://next-learn-dashboard.vercel.sh](https://next-learn-dashboard.vercel.sh/)

## Features

A full-featured dashboard application built with Next.js, featuring:

- **Authentication & Authorization** - Secure login system with NextAuth.js
- **Dashboard Overview** - Real-time statistics and revenue visualization
- **Invoice Management** - Complete CRUD operations for invoices
- **Customer Management** - View and search customer information
- **Advanced Search & Filtering** - Debounced search with URL-based state
- **Pagination** - Efficient data navigation
- **Server Components** - Optimized data fetching with React Server Components
- **Database Integration** - PostgreSQL with seeded sample data
- **Error Handling** - Comprehensive error and not-found pages
- **Performance Optimization** - Streaming with Suspense and optimized images

---

## Project Implementation Steps

### 1. Initial Setup
- [x] Initialize new Next.js project
- [x] Install required dependencies (React, Next.js, TypeScript, Tailwind CSS)
- [x] Set up basic folder structure

### 2. Authentication Pages
- [ ] Create `app/login/page.tsx` - login page
- [ ] Design login form with email and password fields
- [ ] Create LoginForm component with styling

### 3. Dashboard Layout
- [ ] Create `app/dashboard/layout.tsx` - main layout
- [ ] Build sidebar navigation with menu items
- [ ] Create SideNav component with navigation links

### 4. Dashboard Overview Page
- [ ] Create `app/dashboard/page.tsx` - main dashboard page
- [ ] Create statistics cards (collected, pending, total invoices, total customers)
- [ ] Create RevenueChart component - revenue visualization
- [ ] Create LatestInvoices component - display recent invoices

### 5. Invoices List Page
- [ ] Create `app/dashboard/invoices/page.tsx` - invoices list page
- [ ] Create table to display invoice list
- [ ] Add search bar for invoices
- [ ] Add status filter (All, Pending, Paid)
- [ ] Add pagination for invoice list
- [ ] Add "Create Invoice" button

### 6. Create Invoice Page
- [ ] Create `app/dashboard/invoices/create/page.tsx` - create new invoice
- [ ] Create form with fields: customer, amount, status, date
- [ ] Add customer dropdown selector
- [ ] Add Cancel and Create Invoice buttons

### 7. Edit Invoice Page
- [ ] Create `app/dashboard/invoices/[id]/edit/page.tsx` - edit invoice
- [ ] Implement dynamic route with [id]
- [ ] Pre-fill form with current invoice data
- [ ] Add Cancel and Update Invoice buttons

### 8. Customers Page
- [ ] Create `app/dashboard/customers/page.tsx` - customers list
- [ ] Display customer table with detailed information
- [ ] Add search functionality for customers

### 9. UI Components
- [ ] Create `components/ui/button.tsx` - Button component
- [ ] Create `components/ui/input.tsx` - Input component
- [ ] Create `components/ui/card.tsx` - Card component
- [ ] Create `components/invoices/table.tsx` - Invoice table component
- [ ] Create `components/invoices/status.tsx` - Status badge component
- [ ] Create `components/search.tsx` - Search component
- [ ] Create `components/pagination.tsx` - Pagination component

### 10. Navigation Components
- [ ] Create `components/dashboard/nav-links.tsx` - Navigation links
- [ ] Use `usePathname()` to highlight active link
- [ ] Add icons for each menu item

### 11. Loading States
- [ ] Create `app/dashboard/loading.tsx` - Loading skeleton
- [ ] Create `app/dashboard/invoices/loading.tsx` - Loading for invoices

### 12. Database Setup
- [ ] Set up PostgreSQL database
- [ ] Create schema for tables: users, customers, invoices, revenue
- [ ] Seed sample data into database
- [ ] Create functions to fetch data from database

### 13. Data Fetching
- [ ] Use Server Components for data fetching
- [ ] Implement search with URL search params
- [ ] Add debouncing for search input

### 14. Server Actions & Form Handling
- [ ] Create Server Actions for form handling
- [ ] Implement form validation
- [ ] Handle create new invoice
- [ ] Handle update invoice
- [ ] Handle delete invoice

### 15. Authentication
- [ ] Set up NextAuth.js
- [ ] Configure authentication providers
- [ ] Create middleware to protect routes
- [ ] Manage sessions and logout

### 16. Error Handling
- [ ] Create `error.tsx` file - error handling
- [ ] Create `not-found.tsx` file - 404 page
- [ ] Handle errors from database and API

### 17. Performance Optimization
- [ ] Implement streaming with Suspense
- [ ] Optimize images with next/image

### 18. Deployment
- [ ] Deploy to Vercel

---

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
