import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate, useSearchParams } from "react-router-dom"
import { FaSave } from "react-icons/fa"
import { routes } from "../app-config"
import type { KnowledgeEntry, NewKnowledgeEntry } from "../types"
import { addEntry, fetchEntryById, updateEntry } from "../api"
import { toast } from "sonner"
import { useEffect, useState } from "react"

const validationSchema = Yup.object({
    title: Yup.string()
        .min(3, "Title must be at least 3 characters")
        .max(100, "Title must not exceed 100 characters")
        .required("Title is required"),
    content: Yup.string()
        .min(10, "Description must be at least 10 characters")
        .max(500, "Description must not exceed 500 characters")
        .required("Description is required"),
    createdAt: Yup.date()
        .required("Date is required")
        .max(new Date(), "Date cannot be in the future"),
})

interface FormValues {
    title: string
    content: string
    createdAt: string
}

const AddNewEntry = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const entryId = searchParams.get("id")
    const isEditMode = Boolean(entryId)

    const [existingEntry, setExistingEntry] = useState<KnowledgeEntry | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (isEditMode && entryId) {
            setIsLoading(true)
            fetchEntryById(entryId)
                .then((data) => {
                    console.log("Fetched entry for editing:", data)
                    setExistingEntry(data)
                })
                .catch((error) => {
                    console.error("Error fetching entry:", error)
                    toast.error("Failed to load entry data.")
                    navigate(routes.DASHBOARD)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, [entryId, isEditMode, navigate])


    const handleAddEntry = (entryData: NewKnowledgeEntry) => {
        console.log("Adding new entry:", entryData)
        addEntry(entryData)
            .then((data) => {
                console.log("Entry added successfully:", data)
                toast.success("Entry added successfully!")
                setTimeout(() => {
                    navigate(routes.DASHBOARD)
                }, 500);
            })
            .catch((error) => {
                console.error("Error adding entry:", error)
                toast.error("Failed to add entry. Please try again.")
            })
    }

    const handleUpdateEntry = (entryData: KnowledgeEntry) => {
        console.log("Updating entry:", entryData)

        updateEntry(entryId!, entryData)
            .then(() => {
                toast.success("Entry updated successfully!")
                setTimeout(() => {
                    navigate(routes.DASHBOARD)
                }, 500);
                navigate(routes.DASHBOARD)
            })
            .catch((error) => {
                console.error("Error updating entry:", error)
                toast.error("Failed to update entry. Please try again.")
            })
    }

    const formik = useFormik<FormValues>({
        initialValues: {
            title: existingEntry?.title || "",
            content: existingEntry?.content || "",
            createdAt: existingEntry?.createdAt
                ? new Date(existingEntry.createdAt).toISOString().split("T")[0]
                : new Date().toISOString().split("T")[0],
        },
        enableReinitialize: true, // This is crucial - it updates the form when existingEntry loads
        validationSchema,
        onSubmit: (values) => {
            if (isEditMode) {
                const entryData: KnowledgeEntry = {
                    id: entryId!,
                    title: values.title,
                    content: values.content,
                    createdAt: new Date(values.createdAt),
                }
                handleUpdateEntry(entryData)
            } else {
                const entryData: NewKnowledgeEntry = {
                    title: values.title,
                    content: values.content,
                    createdAt: new Date(values.createdAt),
                }
                handleAddEntry(entryData)
            }
        },
    })

    if (isLoading) {
        return (
            <section className="px-2 md:px-8">
                <div className="text-center py-8">Loading...</div>
            </section>
        )
    }

    return (
        <section className="px-2 md:px-8">
            <h1 className="text-2xl font-semibold mb-1">
                {isEditMode ? "Edit Entry" : "Add New Entry"}
            </h1>
            <p className="text-gray-600 dark:text-gray-200 mb-6 md:mb-8">
                {isEditMode ? "Update your knowledge entry" : "Create a new knowledge base entry"}
            </p>

            <div className="bg-white dark:bg-gray-900 rounded-md shadow-lg p-6 md:p-8 w-full">
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100"
                            placeholder="Enter entry title"
                            {...formik.getFieldProps("title")}
                        />
                        {formik.touched.title && formik.errors.title && (
                            <p className="mt-1 text-sm text-red-600">{formik.errors.title}</p>
                        )}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                            Description
                        </label>
                        <textarea
                            id="content"
                            rows={6}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100"
                            placeholder="Enter entry description"
                            {...formik.getFieldProps("content")}
                        />
                        {formik.touched.content && formik.errors.content && (
                            <p className="mt-1 text-sm text-red-600">{formik.errors.content}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="createdAt" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                            Date
                        </label>
                        <input
                            id="createdAt"
                            type="date"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100"
                            {...formik.getFieldProps("createdAt")}
                        />
                        {formik.touched.createdAt && formik.errors.createdAt && (
                            <p className="mt-1 text-sm text-red-600">{formik.errors.createdAt}</p>
                        )}
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-6 py-2 bg-primary-100 text-white rounded-md hover:bg-primary-200 transition"
                        >
                            <FaSave className="text-base" />
                            <span>{isEditMode ? "Update" : "Save"}</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate(routes.DASHBOARD)}
                            className="flex items-center gap-2 px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                        >
                            <span>Cancel</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddNewEntry