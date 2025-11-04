import { FaFileExcel, FaPlus, FaPrint } from "react-icons/fa6"
import { RiEqualizerLine } from "react-icons/ri"

const Dashboard = () => {
  return (
    <section className="px-8">
      <h1 className="text-2xl font-semibold mb-8">Knowledge Entries</h1>

      {/* Filters and tools  */}
      <div className="flex items-center justify-between mb-6">
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
      

    </section>
  )
}

export default Dashboard