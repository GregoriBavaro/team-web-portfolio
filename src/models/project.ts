class Project {
    name: string;
    id: number;
    description: string;
    buttonName: string;
    buttonLink: string;
  
    constructor(setName: string, setId: number, setText: string, setButtonName: string, setButtonLink: string) {
      this.name = setName;
      this.id = setId;
      this.description = setText;
      this.buttonName = setButtonName;
      this.buttonLink = setButtonLink;
    }
  }
  
  export default Project;