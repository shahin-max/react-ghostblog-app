import Navbar from '../components/Navbar'
import WithoutMeta from '../components/WithoutMeta'
import TooLongMeta from '../components/TooLongMeta'
import TooLongUrl from '../components/TooLongUrl'
import WithoutImage from '../components/WithoutImage'
import TooShortPosts from '../components/TooShortPosts'
import TooLongPosts from '../components/TooLongPosts'



function Posts()
{
    return (
    <div>
        <div><Navbar page='posts'/></div>
        <div className='posts-container'>
            <div><WithoutMeta /></div>
            <div><TooLongMeta /></div>
            <div><TooLongUrl /></div>
            <div><WithoutImage /></div>
            <div><TooShortPosts /></div>
            <div><TooLongPosts /></div>
        </div>
    </div>);
}

export default Posts;


