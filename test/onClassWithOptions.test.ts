import { ClassBasic } from "../src/onClassBasic";
import { ClassInitial } from "../src/onClassWithOptions";

describe("Decorator on Class", () => {
  test("Decorator initialize class", () => {
    const data = new ClassInitial();

    expect(typeof data.getStatic()).toEqual("string");
    expect(data.getStatic()).toEqual("Puck is a demon");

    expect(typeof data.id).toEqual("undefined");
    expect(data.id).toEqual(undefined);
  });
});
