import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import WhoIAmPage from '../organisms/WhoIAmPage'
import MyPhilosophyPage from '../organisms/MyPhilosophyPage'

const ResumePage = () => {

    const parallaxRef = useRef(null!)
    const { scrollYProgress } = useScroll({
      target: parallaxRef,
      offset: ["start start", "end start"],
    })
    const backgroundY = useTransform(scrollYProgress,[0,1],["0%","200%"])
    const textY = useTransform(scrollYProgress,[0,1],["0%","200%"])

    const glassStyle = {
      background: 'rgba(255, 255, 255, 0.104)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 255, 255, 0.03)',
      msOverflowStyle: 'none', 
      scrollbarWidth: 'none', 
    }
   
  return (
    <div ref={parallaxRef} className="w-full h-screen overflow-hidden relative grid place-items-end">
            <motion.div className='font-bold w-[50%] h-full box-content text-white relative z-10 mr-4' 
            style={{y: -textY}}>
                <div className='max-h-screen overflow-auto'>
                  <WhoIAmPage style={ glassStyle as React.CSSProperties} />
                  <MyPhilosophyPage style={ glassStyle as React.CSSProperties} />
                </div>
            </motion.div>
            <motion.div className='absolute inset-0 z-20 w-[50%] max-h-full'
            style={{
                y: backgroundY
            }}
            >
            <div className="flex flex-col items-center justify-center mx-4 overflow-hidden">
              <h1 className='font-bold text-white text-5xl md:text-6xl mt-3 relative z-10'>
                Hey, I am Jherson Mejia
              </h1>
              <div className='flex items-center'> 
                <a href="https://www.linkedin.com/in/jhersondmejiag/"  target="_blank" className="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="LinkedIn">
                <svg className="w-6 h-6 hover:fill-blue" viewBox="0 0 24 24" fill="gray"
                        xmlns="http://www.w3.org/2000/svg">
                <g>
                <path d="M10.033 15.3h-1.6v-5.199h1.6v5.199zm-.8-5.866c-.577 0-.866-.267-.866-.8 0-.223.082-.412.25-.567.166-.155.371-.233.616-.233.577 0 .866.268.866.801s-.288.799-.866.799zm6.734 5.866h-1.633v-2.9c0-.755-.268-1.133-.801-1.133-.422 0-.699.211-.834.633-.043.067-.066.201-.066.4v3h-1.633v-3.533c0-.8-.012-1.355-.033-1.666h1.4l.1.699c.367-.556.9-.833 1.633-.833.557 0 1.006.194 1.35.583.346.389.518.95.518 1.684v3.066zM12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7z"/>
                </g>
                </svg>
                </a>
                
                <a href="https://www.instagram.com/stefanomejiag/"  target="_blank" className="mx-2 flex text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 items-center justify-center" aria-label="Facebook">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-[22px] mt-1 bg-transparent hover:fill-blue"  data-name="Instagram w/circle" viewBox="0 0 24 24" fill="gray" id="instagram"><path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.03 2.02.03s1.493-.006 2.02-.03a2.766 2.766 0 0 0 .929-.172 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.03-.685.03-2.02s-.006-1.493-.03-2.02a2.766 2.766 0 0 0-.172-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6z"></path><circle cx="9.6" cy="9.6" r="1.667"></circle><path d="M9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.662a3.67 3.67 0 0 1-.233 1.213 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .233-1.213 2.556 2.556 0 0 1 1.462-1.462 3.67 3.67 0 0 1 1.213-.233c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.233 2.556 2.556 0 0 1 1.462 1.462 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"></path></svg>
                </a>

                <a href="https://github.com/jhemejia/" target="_blank" className="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                    <svg className="w-5 h-5 hover:fill-blue" viewBox="0 0 24 24" fill="gray"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                        </path>
                    </svg>
                </a>
              </div>
              <div>
                <img src="3f4.png" alt="" />
              </div>
            </div>
            </motion.div>
            <motion.div className='absolute inset-0 z-0 h-screen'
            style={{
                backgroundImage: `url(/stars.svg)`,
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                  y: backgroundY
            }}></motion.div>
            <motion.div className='absolute inset-5 z-0 h-screen'
            style={{
                backgroundImage: `url(/stars.svg)`,
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                  y: backgroundY
            }}></motion.div>
    </div>
  )
}

export default ResumePage
