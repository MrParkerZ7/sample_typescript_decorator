import { ClassBasic, ClassInitial } from "../src/onClass";

describe("Decorator on Class", () => {
  test("Decorator class", () => {
    const data = new ClassBasic();

    expect(typeof data.getStatic()).toEqual("string");
    expect(data.getStatic()).toEqual("Mocking");

    expect(typeof data.id).toEqual("undefined");
    expect(data.id).toEqual(undefined);
  });

  test("Decorator initialize class", () => {
    const data = new ClassInitial();

    expect(typeof data.getStatic()).toEqual("string");
    expect(data.getStatic()).toEqual("Mocking");

    expect(typeof data.id).toEqual("undefined");
    expect(data.id).toEqual(undefined);
  });
});
