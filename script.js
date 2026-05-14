// Dynamic background interaction
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 20;
        const offsetX = (x - 0.5) * speed;
        const offsetY = (y - 0.5) * speed;
        blob.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${1 + (index * 0.1)})`;
    });
});

// Scroll Reveal Effect
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Add subtle click effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousedown', () => {
        card.style.transform = 'scale(0.98) translateY(2px)';
    });
    
    card.addEventListener('mouseup', () => {
        card.style.transform = 'translateY(-5px)';
    });
});

console.log("KinwipeCode Portfolio initialized.");
