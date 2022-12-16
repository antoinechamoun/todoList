import { show } from ".";

export function createProjectHandler(e){
    localStorage.setItem('show', !show)
}