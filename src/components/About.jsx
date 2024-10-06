import React from "react";

const About = () => {
  return (
    <div className="about-container p-8">
      
      <section className="about-intro">
        <h2 className="text-3xl font-bold">About FoodFrenzy</h2>
        <p className="mt-4 text-lg">
          Welcome to <strong>FoodFrenzy</strong>, your go-to platform for discovering the best restaurants and food in your area. Whether you're craving something new or looking for your favorites, FoodFrenzy brings delicious options right to your fingertips.
        </p>
      </section>

    
      <section className="about-inspiration mt-8">
        <h3 className="text-2xl font-semibold">Inspiration</h3>
        <p className="mt-2 text-lg">
          The idea for FoodFrenzy stemmed from the rising demand for online food delivery services. As a developer passionate about creating seamless user experiences, I wanted to build an app that makes discovering and ordering food easy and fun.
        </p>
      </section>

      <section className="about-tech mt-8">
        <h3 className="text-2xl font-semibold">Technologies Used</h3>
        <ul className="list-disc ml-6 mt-2 text-lg">
          <li>React.js for building the user interface</li>
          <li>Tailwind CSS for responsive styling</li>
          <li>Node.js and Express.js for server-side logic (planned)</li>
          <li>MongoDB for database management (planned)</li>
        </ul>
      </section>

    
      <section className="about-goals mt-8">
        <h3 className="text-2xl font-semibold">Project Goals</h3>
        <p className="mt-2 text-lg">
          The goal of this project is to enhance my full stack development skills by working on real-world features such as restaurant filtering, search functionality, and responsive design. In the future, I aim to implement back-end technologies for user authentication, order management, and payment integration.
        </p>
      </section>

  
      <section className="about-future mt-8">
        <h3 className="text-2xl font-semibold">Future Plans</h3>
        <p className="mt-2 text-lg">
          Moving forward, FoodFrenzy will integrate features such as order history, seamless payment gateways, and real-time order tracking. I also plan to enhance the user experience by adding restaurant recommendations based on user preferences.
        </p>
      </section>

   
      <section className="about-developer mt-8">
        <h3 className="text-2xl font-semibold">About the Developer</h3>
        <p className="mt-2 text-lg">
          Hi, I'm <strong>Vinamra Sharma</strong>, a passionate web developer with a love for creating interactive and user-friendly applications. This project has been a learning journey in full stack development, and I'm excited to continue enhancing FoodFrenzy with new features.
        </p>
      </section>

  
      <section className="about-contact mt-8">
        <h3 className="text-2xl font-semibold">Contact Me</h3>
        <p className="mt-2 text-lg">
          Feel free to reach out if you have any feedback or would like to collaborate on future projects! You can connect with me on <a target="__blank"   href="https://github.com/Vinamra05?tab=repositories" className="text-blue-500 hover:underline">GitHub</a> or <a target="__blank" href="https://www.linkedin.com/in/vinamra-sharma-84981a289/" className="text-blue-500 hover:underline">LinkedIn</a>.
        </p>
      </section>
    </div>
  );
};

export default About;
