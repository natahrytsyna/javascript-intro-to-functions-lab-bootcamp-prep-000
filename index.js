function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout('hello'))
}

function logWhisper(string) {
  console.log(whisper('HELLO'))
}

function sayHiToGrandma(string) {
  if(string.toEqual('hello')) {
    return "I can't hear you!"
  }
  if(string.toEqual('HELLO')) {
    return "YES INDEED!"
  }
  if(string.toEqual("I love you, Grandma.")) {
    return "I love you, too."
  }
}