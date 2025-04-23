import portfolioImage from '../images/portfolio-image.webp';
import tictactoeImage from '../images/tictactoe.png';
import todoImage from '../images/to-do.png';
import swapi from '../images/swapi.jpeg';
import shoppingCart from '../images/shopping_cart.avif';
import creditCard from '../images/credit-card-authorization-form.png';

export const projects = [
    {
        id: 1,
        title: 'Business-app-react',
        description: 'Business App built with react, the app is a simple business app that allows the user to add/remove cards and a nice CRM when logged in as admin.',
        image: portfolioImage,
        link: 'https://alblash.github.io/Business-app-react',
        githubLink: 'https://github.com/ALBlash/Business-app-react',
        tech: ['React', 'JavaScript', 'CSS', 'react-router-dom', 'prop-types', 'jwt', 'joi', 'axios']
    },
    {
        id: 2,
        title: 'Tic-Tac-Toe',
        description: 'Game of Tic-Tac-Toe, nice project to practice JavaScript and CSS.',
        image: tictactoeImage,
        link: 'https://alblash.github.io/TicTacToe_js/',
        githubLink: 'https://github.com/ALBlash/TicTacToe_js',
        tech: ['JavaScript', 'CSS', 'HTML']
    },
    {
        id: 3,
        title: 'To-Do List',
        description: 'A simple to-do list, that help you not forget importent things (student project) .',
        image: todoImage,
        link: 'https://alblash.github.io/To-Do-List_js/',
        githubLink: ' https://github.com/ALBlash/To-Do-List_js',
        tech: ['JavaScript', 'CSS', 'HTML']
    },
    {
        id: 4,
        title: 'SWAPI',
        description: 'SWAPI is an app i have created mostly front-end and connected to an API server named "Star Wars API" the idea is to click a charecter\'s name and recive information about them presented in a game theme',
        image: swapi,
        link: 'https://alblash.github.io/_SWAPI_/',
        githubLink: 'https://github.com/ALBlash/_SWAPI_ ',
        tech: ['TypeScript', 'CSS', 'HTML', 'Star Wars API']
    },
    {
        id: 5,
        title: 'Shopping Cart',
        description: 'Shopping-cart is a website where the user (depending on his permissions) can purchase items it is built using HTML/CSS & JavaScript the user can add/remove items (depending on his permissions) and the app calculates a discount for him if he has the right for it.  Email:user4@gmail.com, Password: A123456',
        image: shoppingCart,
        link: 'https://alblash.github.io/Shoping_Cart/',
        githubLink: 'https://github.com/ALBlash/Shoping_Cart',
        tech: ['JavaScript', 'CSS', 'HTML']
    },
    {
        id: 6,
        title: 'Credit Card Form',
        description: 'Credit card form for "Store checkout" with multipule validations good for practicing JavaScript validation methods.',
        image: creditCard,
        link: 'https://alblash.github.io/Credit_Card_JS/',
        githubLink: 'https://github.com/ALBlash/Credit_Card_JS',
        tech: ['JavaScript', 'CSS', 'HTML']
    }
];
