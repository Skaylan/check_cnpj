export const SpinLoader = () => {
    return(
        <div className="w-[100%] h-[100px] flex items-center justify-center gap-1">
            <div className="animate-spin border-[5px] border-indigo-500 rounded-[50%] border-t-[5px] border-t-[white] w-[30px] h-[30px] " ></div>
            <span className="text-white text-xl">Buscando...</span>
        </div>
    )
}