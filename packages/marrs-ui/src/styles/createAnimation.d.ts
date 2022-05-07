export interface Animation {
  create?: Function;
}
export type AnimationOptions = {
  name: string;
  props: any;
};

export default function createAnimation(
  AnimationInput: AnimationOptions
): Animation;
