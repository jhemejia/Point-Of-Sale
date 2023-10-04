import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FAQCategory, faqLandingPage } from '../../Utilities/LandingPageHelpers'

const LandingPage = () => {

  const [faqCategory, setFaqCategory] = useState<FAQCategory>(faqLandingPage[0])

  return (
    <div className='flex flex-col justify-center w-full h-full'>
        {/* Main CTA */}
        <section className="bg-transparent w-full mx-auto">
          <div className="grid w-full px-6 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="w-full flex flex-col items-center place-self-center lg:col-span-7 pb-6 lg:pl-16">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center text-gray-800">Bridging Imagination and Functionality through Code</h1>
                  <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to my portfolio showcasing a fusion of innovation and functionality. As a dedicated developer, I specialize in transforming ideas into seamless, interactive digital experiences. Explore my projects that reflect a passion for clean code and user-centric design.</p>
      
                  <Link to="/my-work" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center hover:text-gray-900 border text-gray-800 border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:animate-pulse">
                  Experience the Possibilities
                  </Link> 
              </div>
              <div className=" lg:mt-0 lg:col-span-5 flex rounded-lg  justify-center items-center">
                <div className='flex w-2/3'>
                  <img src="3f4.jpg" alt="mockup" className="rounded-lg " />
                </div>
              </div>                
          </div>
        </section>
        {/* Ideas Section */}
        <section className='relative flex flex-row px-6 min-w-full py-3 lg:gap-4 xl:gap-0 lg:py-16 fex-wrap text-white bg-weird'>
        <div className='w-1/4 flex flex-col justify-start gap-2 items-center pt-2 mx-auto'>
            <img src="html.png" title="Free HTML 3D Icon by Toms Design" width={50}/>
            <img src="css.png" title="Free CSS 3D Icon by Toms Design" width={50}/>
            <img src="javascript.png" title="Free Javascript 3D Icon by Toms Design" width={50}/>
            <img src="tailwind.png" title="Free Tailwind 3D Icon by Toms Design" width={50}/>
            <img src="typescript.png" title="Free TypeScript 3D Icon by Toms Design" width={50}/>
            <img src="react.png" title="Free React 3D Icon by Toms Design" width={50}/>
            <img src="vue.png" title="Free Vue 3D Icon by Toms Design" width={50}/>
            <img src="wordpress.png" title="Free Wordpress 3D Icon by Toms Design" width={50}/>
          </div>
          <div className='text-5xl font-bold flex items-center justify-center pr-4'>
            <h2 className='text-center mx-auto my-6 lg:pr-14'>
              Turning ideas into real life <span className='bg-gradient-to-r from-green-400 to-indigo-800 text-transparent bg-clip-text'>solutions</span> is my mission.
            </h2> 
          </div>
          
        </section>
        <section>
          
        </section>
        <div>
        {/*  FAQ Section */}
        <div className="flex flex-col items-center w-full mx-auto pt-4 text-gray-800">
          <h2 className="font-bold text-5xl mt-6 tracking-tight">
            FAQ
          </h2>
          <p className="text-gray-600 text-xl mt-3">
            Frequenty asked questions
          </p>
        </div>
        <section className="flex flex-row  w-full px-6 py-3 mx-auto lg:gap-8 xl:gap-0 lg:py-16 fex-wrap  text-gray-800">
            <div className="mx-auto flex flex-col items-center justify-start pb-6 w-1/3">
                <h3 className="font-bold text-2xl">Table of Content</h3>
                <div className='flex flex-col mt-5'>
                  {faqLandingPage.map((category:any, index)=>{
                    return (
                      <span
                        key={index} 
                        className={["cursor-pointer mb-2 hover:text-gray-500",faqCategory === category? "text-indigo-800 underline": ""].join(" ")}
                        onClick={() => setFaqCategory(category)} 
                      >
                        {category.title}
                      </span>
                    )
                  })}
                </div>
            </div>
            <div className="mx-auto  flex flex-col flex-fill mt-14 pb-6 w-2/3">
                {faqCategory.questions.map((question:any, index)=>{
                  return (
                    <div className='flex mb-3 flex-col justify-start items-start ' key={index}>
                      <details className="group" open>
                        <summary className="flex justify-start items-center cursor-pointer list-none">
                          <span className='font-semibold'> {question.question}</span>
                          <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                           </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 ml-4 group-open:animate-fadeIn">
                          {question.answer}
                        </p>
                      </details>
                    </div>
                  )
                })}
            </div>
        </section>
      </div>
    </div>
  )
}

export default LandingPage
