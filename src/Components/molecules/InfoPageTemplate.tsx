const InfoPageTemplate = (props:any) => {
  return (
    <div className="flex flex-col relative w-full h-full">
        <div className="flex flex-col relative w-full h-full relative">
            <img src="https://images.pexels.com/photos/4350265/pexels-photo-4350265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
            <h1 className="text-4xl font-semibold w-full max-w-full-md mx-auto text-gray-100 py-10 leading-tight relative text-white z-10 text-center">{props.title}</h1>
            <div className="mb-6 md:mb-4 mx-auto text-white relative text-center">
                {props.subtitle}
            </div>
        </div>
        <div className="mb-4 md:mb-2 w-full relative">
            { props.children }
        </div>
    </div>
  )
}

export default InfoPageTemplate