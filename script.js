document.addEventListener('DOMContentLoaded', () => {
    // Sample data - replace with your actual data
    const repos = [
        { name: 'Project 1', url: '#' },
        { name: 'Project 2', url: '#' },
        { name: 'Project 3', url: '#' }
    ];

    const blogPosts = [
        { title: 'First Post', date: '2024-01-01' },
        { title: 'Second Post', date: '2024-01-15' }
    ];

    const stats = {
        repositories: 25,
        followers: 100,
        following: 50
    };

    // Populate repositories
    const repoList = document.getElementById('repo-list');
    repos.forEach(repo => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${repo.url}">${repo.name}</a>`;
        repoList.appendChild(li);
    });

    // Populate blog posts
    const blogContainer = document.getElementById('blog-posts');
    blogPosts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h4>${post.title}</h4>
            <small>${post.date}</small>
        `;
        blogContainer.appendChild(div);
    });

    // Populate GitHub stats
    const statsContainer = document.getElementById('github-stats');
    statsContainer.innerHTML = `
        <p>📦 ${stats.repositories} repositories</p>
        <p>👥 ${stats.followers} followers</p>
        <p>👤 ${stats.following} following</p>
    `;
});
