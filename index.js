function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    const shoutedString=string.toUpperCase()
    
    console.log(shoutedString)
}

function logWhisper(string) {
    const whisperedString=string.toLowerCase()    

    console.log(whisperedString)
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    } else { 
        if (string === string.toUpperCase()) {
            return "YES INDEED!"
        } else {
            if (string === "Let's have dinner together!")
                return "I would love to!"
        } 
    } 
}


