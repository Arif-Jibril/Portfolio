document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Ajouter la classe active au bouton cliqué
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            projects.forEach(project => {
                // Si on clique sur "Tous" ou que le status du projet correspond au filtre
                if (filterValue === "all" || project.getAttribute("data-status") === filterValue) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});