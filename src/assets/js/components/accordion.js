let items = document.querySelectorAll('.project__item'),
    projectBlog = document.querySelectorAll('.project__blog'),
    blogItem = document.querySelectorAll('.project__blog-item');

items.forEach((item, index) => {
    item.addEventListener('click', e => {
        projectBlog.forEach((item, index) => {
            if (item.classList.contains('show')) item.classList.remove('show');
            items.forEach(item => {
                if (item.classList.contains('active')) item.classList.remove('active');
            })
        })
        if (!item.classList.contains('active')) item.classList.add('active');
        if (!projectBlog[index].classList.contains('show')) {
            projectBlog[index].classList.add('show');
        }
    })
})

blogItem.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('active')) {
            item.classList.add('active');
        } else if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
    })
})
