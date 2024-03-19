# Chiperline

Chiperline an encryption method to protect data by obfuscating key map and generating randomly seed to protect the key.

## Installation
```batch
npm install chiperline
```

## Features

- Encrypting String using key
- Decrypting String
- Generating Random UUID
- Generating Random Name
- Generating Random Int (min, max)


## Docs


This is example how to using the encryption
```javascript
  const Chiperline = require("chiperline")
  const chiper = new Chiperline("YourKey") // change this to your key

  const your_string = "MyPassword123"

  const encryptText = chiper.encrypt(your_string)
  console.log("Encrypted String: " + encryptText)

  const decryptText = chiper.decrypt(encryptText)
  console.log("Decrypted String: " + decryptText)
```

### Constructor

Initialize the package
```javascript
    const Chiperline = require("chiperline")
    const chiper = new Chiperline("YourKey") // Change this to your key
```

### encrypt(string): String
Return encrypted string

Example:
```javascript
const text = "Hello World"
const encryptedText = chiper.encrypt(text)
console.log(encryptedText) // return !6e03C71b8229A54c5A97ff1A4dC760b990B46178BcF614f3f531C6a6ce19F621.sportline
```

### decrypt(string): String
Return decrypted string (The key must be same when encrypting, or it will unreadable)

Example:
```javascript
const text = "!6e03C71b8229A54c5A97ff1A4dC760b990B46178BcF614f3f531C6a6ce19F621.sportline"
const decryptedText = chiper.decrypt(text)
console.log(decryptedText) // "Hello World"
```

### generateUUID(): String
Return [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) version 4

Example:
```javascript
const uuid = chiper.generateUUID()
console.log(uuid) // "6a8b9c1c-2d2a-414e-9147-db7ee0482475"
```

### randomName(word_length): String
Return randomly name

Example:
```javascript
const name = chiper.randomName(2)
console.log(name) // "Gasetes Fofuni"
```

### randomString(length): String
Return random string

Example:
```javascript
const string = chiper.randomString(32)
console.log(string) // "eqmgDJcBKKROgvpFcmrxJERdiebqfeYf"
```

### randomInt(length): Integer
Return random number

Example:
```javascript
const numb = chiper.randomInt(1,10)
console.log(numb) // 7
```
