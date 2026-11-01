// =========================================================
// סטודיו רעיונות - התנהגות הכפתורים
// כל כפתור עם התכונה data-soon מציג הודעה שהאפשרות תהיה זמינה בהמשך.
// =========================================================

const toast = document.getElementById('toast');
let hideTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');

  // מסתירים את ההודעה אחרי 2.5 שניות
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

document.querySelectorAll('[data-soon]').forEach((button) => {
  button.addEventListener('click', () => {
    const feature = button.dataset.soon;
    showToast(`✨ "${feature}" יהיה זמין בקרוב. אנחנו עדיין בונים את הסטודיו!`);
  });
});
