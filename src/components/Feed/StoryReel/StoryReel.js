//import React from 'react';
import React, { useState, useEffect } from 'react';

import './StoryReel.css'

// component
import Story from './Story/Story';

//db
import db from '../../../firebase'
import { doc, onSnapshot, collection, query, orderBy} from "firebase/firestore";


const StoryReel = () => {
    const [stories, setStories] = useState([]);
    const q = query(collection(db, "stories"));


    useEffect(() => {
        //db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        //    setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
        //})
    
        onSnapshot(q, (snapshot) => {
            setStories(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        })
    } , []);
    return (
        <div className="storyReel">
            {
                stories.map(story => (
                    <Story 
                        image={story.image}
                        profileSrc={story.profileSrc}
                        title={story.title}

                    />
                ))
            }
            
        </div>
    )
}

export default StoryReel;
