function toggleSection(button) {
  const content = button.nextElementSibling;
  const isActive = content.classList.contains('active');

  // Close all toggles in the same container
  const container = button.closest('.project-toggles');
  const allToggleContents = container.querySelectorAll('.toggle-content');
  const allToggleButtons = container.querySelectorAll('.toggle-btn');

  allToggleContents.forEach(tc => tc.classList.remove('active'));
  allToggleButtons.forEach(tb => tb.classList.remove('active'));

  // Toggle the clicked section
  if (!isActive) {
    content.classList.add('active');
    button.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Optional: add stagger animation to toggles
  const toggleSections = document.querySelectorAll('.toggle-section');
  toggleSections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.1}s`;
    section.style.animation = 'fadeInUp 0.6s ease forwards';
  });
});

// Add CSS for the fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .toggle-section {
    opacity: 0;
  }
`;
document.head.appendChild(style);
