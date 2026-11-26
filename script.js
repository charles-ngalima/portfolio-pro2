
        // 1. Initialiser les icônes Lucide
        lucide.createIcons();

        // 2. Année automatique dans le footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // 3. Menu Mobile
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        // Fermer le menu mobile au clic sur un lien
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });

        // 4. Filtres du Portfolio
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Style des boutons
                filterBtns.forEach(b => {
                    b.classList.remove('bg-amber-500', 'text-dark-950');
                    b.classList.add('bg-dark-800', 'text-gray-300');
                });
                btn.classList.remove('bg-dark-800', 'text-gray-300');
                btn.classList.add('bg-amber-500', 'text-dark-950');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // 5. Animation au défilement (Intersection Observer)
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));

        // 6. Simulation d'envoi du formulaire
        const form = document.getElementById('contact-form');
        const successMsg = document.getElementById('form-success');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            successMsg.classList.remove('hidden');
            form.reset();
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 6000);
        });