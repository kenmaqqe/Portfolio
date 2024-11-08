import stoImg from '../assets/stoProject.jpg'
import HappyImg from '../assets/happyProj.jpg'
import gameImg from '../assets/gameProj.jpg'
import quotesImg from '../assets/quotesProj.jpg'

const projects = [
    {
        name: 'STO na dorozhnyy',
        description: 'Full-responsive and functional website',
        link: 'https://www.stonadorozhnyy.com.ua',
        img: stoImg
    },
    {
        name: 'HappyTails',
        description: 'MVP with functional admin panel',
        link: 'https://happytails.team',
        img: HappyImg
    },
    {
        name: 'Rock Paper Scissors',
        description: 'Simple game website',
        link: 'https://rockpaperscissorsgame-phi.vercel.app/',
        img: gameImg
    },
    {
        name: 'Random Breaking Bad Quotes',
        description: 'Simple website with quotes API',
        link: 'https://randombreakingbadquotes.netlify.app/',
        img: quotesImg
    }
]
export default projects;