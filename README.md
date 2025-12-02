# 🚗 **TravelEase: Vehicle Booking & Trip Management Platform**

## 📜 **Overview**

TravelEase is a **comprehensive, modern web application** designed for seamless vehicle booking and trip management. It connects users looking for transportation (from SUVs to electric cars) with vehicle owners via a simple, secure, and intuitive platform, emphasizing **robust authentication** and **dynamic UX**.

---

## 🔗 **Live Links & Source Code**

| Type | Link |
| :--- | :--- |
| **Client Live Site (Frontend)** | [[(https://travel-easy-a9889.web.app/)]] |
| **Server API (Backend)** | [(https://travelease-server-chi.vercel.app)] |
| **GitHub Repository (Client)** | [(https://github.com/Hlamong55/travelease-client)]] |
| **GitHub Repository (Server)** | [(https://github.com/Hlamong55/travelease-server)] |

---

## 🛠 **Tech Stack & Dependencies**

### **Core Technologies**
| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React (v19.x) | Component-based UI |
| **Routing** | React Router (v7.x) | Declarative navigation |
| **Styling** | Tailwind CSS & DaisyUI | Rapid, themeable styling |
| **Animation** | Framer Motion | Smooth page transitions |
| **Authentication** | **Firebase** | Secure User Auth (Email/Google) |
| **Backend** | Node.js / Express | Server API management |
| **Database** | **MongoDB** | Data storage for vehicles & bookings |

### **Key Dependencies**
| Client-Side | Server-Side |
| :--- | :--- |
| `react-router-dom` | `express` |
| `firebase` | `mongodb` / `mongoose` |
| `axios` | `dotenv` |
| `framer-motion` | `cors` |
| `swiper` | `jsonwebtoken` (For JWT) |

---

## ✨ **Key Features**

### 🔑 **Authentication & Security**
* **Robust Firebase Auth:** Secure User Login/Registration.
* **Flexible Sign-In:** Supports **Email/Password** and **one-click Google Sign-In**.
* **Role-Based Access:** Dedicated dashboards for Owners and General Users.

### 🔍 **Booking & Filtering**
* **Dynamic Filtering:** Advanced client-side filtering based on **Category**, **Location**, and **Price** sorting.
* **Intuitive Booking:** Seamless process to reserve and manage booked vehicles.

### 📊 **Dashboards & Management**
* **Owner Dashboard:** Users can **Add Vehicles** (listings) and manage their existing **My Vehicles**.
* **Renter Dashboard:** Track all current and past reservations (**My Bookings**).

### 🎨 **UI/UX**
* **Responsive & Themed:** Fully responsive design with modern **Light/Dark Mode** switcher.
* **Smooth Animations:** Enhanced user experience using **Framer Motion** and **Swiper** carousels.

---

## ⚙️ **Installation & Setup Guides**

### 1. **Client-Side (Frontend)**

#### **Steps**
```bash
# Clone the client repository
git clone [(https://github.com/Hlamong55/travelease-client.git)]
cd your-client-repo

# Install dependencies
npm install

# Set up environment variables
# Create a .env file and add your configuration details:
VITE_API_URL=[https://travel-ease-server-three.vercel.app](https://travel-ease-server-three.vercel.app)
VITE_FIREBASE_API_KEY=your_firebase_key
# ... include other Firebase config variables ...

# Run the development server
npm run dev

-----

### 2. **Server-Side (Backend)**

# Clone the server repository
git clone [(https://github.com/Hlamong55/travelease-server.git)]
cd your-server-repo

# Install dependencies
npm install

# Set up environment variables
# Create a .env file in the server root and add required variables:
PORT=5000
DATABASE_URL="mongodb+srv://user:password@cluster.mongodb.net/travelease?retryWrites=true&w=majority"
JWT_SECRET="your_strong_secret_key"

# Run the development server
npm run dev  # Or npm start

---




