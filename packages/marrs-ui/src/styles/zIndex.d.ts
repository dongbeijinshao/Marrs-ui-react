export interface ZIndex {
  sticky: number;
  navBar: number;
  drawer: number;
  modal: number;
  pin: number;
}

export type ZIndexOptions = Partial<ZIndex>;

declare const zIndex: ZIndex;

export default zIndex;
