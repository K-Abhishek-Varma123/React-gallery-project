import './Cssfiles/Home.css';
import homeimage1 from './assets/home-img1.png';
import homeimage2 from './assets/home-img2.png';
import homeimage3 from './assets/home-img3.png';
function Home()
{
    return(
        <div className='home-outer'>

            <div className='home-heading'>
                <h1><marquee>Welcome to our Gallery!</marquee></h1>
            </div>

            <div className="home-matter1">
                <div className="home-img1">
                    <img src={homeimage1} alt='image' className='hm1-img1'/>
                </div>
                <div className="home-para1" >
                    <p className="para" >
                        A tranquil lakeside scene framed by gentle mountains in the background.
                        The water is calm and reflective, mirroring the soft hues of the sky and surrounding landscape.
                        A wooden dock extends out into the lake, supported by evenly spaced posts, creating a sense of depth and leading the viewer’s eye toward the distant hills.
                        The lighting suggests either early morning or late afternoon, with warm tones highlighting the slopes and giving the scene a peaceful, almost golden glow.
                    </p>
                </div>
            </div>

            <div className="home-matter2">
                <div className="home-para2">
                    <p className="para2" >
                        Green forest scene centered around a gently flowing stream.
                        The water moves smoothly over and around moss-covered rocks, creating a soft, silky appearance that suggests a long-exposure photograph.
                        Fallen trees lie across the stream, their trunks partially submerged and blending naturally into the environment.
                        The dense foliage, rich in varying shades of green, gives the scene a fresh and vibrant feel, likely during spring or early summer.
                    </p>
                </div>
                <div className="home-img2">
                    <img src={homeimage2} alt='image' className='hm2-img2'/>
                </div>
            </div>

            <div className="home-matter3">
                <div className="home-img3">
                    <img src={homeimage3} alt='image' className='hm3-img3'/>
                </div>
                <div className="home-para3">
                    <p className="para3">
                        Sunlight filters through the foliage, creating a dappled pattern of light and shadow across the leaves.
                        Patches of bright blue sky peek through the gaps, adding contrast to the vibrant greens.
                        The perspective gives a feeling of immersion, as if standing in the middle of the forest and gazing upward, surrounded by the calm and refreshing atmosphere of nature.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Home