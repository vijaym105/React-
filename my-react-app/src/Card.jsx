import proiflePic from './assets/pic.avif';
function Card(){
    return(
        <div className="card">
            <img className='card-img' src={proiflePic} height={150} width={300} alt="Profile pic" />
            <h2 className='card-title'>Vijay Malusare</h2>
            <p>All about creativeness, leadership and further more...</p>
        </div>
    )
}

export default Card