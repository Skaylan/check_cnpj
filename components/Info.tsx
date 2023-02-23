export const Info = ({title, value}: any) => {
    return(
        <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <span>{value}</span>
        </div>
    )
}