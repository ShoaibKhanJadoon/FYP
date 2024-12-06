const AboutUs = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
                        About Us
                    </h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
                    Welcome to Ai based ecommerce plateform, where we leverage the power of artificial intelligence to enhance your online shopping experience. Our platform is designed to simplify product discovery through personalized recommendations and smart search features, making it easier than ever to find exactly what you need. Our mission is to create a seamless and enjoyable shopping journey for every customer.</p>
                </div>
                <div className="w-full lg:w-8/12">
                    <img
                        className="w-full h-full"
                        src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                        alt="A group of People"
                    />
                </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
                        Our Story
                    </h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
                    Our journey began at COMSATS University Abbottabad, where three passionate students—Shoaib Khan Jadoon, Haris Afzal, and Azhar Elhai—came together with a shared vision.
 We saw the potential of AI to transform e-commerce and set out to build a user-friendly platform that caters to individual preferences. After extensive collaboration and development, Ai based Ecommerce plateform was born. We are dedicated to revolutionizing the online shopping experience and are excited to have you join us on this journey!

Feel free to adjust any part of it to better align with your project's focus!
                    </p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img
                                className="md:block hidden"
                                src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                                alt="Alexa featured Image"
                            />
                            <img
                                className="md:hidden block"
                                src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                                alt="Alexa featured Image"
                            />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                                Alexa
                            </p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img
                                className="md:block hidden"
                                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                                alt="Olivia featured Image"
                            />
                            <img
                                className="md:hidden block"
                                src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                                alt="Olivia featured Image"
                            />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                                Olivia
                            </p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img
                                className="md:block hidden"
                                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                                alt="Liam featued Image"
                            />
                            <img
                                className="md:hidden block"
                                src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                                alt="Liam featued Image"
                            />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                                Liam
                            </p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img
                                className="md:block hidden"
                                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                                alt="Elijah featured image"
                            />
                            <img
                                className="md:hidden block"
                                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                                alt="Elijah featured image"
                            />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                                Elijah
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}
export default AboutUs