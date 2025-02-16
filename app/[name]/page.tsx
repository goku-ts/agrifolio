"use client";

import { Key, useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HomeProfile from "../pages/HomeProfile";
import AboutUsPage from "../pages/AboutUs";
import { DATA } from "../data";
import GalleryPage from "../pages/GalleryPage";
import ContactsPage from "../pages/ContactsPage";
import ProductsPage from "../pages/ProductsPage";



const Card = ({ params }: { params: { name: string } }) => {

    const [activeTab, setActiveTab] = useState("home");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [profile, setProfile] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [foundProfile, setFoundProfile] = useState<boolean>(false);



    useEffect(() => {
        const getData = async () => {
            // try {

            //     const response = await fetch(`https://agrifolio-backend.onrender.com/profile/${params.name}`, {
            //         method: "GET",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //     });


            //     if (response.status === 404) {
            //         setFoundProfile(false)
            //         return
            //     }

            //     if (!response.ok) {
            //         setFoundProfile(false)
            //         return
            //     }

            //     const result = await response.json();
            //     //console.log(result.profile)
            //     setProfile(result.profile);
            //     setFoundProfile(true);
            // } catch (err) {
            //     setError(err instanceof Error ? err.message : 'An unknown error occurred');

            // } finally {
            //     setLoading(false);
            // }

            setProfile(DATA[0].profile)
            setLoading(false)
            setFoundProfile(true)
        };

        getData();
    }, []); // re-fetch when the id in the params changes

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>; //PUT NETWORK ERRROR PAGE HERE


    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);


    return (
        foundProfile ?
            (
                <div className=" bg-gray-50 py-4 lg:w-5/5 lg:px-10">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2 px-4">
                        {/* Placeholder Logo */}
                        <div className="flex items-center space-x-4 ">
                            <div className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0">
                                <Image
                                    src={profile.businessProfile?.logo}
                                    alt="Logo"
                                    className="w-full h-full object-cover rounded-full"
                                    height={100}
                                    width={100}
                                />
                            </div>
                            <h1 className="font-sans text-lg font-semibold  sm:block">
                                {profile?.businessProfile?.name}
                            </h1>
                        </div>

                        {/* Desktop Tabs */}

                        <nav className="hidden md:flex space-x-4 ml-auto">
                            <button
                                onClick={() => setActiveTab("home")}
                                className={`px-4 py-2  font-medium border-b-2 ${activeTab === "home"
                                    ? "border-green-600 text-green-600"
                                    : "border-transparent text-gray-500 hover:text-green-800 "
                                    }`}
                            >
                                <p className="font-bold">Home</p>

                            </button>
                            <button
                                onClick={() => setActiveTab("about")}
                                className={`px-4 py-2  font-medium border-b-2 ${activeTab === "about"
                                    ? "border-green-600 text-green-600"
                                    : "border-transparent text-gray-500 hover:text-green-800 "
                                    }`}
                            >
                                <p className="font-bold">About Us</p>

                            </button>
                            <button
                                onClick={() => setActiveTab("gallery")}
                                className={`px-4 py-2  font-medium border-b-2 ${activeTab === "gallery"
                                    ? "border-green-600 text-green-600"
                                    : "border-transparent text-gray-500 hover:text-green-800 "
                                    }`}
                            >
                                <p className="font-bold">Gallery</p>

                            </button>
                            <button
                                onClick={() => setActiveTab("products")}
                                className={`px-4 py-2  font-medium border-b-2 ${activeTab === "products"
                                    ? "border-green-600 text-green-600"
                                    : "border-transparent text-gray-500 hover:text-green-800 "
                                    }`}
                            >
                                <p className="font-bold">Products</p>

                            </button>

                            <button
                                onClick={() => setActiveTab("contact")}
                                className={`px-4 py-2  font-medium border-b-2 ${activeTab === "contact"
                                    ? "border-green-600 text-green-600"
                                    : "border-transparent text-gray-500 hover:text-green-800 "
                                    }`}
                            >
                                <p className="font-bold">Contact</p>

                            </button>
                        </nav>

                        {/* Mobile Dropdown Menu */}
                        <div className="relative md:hidden">
                            <button onClick={toggleDropdown} className="focus:outline-none">
                                {/* Hamburger Icon */}
                                {!dropdownOpen ? (
                                    <div className="space-y-1">
                                        <span className="block w-6 h-0.5 bg-gray-600"></span>
                                        <span className="block w-6 h-0.5 bg-gray-600"></span>
                                        <span className="block w-6 h-0.5 bg-gray-600"></span>
                                    </div>
                                ) : (
                                    // Close Icon
                                    <div className="relative w-6 h-6 flex items-center justify-center">
                                        <span className="absolute w-6 h-0.5 bg-gray-600 transform rotate-45"></span>
                                        <span className="absolute w-6 h-0.5 bg-gray-600 transform -rotate-45"></span>
                                    </div>
                                )}
                            </button>

                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 z-10">
                                    <button
                                        onClick={() => {
                                            setActiveTab("home");
                                            toggleDropdown();
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeTab === "home" ? "text-blue-500" : "text-gray-700"
                                            } hover:bg-gray-100`}
                                    >
                                        Home
                                    </button>
                                    <button
                                        onClick={() => {
                                            setActiveTab("about");
                                            toggleDropdown();
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeTab === "about" ? "text-blue-500" : "text-gray-700"
                                            } hover:bg-gray-100`}
                                    >
                                        About Us
                                    </button>
                                    <button
                                        onClick={() => {
                                            setActiveTab("gallery");
                                            toggleDropdown();
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeTab === "gallery" ? "text-blue-500" : "text-gray-700"
                                            } hover:bg-gray-100`}
                                    >
                                        Gallery
                                    </button>
                                    <button
                                        onClick={() => {
                                            setActiveTab("products");
                                            toggleDropdown();
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeTab === "products" ? "text-blue-500" : "text-gray-700"
                                            } hover:bg-gray-100`}
                                    >
                                        Products
                                    </button>
                                    <button
                                        onClick={() => {
                                            setActiveTab("contact");
                                            toggleDropdown();
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeTab === "contact" ? "text-blue-500" : "text-gray-700"
                                            } hover:bg-gray-100`}
                                    >
                                        Contact
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 h-full">
                        {activeTab === "home" && (
                            <HomeProfile
                                name={profile?.businessProfile?.heroText}
                                description={profile?.businessProfile?.heroDescription}
                                image={profile?.businessProfile?.heroImage}
                                values={profile?.businessProfile?.values}
                            />
                        )}

                        {activeTab === "about" && (
                            <AboutUsPage
                                aboutData={profile?.businessProfile?.aboutUs}
                            />
                        )}
                        {activeTab === "gallery" && (
                            <GalleryPage
                                data={profile?.gallery[0].data}
                            />
                        )}

                        {activeTab === "products" && (
                            <ProductsPage
                                button={true}
                                productData={profile?.businessProfile?.products}
                            />
                        )}

                        {activeTab === "contact" && (
                            <ContactsPage
                                contactData={profile?.contactInformation}
                            />
                        )}
                    </div>
                    <Footer />
                </div>
            ) : (
                <>
                    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r">
                        <div className="text-center space-y-6">
                            <h1 className="text-4xl font-extrabold md:text-8xl">404</h1>
                            <p className="text-xl md:text-3xl">Oops! Page not found.</p>
                            <p className="text-md md:text-xl">
                                The page you're looking for might have been moved or deleted.
                            </p>
                            <a
                                href="/"
                                className="mt-4 inline-block px-8 py-3 text-lg font-semibold bg-white rounded-md shadow-lg hover:bg-indigo-100 transition duration-300"
                            >
                                Go back to Home
                            </a>
                        </div>
                    </div>
                </>)
    );
};

export default Card;
