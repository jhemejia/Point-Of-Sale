interface AsyncButtonProps{
    isLoading:boolean,
    text: string
}
const AsyncButton = (props: AsyncButtonProps) => {

  return (
    <div className="">
      <button type="submit" 
      className="w-full relative flex justify-center bg-indigo-500 hover:bg-indigo-300 focus:bg-indigo-200 text-white font-semibold rounded-lg 
                        px-4 py-3 mt-6"
        >{props.text}
        {props.isLoading?
        (<div 
        className="ml-2 w-6 h-6 border-4 absolute right-6 border-white border-double border-current border-t-transparent rounded-full animate-spin"></div>): ""}
        </button>
    </div>
  )
}

export default AsyncButton
