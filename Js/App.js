const btnGeneral = document.getElementById('botonGeneral');
const resultadoHTML = document.getElementById('resultado');
const cantidadInput = document.getElementById('cantidad');
const lengthDisplay = document.getElementById('lengthDisplay');
const toastContainer = document.getElementById('toastContainer');
const copyBtn = document.getElementById('copyBtn');
const langToggle = document.getElementById('langToggle');

const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&@!/*_?-+';

// --- i18n Dictionary ---
const translations = {
    en: {
        title: "Random Passwords | Premium Generator",
        header_title: "Password<br/><span class=\"text-gradient\">Generator</span>",
        header_subtitle: "Secure your digital world.",
        initial_password: "Your new password goes here",
        copy_tooltip: "Click to copy",
        copy_aria: "Copy password",
        length_label: "Length:",
        generate_btn: "Generate Password",
        footer_created: "Created by",
        footer_code: "Code:",
        footer_star: "hope for your",
        toast_copy_success: "Password copied!",
        toast_copy_error: "Error copying",
        toast_copy_empty: "Generate a password first",
        toast_invalid_amount: "Enter a valid amount",
        toast_max_amount: "Maximum amount is 50",
        toast_min_amount: "Minimum amount is 8"
    },
    es: {
        title: "Contraseñas Aleatorias | Generador Premium",
        header_title: "Generador de<br/><span class=\"text-gradient\">Contraseñas</span>",
        header_subtitle: "Asegura tu mundo digital.",
        initial_password: "Aquí va tu nueva contraseña",
        copy_tooltip: "Haz clic para copiar",
        copy_aria: "Copiar contraseña",
        length_label: "Longitud:",
        generate_btn: "Generar Contraseña",
        footer_created: "Creado por",
        footer_code: "Código:",
        footer_star: "espero tu",
        toast_copy_success: "¡Contraseña copiada!",
        toast_copy_error: "Error al copiar",
        toast_copy_empty: "Genera una contraseña primero",
        toast_invalid_amount: "Introduce una cantidad válida",
        toast_max_amount: "La cantidad máxima es 50",
        toast_min_amount: "La cantidad mínima es 8"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    langToggle.textContent = lang === 'en' ? 'ES' : 'EN';
    
    // Update DOM elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (translations[lang][key]) {
            el.title = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (translations[lang][key]) {
            el.setAttribute('aria-label', translations[lang][key]);
        }
    });

    // Handle the result text separately if it hasn't been generated yet
    if (!caracteres.split('').some(c => resultadoHTML.textContent.includes(c) && resultadoHTML.textContent.length !== translations['en'].initial_password.length && resultadoHTML.textContent.length !== translations['es'].initial_password.length)) {
         // Means it's still generating or placeholder. Let's just generate one on lang switch so it never shows placeholder.
    }
}

langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'es' : 'en');
});


// --- Toast System ---
function showToast(messageKey, type = 'error') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = '';
    if (type === 'success') {
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
    } else {
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
    }

    const message = translations[currentLang][messageKey] || messageKey; // fallback
    toast.innerHTML = `${icon} <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toastContainer.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// --- Generator Logic ---
function generatePassword(length) {
    let result = '';
    const charLen = caracteres.length;
    for(let i = 0; i < length; i++){
        result += caracteres.charAt(Math.floor(Math.random() * charLen));
    }
    return result;
}

cantidadInput.addEventListener('input', (e) => {
    lengthDisplay.textContent = e.target.value;
});

btnGeneral.addEventListener('click', () => {
    const length = parseInt(cantidadInput.value);

    if(isNaN(length)){
        showToast('toast_invalid_amount');
    } else if(length > 50 ){
        showToast('toast_max_amount');
    } else if(length < 8){
        showToast('toast_min_amount');
    } else {
        const password = generatePassword(length);
        resultadoHTML.textContent = password;
        
        resultadoHTML.classList.remove('pop');
        void resultadoHTML.offsetWidth; 
        resultadoHTML.classList.add('pop');
    }
});

copyBtn.addEventListener('click', () => {
    const text = resultadoHTML.textContent;
    const initialEn = translations['en'].initial_password;
    const initialEs = translations['es'].initial_password;
    
    if (text && text !== initialEn && text !== initialEs) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('toast_copy_success', 'success');
        }).catch(() => {
            showToast('toast_copy_error');
        });
    } else {
        showToast('toast_copy_empty');
    }
});

// Initial boot
setLanguage('en'); // Set English as default
resultadoHTML.textContent = generatePassword(parseInt(cantidadInput.value));