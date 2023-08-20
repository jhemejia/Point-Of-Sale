import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FAQCategory, faqLandingPage } from '../../Utilities/LandingPageHelpers'

const LandingPage = () => {

  const [faqCategory, setFaqCategory] = useState<FAQCategory>(faqLandingPage[0])

  return (
    <div className='flex flex-col justify-center max-w-full h-full'>
        {/* Main CTA */}
        <section className="bg-white dark:bg-grey-900 mx-6">
          <div className="grid max-w-screen-xl px-6 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto w-full flex flex-col items-center place-self-center lg:col-span-7 pb-6">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">Bridging Imagination and Functionality through Code</h1>
                  <p className="max-w-2xl mb-6 font-light text-grey-700 lg:mb-8 md:text-lg lg:text-xl dark:text-grey-400">Welcome to my portfolio showcasing a fusion of innovation and functionality. As a dedicated developer, I specialize in transforming ideas into seamless, interactive digital experiences. Explore my projects that reflect a passion for clean code and user-centric design.</p>
      
                  <Link to="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-grey-900 border border-grey-300 rounded-lg hover:bg-grey-100 focus:ring-4 focus:ring-grey-100 dark:text-white dark:border-grey-700 dark:hover:bg-grey-700 dark:focus:ring-grey-800">
                  Experience the Possibilities
                  </Link> 
              </div>
              <div className=" lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
                  <img src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mockup" className="rounded-lg"/>
              </div>                
          </div>
        </section>
        <div className="flex flex-col items-center mx-auto">
          <h2 className="font-bold text-5xl mt-6 tracking-tight">
            FAQ
          </h2>
          <p className="text-grey-600 text-xl mt-3">
            Frequenty asked questions
          </p>
        </div>
        <section className="flex flex-row  w-screen px-6 py-3 mx-auto lg:gap-8 xl:gap-0 lg:py-16 fex-wrap ">
            <div className="mx-auto w-full flex flex-col items-center justify-start pb-6 w-1/3">
                <h3 className="font-bold text-2xl">Table of Content</h3>
                <div className='flex flex-col mt-5'>
                  {faqLandingPage.map((category:any, index)=>{
                    return (
                      <span
                        key={index} 
                        className={["underline cursor-pointer mb-2",faqCategory === category? "text-indigo-800": ""].join(" ")}
                        onClick={() => setFaqCategory(category)} 
                      >
                        {category.title}
                      </span>
                    )
                  })}
                </div>
            </div>
            <div className="mx-auto  flex flex-col flex-fill w-full mt-14 pb-6 w-2/3">
                {faqCategory.questions.map((question:any, index)=>{
                  return (
                    <div className='flex mb-3 flex-col justify-start items-start ' key={index}>
                      <details className="group" open>
                        <summary className="flex justify-start items-center cursor-pointer list-none">
                          <span className='font-semibold'> {question.question}</span>
                          <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
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
  )
}

export default LandingPage
