import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export interface ContextType {
    pdfs: PDFObject[];
    chosenPDF: PDFObject | undefined;
    setPdfs: Dispatch<SetStateAction<PDFObject[]>>;
}

export interface PDFObject {
    name: string;
    description: string;
    stats: object;
}

interface ContextProviderProps {
    children: ReactNode;
}

export const DataContext = createContext<ContextType>({
    pdfs: [],
    chosenPDF: undefined,
    setPdfs: () => {},
} as ContextType);

export const DataContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [ pdfs, setPdfs ] = useState<PDFObject[]>([{name: "Algum nome do PDF", description: "This PDF talks about XYZ", stats: {}}]);
    const [ chosenPDF, setChosenPDF ] = useState<PDFObject>(pdfs[0]);

    return (
        <DataContext.Provider value={{ pdfs, setPdfs, chosenPDF }}>
            {children}
        </DataContext.Provider>
    );
};