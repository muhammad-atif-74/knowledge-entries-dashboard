import { FaFileExcel, FaPlus, FaPrint } from "react-icons/fa6"
import { RiEqualizerLine } from "react-icons/ri"
import type { KnowledgeEntry } from "../types"
import KnowledgeEntries from "../components/KnowledgeEntries"

export const knowledgeEntries: KnowledgeEntry[] = [
  {
    id: "1",
    title: "Understanding React Hooks",
    content: "A short guide explaining the basics of useState and useEffect hooks in React for managing state and side effects.",
    createdAt: new Date("2025-10-15"),
  },
  {
    id: "2",
    title: "Responsive Design in CSS",
    content: "Learn how to make websites mobile-friendly using media queries, flexible grids, and relative units.",
    createdAt: new Date("2025-10-20"),
  },
  {
    id: "3",
    title: "Working with REST APIs in Node.js",
    content: "Step-by-step process to create, test, and integrate RESTful APIs using Express and Postman.",
    createdAt: new Date("2025-10-25"),
  },
]


const Dashboard = () => {
  return (
    <section className="px-2 md:px-8">
      <h1 className="text-2xl font-semibold mb-1">Knowledge Entries</h1>
      <p className="text-gray-600 mb-8">Manage your knowledge base entries here.</p>

      {/* Filters and tools  */}
      <div className="flex items-center justify-between mb-6 w-full">
        <aside className="flex items-center gap-2">
          <div className="bg-white w-10 h-10 shadow flex items-center justify-center cursor-pointer  group">
            <FaPrint className="text-lg text-gray-600 group-hover:scale-105 group-hover:text-gray-700 transition" />
          </div>

          <div className="bg-white w-10 h-10 shadow flex items-center justify-center cursor-pointer  group">
            <FaFileExcel className="text-lg text-gray-600 group-hover:scale-105 group-hover:text-gray-700 transition" />
          </div>
        </aside>
        <aside>
          <div className="flex items-center gap-3">
            <h5 className="font-semibold">9 Records</h5>
            <div className=" w-10 h-10 flex items-center justify-center cursor-pointer  group">
              <RiEqualizerLine className="text-lg text-gray-600 group-hover:scale-105 group-hover:text-gray-700 transition" />
            </div>
            <div className="bg-primary-100 w-10 h-10 flex items-center justify-center cursor-pointer rounded-sm shadow-md shadow-primary-100 group">
              <FaPlus className="text-lg text-white group-hover:scale-105 transition" />
            </div>
          </div>
        </aside>
      </div>

      {/* List of knowledge entries  */}
      <KnowledgeEntries data={knowledgeEntries} />

    </section>
  )
}

export default Dashboard