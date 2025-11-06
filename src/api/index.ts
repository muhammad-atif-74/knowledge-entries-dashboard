import axios from "axios";
import { api_routes } from "../app-config";
import type { KnowledgeEntry, NewKnowledgeEntry } from "../types";

const apiUrl = import.meta.env.VITE_APP_API_URL;

// ✅ Fetch all entries
export const fetchAllEntries = async () => {
    try {
        const response = await axios.get(`${apiUrl}${api_routes.ENTRIES}`);
        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch all entries", { cause: err });
    }
};

export const addEntry = async (newEntry: NewKnowledgeEntry) => {
    try {
        const response = await axios.post(`${apiUrl}${api_routes.ENTRIES}`, newEntry);
        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to add entry", { cause: err });
    }
};

export const updateEntry = async (id: string, updatedEntry: KnowledgeEntry) => {
    try {
        const response = await axios.put(`${apiUrl}${api_routes.ENTRIES}/${id}`, updatedEntry);
        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error(`Failed to update entry with ID ${id}`, { cause: err });
    }
};

export const deleteEntry = async (id: string) => {
    try {
        const response = await axios.delete(`${apiUrl}${api_routes.ENTRIES}/${id}`);
        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error(`Failed to delete entry with ID ${id}`, { cause: err });
    }
};

export const fetchEntryById = async (id: string) => {
    try {
        const response = await axios.get(`${apiUrl}${api_routes.ENTRIES}/${id}`);
        return response.data;
    } catch (err) {
        console.error(err);
        throw new Error(`Failed to fetch entry with ID ${id}`, { cause: err });
    }
};