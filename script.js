document.addEventListener('DOMContentLoaded', () => {
  // Εντοπίστε το κουμπί αλλαγής γλώσσας και το container περιεχομένου
  const languageToggle = document.getElementById('language-toggle');
  const content = document.getElementById('content');

  languageToggle.addEventListener('click', (e) => {
    e.preventDefault();

    // Εφαρμόζουμε το fade-out effect
    content.style.opacity = 0;

    // Αφού ολοκληρωθεί η μετάβαση (500ms), ανακατευθύνουμε στο αντίστοιχο αρχείο
    setTimeout(() => {
      if (document.documentElement.lang === 'el') {
        // Από Ελληνικά σε Αγγλικά
        window.location.href = 'index_us.html';
      } else {
        // Από Αγγλικά σε Ελληνικά
        window.location.href = 'index_greek.html';
      }
    }, 500);
  });

  /* --- Κώδικας για dropdown μενού --- */

  const dropdowns = document.querySelectorAll('.dropdown');

  // Κλείσιμο όλων των dropdown όταν γίνεται κλικ εκτός τους
  document.addEventListener('click', (e) => {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  });

  // Toggle dropdown με κλικ και κλείσιμο των υπολοίπων
  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('a');
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      dropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove('open');
      });
      dropdown.classList.toggle('open');
    });
  });

  // Επεξεργασία κλικ στις υποκατηγορίες (για φόρτωση περιεχομένου)
  const dropdownLinks = document.querySelectorAll('.dropdown-content a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      this.closest('.dropdown').classList.remove('open');
      const subcategory = this.textContent;
      document.getElementById('category-title').textContent = subcategory;
      document.getElementById('products').innerHTML = `<p>Φόρτωση προϊόντων για το "${subcategory}"...</p>`;
    });
  });
});


//ΣΙΝΔΕΣΕΙ ΤΟΝ ΠΡΟΙΟΝΤΟΝ PRODUCTS ΓΙΑ ΕΛΛΗΝΙΚΑ 

document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("products");
  const categoryTitle = document.getElementById("category-title");

  // Φόρτωση προϊόντων από το products_gr.js
  function loadProducts(category, subcategory) {
    if (products[category] && products[category][subcategory]) {
      displayProducts(products[category][subcategory], subcategory);
    }
  }

  function displayProducts(productList, subcategory) {
    categoryTitle.textContent = subcategory;
    productContainer.innerHTML = productList.map(product => `
      <div class="product-card">
        <img src="images/${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    `).join("");
  }

  document.querySelectorAll(".dropdown-content li a").forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const category = this.closest(".dropdown").querySelector("a").textContent;
      const subcategory = this.textContent;
      loadProducts(category, subcategory);
    });
  });
});


//ΣΙΝΔΕΣΕΙ ΤΟΝ ΠΡΟΙΟΝΤΟΝ PRODUCTS_us ΓΙΑ Αγγλικά 

document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("products");
  const categoryTitle = document.getElementById("category-title");

  function loadProducts(category, subcategory) {
    if (products[category] && products[category][subcategory]) {
      displayProducts(products[category][subcategory], subcategory);
    }
  }

  function displayProducts(productList, subcategory) {
    categoryTitle.textContent = subcategory;
    productContainer.innerHTML = productList.map(product => `
      <div class="product-card">
        <img src="images/${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    `).join("");
  }

  document.querySelectorAll(".dropdown-content li a").forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const category = this.closest(".dropdown").querySelector("a").textContent;
      const subcategory = this.textContent;
      loadProducts(category, subcategory);
    });
  });
});
