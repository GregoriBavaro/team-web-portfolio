class MediaButtonModel {
  icon: any;
  id: number;
  className: string;
  onClick: any;

  constructor(
    iconElement: any,
    idNumber: number,
    className: string,
    onClick: any
  ) {
    this.icon = iconElement;
    this.id = idNumber;
    this.className = className;
    this.onClick = onClick;
  }
}

export default MediaButtonModel;
