document.addEventListener('DOMContentLoaded', () => {
  // Βρίσκουμε τα κουμπιά HOME για Αγγλικά και Ελληνικά και το container του περιεχομένου
  const homeButtonEn = document.getElementById('home-button-en');
  const homeButtonGr = document.getElementById('home-button-gr');
  const productContainer = document.getElementById('products');
  const categoryTitle = document.getElementById('category-title');
  const subcategoryContainer = document.getElementById('subcategory-container');






  // Λειτουργία για φόρτωση περιεχομένου για το Home Menu
  function loadHomeContent(language) {
  const categoryTitle = document.getElementById('category-title');
  const productContainer = document.getElementById('products');

  const drinksGR = [
    { name: "Ελληνικός Καφές", desc: "Το αγαπημένο πρωινό ρόφημα των Ελλήνων!" },
    { name: "Freddo Espresso", desc: "Δροσερή απόλαυση για όλες τις ώρες." },
    { name: "Φυσικός Χυμός", desc: "Φρέσκα φρούτα στο ποτήρι σας." }
  ];

  const foodsGR = [
    { name: "Μπουγάτσα", desc: "Νούμερο ένα επιλογή για το πρωινό σας." },
    { name: "Χειροποίητο Γλυκό Ημέρας", desc: "Κάθε μέρα και μια νέα έκπληξη!" },
    { name: "Παγωτό", desc: "Δροσιά & απόλαυση με κάθε κουταλιά." }
  ];

  if (language === 'el') {
    categoryTitle.textContent = "Προτεινόμενα για εσάς";
    productContainer.innerHTML = '';

    const allGR = [...drinksGR, ...foodsGR];

    allGR.slice(0, 6).forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'product-card fade-in';
      card.style.animationDelay = `${index * 0.2}s`;
      card.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      `;
      productContainer.appendChild(card);
    });
  }

  else if (language === 'en') {
    categoryTitle.textContent = "Recommended for You";
    productContainer.innerHTML = '';

    const drinksEN = [
      { name: "Greek Coffee", desc: "Traditional and strong for your mornings." },
      { name: "Freddo Espresso", desc: "Cool and bold espresso-based drink." },
      { name: "Natural Juice", desc: "Made fresh from seasonal fruits." }
    ];

    const foodsEN = [
      { name: "Bougatsa", desc: "Top breakfast choice for locals." },
      { name: "Handmade Sweet of the Day", desc: "Daily surprise desserts." },
      { name: "Ice Cream", desc: "Refreshing and creamy delight." }
    ];

    const allEN = [...drinksEN, ...foodsEN];

    allEN.slice(0, 6).forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'product-card fade-in';
      card.style.animationDelay = `${index * 0.2}s`;
      card.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      `;
      productContainer.appendChild(card);
    });
  }
}

  // Κατά την φόρτωση της σελίδας, φορτώνει το περιεχόμενο του Home Menu για τη γλώσσα
  if (document.documentElement.lang === 'en') {
    loadHomeContent('en'); // Φόρτωση περιεχομένου για Αγγλικά
	// Όταν πατηθεί το κουμπί HOME για Αγγλικά, φορτώνουμε το περιεχόμενο για το Home Menu και αλλάζουμε τη γλώσσα
  homeButtonEn.addEventListener('click', (e) => {
    e.preventDefault();  // Αποτρέπουμε την ανακατεύθυνση (refresh)
    document.documentElement.lang = 'en';  // Αλλαγή γλώσσας σε Αγγλικά
    loadHomeContent('en');
  });

  } else  {
    loadHomeContent('el'); // Φόρτωση περιεχομένου για Ελληνικά
	
	 // Όταν πατηθεί το κουμπί HOME για Ελληνικά, φορτώνουμε το περιεχόμενο για το Home Menu και αλλάζουμε τη γλώσσα
  homeButtonGr.addEventListener('click', (e) => {
    e.preventDefault();  // Αποτρέπουμε την ανακατεύθυνση (refresh)
    document.documentElement.lang = 'el';  // Αλλαγή γλώσσας σε Ελληνικά
    loadHomeContent('el');
  });
  }

  
 
});



















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
        window.location.href = 'index.html';
      } else {
        // Από Αγγλικά σε Ελληνικά
        window.location.href = 'greek.html';
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



