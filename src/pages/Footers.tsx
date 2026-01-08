"use client"
import type React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footers() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle email submission
        console.log("Email submitted:", email)

        setEmail("")
    }

    return (
        <div className=" ">
            {/* Hero Section */}
            <main className="flex">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center h-full">
                    <motion.div
                        className="text-center space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1
                                className="font-headline text-2xl sm:text-4xl font-bold leading-tight"
                            >
                                Be first in line. Join Our Waitlist
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0 text-center">
                                💡 Completely free to use.
                            </p>
                        </motion.div>

                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
                                <div className="flex flex-col sm:flex-row sm:relative gap-3 sm:gap-0">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="w-full px-4 py-4 sm:pr-32 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                    <button
                                        type={"submit"}
                                        className="sm:absolute sm:right-2 sm:top-2 sm:bottom-2 bg-black text-white px-6 py-4 sm:py-0 rounded-lg sm:rounded-md text-sm hover:bg-gray-800 dark:hover:bg-violet-500 transition-colors w-full sm:w-auto
                    font-bold">
                                        Touch Me 💌
                                    </button>
                                </div>
                            </form>

                            <motion.div
                                className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >

                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </main>

            <footer
                className="border-t border-dashed  px-4 py-4 text-center text-sm text-gray-500"
            >
                <div className="relative w-full max-w-6xl mx-auto">
                    {/* 3D Glowing Container */}
                    <div className="glowing-container">
                        <div className="flex flex-wrap justify-center gap-8">

                            <Link to="/" className="social-icon discord">
                                <div className="icon-container hover:text-gray-950">
                                    <FaDiscord className="w-6 h-6" />
                                </div>
                                <span className="icon-label">Discord</span>
                            </Link>

                            <Link to="https://github.com/AayushSahani01/" target="_blank" className="social-icon github">
                                <div className="icon-container hover:text-gray-950">
                                    <FaGithub className="w-6 h-6 hover:text-white" />
                                </div>
                                <span className="icon-label">GitHub</span>
                            </Link>

                            <Link to="https://www.linkedin.com/in/ayushsahani01/" target="_blank" className="social-icon linkedin">
                                <div className="icon-container hover:text-gray-950">
                                    <FaLinkedin className="w-6 h-6 " />
                                </div>
                                <span className="icon-label">LinkedIn</span>
                            </Link>
                        </div>
                    </div>


                </div>

                <style>{`
        .social-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }
        
        .icon-container {
          display: inline-flex;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .social-icon:hover .icon-container {
          transform: translateY(-10px) scale(1.1);
        }
        
        .icon-label {
          margin-top: 8px;
          color: #fff;
          font-size: 14px;
        }

        .social-icon.discord:hover .icon-container {
          background: #7289da;
          box-shadow: 0 0 20px rgba(114, 137, 218, 0.6);
        }
        
        .social-icon.github:hover .icon-container {
          background: #333;
          box-shadow: 0 0 20px rgba(51, 51, 51, 0.6);
        }
        
        .social-icon.linkedin:hover .icon-container {
          background: #0077b5;
          box-shadow: 0 0 20px rgba(0, 119, 181, 0.6);
        }
        

      `}</style>

                <p className="text-sm text-gray-600 font-medium">
                    &copy; 2026 Free to use Invoice Generator &bull; All rights reserved.
                </p>
            </footer>
        </div>
    )
}
