const Timeline = () => {
    return (
        <section className="">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-6">
                        <div className="text-center sm:text-left mb-14 before:block before:w-32 before:h-6 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                            <h3 className="text-3xl font-bold  text-[#3a395e] text-[45px]">my past experience</h3>

                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-6">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                            <div className="flex flex-col card_timline sm:relative sm:before:absolute sm:before:top-2 sm:before:w-6 sm:before:h-6 sm:before:rounded-full sm:before:left-[-45px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-[30px] font-bold text-[#3a395e]">2018 - Ongoing </h3>
                                <p className="mt-3 font-semibold">Co-founder & CEO - <span className="text-[#4770ff]">lemlist </span></p>
                            </div>
                            <div className="flex flex-col card_timline sm:relative sm:before:absolute sm:before:top-2 sm:before:w-6 sm:before:h-6 sm:before:rounded-full sm:before:left-[-45px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-[30px] font-bold text-[#3a395e]">2019 - 2020 </h3>
                                <p className="mt-3 font-semibold">Co-founder & CEO - <span className="text-[#4770ff]">lempod (aquired)</span></p>
                            </div>
                            <div className="flex flex-col card_timline sm:relative sm:before:absolute sm:before:top-2 sm:before:w-6 sm:before:h-6 sm:before:rounded-full sm:before:left-[-45px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-[30px] font-bold text-[#3a395e]">2016 - 2018</h3>
                                <p className="mt-3 font-semibold">MSc Marketing at<span className="text-[#4770ff]"> HEC</span></p>
                            </div>
                            <div className="flex flex-col card_timline sm:relative sm:before:absolute sm:before:top-2 sm:before:w-6 sm:before:h-6 sm:before:rounded-full sm:before:left-[-45px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-[30px] font-bold text-[#3a395e]">2015 - 2016</h3>
                                <p className="mt-3 font-semibold">Staying at locals  for free around the world, using social media to build meaningful relationships</p>
                            </div>
                        </div>
                        <div className="col-span-12 px-4 sm:col-span-4">
                            <div className="h-full border-l-2 border-gray-300 dark:border-gray-600"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;