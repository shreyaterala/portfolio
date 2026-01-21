import { haptic } from "./projects/haptic";
import { rubi } from "./projects/rubi";
import { sock } from "./projects/sock";
import { epic } from "./projects/epic";
import { battlebot } from "./projects/battlebot";
import { flight } from "./projects/flight";
import { malawi } from "./projects/malawi";
import { me2110 } from "./projects/me2110";
import { breath } from "./projects/breath";
import { cis } from "./projects/cis";
import { ur5 } from "./projects/ur5";
import { pid } from "./projects/pid";
import { Project as ProjectType } from "./types";

export const projectsData: Record<string, ProjectType> = {
    haptic,
    rubi,
    sock,
    epic,
    battlebot,
    flight,
    malawi,
    me2110,
    breath,
    cis,
    ur5,
    pid,
};

export const ProjectAPI = {
    findAll: async () => {
        const projects = Object.values(projectsData);
        console.log("Projects found inside findAll:", projects.length);

        // Helper to parse date from "Start - End | Role" or "Date | Role" string
        const parseDate = (meta: string) => {
            const datePart = meta.split('|')[0].trim();
            // If it's a range (contains "-"), take the second part (end date)
            const dateStr = datePart.includes('-') ? datePart.split('-')[1].trim() : datePart;
            return new Date(dateStr).getTime();
        };

        return projects.sort((a, b) => parseDate(b.meta) - parseDate(a.meta));
    },
    findById: async (id: string) => projectsData[id]
};

export default projectsData;
