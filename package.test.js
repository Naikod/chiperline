const Chiperline = require("./main.js")

test("Encrypted string must be ended with '.sportline'", () => {
  const chiperline = new Chiperline("TrueKey")
  const encrypted = chiperline.encrypt("Test")
  expect(encrypted.slice(encrypted.length-10, encrypted.length)).toBeTruthy();
})

test("Error if it doesnt contain key", () => {
  expect(() => {
    const chiperline = new Chiperline()
  }).toThrow();
})

test("Return with original string if the key correct", () => {
  const chiperline = new Chiperline("TrueKey")
  const enc = chiperline.encrypt("Hello World")
  console.log(enc)
  const dec = chiperline.decrypt(enc)
  expect(dec).toMatch(/Hello World/)
})

test("Return with original string if the key incorrect", () => {
  const chiperline = new Chiperline("NoTrueKey")
  const dec = chiperline.decrypt("oC154D6180Ce3e41F077CAA6Cf2D9a90333e3456494F1498107b3d6d9Eb590912.sportline")
  expect(dec).not.toMatch(/Hello World/)
})

test("Generating UUID", () => {
  const chiperline = new Chiperline("TrueKey")
  console.log(chiperline.generateUUID())
  expect(chiperline.generateUUID())
})

test('Generating Random Name', () => {
  const chiperline = new Chiperline("TrueKey")
  console.log(chiperline.randomName(3))
  expect(chiperline.randomName(3))
})




