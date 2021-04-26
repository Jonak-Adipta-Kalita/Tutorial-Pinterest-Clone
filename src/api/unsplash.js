import axios from 'axios';

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: 'Client-ID D3TyIC3ubVrX-7jr7l9-z-MYgBWDC4dWtCA8l6Lodn4'
    },
})
