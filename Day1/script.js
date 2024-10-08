        // Function to filter the portfolio items based on the clicked filter
        function filterPortfolio(filter) {
            const items = document.querySelectorAll('.portfolio-item .item');
            items.forEach(item => {
                if (filter === '*' || item.classList.contains(filter)) {
                    item.style.display = 'block'; // Show the item
                } else {
                    item.style.display = 'none'; // Hide the item
                }
            });
        }

        // Add event listeners to the filter buttons
        document.querySelectorAll('.portfolio-menu ul li').forEach(li => {
            li.addEventListener('click', function() {
                // Remove 'active' class from all filter buttons
                document.querySelectorAll('.portfolio-menu ul li').forEach(li => li.classList.remove('active'));
                
                // Add 'active' class to the clicked button
                this.classList.add('active');
                
                // Get the filter value from the clicked button's data-filter attribute
                const filter = this.getAttribute('data-filter').replace('.', '');
                
                // Filter the portfolio items
                filterPortfolio(filter);
            });
        });

        // Initial filter to show all items
        filterPortfolio('*');
