 const cocktailBtn = document.getElementById('cocktail');
    const categoryMenu = document.getElementById('categoryMenu');
    const cocktailList = document.getElementById('cocktailList');

    const cocktails = {
      alkoholi: ["მოხიტო", "მარგარიტა", "დაიქირი"],
      uaralkoholi: ["ვირჯინია მოჯიტო", "ლიმონათი", "ფრეში"],
      kokteilebi: [
        "მოხიტო", "მარგარიტა", "დაიქირი",
        "ვირჯინია მოჯიტო", "ლიმონათი", "ფრეში"
      ]
    };

    cocktailBtn.addEventListener('click', () => {
      categoryMenu.classList.toggle('hidden');
      cocktailList.classList.add('hidden');
    });

    document.querySelectorAll('.category-btn').forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const drinks = cocktails[category];
        displayCocktails(drinks);
      });
    });

    function displayCocktails(list) {
      cocktailList.innerHTML = list.map(item => `<p>🍸 ${item}</p>`).join('');
      cocktailList.classList.remove('hidden');
    }