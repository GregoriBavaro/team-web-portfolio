class Person {
  name: string;
  sirName: string;
  title: string;
  about: string;
  id: number;
  set: any;
  animation: {from: string, leave: string};
  skills: {language: string, experience: string}[];
  photo: string;

  constructor(
    setName: string,
    setSirName: string,
    setTitle: string,
    setAbout: string,
    setId: number,
    setPerson: any,
    setAnimationObj: {from: string, leave: string},
    setSkills: {language: string, experience: string}[],
    setPhoto: string
  ) {
    this.name = setName;
    this.sirName = setSirName;
    this.title = setTitle;
    this.about = setAbout;
    this.id = setId;
    this.set = setPerson;
    this.animation = setAnimationObj;
    this.skills = setSkills;
    this.photo = setPhoto;
  }
}

export default Person;
