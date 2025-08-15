    import React from 'react';
    import { Footer } from "flowbite-react";
    import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
    import logo from '../assets/Logo.png'

    const MyFooter = () => {
        return (
            
        <Footer container>
        <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className='space-y-4 mb-8'>
            <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt=""
            className='w-10 inline-block items-center'></img><b className='text-[#263238]'>NEXTCENCER</b></a>
            <div>
                <p className='mb-1'>Copyright 2020 Nexcent ltd.</p>
                <p>All rights reserved</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                <FooterTitle title="about" />
                <FooterLinkGroup col>
                    <FooterLink href="#">Flowbite</FooterLink>
                    <FooterLink href="#">Tailwind CSS</FooterLink>
                </FooterLinkGroup>
                </div>

                <div>
                <FooterTitle title="Follow us" />
                <FooterLinkGroup col>
                    <FooterLink href="#">Github</FooterLink>
                    <FooterLink href="#">Discord</FooterLink>
                </FooterLinkGroup>
                </div>

                <div>
                <FooterTitle title="Legal" />
                <FooterLinkGroup col>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                </FooterLinkGroup>
                </div>

            </div>
            
            </div>
            <FooterDivider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="Flowbite™" year={2022} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <FooterIcon href="#" icon={BsFacebook} />
                    <FooterIcon href="#" icon={BsInstagram} />
                    <FooterIcon href="#" icon={BsTwitter} />
                    <FooterIcon href="#" icon={BsGithub} />
                </div>
            </div>
        </div>
        </Footer>
    );
};

export default MyFooter;