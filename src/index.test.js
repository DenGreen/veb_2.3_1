import { Validator } from "./index";

test("validateUsername, должен вернуть null если есть недопустимые символы", () => {
  const expected = {"name": null};

  const received = new Validator('_Tor');
  expect(received).toEqual(expected);
});

test("validateUsername, должен вернуть null если имя содержат подряд более трёх цифр или начинаеться и заканчиваеться цифрами, символами подчёркивания или тире", () => {
    const expected = {"name": null};
  
    const received = new Validator('-Tor!!!!!');
    expect(received).toEqual(expected);
  });

  test("validateUsername, должен вернуть  {name: переданное имя}", () => {
    const expected = {"name": "T-1o_r"};
  
    const received = new Validator('T-1o_r');
    expect(received).toEqual(expected);
  });

