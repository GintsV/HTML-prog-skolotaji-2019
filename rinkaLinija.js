function rinkaLinija() {
    const R = Number(prompt('Lūdzu ievadiet rādiusa garumu'));
    const C = Math.PI * 2 * R
    return `Riņķa līnijas garums ar rādiusu ${R} ir ${C.toFixed(4)} ${C}`;
  }

  