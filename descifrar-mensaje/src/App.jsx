import React from 'react';

const descifrarMensaje = () => {
  const revelar = (texto) => {
    const codigoVocales = {
      '?': 'a',
      '[': 'e',
      '\\': 'i',
      '~': 'o',
      '+': 'u',
      '¬': 'ó',
    };
    const codigoConsonantes = {
      '^': 'm',
      '`': 'c',
      '*': 'p',
      '/': 'l',
      '#': 'v',
      '$': 'r',
      '%': 'b',
      ']': 'n',
      '}': 'q',
      '{': 's',
      '=': 't',
      '!': 'j',
      '¡': 'd',
      ';': 'f',
      '_': 'z',
      '¿': 'y',
      '-': 'h',
    };
    
    const convertirCaracteres = (caracter) => {
      if (codigoVocales[caracter]) {
        return codigoVocales[caracter];
      }
      if (codigoConsonantes[caracter]) {
        return codigoConsonantes[caracter];
      }
      return caracter; 
    };

    const mensajeRevelado = Array.from(texto).map(convertirCaracteres).join('');

    return mensajeRevelado;
  };

  const mensajeEncriptado =
    '^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{( )¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=]+~';
    
  const mensajeRevelado = revelar(mensajeEncriptado);
  console.log(mensajeRevelado);
  // "Me complace mucho ver lo bien que estoy trabajando y cómo esto aumentan mis poderes de atención y esfuerzo continuo."
};

descifrarMensaje();
