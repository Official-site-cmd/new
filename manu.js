const buttons = document.querySelectorAll('.category-buttons button');
    const items = document.querySelectorAll('.items-container .item');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        // remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        items.forEach(item => {
          if (category === 'all' || item.dataset.category === category) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });