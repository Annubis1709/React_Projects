import { useState, useEffect } from 'react';
import './Feed.css';
import { Create, Image, Subscriptions, EventNote, CalendarViewDay } from '@mui/icons-material';
import { getFirestore, collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { database } from '../database/firebase';
import Post from './Post';
import InputOption from './InputOption';

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })));
        });

        return unsubscribe;
    }, []);

    const sendPost = async (event) => {
        event.preventDefault();
        const db = getFirestore();
        const postCollection = collection(db, 'posts');

        await addDoc(postCollection, {
            name: 'Edier Sanchez',
            description: 'This is a test',
            message: input,
            photoUrl: '',
            timestamp: serverTimestamp(),
        });

        setInput('');
    };

    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <Create />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type='text' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed_inputOptions'>
                    <InputOption Icon={Image} title='Photo' color='#70B5F9' />
                    <InputOption Icon={Subscriptions} title='Video' color='#E7A33E' />
                    <InputOption Icon={EventNote} title='Event' color='#C0CBCD' />
                    <InputOption Icon={CalendarViewDay} title='Write Article' color='#7FC15E' />
                </div>
            </div>

            {posts.map(({ id, data }) => (
                <Post
                    key={id}
                    name={data.name}
                    description={data.description}
                    message={data.message}
                    photoUrl={data.photoUrl}
                />
            ))}
        </div>
    );
}

export default Feed;