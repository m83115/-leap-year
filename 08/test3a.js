const moreThanChars = (chars, n) => /.{8,}/.test(chars)

test("應該要超過 8 個字 part 1", () => {
  let result = moreThanChars("abc", 8)
  expect(result).toBe(false)
})

test("應該要超過 8 個字 part 2", () => {
  let result = moreThanChars("abc283209138021832", 8)
  expect(result).toBe(true)
})

function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`);
  } 
  catch(err) {
    console.error(`✗ ${title}`)
    console.error(err)
  }
}

function expect(result) {
  return {
    toBe: (expected) => {
      if (result !== expected) {
        throw new Error(`${result} 與預期的 ${expected} 不符!`)
      }
    }
  }
}