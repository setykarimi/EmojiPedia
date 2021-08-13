import React from 'react';
import Entry from './Entry';
import emojiPedia from './Info'

function createEmoji(emojiPedia)
{
    return(
        <Entry 
        key = {emojiPedia.id}
        emoji = {emojiPedia.emoji}
        name = {emojiPedia.name}
        description = {emojiPedia.meaning}
    />
    )
}

function App() {
    console.log(emojiPedia)
    return <div className="dictionary">
       {emojiPedia.map(createEmoji)}
    </div>
}

export default App;