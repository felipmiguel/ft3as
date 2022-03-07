import { ICheckItemAnswered } from "../model/ICheckItem";
import { IChecklistDocument } from "../model/IChecklistDocument";

class TemplateService {
    async openTemplate(url:string) : Promise<IChecklistDocument>{
        const response = await fetch(url);
        return (await response.json()) as IChecklistDocument;
    }    
}

const TemplateServiceInstance = new TemplateService();

export default TemplateServiceInstance;