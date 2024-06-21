import { applicationContext } from "@/contexts/ApplicationContext";
import { useContext } from "react";

export default function useAppContext() {
    return useContext(applicationContext);
}