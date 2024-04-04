const Chiperline = require("./main.js")

test("Encrypted string must be ended with '.sportline'", () => {
  const chiperline = new Chiperline("TrueKey")
  const encrypted = chiperline.encrypt("Test")
  expect(encrypted.slice(encrypted.length-10, encrypted.length)).toBeTruthy();
})

test("Return with original string if the key correct", () => {
  const chiperline = new Chiperline("TrueKey", true)
  const enc = chiperline.encrypt("Hello World")
  const dec = chiperline.decrypt(enc)
  expect(dec).toMatch(/Hello World/)
})

test("Return with original string if the key incorrect", () => {
  const chiperline = new Chiperline("TrueKey", true)
  const enc = chiperline.encrypt("Hello World")
  const _chiperline = new Chiperline("FalseKey", true)
  const dec = _chiperline.decrypt(enc)
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




