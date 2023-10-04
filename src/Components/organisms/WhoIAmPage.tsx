import InfoPageTemplate from "../molecules/InfoPageTemplate"

const WhoWeArePage = (props:any) => {
  return (
    <div className="flex flex-col justify-center w-full h-full pb-6 mb-12" style={props.style}>
        <InfoPageTemplate title="Who I Am" 
        subtitle="Welcome to my personal website! I am a passionate developer who loves to create innovative solutions and bring ideas to life."
        buttonText="My Resume">
      
          <section className="py-6 mx-6 ">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-gray-500">I started my journey in the world of development with a deep curiosity for technology and its endless possibilities. As a developer, I am dedicated to crafting elegant and efficient code that meets the unique needs of each project.</p>
              <p className="text-gray-500 mt-4">I am committed to staying up-to-date with the latest technologies and industry trends, allowing me to offer cutting-edge solutions that enhance user experiences. Whether it's web development, mobile applications, or software solutions, I am always excited to take on new challenges and learn from them.</p>
            </div>
          </section>
          
          <section className="py-1 mx-6">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-4">My Mission</h2>
              <p className="text-gray-500">My mission is to create meaningful and impactful software that solves problems and makes a difference. By combining my technical skills with a user-centered approach, I aim to deliver software that not only functions flawlessly but also delights users.</p>
              <p className="text-gray-500 mt-4">I am dedicated to continuous learning and improvement, and I believe that collaboration and communication are key to successful projects. I am here to contribute to the digital world and contribute positively to the technology landscape.</p>
            </div>
          </section>
        </InfoPageTemplate>
    </div>
  )
}

export default WhoWeArePage