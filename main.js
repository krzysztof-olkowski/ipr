
	var closestsElementClass = function (elem, className) {
		var node = elem;

		while (node) {

			if (node.classList.contains(className)) {
				return node; 
			}

			node = node.parentElement;
		}

		return null;
	}

	var catalog = document.querySelector('.portfolio-container');
	var catalogNav = document.querySelector('.filter__tabs');
	var catalogItems = document.querySelectorAll('.portfolio__item');



	function removeChildren(item) {
		while (item.firstChild) {
			item.removeChild(item.firstChild)
		}
	}

	function updateChildren(item, children) {
		removeChildren(item);
		for (var i = 0; i < children.length; i++) {
			item.appendChild(children[i]);
		}
	}

	catalogNav.addEventListener('click', function (e) {
		var target = e.target;
		var item = closestsElementClass(target, 'filter__btn');
		if (item === null || item.classList.contains('is-active')) {
			return;
		}

		e.preventDefault();
		var filterValue = item.getAttribute('data-filter');
		var previousActiveBtn = document.querySelector('.filter__btn.is-active');
		previousActiveBtn.classList.remove('is-active');
		item.classList.add('is-active');

		if (filterValue === 'all') {
			updateChildren(catalog, catalogItems);
			return;
		}

		var filteredItems = [];
		for (var i = 0; i < catalogItems.length; i++) {
			var currentItem = catalogItems[i];
			if (currentItem.getAttribute('data-category') === filterValue) {
				filteredItems.push(currentItem);
			}
		}
		updateChildren(catalog, filteredItems);
	});
