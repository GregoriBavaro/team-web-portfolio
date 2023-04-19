class MediaButtonModel {
  icon: any;
  id: number;
  className: string;
  onClick: () => void;

  constructor(
    iconElement: any,
    idNumber: number,
    className: string,
    onClick: () => void
  ) {
    this.icon = iconElement;
    this.id = idNumber;
    this.className = className;
    this.onClick = onClick;
  }
}

export default MediaButtonModel;
