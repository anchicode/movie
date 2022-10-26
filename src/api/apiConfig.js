const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ae5c5af2f7b37bd3659e4ec7ef4267df',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;