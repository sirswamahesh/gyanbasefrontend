import React from 'react'

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 px-4">

            <h1 className="text-5xl font-bold text-primary">Find the Perfect Course for You</h1>


            <p className="text-lg text-base-content/80 mt-4 max-w-xl">
                Explore expert-led courses and take your skills to the next level. Start learning today!
            </p>


            <div className="mt-6 w-full max-w-md relative">
                <input
                    type="text"
                    placeholder="Search for courses..."
                    className="w-full px-4 py-3 pr-20 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <button className="absolute inset-y-1 right-1 px-5 py-2 bg-primary text-white rounded-full hover:bg-primary-focus transition">
                    Search
                </button>
            </div>

            <button className="mt-6 px-6 py-3 bg-secondary text-white rounded-lg shadow-md hover:bg-secondary-focus">
                Explore Courses
            </button>
        </section>

    )
}

export default HeroSection