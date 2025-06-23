# 🛒 Offline-First E-Commerce React Native App

A high-performance, offline-first order entry application built in React Native using Realm for local persistence, designed to handle large datasets and ensure smooth user experience both online and offline.

---

## ✨ Features

- ✅ Browse a list of 100,000+ products from local/mock source
- ✅ Create, update, delete orders while offline
- ✅ Orders stored locally using Realm
- ✅ Sync queued orders automatically when back online
- ✅ Network detection using `@react-native-community/netinfo`
- ✅ Conflict resolution using “last-write-wins” strategy
- ✅ Visual indicators for network & sync status
- ✅ MVVM pattern + Clean architecture

---

## 🔧 Tech Stack

| Layer            | Technology                                  |
|------------------|---------------------------------------------|
| UI               | React Native                                |
| State Mgmt       | Redux / useState (optional)                 |
| Local DB         | Realm                                       |
| Sync Engine      | Custom (with mock API or console log)       |
| Network Monitor  | @react-native-community/netinfo             |
| Architecture     | MVVM, Modular Folder Structure              |

---

## 📁 Folder Structure

SRC/
└── OffLineFirstCart/
    ├── asset/
    │   ├── products.json
    │   └── images/
    ├── Components/
    │   ├── Header.js
    │   └── ProductItem.js
    ├── Databse/
    │   ├── index.js
    │   └── schemas/
    │       ├── CartItemSchema.js
    │       ├── OrderItemSchema.js
    │       └── OrderSchema.js
    ├── model/
    │   ├── CartItemModel.js
    │   ├── Product.js
    │   └── ProductModel.js
    ├── Redux/
    │   ├── action.js
    │   ├── constants.js
    │   ├── reducer.js
    │   ├── rootReducer.js
    │   └── store.js
    ├── Services/
    │   ├── cartService.js
    │   ├── OrderService.js
    │   └── SyncService.js
    ├── View/
    │   └── ProductListScreen.js
    ├── viewmodel/
    │   └── ProductListViewModel.js
    └── OtherModule/

---

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/yourname/offline-cart-app.git
cd offline-cart-app
2. Install Dependencies
npm install
3. Start Metro Bundler
npx react-native start
4. Run on Device
npx react-native run-android
# or
npx react-native run-ios
🧪 Testing Features
Scenario	Result
No internet	Orders saved locally with isSynced: false
Reconnects	Triggers automatic sync to server
Duplicate edits on 2 devices Last write (based on timestamp) wins

📦 Mock API
The sync engine uses a mock API endpoint (or console.log) for demonstration. You can replace it with your real server logic.