import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import RakshithImage from '../assets/images/rakshith.jpg';
import SathvikImage from '../assets/images/sathvik.jpg';
import MukeshImage from '../assets/images/mukesh.jpg';
import VarshithImage from '../assets/images/varshith.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-page bg-customBackground p-8 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-blueColor mb-6">About Us</h1>
            <p className="text-center text-lg text-textColor mb-10">
                We’re four computer science students and cricket enthusiasts who came together to solve a problem we kept facing: 
                finding available cricket grounds in Delhi. Together, we created "Stumps of Delhi" – a platform 
                that helps cricket lovers like us easily locate and book grounds in advance. Here’s a little more about each of us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="member bg-white p-6 shadow-lg rounded-lg">
                <img src={RakshithImage} alt="Rakshith" className="w-32 h-32 rounded-full mb-4" />
                    <h2 className="text-2xl font-semibold text-blueColor mb-2">Rakshith</h2>
                    <p className="text-textColor">
                        Rakshith is the one who first thought of this project. He’s a dedicated cricket player who’s always ready 
                        to set up weekend matches. With his love for the game and technical skills, he helped shape "Stumps of Delhi" 
                        into a solution for players across the city.
                    </p>
                    <div className="flex space-x-3 mt-4">
                      <a href="https://www.linkedin.com/in/reddy3/" target="_blank" rel="noopener noreferrer" className="text-blueColor hover:text-blue-700">
                        <FaLinkedin size={24} />
                      </a>
                      <a href="https://github.com/rakshith0304" target="_blank" rel="noopener noreferrer" className="text-blackColor hover:text-black-700">
                       <FaGithub size={24} />
                      </a>
                    </div>  
                </div>
                
                <div className="member bg-white p-6 shadow-lg rounded-lg">
                <img src={SathvikImage} alt="Sathvik" className="w-32 h-32 rounded-full mb-4" />
                    <h2 className="text-2xl font-semibold text-blueColor mb-2">Sathvik</h2>
                    <p className="text-textColor">
                        Sathvik is the creative mind on the team. He focuses on making "Stumps of Delhi" easy and enjoyable to use, 
                        ensuring that cricket lovers can find what they need with ease. His passion for both technology and cricket 
                        drives him to create a seamless experience for all users.
                    </p>
                    <div className="flex space-x-3 mt-4">
                      <a href="https://www.linkedin.com/in/knsathvik27/" target="_blank" rel="noopener noreferrer" className="text-blueColor hover:text-blue-700">
                        <FaLinkedin size={24} />
                      </a>
                      <a href="https://github.com/KNSathvik27" target="_blank" rel="noopener noreferrer" className="text-blackColor hover:text-black-700">
                       <FaGithub size={24} />
                      </a>
                    </div>
                </div>
                
                <div className="member bg-white p-6 shadow-lg rounded-lg">
                <img src={MukeshImage} alt="Mukesh" className="w-32 h-32 rounded-full mb-4" />
                    <h2 className="text-2xl font-semibold text-blueColor mb-2">Mukesh</h2>
                    <p className="text-textColor">
                        Mukesh is our tech expert. He’s the one who makes sure everything runs smoothly on the site, from the booking 
                        process to ground location searches. His attention to detail and dedication to the project keep "Stumps of Delhi" 
                        reliable and user-friendly.
                    </p>
                    <div className="flex space-x-3 mt-4">
                      <a href="https://www.linkedin.com/in/mtulluru/" target="_blank" rel="noopener noreferrer" className="text-blueColor hover:text-blue-700">
                        <FaLinkedin size={24} />
                      </a>
                      <a href="https://github.com/TulluruMukesh/TulluruMukesh" target="_blank" rel="noopener noreferrer" className="text-blackColor hover:text-black-700">
                       <FaGithub size={24} />
                      </a>
                    </div>
                </div>
                
                <div className="member bg-white p-6 shadow-lg rounded-lg">
                <img src={VarshithImage} alt="Varshith" className="w-32 h-32 rounded-full mb-4" />
                    <h2 className="text-2xl font-semibold text-blueColor mb-2">Varshith</h2>
                    <p className="text-textColor">
                        Varshith brings energy and fresh ideas to the team. He’s always thinking of new ways to make "Stumps of Delhi" 
                        better for users and keeps us motivated to improve and expand the platform. His enthusiasm for cricket and tech 
                        is what keeps the team moving forward.
                    </p>
                    <div className="flex space-x-3 mt-4">
                      <a href="https://www.linkedin.com/in/varshith-undefined-737b5531b/" target="_blank" rel="noopener noreferrer" className="text-blueColor hover:text-blue-700">
                        <FaLinkedin size={24} />
                      </a>
                      <a href="https://github.com/Varshith2468" target="_blank" rel="noopener noreferrer" className="text-blackColor hover:text-black-700">
                       <FaGithub size={24} />
                      </a>
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default AboutUs