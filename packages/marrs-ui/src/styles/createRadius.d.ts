export interface Radius {
  create?: Function;
}

export type RadiusOptions = string | string[] | number | number[];

export default function createRadius(radiusInput: RadiusOptions): Radius;
