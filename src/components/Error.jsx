import { useRouteError } from "react-router-dom"

const Error = () => {
   const err = useRouteError()

   return (
    <div className="mt-10 text-center ">
    <h2 className="text-2xl font-semibold text-white">Error</h2>
    <p className="text-gray-400 mt-2">{err.status}: {err.statusText}</p>
</div>
   )
}

export default Error 