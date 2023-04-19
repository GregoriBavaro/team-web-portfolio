class Person {
  name: string;
  sirName: string;
  title: string;
  about: string;
  id: number;
  set: any;
  animation: {from: string, leave: string};
  photoContainerBackground: string;
  homePageBackground: string;
  buttonBackground: string;
  buttonTextColor: string;
  buttonTextColorHover: string;
  skills: {language: string, experience: string}[];

  constructor(
    setName: string,
    setSirName: string,
    setTitle: string,
    setAbout: string,
    setId: number,
    setPerson: any,
    setAnimationObj: {from: string, leave: string},
    setPhotoContainerBackground: string,
    setHomePageBackground: string,
    setButtonBackground: string,
    setButtonTextColor: string,
    setButtonTextColorHover: string,
    setSkills: {language: string, experience: string}[],
  ) {
    this.name = setName;
    this.sirName = setSirName;
    this.title = setTitle;
    this.about = setAbout;
    this.id = setId;
    this.set = setPerson;
    this.animation = setAnimationObj;
    this.photoContainerBackground = setPhotoContainerBackground
    this.homePageBackground = setHomePageBackground
    this.buttonBackground = setButtonBackground
    this.buttonTextColor = setButtonTextColor
    this.buttonTextColorHover = setButtonTextColorHover;
    this.skills = setSkills;
  }
}

export default Person;
