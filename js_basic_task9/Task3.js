async function getPostBodyId(postId) {
    try {
        const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await response.json();
        console.log(post.body);
    } catch (error) {
        console.error("Error:", error);
    }
}

getPostBodyId(7); // Тут отримаємо боді посту

async function getUserById(userId) {
    try {
        const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${userId}`);
        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.error("Error:", error);
    }
}

getUserById(20); // Функція для отримання інформації про користувача.

