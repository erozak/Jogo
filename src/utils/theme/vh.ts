export default function vh(value: number): string {
  return `calc(${value}vh - var(--vh-offset, 0px));`;
}
