import { createApp, ref, computed } from 'vue';

createApp({
    setup() {
        // State management
        const searchQuery = ref('');
        const selectedCategory = ref('all');
        
        // Product data
        const featuredProducts = ref([
            { id: 101, name: 'Rações', description: 'Diversas marcas e sabores', category: 'food', color: '#f96a00', image: '/produto1.jpg' },
            { id: 102, name: 'Acessórios', description: 'Para o conforto do seu pet', category: 'accessory', color: '#faab00', image: '/produto2.jpg' },
            { id: 103, name: 'Medicamentos', description: 'Produtos para saúde animal', category: 'medicine', color: '#ffa927', image: '/produto3.jpg' }
        ]);
        
        // Services data
        const services = ref([
            { id: 201, name: 'Banho Porte (PP)', description: 'Banho completo para cães de porte muito pequeno', price: 30.00, type: 'bath', color: '#f96a00', image: '/banho1.jpg' },
            { id: 202, name: 'Banho Porte (P)', description: 'Banho completo para cães de porte pequeno', price: 45.00, type: 'bath', color: '#faab00', image: '/banho2.jpg' },
            { id: 203, name: 'Banho Porte (M)', description: 'Banho completo para cães de porte médio', price: 70.00, type: 'bath', color: '#ffa927', image: '/banho3.jpg' },
            { id: 204, name: 'Banho Porte (G)', description: 'Banho completo para cães de porte grande', price: 90.00, type: 'bath', color: '#fdca49', image: '/banho4.jpg' },
            { id: 205, name: 'Banho Porte (GG)', description: 'Banho completo para cães de porte muito grande', price: 140.00, type: 'bath', color: '#daf204', image: '/banho5.jpg' },
        ]);
        
        // Additional services data
        const additionalServices = ref([
            { id: 301, name: 'Unhas', description: 'Corte de unhas para seu pet', price: 10.00, type: 'addon', color: '#f96a00', image: '/adicional1.jpg' },
            { id: 302, name: 'Patinha de Poodle', description: 'Tosa especial para patas de Poodle', price: 15.00, type: 'addon', color: '#faab00', image: '/adicional2.jpg' },
            { id: 303, name: 'Tosa Higiênica', description: 'Tosa básica para higiene do pet', price: 15.00, type: 'addon', color: '#ffa927', image: '/adicional3.jpg' },
            { id: 304, name: 'Unhas Pequenas', description: 'Corte de unhas para pets de pequeno porte', price: 8.00, type: 'addon', color: '#fdca49', image: '/adicional4.jpg' },
            { id: 305, name: 'Taxa de Desembolo', description: 'Serviço de remoção de embaraços no pelo', price: 15.00, type: 'addon', color: '#daf204', image: '/adicional5.jpg' },
        ]);
        
        // Grooming services data
        const groomingServices = ref([
            { id: 401, name: 'Tosa Geral Porte (P)', description: 'Tosa completa para cães de porte pequeno', price: 70.00, type: 'grooming', color: '#f96a00', image: '/tosa1.jpg' },
            { id: 402, name: 'Tosa Geral Porte (M)', description: 'Tosa completa para cães de porte médio', price: 80.00, type: 'grooming', color: '#faab00', image: '/tosa2.jpg' },
            { id: 403, name: 'Tosa Geral Porte (G)', description: 'Tosa completa para cães de porte grande', price: 90.00, type: 'grooming', color: '#ffa927', image: '/tosa3.jpg' },
            { id: 404, name: 'Tosa Carneirinho (P)', description: 'Tosa estilo carneirinho para cães de porte pequeno', price: 75.00, type: 'grooming', color: '#fdca49', image: '/tosac1.jpg' },
            { id: 405, name: 'Tosa Carneirinho (M)', description: 'Tosa estilo carneirinho para cães de porte médio', price: 85.00, type: 'grooming', color: '#daf204', image: '/tosac2.jpg' },
            { id: 406, name: 'Tosa Carneirinho (G)', description: 'Tosa estilo carneirinho para cães de porte grande', price: 95.00, type: 'grooming', color: '#f96a00', image: '/tosac3.jpg' },
            { id: 407, name: 'Tosa Bebê (P)', description: 'Tosa estilo bebê para cães de porte pequeno', price: 95.00, type: 'grooming', color: '#faab00', image: '/tosab1.jpg' },
            { id: 408, name: 'Tosa Bebê (M)', description: 'Tosa estilo bebê para cães de porte médio', price: 115.00, type: 'grooming', color: '#ffa927', image: '/tosab2.jpg' },
            { id: 409, name: 'Tosa Bebê (G)', description: 'Tosa estilo bebê para cães de porte grande', price: 160.00, type: 'grooming', color: '#fdca49', image: '/tosab3.jpg' },
        ]);
        
        // Promotions data
        const promotions = ref([
            { id: 302, name: 'Temos Taxi Dog', description: 'Confira o valor para onde você mora!', validUntil: '30 Set, 2023', color: '#faab00' },
            { id: 304, name: 'Combo Especial', description: 'Banho, hidratação, tosa higiênica, corte de unhas, limpeza de ouvidos e enfeite porte (P)', price: 60.00, validUntil: '31 Dez, 2023', color: '#fdca49' },
        ]);
        
        // Search results computed property
        const searchResults = computed(() => {
            const query = searchQuery.value.toLowerCase().trim();
            if (!query) return null;
            
            const keywordMappings = {
                "racao": "food",
                "ração": "food",
                "rações": "food",
                "comida": "food",
                "roupas": "accessory",
                "acessorio": "accessory",
                "acessório": "accessory",
                "acessorios": "accessory",
                "acessórios": "accessory",
                "remedio": "medicine",
                "remédio": "medicine",
                "remedios": "medicine",
                "remédios": "medicine",
                "medicamento": "medicine",
                "medicamentos": "medicine",
                "banho": "bath",
                "banhos": "bath",
                "corte": "grooming",
                "tosa": "grooming",
                "carneirinho": "grooming",
                "bebê": "grooming",
                "bebe": "grooming",
                "unhas": "addon",
                "patinha": "addon",
                "desembolo": "addon",
                "higienica": "addon",
                "higiênica": "addon",
                "taxi": "promo",
                "táxi": "promo",
                "dog": "all",
                "pet": "all",
                "animal": "all",
                "cachorro": "all",
                "cão": "all",
                "cao": "all",
                "gato": "all",
                "porte": "bath",
                "pequeno": "bath",
                "medio": "bath",
                "médio": "bath",
                "grande": "bath",
                "pp": "bath",
                "p": "bath",
                "m": "bath",
                "g": "bath",
                "gg": "bath",
                "higiene": "addon",
                "desembaraçar": "addon",
                "poodle": "addon",
                "pelo": "grooming",
                "tosados": "grooming",
                "geral": "grooming",
                "especial": "promo",
                "desconto": "promo",
                "fidelidade": "promo",
                "combo": "promo",
                "verão": "promo",
                "oferta": "promo",
                "ofertas": "promo",
                "hidratação": "promo",
                "limpeza": "promo",
                "ouvidos": "promo",
                "enfeite": "promo"
            };
            
            let enhancedQuery = query;
            for (const [keyword, category] of Object.entries(keywordMappings)) {
                if (query.includes(keyword)) {
                    enhancedQuery = `${query} ${category}`;
                    break;
                }
            }
            
            const foundProducts = featuredProducts.value.filter(product => 
                product.name.toLowerCase().includes(query) || 
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(enhancedQuery)
            );
            
            const foundServices = services.value.filter(service => 
                service.name.toLowerCase().includes(query) || 
                service.description.toLowerCase().includes(query) ||
                service.type.toLowerCase().includes(enhancedQuery) ||
                (enhancedQuery.includes("banho") && service.type === "bath") ||
                (service.price && query.includes(service.price.toString()))
            );
            
            const foundAdditionalServices = additionalServices.value.filter(service => 
                service.name.toLowerCase().includes(query) || 
                service.description.toLowerCase().includes(query) ||
                service.type.toLowerCase().includes(enhancedQuery) ||
                (service.price && query.includes(service.price.toString()))
            );
            
            const foundGroomingServices = groomingServices.value.filter(service => 
                service.name.toLowerCase().includes(query) || 
                service.description.toLowerCase().includes(query) ||
                service.type.toLowerCase().includes(enhancedQuery) ||
                (query.includes("carneirinho") && service.name.includes("Carneirinho")) ||
                (query.includes("bebe") || query.includes("bebê")) && service.name.includes("Bebê") ||
                (service.price && query.includes(service.price.toString()))
            );
            
            return {
                products: foundProducts,
                services: foundServices,
                additionalServices: foundAdditionalServices,
                groomingServices: foundGroomingServices,
                hasResults: foundProducts.length > 0 || 
                           foundServices.length > 0 || foundAdditionalServices.length > 0 ||
                           foundGroomingServices.length > 0
            };
        });
        
        // Methods
        function search() {
            if (searchQuery.value.trim()) {
                selectedCategory.value = 'search-results';
            }
        }
        
        function addToCart(item) {
            alert(`${item.name} adicionado!`);
        }
        
        function applyPromo(promo) {
            alert(`Promoção "${promo.name}" aplicada! Você ganhou ${promo.discount}% de desconto em sua compra.`);
        }
        
        // Initialize about us tooltip when component is mounted
        setTimeout(() => {
            const aboutLink = document.querySelector('.about-us-link');
            const tooltip = document.getElementById('about-tooltip');
            
            if (aboutLink && tooltip) {
                function showTooltip(e) {
                    tooltip.classList.add('show');
                    const rect = aboutLink.getBoundingClientRect();
                    tooltip.style.left = `${rect.left}px`;
                    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
                }
                
                function hideTooltip() {
                    tooltip.classList.remove('show');
                }
                
                aboutLink.addEventListener('mouseenter', showTooltip);
                aboutLink.addEventListener('mouseleave', hideTooltip);
                aboutLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    showTooltip();
                    setTimeout(hideTooltip, 3000);
                });
            }
        }, 100);
        
        return {
            searchQuery,
            selectedCategory,
            featuredProducts,
            services,
            additionalServices,
            groomingServices,
            promotions,
            searchResults,
            search,
            addToCart,
            applyPromo
        };
    }
}).mount('#app');