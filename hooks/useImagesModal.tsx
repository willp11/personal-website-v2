import React, { useState, useContext, useMemo, Dispatch, SetStateAction } from "react";


interface IProjectImagesModal {
    showProjectImages: boolean;
    setShowProjectImages: Dispatch<SetStateAction<boolean>>;
    projectIndex: number;
    setProjectIndex: Dispatch<SetStateAction<number>>;
}

export const ProjectImagesContext = React.createContext<undefined | IProjectImagesModal>(undefined);

export const ProjectImagesProvider = ({ children }: {children: React.ReactNode}) => {
    const [showProjectImages, setShowProjectImages] = useState(false);
    const [projectIndex, setProjectIndex] = useState(0);

    const contextValue = useMemo(() => {
        return { showProjectImages, setShowProjectImages, projectIndex, setProjectIndex };
    }, [showProjectImages, projectIndex]);

    return (
        <ProjectImagesContext.Provider value={contextValue}>{children}</ProjectImagesContext.Provider>
    )
}

export function useImagesModal() {

    const context = useContext(ProjectImagesContext);

    let showProjectImages: boolean | undefined;
    let setShowProjectImages: Dispatch<SetStateAction<boolean>> | undefined;
    let projectIndex: number | undefined;
    let setProjectIndex: Dispatch<SetStateAction<number>> | undefined;
    
    if (context) {
        showProjectImages = context.showProjectImages;
        setShowProjectImages = context.setShowProjectImages;
        projectIndex = context.projectIndex;
        setProjectIndex = context.setProjectIndex;
    }

    return { showProjectImages, setShowProjectImages, projectIndex, setProjectIndex };
}