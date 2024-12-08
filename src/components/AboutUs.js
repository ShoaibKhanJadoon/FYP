import Script from 'next/script';

const AboutUs = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
                        About Us
                    </h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
                        Welcome to Ai based ecommerce, where we leverage artificial intelligence to enhance your online shopping experience. Our platform simplifies product discovery through personalized recommendations and smart search features, making shopping convenient and enjoyable for every customer.</p>
                </div>
                <div className="w-full lg:w-8/12">
                    <img
                        className="w-full h-full"
                        src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                        alt="A group of People"
                    />
                </div>
            </div>
            <div className="flex items-center flex-col justify-between gap-8 pt-8 ">
                <div className="w-full  flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 text-center">
                        Our Story
                    </h1>
                    <p className="font-normal text-center text-base leading-6 text-gray-600 dark:text-white">
                        Our journey began at COMSATS University Abbottabad, where three passionate students—Shoaib Khan Jadoon, Haris Afzal, and Azhar Elhai—came together with a vision to transform e-commerce through AI. After extensive collaboration, we launched Ai based ecommerce, designed to cater to individual preferences and revolutionize online shopping. We’re excited to have you join us on this journey!
                    </p>
                </div>
                <div className="w-full  lg:pt-8">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  shadow-lg rounded-md">
                        <div className=" pb-6 flex justify-center  items-center ">
                            {/* LinkedIn profile badge script */}
                            <Script
                                src="https://platform.linkedin.com/badges/js/profile.js"
                                async
                                defer
                                strategy="afterInteractive"
                            />
                            <div
                                className="badge-base LI-profile-badge ml-14  flex items-center justify-center"
                                data-locale="en_US"
                                data-size="medium"
                                data-theme="light"
                                data-type="VERTICAL"
                                data-vanity="shoaib-khan-jadoon"
                                data-version="v1"
                            >
                                <a
                                    className="badge-base__link LI-simple-link"
                                    href="https://pk.linkedin.com/in/shoaib-khan-jadoon?trk=profile-badge"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >

                                </a>
                            </div>

                        </div>

                        <div className=" pb-6 flex justify-center items-center">
                        <div
                                className="badge-base LI-profile-badge ml-14  flex items-center justify-center"
                                data-locale="en_US"
                                data-size="medium"
                                data-theme="light"
                                data-type="VERTICAL"
                                data-vanity="shoaib-khan-jadoon"
                                data-version="v1"
                            >
                                <a
                                    className="badge-base__link LI-simple-link"
                                    href="https://pk.linkedin.com/in/shoaib-khan-jadoon?trk=profile-badge"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >

                                </a>
                            </div>


                        </div>
                        <div className="sm:col-span-2 lg:col-span-1 pb-6  flex justify-center  items-center">
                            <div
                                className="badge-base LI-profile-badge ml-14 flex items-center justify-center"
                                data-locale="en_US"
                                data-size="medium"
                                data-theme="light"
                                data-type="VERTICAL"
                                data-vanity="muhammad-haris-afzal-08854a252"
                                data-version="v1"

                            >
                                <a
                                    className="badge-base__link LI-simple-link"
                                    href="https://pk.linkedin.com/in/muhammad-haris-afzal-08854a252?trk=profile-badge"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >

                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs