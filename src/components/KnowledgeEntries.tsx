import { FiEdit3, FiTrash2 } from "react-icons/fi"
import type { KnowledgeEntry } from "../types"
import { useState } from "react"

interface KnowledgeEntriesProps {
    data: KnowledgeEntry[],
    handleDelete: (id: string) => void,
    handleEdit: (id: string) => void,
}

const KnowledgeEntries = ({ data, handleDelete, handleEdit }: KnowledgeEntriesProps) => {
    const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set())

    const toggleExpand = (id: number) => {
        setExpandedIds(prev => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }


    return (
        <div className="w-full overflow-x-auto ">
            <table className="w-full border-collapse bg-white dark:bg-gray-900 rounded-md shadow-lg hidden md:block overflow-auto">
                <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider w-[5%]">
                            ID
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider w-[25%]">
                            Title
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider w-[35%]">
                            Description
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider w-[15%]">
                            Date
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-400 uppercase tracking-wider w-[15%]">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry) => {
                        return (
                            <tr key={entry.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <td className="py-4 px-6 text-gray-500 font-medium">
                                    {entry.id}
                                </td>
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-3">
                                        <span className=" text-gray-900 dark:text-gray-200 text-sm">{entry.title}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-gray-900 dark:text-gray-200 text-sm">
                                    {expandedIds.has(parseInt(entry.id)) || entry.content.length <= 80
                                        ? entry.content
                                        : `${entry.content.slice(0, 80)}...`}
                                    {entry.content.length > 80 && (
                                        <button onClick={() => toggleExpand(parseInt(entry.id))} className="ml-2 text-blue-600 hover:text-blue-800 text-sm">
                                            {expandedIds.has(parseInt(entry.id)) ? 'Read less' : 'Read more'}
                                        </button>
                                    )}
                                </td>
                                <td className="py-4 px-6 text-gray-600 dark:text-gray-200 text-sm">
                                    {entry.createdAt ? new Date(entry.createdAt).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    }) : 'N/A'}
                                </td>
                                <td className="py-4 px-6 text-gray-600 dark:text-gray-200">
                                    <div className="flex items-center gap-4">
                                        <div className="">
                                            <FiEdit3 onClick={() => handleEdit(entry.id)} className="text-lg cursor-pointer text-blue-600/70 hover:text-blue-800 transition" />
                                        </div>
                                        <div className="">
                                            <FiTrash2 onClick={() => { handleDelete(entry.id) }} className="text-lg cursor-pointer text-red-600/70 hover:text-red-800 transition" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>


            <div className="list block md:hidden">
                {
                    data.map(entry => {
                        return (
                            <div className="list-item shadow-sm px-5 py-3 rounded-md bg-white dark:bg-gray-800 mb-2 border border-gray-100 dark:border-gray-900" key={entry.id}>
                                <h5 className="text-base font-medium mb-2">{entry.title}</h5>
                                <p className="text-gray-600 dark:text-gray-200 text-sm mb-3">
                                    {expandedIds.has(parseInt(entry.id)) || entry.content.length <= 80
                                        ? entry.content
                                        : `${entry.content.slice(0, 80)}...`}
                                    {entry.content.length > 80 && (
                                        <button onClick={() => toggleExpand(parseInt(entry.id))} className="ml-2 text-blue-600 hover:text-blue-800 text-sm">
                                            {expandedIds.has(parseInt(entry.id)) ? 'Read less' : 'Read more'}
                                        </button>
                                    )}
                                </p>
                                <div className="action flex items-center gap-4" >
                                    <div className="">
                                        <FiEdit3 className="text-lg cursor-pointer text-blue-600/70 hover:text-blue-800 transition" />
                                    </div>
                                    <div className="">
                                        <FiTrash2 className="text-lg cursor-pointer text-red-600/70 hover:text-red-800 transition" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex flex-col md:flex-row gap-2 items-center justify-between my-4 p-3 md:p-4 bg-white dark:bg-gray-900 rounded-md shadow-sm md:shadow-lg">
                <div className="hidden md:block text-sm text-gray-600 dark:text-gray-100">
                    Showing <span className="font-medium text-gray-900 dark:text-gray-50">1-10</span> of <span className="font-medium text-gray-900 dark:text-gray-50">97</span> results
                </div>
                <div className="flex items-center gap-2">
                    <button className="px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm font-medium text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800 dark:border-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed">
                        Previous
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="h-7 w-7 md:w-9 md:h-9 text-xs font-medium text-white bg-primary-100 rounded-lg hover:bg-primary-200 transition">
                            1
                        </button>
                        <button className="h-7 w-7 md:w-9 md:h-9 text-xs font-medium text-gray-700 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-gray-50 dark:hover:bg-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                            2
                        </button>
                        <button className="h-7 w-7 md:w-9 md:h-9 text-xs font-medium text-gray-700 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-gray-50 dark:hover:bg-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                            3
                        </button>
                        <span className="px-2 text-gray-500">...</span>
                        <button className="h-7 w-7 md:w-9 md:h-9 text-xs font-medium text-gray-700 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-gray-50 dark:hover:bg-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                            10
                        </button>
                    </div>
                    <button className="px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm font-medium text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800 dark:border-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default KnowledgeEntries