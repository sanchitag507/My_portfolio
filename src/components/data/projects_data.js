// import tweetme from '../../assets/projects_images/tweetme.PNG'
// import chatapp from '../../assets/projects_images/chatapp.JPG'
// import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.jpg'
// import new_year from '../../assets/projects_images/new_year.jpg'
import color_classification from '../../assets/projects_images/color_classification.jpg'
// import blinking from '../../assets/projects_images/blinking.JPG'
import COVID from '../../assets/projects_images/COVID.jpg'
import meet from '../../assets/projects_images/meet.jpeg'
import digitrecog from '../../assets/projects_images/digitrecog.jpeg'
// import Dev_talks from '../../assets/projects_images/Dev_talks.jpg'

const data_projects = [
    {
        name: 'MedWeb-COVID 19 Detection',
        image: COVID,
        deployed_url: 'https://github.com/sanchitag507/MedWeb',
        github_url: 'https://github.com/sanchitag507/MedWeb',
        category: ['webdev','datascience']
    },

    {
        name: 'My Portfolio',
        image: portfolio,
        deployed_url: 'https://github.com/sanchitag507/My_portfolio',
        github_url: 'https://github.com/sanchitag507/My_portfolio',
        category: ['webdev']
    },

    {
        name: 'Color Classification',
        image: color_classification,
        deployed_url: 'https://github.com/sanchitag507/color-detection-and-tracker',
        github_url: 'https://github.com/sanchitag507/color-detection-and-tracker',
        category: ['datascience']
    },

    {
        name: 'Video Meet and Chat',
        image: meet,
        deployed_url: 'https://github.com/sanchitag507/teams_clone',
        github_url: 'https://github.com/sanchitag507/teams_clone',
        category: ['webdev']
    },

    {
        name: 'Digit-Recognition',
        image: digitrecog,
        deployed_url: 'https://github.com/sanchitag507/digit-recognition-using-cnn-from-webcam',
        github_url: 'https://github.com/sanchitag507/digit-recognition-using-cnn-from-webcam',
        category: ['datascience']
    },

]

export default data_projects;