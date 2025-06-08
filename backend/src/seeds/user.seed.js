import { config } from "dotenv"
import { connectDB } from "../lib/db.js"
import User from "../models/user.model.js"

config()

const seedUsers = [
  // Female Users
  {
    email: "priya.sharma@example.in",
    fullName: "Priya Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "ananya.verma@example.in",
    fullName: "Ananya Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "isha.patel@example.in",
    fullName: "Isha Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "radhika.iyer@example.in",
    fullName: "Radhika Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "kavya.menon@example.in",
    fullName: "Kavya Menon",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "sneha.rao@example.in",
    fullName: "Sneha Rao",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "tanya.das@example.in",
    fullName: "Tanya Das",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "meera.nair@example.in",
    fullName: "Meera Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "arjun.mehta@example.in",
    fullName: "Arjun Mehta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "rahul.kumar@example.in",
    fullName: "Rahul Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "vivaan.jain@example.in",
    fullName: "Vivaan Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "aaditya.singh@example.in",
    fullName: "Aaditya Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "siddharth.agarwal@example.in",
    fullName: "Siddharth Agarwal",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "rohan.reddy@example.in",
    fullName: "Rohan Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "manav.chopra@example.in",
    fullName: "Manav Chopra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
]

const seedDatabase = async () => {
  try {
    await connectDB()

    await User.insertMany(seedUsers)
    console.log("Database seeded successfully")
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    process.exit(0)
  }
}

seedDatabase()
