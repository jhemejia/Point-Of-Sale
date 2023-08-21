import InfoPageTemplate from "../molecules/InfoPageTemplate"

const OurPhilosophyPage = () => {
  return (
    <div className="flex flex-col justify-center max-w-full h-full">
        <InfoPageTemplate title="My Philosophy" subtitle="">
          <section className="pt-6 pb-1 mx-6 ">
            <div className="container mx-auto px-4">
              <p className="text-gray-700">As your dedicated developer, I am dedicated to crafting exceptional digital solutions and services for our clients. My philosophy is built upon three fundamental principles:</p>
            </div>
          </section>
          <section className="py-1 mx-6">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Quality Code</h2>
              <p className="text-gray-700">I firmly believe in delivering code of the highest quality to our clients. Each line of code is meticulously written, reviewed, and optimized. Our dedication to quality ensures that our clients receive reliable and maintainable solutions that surpass their expectations.</p>
            </div>
          </section>
          <section className="py-1 mx-6">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Innovation and Techonology</h2>
              <p className="text-gray-700">As developer, I stay on the forefront of technological advancements and industry trends. I consistently update my skillset to offer my clients the most modern and innovative solutions. My commitment to innovation ensures that my clients have access to state-of-the-art digital products and services.</p>
            </div>
          </section>
          <section className="py-1 mx-6">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Client Satisfaction</h2>
              <p className="text-gray-700">Clients are central to my mission. I prioritize their satisfaction and aim to create an outstanding development experience for each project. I am always readily available to address any inquiries or concerns, ensuring that my clients feel supported and valued throughout the development process.</p>
            </div>
          </section>
        </InfoPageTemplate>
    </div>
  )
}

export default OurPhilosophyPage