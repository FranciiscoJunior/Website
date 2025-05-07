import { Carousel } from 'flowbite-react';
import React from 'react';

const Home = () => {
    return (
        <div className='bg-neutralSilver'>
            <div className='px-4 lg:px-14 max-w-2x1 mx-auto min-h-screen h-screen'>
                <Carousel className="w-full mx-auto">
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-center gap-12">
                        Slide 1
                    </div>

                    <div className="flex h-full items-center justify-center ">
                        Slide 2
                    </div>

                    <div className="flex h-full items-center justify-center ">
                        Slide 3
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;