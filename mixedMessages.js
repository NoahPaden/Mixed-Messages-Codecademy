function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

// Collection of different songs & artists to be randomly selected
const remixGenerator = {
    mainArtist: ['David Bowie', 'Cher', 'Drake', 'My Chemical Romance', 'Adele', 'Slipknot', 'Yung Gravy', 'Jay-Z', 'Die Antwoord', 'Blink-182'],
    songChoice: ['Africa', 'Say It Ain\'t So', 'Chicken in the Corn', 'Never Gonna Give You Up', 'Your Man', 'I Write Sins Not Tragedies', 'American Idiot', 'Can\'t Stop'],
    featureArtist: ['Lil Yachty', 'Ed Sheeran', 'Miley Cyrus', 'Shaq', 'Dave Grohl', 'Lil Wayne', 'The Boston Symphony Orchestra']
}

// Empty array to store a random main artist, random song, and random featured artist
let remixedSong = []

// Iterate over the remixGenerator object
for(let i in remixGenerator) {
    // Create a random index to select an element from each array in remixGenerator
    let optionIndex = randomNumber(remixGenerator[i].length)

    // Add strings to remixedSong array
    switch(i) {
        case 'mainArtist':
            remixedSong.push(`NOW AVAILABLE ON ALL STREAMING PLATFORMS: ${remixGenerator[i][optionIndex]} `)
            break
        case 'songChoice':
            remixedSong.push(`has released their own rendition of the classic hit ${remixGenerator[i][optionIndex]} `)
            break
        case 'featureArtist':
            remixedSong.push(`with a special feature from ${remixGenerator[i][optionIndex]}`)
            break
        default:
            remixedSong.push('UH OH the mad scientist behind this project has made a mistake...')
    }
}

function announceRelease(announcement) {
    const formatted = remixedSong.join('')
    console.log(formatted)
}

announceRelease(remixedSong);