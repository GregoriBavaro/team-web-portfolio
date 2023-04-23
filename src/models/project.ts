class Project {
  name: string;
  id: number;
  description: string;
  buttonName: string;
  buttonLink: string;
  mobileImgs: {
    img: string;
    offset: number;
    speed: number;
    x: string;
    scale: string;
  }[];

  constructor(
    setName: string,
    setId: number,
    setText: string,
    setButtonName: string,
    setButtonLink: string,
    setMobileImg: {
      img: string;
      offset: number;
      speed: number;
      x: string;
      scale: string;
    }[]
  ) {
    this.name = setName;
    this.id = setId;
    this.description = setText;
    this.buttonName = setButtonName;
    this.buttonLink = setButtonLink;
    this.mobileImgs = setMobileImg;
  }
}

export default Project;
