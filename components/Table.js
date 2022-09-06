export default function Table({items}) {

    return (
        <>
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-200">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Article Title
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Article Link
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Article Length
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map( (dat) => {
                            return(
                                <tr className="bg-white border-b " key={dat[1]}>
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-slate-50">
                                        {dat[1]}
                                    </th>
                                    <td className="py-4 px-6 bg-slate-50">
                                        {/* {"http://en.wikipedia.org/?curid="+dat[0]} */}
                                        <a href={"http://en.wikipedia.org/?curid="+dat[0]}
                                        target="_blank" rel="noopener noreferrer"
                                        
                                        >
                                        <div className="text-blue-600">
                                            {"en.wikipedia.org/?curid="+dat[0]}
                                        </div>
                                        </a>
                                    </td>
                                    <td className="py-4 px-6 bg-slate-50">
                                        {dat[2]}
                                    </td>
                                    {/* <td className="py-4 px-6">
                                        Laptop
                                    </td>
                                    <td className="py-4 px-6">
                                        $2999
                                    </td> */}
                                </tr>
                            )
                            }
                        
                        )}

                        {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="py-4 px-6">
                                Sliver
                            </td>
                            <td className="py-4 px-6">
                                Laptop
                            </td>
                            <td className="py-4 px-6">
                                $2999
                            </td>
                        </tr> */}
                        {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="py-4 px-6">
                                Sliver
                            </td>
                            <td className="py-4 px-6">
                                Laptop
                            </td>
                            <td className="py-4 px-6">
                                $2999
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="py-4 px-6">
                                White
                            </td>
                            <td className="py-4 px-6">
                                Laptop PC
                            </td>
                            <td className="py-4 px-6">
                                $1999
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="py-4 px-6">
                                Black
                            </td>
                            <td className="py-4 px-6">
                                Accessories
                            </td>
                            <td className="py-4 px-6">
                                $99
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </>
    )

}
