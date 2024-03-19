# Chiperline

Chiperline an encryption method to protect data by obfuscating key map and generating randomly seed to protect the key.

How to install:
`npm install chiperline`

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

## 
