import { FiEdit3, FiTrash2 } from "react-icons/fi"
import type { KnowledgeEntry } from "../types"

interface KnowledgeEntriesProps {
    data: KnowledgeEntry[]
}

const KnowledgeEntries = ({ data }: KnowledgeEntriesProps) => {

    const getInitialBg = (initial: string) => {
        const colors = [
            'bg-purple-100',
            'bg-blue-100',
            'bg-pink-100',
            'bg-green-100'
        ]
        const idx = initial.charCodeAt(0) % colors.length
        return colors[idx]
    }

    return (
        <div className="w-full overflow-x-auto bg-white rounded-md shadow-lg">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
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
                        const initial = entry.title.charAt(0).toUpperCase()

                        return (
                            <tr key={entry.id} className="border-b border-gray-100 hover:bg-gray-50  transition-colors">
                                <td className="py-4 px-6 text-gray-500 font-medium">
                                    {entry.id}
                                </td>
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full ${getInitialBg(initial)} flex items-center justify-center text-purple-600 font-semibold`}>
                                            {initial}
                                        </div>
                                        <span className=" text-gray-900">{entry.title}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-gray-900 text-base">
                                    {entry.content}
                                </td>
                                <td className="py-4 px-6 text-gray-600">
                                    {entry.createdAt ? new Date(entry.createdAt).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    }) : 'N/A'}
                                </td>
                                <td className="py-4 px-6 text-gray-600">
                                    <div className="flex items-center gap-4">
                                        <div className="">
                                            <FiEdit3 className="text-lg cursor-pointer text-blue-600/70 hover:text-blue-800 transition" />
                                        </div>
                                        <div className="">
                                            <FiTrash2 className="text-lg cursor-pointer text-red-600/70 hover:text-red-800 transition" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5} className="py-6 px-6">
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-600">
                                    Showing <span className="font-medium text-gray-900">1-10</span> of <span className="font-medium text-gray-900">97</span> results
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed">
                                        Previous
                                    </button>
                                    <div className="flex items-center gap-1">
                                        <button className="w-9 h-9 text-sm font-medium text-white bg-primary-100 rounded-lg hover:bg-primary-200 transition">
                                            1
                                        </button>
                                        <button className="w-9 h-9 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                                            2
                                        </button>
                                        <button className="w-9 h-9 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                                            3
                                        </button>
                                        <span className="px-2 text-gray-500">...</span>
                                        <button className="w-9 h-9 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                                            10
                                        </button>
                                    </div>
                                    <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default KnowledgeEntries